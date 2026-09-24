# Variante 1 — "Die Treppe"

Lies zuerst `../BRIEF_COMMON.md` und halte dich an alle Regeln dort.

## Idee
Die Seite IST die Treppe. Ruhig, warm, vertrauensbildend — für Menschen, die unsicher oder etwas ängstlich gegenüber KI sind.

## Aufbau
1. Hero: Headline in der Art "Du musst nicht programmieren, um mit KI-Agenten zu arbeiten." + ein Satz Untertitel + Button "Erste Stufe ansehen" (Sprung nach unten).
2. "Was ist ein Agent?" — Erklärung in 3 kurzen Sätzen mit einem Alltagsvergleich (z.B. Assistent, dem du einen Auftrag gibst).
3. Die Treppe, visuell als 4 aufsteigende Stufen (CSS, versetzt von links unten nach rechts oben):
   - Stufe 1 "Fragen": Chat-Assistenten
   - Stufe 2 "Suchen lassen": Recherche-Agenten
   - Stufe 3 "Mitarbeiten lassen": Office- sowie Sprach- und Notiz-Agenten
   - Stufe 4 "Machen lassen": Browser- und Automatisierungs-Agenten
   Jede Stufe: was du dort lernst + Beispiele + ein konkreter erster Auftrag zum Ausprobieren (ein Beispiel-Satz zum Kopieren, mit Kopieren-Button).
4. "Worauf du achten solltest": 3 Punkte (keine privaten Daten eingeben, Ergebnisse prüfen, du entscheidest).
5. Ausstieg oben auf der Treppe: "Oben angekommen? Dann ist HAI dein nächster Schritt." + Link.

## Look
Weiche, warme Farben (Sand/Salbei o.ä.), viel Weißraum, große lesbare Schrift (min. 18px Fließtext), runde Ecken. Sanfte Einblend-Animation der Stufen beim Scrollen (IntersectionObserver, respektiert `prefers-reduced-motion`).
