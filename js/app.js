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
          <p>Knowledge Hub — Cerca qualsiasi cosa</p>
        </div>
        <div class="sections-grid">
          ${categories.map(cat => {
            const count = M2_DATA.filter(d => d.categoryId === cat.id).length;
            return `
              <a class="section-card" onclick="app.navigate('${cat.id}')">
                <span class="card-icon">${cat.icon}</span>
                <div class="card-title">${cat.title}</div>
                <div class="card-desc">${cat.subtitle}</div>
              </a>
            `;
          }).join('')}
        </div>
        <div style="margin-top: 32px;">
          <h3 style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">Ultimi contenuti</h3>
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
            <span class="sub-icon">${cat.icon}</span>
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
          <h1>${cat.icon} ${cat.title}</h1>
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

    showDetail(id) {
      const item = M2_DATA.find(d => d.id === id);
      if (!item) return;

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
          padding: 24px;
          margin-top: 16px;
          line-height: 1.6;
          color: var(--text-secondary);
        ">
          ${item.content}
        </div>
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
        <div class="search-result-item" onclick="app.showDetail('${item.id}'); app.closeSearch();">
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
