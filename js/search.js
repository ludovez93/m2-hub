// M2 Railgroup Hub — Motore di ricerca

class M2Search {
  constructor(data) {
    this.data = data;
  }

  // Ricerca full-text con fuzzy matching
  search(query) {
    if (!query || query.trim().length < 2) return [];

    const terms = query.toLowerCase().trim().split(/\s+/);
    const results = [];

    for (const item of this.data) {
      const score = this._scoreItem(item, terms);
      if (score > 0) {
        results.push({ ...item, score });
      }
    }

    // Ordina per rilevanza
    results.sort((a, b) => b.score - a.score);
    return results;
  }

  _scoreItem(item, terms) {
    let totalScore = 0;

    for (const term of terms) {
      let termScore = 0;

      // Match esatto nel titolo (peso alto)
      if (item.title.toLowerCase().includes(term)) {
        termScore += 10;
      }

      // Match nei tag (peso medio-alto)
      if (item.tags.some(tag => tag.includes(term))) {
        termScore += 8;
      }

      // Match nella descrizione (peso medio)
      if (item.description.toLowerCase().includes(term)) {
        termScore += 5;
      }

      // Match nella categoria/sottocategoria (peso medio)
      if (item.category.toLowerCase().includes(term) ||
          item.subcategory.toLowerCase().includes(term)) {
        termScore += 4;
      }

      // Match nel contenuto (peso basso)
      if (item.content.toLowerCase().includes(term)) {
        termScore += 2;
      }

      // Fuzzy: match parziale nei tag (peso basso)
      if (termScore === 0) {
        for (const tag of item.tags) {
          if (tag.includes(term.slice(0, 3)) || term.includes(tag.slice(0, 3))) {
            termScore += 1;
            break;
          }
        }
      }

      totalScore += termScore;
    }

    return totalScore;
  }

  // Evidenzia i termini trovati nel testo
  highlight(text, query) {
    if (!query || !text) return text;
    const terms = query.toLowerCase().trim().split(/\s+/);
    let result = text;

    for (const term of terms) {
      if (term.length < 2) continue;
      const regex = new RegExp(`(${this._escapeRegex(term)})`, 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    }

    return result;
  }

  _escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Filtra per categoria
  filterByCategory(categoryId) {
    return this.data.filter(item => item.categoryId === categoryId);
  }

  // Filtra per sottocategoria
  filterBySubcategory(categoryId, subcategory) {
    return this.data.filter(
      item => item.categoryId === categoryId && item.subcategory === subcategory
    );
  }
}
