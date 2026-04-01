// M2 Railgroup Hub — Database contenuti
// Struttura: ogni item ha category, subcategory, title, description, tags, content
// I contenuti reali verranno aggiunti nelle sessioni future

const M2_DATA = [
  // ===== RAIL SAFETY (ATWS) =====
  {
    id: "safety-001",
    category: "Rail Safety",
    categoryId: "safety",
    subcategory: "Procedure operative",
    title: "Procedura attivazione sistema ATWS",
    description: "Steps per attivazione e verifica funzionamento sistema di annuncio treni automatico in cantiere.",
    tags: ["atws", "attivazione", "procedura", "cantiere", "sicurezza", "annuncio treni"],
    content: "Contenuto da inserire — procedura completa attivazione ATWS."
  },
  {
    id: "safety-002",
    category: "Rail Safety",
    categoryId: "safety",
    subcategory: "Procedure operative",
    title: "Verifica giornaliera dispositivi ATWS",
    description: "Checklist verifica giornaliera funzionamento sensori, allarmi e comunicazione.",
    tags: ["atws", "verifica", "checklist", "giornaliera", "sensori", "allarmi"],
    content: "Contenuto da inserire — checklist verifica giornaliera."
  },
  {
    id: "safety-003",
    category: "Rail Safety",
    categoryId: "safety",
    subcategory: "Schede sistemi",
    title: "Sistema ATWS — Scheda tecnica generale",
    description: "Panoramica tecnica dei sistemi automatici di annuncio treni utilizzati da M2.",
    tags: ["atws", "scheda tecnica", "sistema", "specifiche", "annuncio"],
    content: "Contenuto da inserire — scheda tecnica ATWS."
  },
  {
    id: "safety-004",
    category: "Rail Safety",
    categoryId: "safety",
    subcategory: "Schede sistemi",
    title: "Sensori di rilevamento transito treni",
    description: "Tipologie di sensori utilizzati per il rilevamento del transito treni nei sistemi ATWS.",
    tags: ["sensori", "rilevamento", "transito", "treni", "atws", "binario"],
    content: "Contenuto da inserire — scheda sensori."
  },
  {
    id: "safety-005",
    category: "Rail Safety",
    categoryId: "safety",
    subcategory: "Normative",
    title: "Normativa sicurezza cantieri ferroviari",
    description: "Riferimenti normativi per la protezione dei cantieri di lavoro in ambito ferroviario.",
    tags: ["normativa", "sicurezza", "cantiere", "protezione", "rfi", "legge"],
    content: "Contenuto da inserire — riferimenti normativi."
  },

  // ===== RAIL TECH =====
  {
    id: "tech-001",
    category: "Rail Tech",
    categoryId: "tech",
    subcategory: "Manuali macchine",
    title: "Manuale rincalzatrice — Manutenzione ordinaria",
    description: "Procedure di manutenzione ordinaria per rincalzatrici ferroviarie.",
    tags: ["rincalzatrice", "manutenzione", "ordinaria", "macchina", "manuale"],
    content: "Contenuto da inserire — manuale rincalzatrice."
  },
  {
    id: "tech-002",
    category: "Rail Tech",
    categoryId: "tech",
    subcategory: "Manuali macchine",
    title: "Manuale profilatrice rotaie",
    description: "Guida tecnica per l'utilizzo e manutenzione della profilatrice rotaie.",
    tags: ["profilatrice", "rotaie", "profilo", "macchina", "manuale", "manutenzione"],
    content: "Contenuto da inserire — manuale profilatrice."
  },
  {
    id: "tech-003",
    category: "Rail Tech",
    categoryId: "tech",
    subcategory: "Catalogo ricambi",
    title: "Catalogo ricambi — Componenti idraulici",
    description: "Elenco ricambi per impianti idraulici macchinari ferroviari.",
    tags: ["ricambi", "idraulici", "componenti", "catalogo", "spare parts"],
    content: "Contenuto da inserire — catalogo componenti idraulici."
  },
  {
    id: "tech-004",
    category: "Rail Tech",
    categoryId: "tech",
    subcategory: "Catalogo ricambi",
    title: "Catalogo ricambi — Componenti elettrici",
    description: "Elenco ricambi per impianti elettrici e di controllo.",
    tags: ["ricambi", "elettrici", "componenti", "catalogo", "spare parts"],
    content: "Contenuto da inserire — catalogo componenti elettrici."
  },
  {
    id: "tech-005",
    category: "Rail Tech",
    categoryId: "tech",
    subcategory: "Assistenza tecnica",
    title: "Procedura richiesta assistenza on-site",
    description: "Come richiedere intervento tecnico M2 direttamente in cantiere o deposito.",
    tags: ["assistenza", "on-site", "richiesta", "intervento", "tecnico"],
    content: "Contenuto da inserire — procedura richiesta assistenza."
  },

  // ===== RAIL ENGINEERING / DIAGNOSTICA =====
  {
    id: "eng-001",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "DPR MO SE 01 1 0 — Metodologia CND ultrasuoni manuali",
    description: "Metodologia operativa RFI per controlli non distruttivi ad ultrasuoni manuali su rotaie, saldature, deviatoi e giunti. Annulla e sostituisce la 361-A.",
    tags: ["dpr", "mo", "se", "01", "ultrasuoni", "cnd", "rotaie", "saldature", "deviatoi", "giunti", "metodologia", "rfi", "361-a", "manuale"],
    content: "Metodologia operativa RFI DPR MO SE 01 1 0 — Disciplina l'esecuzione dei CND ad ultrasuoni manuali di rotaie, saldature, deviatoi e giunti per individuare difetti che possono incidere sull'esercizio ferroviario. Annulla e sostituisce la M.O. RFI DMA MO IFS 361A del 24/10/2006. Fonte: e-POD banca dati documentale RFI. Documento di 65 pagine, suddiviso in 8 parti + 21 allegati.",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-002",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Sonde ultrasoniche — Tipologie per CND rotaie",
    description: "4 sonde previste dalla DPR MO SE 01: fascio normale 4MHz/10mm, fascio normale 2MHz/20mm, angolata 70°/2MHz 8x9mm, angolata 45°/2MHz 12x12mm.",
    tags: ["sonda", "sonde", "ultrasuoni", "fascio normale", "fascio angolato", "4mhz", "2mhz", "70 gradi", "45 gradi", "monocristallo", "10mm", "20mm"],
    content: "Sonde utilizzate per CND ad ultrasuoni (DPR MO SE 01 1 0, Parte III.1.2):\n\n• Sonda a fascio normale, 4 MHz, monocristallo, diametro 10 mm — per FVL nel fungo e FH nel fungo (campo 70-100mm)\n• Sonda a fascio normale, 2 MHz, monocristallo, diametro 20 mm — per FH tra fungo e suola (campo 250mm)\n• Sonda a fascio angolato, 70°/2 MHz, cristallo 8x9 mm — per FT nel fungo e suola (campo 150mm)\n• Sonda a fascio angolato, 45°/2 MHz, cristallo 12x12 mm — per FT suola saldatura, ET gambo, FT gambo/centro suola (campo 150-250mm)",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-003",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Tipologie difetti rotaia — FH, FVL, FT, ET",
    description: "Fenditure orizzontali (FH), verticali longitudinali (FVL), trasversali (FT) e cretti da fori (ET). Metodi e superfici di contatto per ciascun tipo.",
    tags: ["difetti", "fenditura", "orizzontale", "verticale", "trasversale", "fh", "fvl", "ft", "et", "cretti", "fori", "fungo", "gambo", "suola", "rotaia"],
    content: "Tipologie difetti ricercati (DPR MO SE 01 1 0, Parte IV):\n\n• FH — Fenditure Orizzontali: parallele alla tavola di rotolamento, tra superficie fungo e zona centrale suola. Sonda: fascio normale 10/4 MHz o 20/2 MHz. Superficie: tavola di rotolamento.\n\n• FVL — Fenditure Verticali Longitudinali: nel fungo, andamento verticale. Sonda: fascio normale 10/4 MHz. Superficie: lembo laterale del fungo.\n\n• FT — Fenditure Trasversali: nel fungo, gambo o suola, orientamento normale all'asse rotaia. Sonda: angolata 45°/2 MHz o 70°/2 MHz. Superficie: tavola di rotolamento, piano steccatura inferiore, fianco suola.\n\n• ET — Cretti partenti da fori: nel gambo. Sonda: angolata 45°/2 MHz + normale 10/4 MHz. Superficie: tavola di rotolamento.",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-003b",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Regolazione strumentazione US — Procedure",
    description: "Regolazione standard, scala orizzontale e verticale per tutte le sonde. Blocchi campione N°1 e N°2, rotaia di riferimento RFI.",
    tags: ["regolazione", "taratura", "strumentazione", "scala", "orizzontale", "verticale", "blocco campione", "rotaia riferimento", "dac", "sensibilità"],
    content: "Regolazione strumentazione (DPR MO SE 01 1 0, Parte V):\n\n3 fasi operative:\n1. Regolazione Standard — ritardo sonda e velocità propagazione US su blocchi campione N°1 o N°2\n2. Regolazione scala orizzontale — base dei tempi\n3. Regolazione scala verticale — sensibilità del controllo\n\nSonda 20/2 MHz (FH): campo 250mm, eco fine pezzo vicino a 7ª divisione (H=172mm). Regolazione su 3°, 4° e 5° foro rotaia riferimento per DAC.\n\nSonda 10/4 MHz (FVL/FH fungo): campo 70-100mm, eco fine pezzo vicino a 7ª divisione (72mm). Regolazione su 1°, 2° e 3° foro per DAC.\n\nSonda 70°/2 MHz (FT): campo 150mm (o 200mm). Eco 6° foro vicino a 2ª divisione. DAC su 6°, 7° e 8° foro.\n\nSonda 45°/2 MHz (FT/ET): campo variabile 150-250mm secondo tipo difetto. DAC specifica per ogni configurazione.",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-003c",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Rotaia di riferimento RFI — Caratteristiche",
    description: "Spezzone 60 E1 lungo 680mm con 13 difetti artificiali (fori fondo piatto ø5mm). Usata per regolazione in ampiezza.",
    tags: ["rotaia riferimento", "rfi", "60 e1", "foro fondo piatto", "difetto artificiale", "regolazione", "ampiezza", "blocco campione"],
    content: "Rotaia di riferimento RFI (DPR MO SE 01 1 0, Parte III.1.3):\n\nSpezzone rotaia tipo 60 E1 (ex 60 UIC) lungo 680mm.\nCaratteristiche: asportazione lembo fungo per 400mm, fresatura gambo scalettata su 3 quote, scasso alleggerimento suola.\n\n13 difetti artificiali:\n• Fori 1-5: verticali, fondo piatto ø5mm, profondità 15/30/50/100/150mm dalla TR\n• Fori 6-11: trasversali, fondo piatto ø5mm, penetrazione 9mm, profondità 12.5-162.5mm\n• Foro 12: foro giunzione ø29mm con 2 intagli (orizzontale + 45°)\n• Foro 13: foro giunzione ø29mm con 1 intaglio 45°\n\nUsata per regolazione in ampiezza della eco di risposta del difetto di dimensione minima ricercata.",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-003d",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Verifiche periodiche strumentazione US",
    description: "Linearità base tempi, linearità amplificazione, sensibilità e rapporto segnale/rumore. Adempimenti giornalieri e mensili.",
    tags: ["verifiche", "periodiche", "linearità", "base tempi", "amplificazione", "sensibilità", "segnale rumore", "giornaliero", "mensile", "blocco campione"],
    content: "Verifiche strumentazione (DPR MO SE 01 1 0, Parte VI e VII):\n\nVerifiche periodiche (su blocco campione N°1):\n• Linearità base dei tempi — con sonda normale 10/4 MHz\n• Linearità amplificazione — con sonda angolata 70°/2 MHz\n• Sensibilità e rapporto segnale/rumore — con tutte le sonde\n\nAdempimenti giornalieri: regolazioni strumentazione ogni giorno prima dell'attività. Verifica a fine giornata se eseguiti più di 100 controlli.\n\nAdempimenti mensili (personale 2° o 3° livello): linearità base tempi, linearità amplificazione, sensibilità e rapporto segnale/rumore. Registrazione su scheda allegato 5bis.",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-003e",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Personale CND — Requisiti e certificazione",
    description: "Certificazione 1°, 2° e 3° livello secondo UNI EN ISO 9712 e procedura RFI DPR SIGS PO 16 10. Autorizzazione dal datore di lavoro.",
    tags: ["personale", "certificazione", "livello", "1 livello", "2 livello", "3 livello", "cnd", "qualificazione", "uni en iso 9712", "ansf"],
    content: "Personale incaricato CND (DPR MO SE 01 1 0, Parte II):\n\nI CND nella manutenzione ferroviaria sono svolti da personale certificato secondo RFI DPR SIGS PO 16 10 del 17/03/14.\n\nRequisiti:\n• Certificazione 1°, 2° o 3° livello rilasciata da Ente Certificatore (CIC PND)\n• Autorizzazione dal Datore di lavoro\n• Conformità a UNI EN ISO 9712:2012 e Linee guida ANSF LG 02/2012\n\nIl personale 2° e 3° livello esegue le verifiche periodiche mensili della strumentazione.",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-003f",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Terminologia US — Glossario tecnico CND",
    description: "Definizioni tecniche: fungo, gambo, suola, eco, sonda, DAC, zona morta, frequenza, blocco campione e altri termini UT.",
    tags: ["glossario", "terminologia", "definizioni", "fungo", "gambo", "suola", "eco", "dac", "zona morta", "accoppiamento", "a scan", "cristallo"],
    content: "Glossario tecnico (DPR MO SE 01 1 0, Parte I.1):\n\n• Fungo: delimitato da tavola di rotolamento, lembi, piani steccatura superiore. H=51mm (60 E1) o 50.5mm (50 E5)\n• Gambo: tra piani steccatura superiore e inferiore. H=89.5mm (60 E1) o 70mm (50 E5)\n• Suola: delimitata da superficie inferiore, fianchi, piani steccatura inferiori. H=31.5mm (60 E1) o 27.5mm (50 E5)\n• Eco: impulso prodotto dalla riflessione su discontinuità\n• DAC: curva distanza-ampiezza, indica altezze eco da riflettore a profondità crescenti\n• Zona morta: spessore contiguo alla superficie in cui non si riconoscono segnali\n• Velocità US nell'acciaio: longitudinale 5920 m/s, trasversale 3210 m/s\n• A scan: rappresentazione con asse verticale (ampiezze eco) e orizzontale (distanze/profondità)",
    pdfUrl: "docs/diagnostica/DPR-MO-SE-01-1-0.pdf",
    pdfName: "DPR MO SE 01 1 0"
  },
  {
    id: "eng-004",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Geometria binario",
    title: "Parametri geometria binario — DGS",
    description: "Parametri di rilievo geometria: sghembo, frecciatura, scartamento, livello longitudinale.",
    tags: ["geometria", "binario", "dgs", "sghembo", "frecciatura", "scartamento", "livello"],
    content: "Contenuto da inserire — parametri DGS."
  },
  {
    id: "eng-005",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Geometria binario",
    title: "Aggregato DGS — Scheda tecnica",
    description: "Specifiche tecniche del sistema di rilievo e registrazione geometria binario.",
    tags: ["dgs", "aggregato", "scheda tecnica", "rilievo", "registrazione"],
    content: "Contenuto da inserire — scheda tecnica DGS."
  },
  {
    id: "eng-006",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Tarature",
    title: "Procedura taratura strumenti di misura",
    description: "Guida alla taratura e calibrazione degli strumenti di misura e diagnostica.",
    tags: ["taratura", "calibrazione", "strumenti", "misura", "procedura"],
    content: "Contenuto da inserire — procedura taratura."
  },

  // ===== NORMATIVE RFI =====
  {
    id: "norm-001",
    category: "Normative RFI",
    categoryId: "normative",
    subcategory: "Sicurezza",
    title: "Istruzione per la protezione dei cantieri — IPC",
    description: "Normativa RFI per la protezione dei cantieri di lavoro sulla sede ferroviaria.",
    tags: ["ipc", "protezione", "cantieri", "rfi", "normativa", "sicurezza"],
    content: "Contenuto da inserire — IPC."
  },
  {
    id: "norm-002",
    category: "Normative RFI",
    categoryId: "normative",
    subcategory: "Manutenzione",
    title: "Specifica tecnica manutenzione armamento",
    description: "Requisiti RFI per la manutenzione dell'armamento ferroviario.",
    tags: ["manutenzione", "armamento", "rfi", "specifica", "tecnica", "binario"],
    content: "Contenuto da inserire — specifica manutenzione armamento."
  },
  {
    id: "norm-003",
    category: "Normative RFI",
    categoryId: "normative",
    subcategory: "Diagnostica",
    title: "Normative correlate CND ultrasuoni rotaie",
    description: "UNI EN ISO 7963, UNI EN ISO 2400, UNI EN 12668-3, UNI EN 583, UNI EN ISO 9712, catalogo difetti RFI TCAR 02, procedura gestione difetti RFI DMA PS IFS 88 B.",
    tags: ["normative", "uni en", "iso", "7963", "2400", "12668", "583", "9712", "cnd", "ultrasuoni", "blocco campione", "catalogo difetti", "tcar", "rfi", "ansf"],
    content: "Normative correlate ai CND ultrasuoni (da DPR MO SE 01 1 0, Parte I.2):\n\n• UNI EN ISO 7963:2010 — Blocco di riferimento N°2 per controllo US saldature\n• UNI EN ISO 2400:2012 — Specifica per blocco campione N°1\n• UNI EN 12668-3:2013 — Caratterizzazione e verifica apparecchiature US\n• UNI EN 583-1:2004 — Esame a ultrasuoni, principi generali\n• UNI EN 583-5:2004 — Caratterizzazione e dimensionamento discontinuità\n• UNI EN ISO 9712:2012 — Qualificazione e certificazione personale PND\n• RFI TCAR 02 (003 A del 2/05/05) — Catalogo difetti rotaie (uniformato UIC)\n• RFI DMA PS IFS 88 B — Gestione difetti rotaie/scambi e provvedimenti manutentivi\n• LG ANSF 02/2012 — Linee guida qualificazione personale CND manutenzione ferroviaria\n• RFI DPR SIGS PO 16 10 — Certificazione personale CND\n• RFI DPR SIGS PO 18 1 0 — Gestione taratura strumenti di misura"
  },
  {
    id: "norm-004",
    category: "Normative RFI",
    categoryId: "normative",
    subcategory: "Geometria",
    title: "Tolleranze geometria del binario",
    description: "Valori limite e tolleranze per i parametri geometrici del binario secondo standard RFI.",
    tags: ["tolleranze", "geometria", "binario", "rfi", "limiti", "parametri"],
    content: "Contenuto da inserire — tolleranze geometria."
  }
];

// Icone SVG per categorie
const SVG_ICONS = {
  safety: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  engineering: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><circle cx="12" cy="12" r="2"/><path d="M18 12c0 4-2 8-3 10"/></svg>',
  normative: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
};

// Struttura categorie per navigazione
const M2_CATEGORIES = {
  safety: {
    id: "safety",
    title: "Rail Safety",
    subtitle: "ATWS & Sicurezza cantieri",
    svgIcon: SVG_ICONS.safety,
    color: "var(--safety)",
    badgeClass: "badge-safety",
    subcategories: ["Procedure operative", "Schede sistemi", "Normative"]
  },
  tech: {
    id: "tech",
    title: "Rail Tech",
    subtitle: "Macchinari & Ricambi",
    svgIcon: SVG_ICONS.tech,
    color: "var(--tech)",
    badgeClass: "badge-tech",
    subcategories: ["Manuali macchine", "Catalogo ricambi", "Assistenza tecnica"]
  },
  engineering: {
    id: "engineering",
    title: "Diagnostica",
    subtitle: "Ultrasuoni, DGS, Tarature",
    svgIcon: SVG_ICONS.engineering,
    color: "var(--engineering)",
    badgeClass: "badge-engineering",
    subcategories: ["Ultrasuoni (NDT)", "Geometria binario", "Tarature"]
  },
  normative: {
    id: "normative",
    title: "Normative RFI",
    subtitle: "Standard & Regolamenti",
    svgIcon: SVG_ICONS.normative,
    color: "var(--normative)",
    badgeClass: "badge-normative",
    subcategories: ["Sicurezza", "Manutenzione", "Diagnostica", "Geometria"]
  }
};
