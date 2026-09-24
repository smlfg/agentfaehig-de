# Überarbeitung Runde 2 — gemeinsame Vorgaben (gilt für alle drei Varianten)

Du überarbeitest die bestehende `index.html` in diesem Ordner. **Behalte den Charakter, Look und die Grundidee der Variante.** Alle Regeln aus `../BRIEF_COMMON.md` gelten weiter. Die Recherche steht in `../../Projek-Managment/RESEARCH_SPRUNG_2026-09-25.md` — lies sie.

## Die neue Kernbotschaft (muss auf der Seite klar ankommen)
Der Sprung vom Chatten zum Agenten ist kein neues Tool, sondern ein **Rollenwechsel: vom Fragenden zum Auftraggeber.**
Im Chat fragst du und bekommst eine Antwort. Einem Agenten gibst du einen **Auftrag** — wie einem neuen Praktikanten.

## Was neu auf jede Seite muss
1. **Der gute Auftrag (5 Teile)** — einfach erklärt, als Mini-Baukasten:
   - **Ziel:** Was soll am Ende da sein?
   - **Kontext:** Was muss der Agent wissen?
   - **Grenzen:** Was soll er NICHT tun?
   - **Fertig, wenn:** Woran erkennst du, dass es erledigt ist?
   - **Bei Unklarheit:** "Erfinde nichts. Schreib 'unbekannt' oder frag mich."
   Dazu ein Vorher/Nachher-Beispiel: Einzeiler ("Recherchiere Wärmepumpen") vs. guter Auftrag.
2. **Drei Sicherheitsregeln für den Start** (kurz, freundlich, nicht angstmachend):
   - **Erst der Plan:** "Zeig mir zuerst deinen Plan und warte auf mein OK."
   - **Stichprobe:** Prüfe 3 Zahlen oder Zitate an der Originalquelle.
   - **Letzter Klick bei dir:** Erst nur lesen lassen, dann nur Entwürfe. Senden, Kaufen, Löschen machst du selbst.
3. **Alle Beispiel-Aufträge zum Kopieren** folgen dem 5-Teile-Muster und enthalten "Zeig mir zuerst deinen Plan" und "Erfinde nichts".
4. **HAI-Übergang** mit dieser Logik: "Wenn du Agenten Aufträge gibst und abnimmst, hilft dir HAI, den Überblick zu behalten." (https://human-agent-interface.com)

## Was raus muss / verboten ist
- Keine Aussagen wie "Du kannst nichts kaputt machen" oder "völlig sicher". Ehrlich: Agenten machen Fehler, deshalb prüfst du.
- **Keine Statistiken oder Prozentzahlen** (die Zahlen aus der Recherche sind noch nicht geprüft).
- Keine Nennung von Studien, Firmen-Frameworks oder "4D" — nur die Inhalte in einfacher Sprache.

## Technik
- **Inhalt muss ohne JavaScript sichtbar sein.** Einblend-Animationen nur als Verbesserung: Startzustand sichtbar; JS setzt z.B. `document.documentElement.classList.add('js')` und nur dann darf CSS verstecken/animieren.
- Weiter: eine Datei, keine externen Ressourcen, mobil 360px ohne horizontales Scrollen, Dunkelmodus.
- Nicht zu lang werden: lieber straffen als anhängen.

## Verifikation (selbst ausführen und melden)
- `grep -E '<script src=|<link[^>]+href="http' index.html` → leer
- `grep -ciE 'kaputt|[0-9]+ ?%' index.html` → 0
- Die Wörter "Ziel", "Grenzen", "Plan", "Stichprobe" kommen vor.
- Datei endet mit `</html>`. Keine Dateien außerhalb dieses Ordners ändern.
