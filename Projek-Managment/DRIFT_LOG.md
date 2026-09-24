# DRIFT_LOG — agentfähig.de

Dieses Log sammelt verschobene Ideen, abgelehnte Optionen und Klärungen, die NICHT in den aktiven Entscheidungsraum gehören. Es wird nicht gelöscht, nur ergänzt.

---

## 2026-09-25 — Erste Einträge

### Drift 1: "Liste ALLE Agenten auf"
- Quelle: Samuel 2026-09-25
- Status: **Geparkt**
- Begründung: Vollständige Marktliste veraltet täglich, hat keinen klaren Endzustand, passt nicht zur Rolle "Onboarding-Treppe" (kuratierte Karte > vollständige Liste).
- Aufbewahrt in: `BRIEFING.md` (Scope-Parkplatz) + `PROMPT.md` (Nicht-Ziel).

### Drift 2: Domain-Stack-Entscheidung jetzt treffen (Astro / Hugo / Next / Plain HTML)
- Quelle: Implizit aus "Site muss gebaut werden"
- Status: **Geparkt**
- Begründung: Ohne Zielgruppen- und Inhaltsentscheidung ist Stack-Wahl verfrüht. Wird nach Agenten-Map-Festlegung neu bewertet.

### Drift 3: DNS-/Hosting-Setup (Cloudflare Pages vs. Netlify vs. Vercel vs. eigener Server)
- Quelle: Implizit aus "Domain läuft"
- Status: **Geparkt**
- Begründung: Domain ist registriert, aber kein Site-Output vorhanden. Setup-Frage stellt sich erst nach MVP.

### Drift 4: `humanagentinterface.de` Rolle
- Quelle: parallele Domain aus gleichem Kauf-Block
- Status: **Eigenes Projekt**, hier nur als Referenz
- Begründung: Nicht Teil von `agentfähig.de`-Scope. Bei Bedarf separates HAI-Set in eigenem Ordner.

### Drift 5: HAI-Cross-Link-Formulierung ("CTA nach human-agent-interface.com")
- Quelle: HAI-Strategie / Portfolio-Memory
- Status: **Offen, aber später**
- Begründung: CTA-Formulierung hängt von Site-Sektionen ab. Erst nach MVP sinnvoll.

### Drift 6: Zweisprachigkeit DE+EN
- Quelle: Implizit aus HAI-Strategie (internationale Reichweite)
- Status: **Offen**
- Begründung: Hängt von Sprach-Entscheidung ab. Wenn DE einfach gewählt, dann EN evtl. nur als Verweis auf HAI-Hauptdomain.

### Drift 7: HAI-Subagent-Vorschlag als Default
- Quelle: SITE.md vom 2026-09-23 im HAI-Subagent-Swarm
- Status: **Überschrieben durch Samuels Klarstellung 2026-09-25**
- Begründung: Subagent hatte "DE-Bühne für HAI-These" als stärkste Rolle vorgeschlagen. Samuel hat 2026-09-25 klargestellt: nicht zweite Bühne, sondern **Onboarding-Treppe vor HAI**. Andere Stoßrichtung, eigene Spec.

### Drift 8: 3 MVP-Varianten v1-treppe / v2-karte / v3-erster-auftrag
- Quelle: Samuels Bau-Aktion am 2026-09-25 (`landing/v1-treppe/index.html`, `v2-karte/index.html`, `v3-erster-auftrag/index.html`, plus `BRIEF_COMMON.md` und drei `BRIEF.md`); Revisions-Auftrag in `landing/REVISION_COMMON.md` + `landing/v1-treppe/REVISION.md` etc.
- Status: **In Revision — Tool-Kategorien-Logik wird durch Fähigkeits-Logik ersetzt (nicht obsolet, sondern zu überarbeiten)**
- Begründung: Samuel hat am 2026-09-25 entschieden, dass die Tool-Kategorien-Logik durch eine Fähigkeits-Logik ersetzt wird (Fragen → Zusammenarbeiten → Beauftragen → Abnehmen → Beaufsichtigen). Die drei MVPs werden **revidiert**, nicht entsorgt. Volldetails: siehe `DESIGN_RETHINK_2026-09-25.md` (Kurzfassung) und `RESEARCH_SPRUNG_2026-09-25.md` (Vollresearch).
- Aufbewahrt in: `landing/v1-treppe/`, `landing/v2-karte/`, `landing/v3-erster-auftrag/` (verlustfrei, im Git sichtbar; `index.mvp1.html` ist die Pre-Revision-Sicherung)
- **Korrektur 2026-09-25 (später Abend):** HAI-Agent hatte Drift 8 ursprünglich als "obsolet" markiert — falsch. MVPs sind Revisions-Ziele, nicht Müll. Status auf "In Revision" korrigiert.

### Drift 9: Tool-Kategorien-Map (war als AGENT_MAP_2026-09-25.md geplant)
- Quelle: `NEXT_STEP.md` (vor 2026-09-25 Abend)
- Status: **Überholt durch Design-Rethink — bleibt evtl. als Beispiel-Material innerhalb der Fähigkeits-Stufen relevant**
- Begründung: Die 6 Tool-Kategorien aus `BRIEF_COMMON.md` (Chat, Recherche, Office, Sprach/Notiz, Browser, Automatisierung) bleiben evtl. als Beispiele innerhalb der Fähigkeits-Stufen relevant, sind aber nicht mehr die primäre Seiten-Struktur.

### Drift 10: alte HAI-Artefakte (BRIEFING / NEXT_STEP / PROMPT) unter Spannung
- Quelle: `Projek-Managment/BRIEFING.md`, `NEXT_STEP.md`, `PROMPT.md` (alle Stand 2026-09-25 früh)
- Status: **Aktiv, aber logisch überholt. Bei Promote von DESIGN_RETHINK → kanonisch müssten diese Files ins `archive/` und neu geschrieben werden.**
- Begründung: Tool-Logik inzwischen durch Fähigkeits-Logik abgelöst; alte Specs arbeiten mit "kurierte Karte" als Hauptartefakt, was nach Design-Rethink nicht mehr passt.

### Drift 11: DESIGN_RETHINK und RESEARCH_SPRUNG sind komplementär, nicht redundant
- Quelle: HAI-Agent-Erkenntnis 2026-09-25 nach Lesen beider Files
- Status: **Beide behalten — bewusste Doppelung als Designentscheidung des Owners**
- Begründung: `DESIGN_RETHINK_2026-09-25.md` ist die verdichtete "was tun"-Sicht (6-Punkte-Block, Marktlücke, Folge für Seite). `RESEARCH_SPRUNG_2026-09-25.md` ist die "warum und woher"-Sicht (Quellen, Zahlen — unverifiziert aus Gemini, Stolpersteine, Stufenmodell). Beide ergänzen sich, keiner ersetzt den anderen.
