# agentfähig.de

Website-Entwürfe für agentfähig.de: ein Einstieg für Menschen ohne Vorwissen, die lernen wollen,
mit KI-Agenten zu arbeiten. Wer weiter ist, wird am Ende zu
[Human Agent Interface](https://human-agent-interface.com) weitergeleitet.

## Status

Entwurf. Das Repository enthält drei Landingpage-Varianten, keine davon ist als final markiert.
Die Seite unter [agentfähig.de](https://agentfähig.de) entspricht derzeit keiner dieser Dateien.

## Varianten

| Ordner | Titel | Stand |
|---|---|---|
| `landing/v1-treppe/` | Die Treppe: vom Fragen zum Auftrag | `index.html` überarbeitet, erste Fassung in `index.mvp1.html` |
| `landing/v2-karte/` | Welcher KI-Agent passt zu dir? | `index.html` und `index.mvp1.html` sind identisch |
| `landing/v3-erster-auftrag/` | Dein erster Auftrag | `index.html` und `index.mvp1.html` sind identisch |

Jede Variante ist eine einzelne HTML-Datei mit eingebettetem CSS und JavaScript, ohne Framework
und ohne externe Skripte. Die gemeinsamen Vorgaben stehen in
[landing/BRIEF_COMMON.md](landing/BRIEF_COMMON.md) und
[landing/REVISION_COMMON.md](landing/REVISION_COMMON.md), die Vorgaben pro Variante in
`BRIEF.md` und `REVISION.md` im jeweiligen Ordner.

## Lokal ansehen

```bash
git clone https://github.com/smlfg/agentfaehig-de.git
cd agentfaehig-de/landing
python3 -m http.server 8000
```

Dann `http://localhost:8000/v1-treppe/`, `/v2-karte/` oder `/v3-erster-auftrag/` im Browser öffnen.

## Inhaltliche Leitlinien

- Deutsch in einfacher Sprache, Duzen, für echte Einsteiger.
- Keine erfundenen Zahlen, Nutzerstimmen, Logos oder Preise.
- Kein Formular, das Daten sendet, kein Tracking, kein Cookie-Banner.
- Mobil zuerst, Hell- und Dunkelmodus, barrierearm.

## Lizenz

Noch keine Lizenzdatei; ohne Lizenz gelten standardmäßig alle Rechte als vorbehalten.
