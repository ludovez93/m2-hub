# M2 Hub — LEARNED

## Progetto
- M2 Railgroup: azienda altoatesina, sede La Valle (BZ), ~70 dipendenti
- 3 linee business: Rail Safety (ATWS), Rail Tech, Rail Engineering/Diagnostica
- Ludovico ha esperienza diretta in ATWS e diagnostica ultrasuoni
- App pensata per proporla all'azienda, deve essere professionale

## Design
- Dark theme blu scuro, NON tema chiaro come il sito M2
- Colori sezione: Safety=blu, Tech=verde, Diagnostica=giallo, Normative=rosso
- Logo M2 ufficiale preso dal sito (SVG bianco, fill #fff)
- Font Inter, icone SVG (no emoji)

## Architettura contenuti
- Opzione C scelta: riassunto ricercabile + link PDF originale
- Ogni PDF viene spezzato in contenuti logici con tags per la ricerca
- Campo pdfUrl + pdfName per collegare al documento originale
- I PDF vanno in docs/ organizzati per sezione

## Tecnico
- #search= nei PDF funziona solo su Chrome desktop, NON su Brave ne mobile
- Service worker crea problemi di cache durante sviluppo — svuotare cache prima di testare
- GitHub Pages richiede repo pubblico su piano free
- Python non disponibile su questo PC Windows
- pdftotext (mingw64) disponibile per estrarre testo dai PDF

## Distribuzione futura
- Per dare l'app a tutta la ditta serve hosting su server/dominio aziendale
- M2 ha probabilmente un server documentale interno
- L'app può fare da interfaccia di ricerca sopra i documenti esistenti
