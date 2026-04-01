// M2 Railgroup Hub — App principale

(function() {
  'use strict';

  const app = {
    search: null,
    currentPage: 'home',

    init() {
      this.search = new M2Search(M2_DATA);
      this.bindEvents();
      this.handleRoute();
      window.addEventListener('hashchange', () => this.handleRoute());
    },

    // ===== ROUTING =====

    handleRoute() {
      const hash = window.location.hash.slice(1) || 'home';
      const parts = hash.split('/');
      const page = parts[0];
      const sub = parts[1] ? decodeURIComponent(parts[1]) : null;

      this.currentPage = page;
      this.closeSearch();
      this.render(page, sub);
      this.updateNav(page);
      window.scrollTo(0, 0);
    },

    navigate(hash) {
      window.location.hash = hash;
    },

    // ===== RENDER =====

    render(page, sub) {
      const main = document.getElementById('main-content');

      switch (page) {
        case 'home':
          main.innerHTML = this.renderHome();
          break;
        case 'safety':
        case 'tech':
        case 'engineering':
        case 'normative':
          if (sub) {
            main.innerHTML = this.renderSubcategory(page, sub);
          } else {
            main.innerHTML = this.renderCategory(page);
          }
          break;
        default:
          main.innerHTML = this.renderHome();
      }

      main.classList.remove('fade-in');
      void main.offsetWidth;
      main.classList.add('fade-in');
    },

    // ===== HOME =====

    renderHome() {
      const categories = Object.values(M2_CATEGORIES);

      return `
        <div class="home-hero">
          <h1>M2 Railgroup</h1>
          <p>Knowledge Hub</p>
        </div>
        <div class="sections-grid">
          ${categories.map(cat => {
            const count = M2_DATA.filter(d => d.categoryId === cat.id).length;
            return `
              <a class="section-card" data-section="${cat.id}" onclick="app.navigate('${cat.id}')">
                <div class="card-icon">${cat.svgIcon}</div>
                <div class="card-title">${cat.title}</div>
                <div class="card-desc">${cat.subtitle}</div>
              </a>
            `;
          }).join('')}
        </div>
        <div style="margin-top: 28px;">
          <div class="section-label">Recenti</div>
          ${this.renderContentList(M2_DATA.slice(0, 5))}
        </div>
      `;
    },

    // ===== CATEGORY PAGE =====

    renderCategory(categoryId) {
      const cat = M2_CATEGORIES[categoryId];
      if (!cat) return this.renderHome();

      const items = this.search.filterByCategory(categoryId);

      const subcategoryCards = cat.subcategories.map(sub => {
        const subItems = items.filter(i => i.subcategory === sub);
        return `
          <div class="subsection-item" onclick="app.navigate('${categoryId}/${encodeURIComponent(sub)}')">
            <span class="sub-icon">${SVG_ICONS.folder}</span>
            <div class="sub-info">
              <div class="sub-title">${sub}</div>
              <div class="sub-desc">${subItems.length} documenti</div>
            </div>
            <span class="sub-count">${subItems.length}</span>
          </div>
        `;
      }).join('');

      return `
        <div class="page-header">
          <button class="back-btn" onclick="app.navigate('home')">
            \u2190 Home
          </button>
          <h1>${cat.title}</h1>
          <p>${cat.subtitle} — ${items.length} documenti totali</p>
        </div>
        <div class="subsection-list">
          ${subcategoryCards}
        </div>
      `;
    },

    // ===== SUBCATEGORY PAGE =====

    renderSubcategory(categoryId, subcategory) {
      const cat = M2_CATEGORIES[categoryId];
      if (!cat) return this.renderHome();

      const items = this.search.filterBySubcategory(categoryId, subcategory);

      return `
        <div class="page-header">
          <button class="back-btn" onclick="app.navigate('${categoryId}')">
            \u2190 ${cat.title}
          </button>
          <h1>${subcategory}</h1>
          <p>${items.length} documenti</p>
        </div>
        ${items.length > 0
          ? this.renderContentList(items)
          : `<div class="empty-state">
              <div class="empty-icon">\u{1F4C2}</div>
              <h3>Nessun contenuto</h3>
              <p>I documenti per questa sezione verranno aggiunti prossimamente.</p>
            </div>`
        }
      `;
    },

    // ===== CONTENT LIST =====

    renderContentList(items) {
      return `<div class="content-list">
        ${items.map(item => `
          <div class="content-item" onclick="app.showDetail('${item.id}')">
            <div class="item-type">
              <span class="badge ${M2_CATEGORIES[item.categoryId]?.badgeClass || ''}">${item.category}</span>
              &middot; ${item.subcategory}
            </div>
            <div class="item-title">${item.title}</div>
            <div class="item-desc">${item.description}</div>
          </div>
        `).join('')}
      </div>`;
    },

    // ===== DETAIL (placeholder) =====

    showDetail(id, searchTerm) {
      const item = M2_DATA.find(d => d.id === id);
      if (!item) return;

      // Aggiungi termine di ricerca all'URL del PDF per evidenziarlo
      const pdfHref = item.pdfUrl
        ? (searchTerm
            ? `${item.pdfUrl}#search=${encodeURIComponent(searchTerm)}`
            : item.pdfUrl)
        : '';

      const pdfButton = item.pdfUrl ? `
        <a href="${pdfHref}" target="_blank" style="
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: #fff;
          text-decoration: none;
          padding: 14px 20px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 700;
          margin-top: 16px;
          transition: opacity 0.15s;
        " onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <polyline points="9 15 12 18 15 15"/>
          </svg>
          Apri documento completo — ${item.pdfName}
        </a>
      ` : '';

      const contentFormatted = item.content
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/•/g, '<span style="color:var(--accent-light)">•</span>');

      const main = document.getElementById('main-content');
      main.innerHTML = `
        <div class="page-header">
          <button class="back-btn" onclick="history.back()">
            \u2190 Indietro
          </button>
          <div class="item-type" style="margin-bottom: 8px;">
            <span class="badge ${M2_CATEGORIES[item.categoryId]?.badgeClass || ''}">${item.category}</span>
            &middot; ${item.subcategory}
          </div>
          <h1>${item.title}</h1>
          <p>${item.description}</p>
        </div>
        <div style="
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          margin-top: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
          font-size: 13px;
          white-space: pre-line;
        ">
          <p>${contentFormatted}</p>
        </div>
        ${pdfButton}
      `;
      main.classList.remove('fade-in');
      void main.offsetWidth;
      main.classList.add('fade-in');
      window.scrollTo(0, 0);
    },

    // ===== SEARCH =====

    bindEvents() {
      const searchInput = document.getElementById('search-input');
      const searchResults = document.getElementById('search-results');

      let debounceTimer;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.performSearch(e.target.value);
        }, 200);
      });

      searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length >= 2) {
          this.performSearch(searchInput.value);
        }
      });

      // Chiudi ricerca con Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeSearch();
          searchInput.blur();
        }
      });
    },

    performSearch(query) {
      const resultsEl = document.getElementById('search-results');
      const resultsBody = document.getElementById('search-results-body');

      if (!query || query.trim().length < 2) {
        resultsEl.classList.remove('active');
        return;
      }

      const results = this.search.search(query);
      resultsEl.classList.add('active');

      if (results.length === 0) {
        resultsBody.innerHTML = `
          <div class="search-empty">
            <div class="empty-icon">\u{1F50E}</div>
            <p>Nessun risultato per "<strong>${this._escapeHtml(query)}</strong>"</p>
          </div>
        `;
        return;
      }

      resultsBody.innerHTML = results.map(item => `
        <div class="search-result-item" onclick="app.showDetail('${item.id}', '${query.replace(/'/g, "\\'")}'); app.closeSearch();">
          <div class="result-category">
            <span class="badge ${M2_CATEGORIES[item.categoryId]?.badgeClass || ''}">${item.category}</span>
            &middot; ${item.subcategory}
          </div>
          <div class="result-title">${this.search.highlight(item.title, query)}</div>
          <div class="result-excerpt">${this.search.highlight(item.description, query)}</div>
        </div>
      `).join('');

      document.getElementById('search-count').textContent = `${results.length} risultati`;
    },

    closeSearch() {
      document.getElementById('search-results').classList.remove('active');
      document.getElementById('search-input').value = '';
    },

    updateNav(page) {
      document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.page === page);
      });
    },

    _escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
  };

  // Esponi globalmente
  window.app = app;

  // Init al DOM ready
  document.addEventListener('DOMContentLoaded', () => app.init());
})();
