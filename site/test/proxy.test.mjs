import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import worker, { EXPLAIN_PATHS } from "../src/worker.js";

function env() {
  const seen = [];
  return {
    seen,
    ASSETS: { fetch: async (req) => new Response("asset:" + new URL(req.url).pathname) },
    EXPLAIN: {
      fetch: async (req) => {
        seen.push({ url: req.url, method: req.method, origin: req.headers.get("origin"), cookie: req.headers.get("cookie"), body: req.body ? await req.text() : null });
        return new Response(JSON.stringify({ ok: true }), { headers: { "set-cookie": "s=1; Path=/; HttpOnly; Secure" } });
      },
    },
  };
}

test("nur die vier Erklär-Pfade gehen an EXPLAIN; Pfad /api/explain/* -> /api/*, Host bleibt agentfähig.de", async () => {
  const e = env();
  for (const p of EXPLAIN_PATHS) {
    const res = await worker.fetch(new Request("https://xn--agentfhig-02a.de" + p, { method: "POST", headers: { origin: "https://xn--agentfhig-02a.de", cookie: "s=1" }, body: '{"message":"hi"}' }), e);
    assert.equal(res.status, 200);
    assert.ok(res.headers.get("set-cookie"), "Session-Cookie wird durchgereicht");
  }
  assert.deepEqual(e.seen.map((s) => s.url), [
    "https://xn--agentfhig-02a.de/api/health",
    "https://xn--agentfhig-02a.de/api/checkout",
    "https://xn--agentfhig-02a.de/api/session/start",
    "https://xn--agentfhig-02a.de/api/session/advisory",
  ]);
  assert.equal(e.seen[3].body, '{"message":"hi"}');
  assert.equal(e.seen[3].origin, "https://xn--agentfhig-02a.de");
  assert.equal(e.seen[3].cookie, "s=1");
});

test("andere /api-Pfade (auch weitere cwh-11-Endpunkte) werden NICHT weitergeleitet", async () => {
  const e = env();
  for (const p of ["/api/explain/session/journey", "/api/explain/session/status", "/api/explain/config", "/api/explain/../checkout", "/api/checkout", "/api/explain/", "/api/stripe-webhook"]) {
    const res = await worker.fetch(new Request("https://xn--agentfhig-02a.de" + p, { method: "POST" }), e);
    assert.equal(res.status, 404, p);
  }
  assert.equal(e.seen.length, 0);
});

test("ohne Service Binding: 503 statt Fehler; Seite selbst kommt weiter aus den Assets", async () => {
  const e = env();
  delete e.EXPLAIN;
  assert.equal((await worker.fetch(new Request("https://xn--agentfhig-02a.de/api/explain/checkout", { method: "POST" }), e)).status, 503);
  assert.equal(await (await worker.fetch(new Request("https://xn--agentfhig-02a.de/"), e)).text(), "asset:/");
  assert.equal(await (await worker.fetch(new Request("https://xn--agentfhig-02a.de/fonts/caveat.woff2"), e)).text(), "asset:/fonts/caveat.woff2");
});

test("index.html = Live-Stand + freigegebene Änderungen (Satz, Impressum/Datenschutz-Links, Widget)", () => {
  const live = readFileSync(new URL("../reference/index.live-2026-10-08.html", import.meta.url), "utf8");
  const cur = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");
  const snip = readFileSync(new URL("../widget-snippet.html", import.meta.url), "utf8");
  const expected = live
    .replace("Nichts wird gesendet.", "Die Kacheln senden nichts.")
    .replace('<a href="#">Impressum', '<a href="https://www.human-agent-interface.com/impressum/">Impressum')
    .replace('<a href="#">Datenschutz', '<a href="https://www.human-agent-interface.com/datenschutz/">Datenschutz')
    .replace("</body>", snip + "\n</body>");
  assert.equal(cur, expected);
  assert.ok(!cur.includes("Nichts wird gesendet."));
  assert.ok(!cur.includes('href="#"'), "keine toten #-Links mehr");
  // Widget: nur relative Same-Origin-Aufrufe, kein innerHTML, KI-Hinweis sichtbar
  assert.ok(!/innerHTML/.test(snip));
  const urls = snip.replace(/<!--[\s\S]*?-->/g, "").match(/https?:\/\/[^"'\s<]+/g) || [];
  assert.deepEqual(urls, ["https://www.human-agent-interface.com/datenschutz/"], "einzige externe URL im Widget: Datenschutz-Link");
  assert.match(snip, /fetch\("\/api\/explain\/"/);
  assert.match(snip, /Ich bin eine KI/);
  assert.match(snip, /aria-expanded/);
});
