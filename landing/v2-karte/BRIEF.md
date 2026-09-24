# Variante 2 — "Die Agenten-Karte"

Lies zuerst `../BRIEF_COMMON.md` und halte dich an alle Regeln dort.

## Idee
Die Agenten-Karte ist der Star. Klar, übersichtlich, nachschlagbar — wie ein guter Wegweiser oder eine U-Bahn-Karte. Für Menschen, die sich erst mal einen Überblick verschaffen wollen.

## Aufbau
1. Kompakter Hero: Headline in der Art "Welcher KI-Agent passt zu dir?" + ein Satz + direkt darunter die Filter.
2. Filter-Leiste (Buttons, vanilla JS): "Alle" · "Leicht für den Einstieg" · nach Situation: "Ich schreibe viel" · "Ich suche Infos" · "Ich habe viele Meetings" · "Ich mache Dinge immer wieder gleich". Jede Kategorie ist einer oder mehreren Situationen zugeordnet. Filter blenden Karten aus/ein.
3. Karten-Raster mit den 6 Kategorien: Icon (Inline-SVG), Name, "Wofür" in einem Satz, Beispiele als kleine Chips, Eignungs-Badge (leicht/mittel), und ausklappbar (`<details>`) "So fängst du an" mit einem konkreten ersten Auftrag.
4. Kleiner Kasten "Was ist ein Agent überhaupt?" (kurz, 3 Sätze).
5. Abschluss-Band: "Du hast deinen Agenten gefunden? HAI hilft dir, ihn im Griff zu behalten." + Link.

## Look
Wegweiser-/Karten-Ästhetik: klare Linien, eine kräftige Leitfarbe pro Kategorie (6 unterscheidbare Farben, auch im Dunkelmodus gut lesbar), neutraler Hintergrund, klare Sans-Serif (System-Font-Stack). Raster: 1 Spalte mobil, 2 Tablet, 3 Desktop.
