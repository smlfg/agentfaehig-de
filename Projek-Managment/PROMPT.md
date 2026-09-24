# PROMPT — agentfähig.de

## Ziel
`agentfähig.de` ist die **Onboarding-Treppe vor HAI**: die Site, die Menschen überhaupt erst mal **fähig macht, mit Agenten zu arbeiten**. Vor der Kontrollebene (HAI) kommt der Eintritt ins Agent-Reich.

Das Projekt liefert drei Dinge in dieser Reihenfolge:
1. **Kuratierte Agenten-Karte** als Inhaltsfundament — die zentrale Site-Sektion.
2. **Site-Konzept** für `agentfähig.de` auf Basis dieser Karte (welche Kategorien, welche Tonalität, welcher Sprachmodus).
3. **Site-MVP**, der das Konzept umsetzt (statisch oder Framework), inkl. ehrlicher Verlinkung zur HAI-Hauptseite, sobald der Mensch "drin" ist.

**One-liner:** "Bevor du HAI brauchst, musst du Agenten können. Hier ist der Einstieg."

## Nicht-Ziel
- **Keine zweite Marke.** `agentfähig.de` ist dienend, nicht konkurrierend. HAI bleibt die einzige Marke.
- **Keine Kontroll-These.** Die gehört auf `human-agent-interface.com` bzw. `humanagentcontrol.com`.
- **Keine vollständige Marktliste aller existierenden Agenten.** Täglich veraltet. Stattdessen kuratiert nach Zielgruppennutzen.
- **Keine Build-Plattform, kein Produkt, kein Login, kein "Agent OS"-Versprechen** (Anti-Pattern aus HAI-Strategie).

## Akzeptanzkriterien
- [ ] `PROJEKTMANAGMENT/PROMPT.md` (dieses File) beschreibt Zweck, Treppe-zu-HAI, Zielgruppen-Klärung
- [ ] `Projek-Managment/PROMPT.md` + `BRIEFING.md` + `NEXT_STEP.md` decken sich konsistent (kein Drift)
- [ ] Eine kuratierte **Agenten-Kategorien-Map** liegt vor (DE, einfach, ~5-7 Kategorien, je 2-3 prominente Beispiele, keine vollständige Marktliste)
- [ ] Mindestens eine **Entscheidung** von Samuel liegt dokumentiert vor (Zielgruppe, Sprach-Tonalität, Site-Sektionen-Reihenfolge)
- [ ] Verlinkungsregel zu HAI-Hauptdomain ist festgelegt (CTA nach `human-agent-interface.com` o.ä.)

## Todo (Reihenfolge, klein gehalten)
1. **Zielgruppe entscheiden** — wer ist "der Mensch", der hier den Eintritt schaffen soll? (Endnutzer / Knowledge Worker / Entscheider / Builder / Treppe-intern)
2. **Sprache + Tonalität entscheiden** — DE einfach / DE technisch / DE+EN
3. **Agenten-Kategorien-Map erstellen** — kuratiert, 5-7 Kategorien, prominente Beispiele, Eignung für Zielgruppe, Tiefe
4. **Site-Sektionen-Reihenfolge aus Map ableiten** — Map → Site-Struktur
5. **Site-MVP** — eine statische Seite (oder kleines Framework) umsetzen, die die Map zeigt und sauber nach HAI verlinkt
6. **HAI-Cross-Link verifizieren** — ist der Weg vom Eintritt zur Kontrollebene sichtbar?

## Entscheidungen (getroffen 2026-09-25)
- **Z1 Zielgruppe:** Menschen, die noch nie mit Agenten gearbeitet haben (echte Einsteiger, Otto-Normalnutzer, kein Vorwissen über KI-Agenten).
- **Z2 Sprache:** Deutsch — einfache Sprache (Erklär-Modus), konsistent mit `.de`-Domain und Onboarding-Treppe.

## Offene Fragen (an Samuel)
- **Q1 Tiefe der Karte:** nur Kategorien + 2-3 Beispiele, oder pro Agent 1-Satz-Beschreibung + Use-Case-Tag?
- **Q2 Coding-Agents drin oder raus?** Claude Code / Codex / Cursor / Aider sind für die Zielgruppe wahrscheinlich zu spezifisch — gehören sie trotzdem als eigene Kategorie rein (weil sie der sichtbarste Agent-Trend sind) oder raus (weil sie Otto-Normalnutzer überfordern)?
- **Q3 Update-Mechanik:** Wie bleibt die Karte aktuell, ohne dass sie täglich gepflegt werden muss? (RSS, manuelle Quartals-Refresh, "letzter Check: Datum"-Footer?)

## Completion/Lifecycle
Aktuell: **ACTIVE_BUILD** (Roh-Idee vorhanden, kein Code, keine Site, keine Inhalte).
Ziel-Zustand: **GOAL_REACHED**, sobald (a) Site-MVP live und (b) Agenten-Karte als Site-Inhalt sichtbar ist.

## Quellen (Intent-Hierarchie, absteigend)
1. **Samuel, 2026-09-25 (heutiger Dialog):** "Agentfähig.de soll den Zweck haben, Menschen fähig zu machen mit Agenten zu arbeiten… HAI und agentfähig sind zwei verschiedene Dinge; um einen Menschen HAI zu geben muss er erstmal den Eintritt ins Reich der Agenten schaffen."
2. `~/.claude/projects/.../memory/project_domain_portfolio_2026_09.md` (Portfolio, "HAI bleibt HAI")
3. HAI-Subagent-Konzept `agentfaehig.de/SITE.md` vom 2026-09-23 (Vorschlag, kein Beschluss)
4. HAI-Hauptstrategie (implizit via Memory): Category Ownership, keine "Agent OS"-Plattform, Treue zur einen These.
