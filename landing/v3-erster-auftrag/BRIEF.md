# Variante 3 — "Dein erster Auftrag"

Lies zuerst `../BRIEF_COMMON.md` und halte dich an alle Regeln dort.

## Idee
Lernen durch Tun. Die Seite ist interaktiv: Der Besucher sagt, was er erledigen will, und bekommt sofort den passenden Agenten-Typ plus einen fertigen ersten Auftrag zum Kopieren. Energisch, spielerisch, "fang jetzt an".

## Aufbau
1. Hero: große Frage "Was willst du heute erledigen lassen?" + darunter 6 große Auswahl-Kacheln (eine pro Situation), z.B. "Eine schwierige Mail schreiben", "Etwas herausfinden", "Ein Meeting festhalten", "Eine Tabelle/ein Dokument aufräumen", "Etwas auf einer Webseite erledigen", "Eine wiederkehrende Aufgabe abgeben". KEIN Freitextfeld, nichts wird gesendet.
2. Nach Klick (vanilla JS, ohne Seitenwechsel, sanft eingeblendet): Ergebnis-Karte mit
   - passendem Agenten-Typ + Beispielen,
   - "Dein erster Auftrag": ein fertiger Beispiel-Prompt in einfacher Sprache, mit Kopieren-Button (Clipboard-API, mit Fallback),
   - 3 Schritte "So gehst du vor",
   - ein Satz "Achte darauf" (Sicherheitshinweis passend zum Typ),
   - Button "Andere Aufgabe wählen".
3. Darunter kurz: "Was ist ein Agent?" in 3 Sätzen.
4. Mini-Übersicht aller 6 Kategorien als kompakte Liste (Name + Beispiele + leicht/mittel).
5. Abschluss: "Geschafft? Mit HAI behältst du den Überblick, wenn es mehr Agenten werden." + Link.

## Look
Kräftig und freundlich: eine starke Akzentfarbe (z.B. Orange oder Violett), große Kacheln mit Hover-/Fokus-Zustand, verspielte Mikro-Interaktionen (respektiert `prefers-reduced-motion`). Tastatur-bedienbar (Kacheln sind `<button>`).
