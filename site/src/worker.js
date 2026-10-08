// agentfähig.de: statische Seite (Assets) + Weiterleitung des Erklär-Agenten.
// Nur diese vier Pfade gehen per Service Binding an den Worker cwh-11-explain-20261008,
// genau wie auf human-agent-interface.com. Der Hostname der URL bleibt agentfähig.de,
// daran wählt cwh-11 serverseitig das agentfähig-Wissen und den eigenen Tages-Bucket.
export const EXPLAIN_PATHS = new Set([
  "/api/explain/health",
  "/api/explain/checkout",
  "/api/explain/session/start",
  "/api/explain/session/advisory",
]);

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (EXPLAIN_PATHS.has(url.pathname)) {
      if (!env.EXPLAIN) return json({ error: "explain_unavailable" }, 503);
      url.pathname = url.pathname.replace("/api/explain/", "/api/");
      return env.EXPLAIN.fetch(new Request(url, request));
    }
    if (url.pathname.startsWith("/api/")) return json({ error: "not_found" }, 404);
    return env.ASSETS.fetch(request);
  },
};
