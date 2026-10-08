# agentfähig.de – Site-Worker mit Erklär-Agent (vorbereitet, NICHT deployt)

Stand 08.10.2026, lokaler Branch `feat/explain-widget` (nicht gepusht).

## Was das ist
- `public/index.html`: Live-Seite vom 08.10.2026 (Referenz: `reference/index.live-2026-10-08.html`) mit genau zwei Änderungen:
  1. Satz „Kein Formular. Nichts wird gesendet. Du klickst nur.“ → „Kein Formular. Die Kacheln senden nichts. Du klickst nur.“ (mit Chat stimmt „Nichts wird gesendet“ nicht mehr) – **Samuel bestätigen**.
  2. Widget „Lass es dir erklären“ (`widget-snippet.html`) vor `</body>`; gleiches Protokoll wie auf human-agent-interface.com.
- `public/fonts/*`: die vier Schriften der Live-Seite (1:1 heruntergeladen).
- `src/worker.js`: leitet NUR `/api/explain/{health,checkout,session/start,session/advisory}` per Service Binding `EXPLAIN` an `cwh-11-explain-20261008` weiter (Pfad `/api/explain/x` → `/api/x`, Host bleibt agentfähig.de). Alles andere: Assets.
- `wrangler.jsonc`: Name `agentfaehig`, `run_worker_first: ["/api/*"]`, Service Binding, **keine routes** (Custom Domains bleiben unangetastet).

## Lokal
```bash
npm test                      # 4 Tests (Proxy-Allowlist, 503 ohne Binding, index.html = Live + 2 Änderungen)
npx wrangler deploy --dry-run --outdir dist
```
Screenshots mit lokalem Mock-API: `evidence/widget-desktop.png`, `evidence/widget-mobile.png`.

## Vor dem Deploy prüfen
- Der Live-Worker `agentfaehig` ist ein reiner Assets-Worker (deployt 25.09.2026, keine Quelle in GitHub). Ein Deploy ersetzt ALLE Assets.
  Abgeglichen: Die Seite referenziert nur `index.html` + 4 Schriften; `robots.txt` kommt von Cloudflare (managed). Falls es unverlinkte
  Dateien im Original-Ordner gab, wären sie danach weg → wenn möglich aus Samuels Original-Ordner deployen und nur Snippet + Worker ergänzen.
- Impressum und Datenschutz zeigen heute auf „#“. Vor dem Chat-Livegang erreichbar machen und Datenschutz-Abschnitt zum Erklär-Agenten ergänzen,
  dann im Widget-Hinweis verlinken (Kommentar `PRÜFEN` in `widget-snippet.html`).
- Reihenfolge: zuerst cwh-11 mit Mandanten-Code deployen (sonst antwortet er hier mit HAI-Wissen), dann diese Seite.

## Rollback
`npx wrangler rollback --name agentfaehig` (vorherige Version, reiner Assets-Stand) oder im Dashboard Workers → agentfaehig → Deployments.
