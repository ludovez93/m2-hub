# M2 Railgroup Hub — PLAN

## Obiettivo
PWA "hub aziendale" M2 Railgroup con ricerca AI su knowledge base interna.
Struttura completa prima, contenuti inseriti dopo.

## Stack tecnico
- **Frontend**: HTML/CSS/JS vanilla (come m2-tool-v2, semplicità)
- **PWA**: manifest + service worker per installazione su telefono
- **Ricerca AI**: search locale su database JSON di contenuti
  - Fase 1: ricerca full-text con fuzzy matching (zero backend)
  - Fase 2 (futura): integrazione AI vera con embeddings (serve backend)
- **Hosting**: GitHub Pages (repo privato per ora)
- **Design**: dark theme blu (come preferenza utente), mobile-first

## Struttura app

```
M2 Hub
├── Home (dashboard con barra ricerca prominente)
├── Rail Safety (ATWS)
│   ├── Procedure operative
│   ├── Schede sistemi
│   └── Normative
├── Rail Tech
│   ├── Manuali macchine
│   ├── Catalogo ricambi
│   └── Assistenza tecnica
├── Rail Engineering / Diagnostica
│   ├── Ultrasuoni (NDT)
│   ├── Geometria binario (DGS)
│   └── Tarature
├── Normative RFI
│   └── Documenti di riferimento
└── Ricerca AI
    └── Cerca su tutti i contenuti interni
```

## Struttura file

```
m2-hub/
├── index.html          # Shell PWA + router
├── css/
│   └── style.css       # Design system dark theme blu
├── js/
│   ├── app.js          # Router + navigazione
│   ├── search.js       # Motore ricerca con fuzzy matching
│   └── data.js         # Database contenuti (JSON)
├── pages/
│   ├── home.html       # Dashboard + search bar
│   ├── safety.html     # Rail Safety / ATWS
│   ├── tech.html       # Rail Tech
│   ├── engineering.html # Diagnostica
│   └── normative.html  # Normative RFI
├── assets/
│   ├── icons/          # Icone PWA
│   └── img/            # Immagini
├── manifest.json       # PWA manifest
├── sw.js               # Service worker
├── CLAUDE.md
├── STATUS.md
├── LEARNED.md
└── PLAN.md
```

## Fasi di sviluppo

### Fase 1 — Struttura (QUESTA SESSIONE)
- [ ] Setup progetto (cartella, git, file gestione)
- [ ] Design system (CSS dark theme blu)
- [ ] Shell PWA con navigazione tra sezioni
- [ ] Pagina Home con barra ricerca
- [ ] Pagine sezione (vuote, struttura pronta)
- [ ] Ricerca full-text su dati placeholder
- [ ] PWA manifest + service worker
- [ ] Commit + push repo privato GitHub

### Fase 2 — Contenuti (sessioni future)
- [ ] Tu fornisci materiale per ogni sezione
- [ ] Popoliamo il database contenuti
- [ ] Ricerca diventa utile su dati reali

### Fase 3 — AI avanzata (futuro)
- [ ] Backend per embeddings / ricerca semantica
- [ ] Possibile integrazione LLM per risposte contestuali

## Note
- Contenuti placeholder per ora (titoli + struttura)
- Ogni sezione ha sottocategorie navigabili
- Ricerca funziona su tutto il contenuto trasversalmente
- Mobile-first: pensata per uso in cantiere/campo
