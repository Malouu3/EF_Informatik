"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[846],{7384:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/12/23/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/23/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-23-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-23-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"23.12.2022","date":"2022-12-23T00:00:00.000Z","formattedDate":"23. Dezember 2022","tags":[],"readingTime":0.34,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/09/weiterarbeit-an-numtrip"}},"content":"## 23.12.2022\\n\\nIch startete heute damit, das Spiel kurz zu testen und implementierte daraufhin die erste fehlende Funktion die mir aufgefallen ist; das Game-Over.\\nDanach hatte ich ein mentales Breakdown, weil ich einen scheinbar absolut unerkl\xe4rlichen Fehler nicht finden konnte. Nachdem der extrem kleine aber Folgenschwere Fehler gefunden war, hatte ich bereits das n\xe4chste mentale Breakdown, weil auf einmal irgendwelche Zahlen ohne ersichtlichen Grund im Spielfeld vertauscht wurden."},{"id":"/2022/12/09/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/09/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-09-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-09-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"09.12.2022","date":"2022-12-09T00:00:00.000Z","formattedDate":"9. Dezember 2022","tags":[],"readingTime":0.2,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/23/weiterarbeit-an-numtrip"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/08/weiterarbeit-an-numtrip"}},"content":"## 09.12.2022\\n\\nIn der kurzen Arbeitsphase habe ich nur die Spielregel implementiert, dass keine Felder ohne Nachbarn mit dem selben Wert ausgew\xe4hlt werden k\xf6nnen. Ausserdem habe ich das Spiel nun, da es mehr oder weniger vollst\xe4ndig spielbar ist, ausgiebig getestet."},{"id":"/2022/12/08/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/08/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-08-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-08-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"08.12.2022","date":"2022-12-08T00:00:00.000Z","formattedDate":"8. Dezember 2022","tags":[],"readingTime":0.195,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/09/weiterarbeit-an-numtrip"},"nextItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/02/weiterarbeit-an-numtrip"}},"content":"## 08.12.2022\\n\\nAls erstes habe ich mit neuer Kreativit\xe4t die kleinen aber fatalen logik-Fehler in mark_neighbours() und fill_board() korrigiert.\\nDanach habe noch die einfache und viel zu lange aufgeschobene Aufgabe erledigt, das unkonventionelle input-Format y/x zu x/y zu \xe4ndern."},{"id":"/2022/12/02/weiterarbeit-an-numtrip","metadata":{"permalink":"/EF_Informatik/2022/12/02/weiterarbeit-an-numtrip","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-12-02-weiterarbeit-an-numtrip.md","source":"@site/blog/2022-12-02-weiterarbeit-an-numtrip.md","title":"Weiterarbeit an NumTrip","description":"02.12.2022","date":"2022-12-02T00:00:00.000Z","formattedDate":"2. Dezember 2022","tags":[],"readingTime":0.22,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/08/weiterarbeit-an-numtrip"},"nextItem":{"title":"User Input in NumTrip","permalink":"/EF_Informatik/2022/11/18/user-input"}},"content":"## 02.12.2022\\n\\nDie heutige Arbeit bestand g\xe4nzlich aus mehrfachem Neuschreiben des Algorithmus zum Zusammenschieben der Felder und extrem anstregneder Fehlersuche. Das Resultat ist nun ein Algroithmus der zwar noch nicht immer das tut was er soll, das Spiel st\xfcrtzt jedoch immerhin nicht mehr ab."},{"id":"/2022/11/18/user-input","metadata":{"permalink":"/EF_Informatik/2022/11/18/user-input","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-11-18-user-input.md","source":"@site/blog/2022-11-18-user-input.md","title":"User Input in NumTrip","description":"Eingabe erhalten und Feld markieren","date":"2022-11-18T00:00:00.000Z","formattedDate":"18. November 2022","tags":[],"readingTime":0.23,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Weiterarbeit an NumTrip","permalink":"/EF_Informatik/2022/12/02/weiterarbeit-an-numtrip"},"nextItem":{"title":"Wiedereinstieg in Python","permalink":"/EF_Informatik/2022/08/26/wiedereinstieg-in-python"}},"content":"## Eingabe erhalten und Feld markieren\\nIn einem ersten Schritt gibt der Spieler das Feld an, dieses Feld wird lokalisiert und mit \'-1\' markiert.\\n\\n## Gameloop Implementation\\nIn einem zweiten Schritt habe ich eine Gameloop-Funktion implementiert, welche in einem loop die \\"print_board\\" und \\"user_input\\" Funktionen aufruft."},{"id":"/2022/08/26/wiedereinstieg-in-python","metadata":{"permalink":"/EF_Informatik/2022/08/26/wiedereinstieg-in-python","editUrl":"https://github.com/timonj0/EF_Informatik/tree/main/blog/2022-08-26-wiedereinstieg-in-python.md","source":"@site/blog/2022-08-26-wiedereinstieg-in-python.md","title":"Wiedereinstieg in Python","description":"Der Wiedereinstieg ist mir eher leich gefallen. Seltsamerweise hatte ich bei fast jeder Aufgabe ein D\xe9ja-vu Erlebnis, durch welches mir das L\xf6sen erleichtert wurde. Fehler habe ich nat\xfcrlich dennoch gemacht, ich habe schliesslich eine ganze Weile kein Python mehr benutzt weshalb die sprachspeifischen Syntaxkentnisse etwas eingerostet waren. Dank der selbsterkl\xe4renden Natur der Aufgaben stellte dies aber kein allzu grosses Problem dar.","date":"2022-08-26T00:00:00.000Z","formattedDate":"26. August 2022","tags":[],"readingTime":0.305,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"User Input in NumTrip","permalink":"/EF_Informatik/2022/11/18/user-input"}},"content":"Der Wiedereinstieg ist mir eher leich gefallen. Seltsamerweise hatte ich bei fast jeder Aufgabe ein D\xe9ja-vu Erlebnis, durch welches mir das L\xf6sen erleichtert wurde. Fehler habe ich nat\xfcrlich dennoch gemacht, ich habe schliesslich eine ganze Weile kein Python mehr benutzt weshalb die sprachspeifischen Syntaxkentnisse etwas eingerostet waren. Dank der selbsterkl\xe4renden Natur der Aufgaben stellte dies aber kein allzu grosses Problem dar."}]}')}}]);