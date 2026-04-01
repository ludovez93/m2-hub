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
    title: "Controllo ultrasonoro rotaie — Procedura base",
    description: "Procedura standard per il controllo non distruttivo delle rotaie mediante ultrasuoni.",
    tags: ["ultrasuoni", "ndt", "rotaie", "controllo", "procedura", "sonda", "difetti"],
    content: "Contenuto da inserire — procedura CND ultrasuoni."
  },
  {
    id: "eng-002",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Sonde ultrasoniche — Tipologie e utilizzo",
    description: "Guida alle diverse tipologie di sonde ultrasoniche per ispezione ferroviaria.",
    tags: ["sonda", "sonde", "ultrasuoni", "tipologie", "ispezione", "ndt", "angolo"],
    content: "Contenuto da inserire — guida sonde ultrasoniche."
  },
  {
    id: "eng-003",
    category: "Diagnostica",
    categoryId: "engineering",
    subcategory: "Ultrasuoni (NDT)",
    title: "Classificazione difetti rotaia",
    description: "Catalogo difetti rilevabili mediante controllo ultrasonoro con codifica e gravità.",
    tags: ["difetti", "rotaia", "classificazione", "ultrasuoni", "codifica", "gravità"],
    content: "Contenuto da inserire — catalogo difetti."
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
    title: "Normativa controlli non distruttivi rotaie",
    description: "Standard RFI per l'esecuzione dei controlli non distruttivi (CND) sulle rotaie.",
    tags: ["cnd", "controlli", "non distruttivi", "rotaie", "rfi", "ultrasuoni", "normativa"],
    content: "Contenuto da inserire — normativa CND."
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

// Struttura categorie per navigazione
const M2_CATEGORIES = {
  safety: {
    id: "safety",
    title: "Rail Safety",
    subtitle: "ATWS & Sicurezza cantieri",
    icon: "\u{1F6E1}\uFE0F",
    color: "var(--success)",
    badgeClass: "badge-safety",
    subcategories: ["Procedure operative", "Schede sistemi", "Normative"]
  },
  tech: {
    id: "tech",
    title: "Rail Tech",
    subtitle: "Macchinari & Ricambi",
    icon: "\u{1F527}",
    color: "var(--warning)",
    badgeClass: "badge-tech",
    subcategories: ["Manuali macchine", "Catalogo ricambi", "Assistenza tecnica"]
  },
  engineering: {
    id: "engineering",
    title: "Diagnostica",
    subtitle: "Ultrasuoni, DGS, Tarature",
    icon: "\u{1F50D}",
    color: "var(--accent-light)",
    badgeClass: "badge-engineering",
    subcategories: ["Ultrasuoni (NDT)", "Geometria binario", "Tarature"]
  },
  normative: {
    id: "normative",
    title: "Normative RFI",
    subtitle: "Standard & Regolamenti",
    icon: "\u{1F4CB}",
    color: "var(--danger)",
    badgeClass: "badge-normative",
    subcategories: ["Sicurezza", "Manutenzione", "Diagnostica", "Geometria"]
  }
};
