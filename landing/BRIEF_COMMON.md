# Gemeinsamer Brief — agentfähig.de Landingpage (MVP)

## Worum es geht
agentfähig.de macht Menschen fähig, mit KI-Agenten zu arbeiten. Zielgruppe: **echte Einsteiger**, die noch nie bewusst mit einem KI-Agenten gearbeitet haben. Kein Vorwissen. Wer "drin" ist, wird am Ende zu HAI weitergeleitet (https://human-agent-interface.com) — dezent, als nächste Stufe, nicht als Verkauf.

## Harte Regeln
- Genau EINE Datei: `index.html` im aktuellen Ordner. CSS und JS inline. Keine Frameworks, keine externen Skripte, keine externen Schriften, keine Bilder-URLs (Icons nur als Inline-SVG oder Unicode).
- Sprache: **Deutsch, einfache Sprache**. Kurze Sätze. Keine Fachwörter ohne Erklärung. "Agent" einmal einfach erklären: ein KI-Programm, das nicht nur antwortet, sondern Schritte für dich erledigt.
- Duzen.
- Mobil zuerst: funktioniert bei 360px Breite ohne horizontales Scrollen. Auch Desktop sauber.
- Hell- und Dunkelmodus über `prefers-color-scheme`.
- Barrierearm: semantisches HTML, ausreichender Kontrast, sichtbarer Fokus, `lang="de"`.
- KEINE erfundenen Zahlen, Nutzerstimmen, Logos, Preise oder "über 10.000 Nutzer"-Claims.
- KEINE Coding-Agents (Claude Code, Codex, Cursor, Aider) und KEINE Entwickler-Frameworks (LangGraph, CrewAI, AutoGen).
- Kein Formular, das Daten sendet. Kein Tracking. Kein Cookie-Banner.
- Footer: "agentfähig.de · ein Einstieg vor HAI" + Link zu HAI + Platzhalter-Links "Impressum" und "Datenschutz" (href="#").

## Inhalts-Fundament: Agenten-Karte (Beispiele, Stand September 2026)
Nutze diese Kategorien und Beispiele. Pro Kategorie ein Satz "Wofür" in einfacher Sprache und eine Einsteiger-Eignung (leicht / mittel).
1. **Chat-Assistenten** — ChatGPT, Claude, Gemini — Fragen stellen, Texte schreiben, Dinge erklären lassen. (leicht)
2. **Recherche-Agenten** — Perplexity, Deep Research in ChatGPT/Gemini — sucht im Netz, liest viele Quellen, fasst mit Quellen zusammen. (leicht)
3. **Office-Assistenten** — Microsoft Copilot, Gemini in Google Workspace — hilft direkt in Mail, Dokumenten, Tabellen. (leicht)
4. **Sprach- und Notiz-Agenten** — Plaud, Otter — nimmt Gespräche auf, schreibt mit, fasst zusammen. (leicht)
5. **Browser-Agenten** — ChatGPT Agent, Claude in Chrome — klickt sich selbst durch Webseiten und erledigt Aufgaben. (mittel)
6. **Automatisierungs-Agenten** — Zapier Agents, n8n — verbindet Apps und erledigt wiederkehrende Abläufe. (mittel)

Hinweis auf der Seite: "Beispiele, keine Werbung. Stand: September 2026."

## Verifikation (vor dem Beenden selbst prüfen)
- `index.html` existiert und ist vollständig (endet mit `</html>`).
- `grep -E '<script src=|<link[^>]+href="http' index.html` liefert nichts.
- Alle 6 Kategorien kommen vor.
- Keine Datei außerhalb dieses Ordners anlegen oder ändern.
