// js/app.js - Interactive Study Portal Controller

// State Management
const Store = {
  mode: 'theory', // 'theory' | 'mcq'
  theme: 'dark', // 'dark' | 'light'
  activeWeek: 1,
  completedWeeks: [],
  currentQuestionId: 1,
  mcqFilter: 'all', // 'all' | 'flagged' | 'week_X' | 'batch_X'
  userAnswers: {}, // { [questionId]: optionIndex }
  flaggedQuestions: [], // array of question IDs
  visitedQuestions: [], // array of question IDs
  sidebarCollapsed: false,

  init() {
    this.loadState();
    if (!this.visitedQuestions.includes(this.currentQuestionId)) {
      this.visitedQuestions.push(this.currentQuestionId);
    }
  },

  loadState() {
    try {
      const saved = localStorage.getItem('nptel_study_portal_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.mode = parsed.mode || 'theory';
        this.theme = parsed.theme || 'dark';
        this.activeWeek = parsed.activeWeek || 1;
        this.completedWeeks = parsed.completedWeeks || [];
        this.currentQuestionId = parsed.currentQuestionId || 1;
        this.mcqFilter = parsed.mcqFilter || 'all';
        this.userAnswers = parsed.userAnswers || {};
        this.flaggedQuestions = parsed.flaggedQuestions || [];
        this.visitedQuestions = parsed.visitedQuestions || [];
        this.sidebarCollapsed = !!parsed.sidebarCollapsed;
      }
    } catch (e) {
      console.warn("Could not load saved state from localStorage:", e);
    }
  },

  saveState() {
    try {
      const payload = {
        mode: this.mode,
        theme: this.theme,
        activeWeek: this.activeWeek,
        completedWeeks: this.completedWeeks,
        currentQuestionId: this.currentQuestionId,
        mcqFilter: this.mcqFilter,
        userAnswers: this.userAnswers,
        flaggedQuestions: this.flaggedQuestions,
        visitedQuestions: this.visitedQuestions,
        sidebarCollapsed: this.sidebarCollapsed
      };
      localStorage.setItem('nptel_study_portal_state', JSON.stringify(payload));
    } catch (e) {
      console.warn("Could not persist state to localStorage:", e);
    }
  },

  resetProgress() {
    if (confirm("Are you sure you want to reset all your progress, answers, and bookmarks? This cannot be undone.")) {
      localStorage.removeItem('nptel_study_portal_state');
      this.completedWeeks = [];
      this.userAnswers = {};
      this.flaggedQuestions = [];
      this.visitedQuestions = [1];
      this.currentQuestionId = 1;
      this.activeWeek = 1;
      this.saveState();
      UI.renderAll();
    }
  }
};

// UI Rendering & Interactions
const UI = {
  init() {
    // Set theme
    document.documentElement.setAttribute('data-theme', Store.theme);
    
    // Restore sidebar collapsed state on desktop
    if (Store.sidebarCollapsed && window.innerWidth > 900) {
      document.querySelector('.portal-shell')?.classList.add('sidebar-collapsed');
    }

    // Bind global listeners
    this.bindEvents();
    
    // Render initial views
    this.renderAll();
  },

  closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  },

  toggleSidebar(collapsed) {
    if (typeof collapsed === 'boolean') {
      Store.sidebarCollapsed = collapsed;
    } else {
      Store.sidebarCollapsed = !Store.sidebarCollapsed;
    }

    const portalShell = document.querySelector('.portal-shell');
    if (portalShell) {
      if (Store.sidebarCollapsed) {
        portalShell.classList.add('sidebar-collapsed');
      } else {
        portalShell.classList.remove('sidebar-collapsed');
      }
    }
    Store.saveState();
  },

  bindEvents() {
    // Mode Switcher Buttons
    const btnTheoryMode = document.getElementById('btn-mode-theory');
    const btnMcqMode = document.getElementById('btn-mode-mcq');

    if (btnTheoryMode) {
      btnTheoryMode.addEventListener('click', () => {
        Store.mode = 'theory';
        Store.saveState();
        this.renderAll();
      });
    }

    if (btnMcqMode) {
      btnMcqMode.addEventListener('click', () => {
        Store.mode = 'mcq';
        Store.saveState();
        this.renderAll();
      });
    }

    // Theme Toggle Buttons (Desktop & Mobile)
    const toggleTheme = () => {
      Store.theme = Store.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', Store.theme);
      Store.saveState();
      this.updateThemeButton();
    };

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const mobileThemeBtn = document.getElementById('mobile-theme-btn');
    if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

    // Reset Progress Button
    const resetBtn = document.getElementById('btn-reset-progress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => Store.resetProgress());
    }

    // Sidebar Collapse & Expand Controls (Desktop & Mobile)
    const btnCollapse = document.getElementById('btn-collapse-sidebar');
    const btnExpand = document.getElementById('btn-expand-sidebar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (btnCollapse) {
      btnCollapse.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          this.closeMobileSidebar();
        } else {
          this.toggleSidebar(true);
        }
      });
    }

    if (btnExpand) {
      btnExpand.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          sidebar?.classList.add('open');
          overlay?.classList.add('active');
        } else {
          this.toggleSidebar(false);
        }
      });
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        sidebar?.classList.add('open');
        overlay?.classList.add('active');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        this.closeMobileSidebar();
      });
    }

    // Keyboard shortcut to toggle sidebar ('[' or Ctrl+B)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileSidebar();
      }
      if ((e.ctrlKey && e.key.toLowerCase() === 'b') || 
          (e.key === '[' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName))) {
        e.preventDefault();
        if (window.innerWidth <= 900) {
          if (sidebar?.classList.contains('open')) {
            this.closeMobileSidebar();
          } else {
            sidebar?.classList.add('open');
            overlay?.classList.add('active');
          }
        } else {
          this.toggleSidebar();
        }
      }
    });

  },

  renderAll() {
    this.updateModeSwitcher();
    this.updateThemeButton();

    const theoryView = document.getElementById('view-theory-portal');
    const mcqView = document.getElementById('view-mcq-arena');
    const theoryNav = document.getElementById('sidebar-theory-nav');
    const mcqNav = document.getElementById('sidebar-mcq-nav');

    if (Store.mode === 'theory') {
      if (theoryView) theoryView.style.display = 'block';
      if (mcqView) mcqView.style.display = 'none';
      if (theoryNav) theoryNav.style.display = 'block';
      if (mcqNav) mcqNav.style.display = 'none';

      this.renderTheorySidebar();
      this.renderTheoryContent();
    } else {
      if (theoryView) theoryView.style.display = 'none';
      if (mcqView) mcqView.style.display = 'block';
      if (theoryNav) theoryNav.style.display = 'none';
      if (mcqNav) mcqNav.style.display = 'block';

      this.renderMCQSidebar();
      this.renderMCQQuestion();
    }
  },

  updateModeSwitcher() {
    const btnTheory = document.getElementById('btn-mode-theory');
    const btnMcq = document.getElementById('btn-mode-mcq');
    const mobileBadge = document.getElementById('mobile-mode-badge');

    if (btnTheory && btnMcq) {
      if (Store.mode === 'theory') {
        btnTheory.classList.add('active');
        btnMcq.classList.remove('active');
        if (mobileBadge) mobileBadge.textContent = 'Theory';
      } else {
        btnTheory.classList.remove('active');
        btnMcq.classList.add('active');
        if (mobileBadge) mobileBadge.textContent = 'MCQ Arena';
      }
    }
  },

  updateThemeButton() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeBtn = document.getElementById('mobile-theme-btn');

    const sunSvg = `
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;

    const moonSvg = `
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;

    if (themeBtn) {
      if (Store.theme === 'dark') {
        themeBtn.innerHTML = `${sunSvg}<span>Light Mode</span>`;
      } else {
        themeBtn.innerHTML = `${moonSvg}<span>Dark Mode</span>`;
      }
    }

    if (mobileThemeBtn) {
      mobileThemeBtn.innerHTML = Store.theme === 'dark' ? sunSvg : moonSvg;
    }
  },

  // THEORY PORTAL RENDERERS
  renderTheorySidebar() {
    const listContainer = document.getElementById('theory-weeks-list');
    const progressBar = document.getElementById('theory-progress-bar');
    const progressText = document.getElementById('theory-progress-text');

    const totalWeeks = THEORY_DATA.length;
    const completedCount = Store.completedWeeks.length;
    const percentage = Math.round((completedCount / totalWeeks) * 100);

    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${completedCount} of ${totalWeeks} Completed (${percentage}%)`;

    if (!listContainer) return;
    listContainer.innerHTML = THEORY_DATA.map(item => {
      const isActive = item.weekId === Store.activeWeek;
      const isCompleted = Store.completedWeeks.includes(item.weekId);
      const padW = item.weekId < 10 ? `0${item.weekId}` : `${item.weekId}`;
      const weekLabel = `Week-${padW}`;

      return `
        <button class="sidebar-week-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-week="${item.weekId}" type="button">
          <span class="week-btn-label">${weekLabel}</span>
          ${isCompleted ? '<span class="week-done-check" title="Completed">✓</span>' : ''}
        </button>
      `;
    }).join('');

    // Click handler for week items
    listContainer.querySelectorAll('.sidebar-week-btn').forEach(el => {
      el.addEventListener('click', () => {
        Store.activeWeek = parseInt(el.dataset.week);
        Store.saveState();
        this.renderTheorySidebar();
        this.renderTheoryContent();
        this.closeMobileSidebar();
      });
    });
  },

  renderTheoryContent() {
    const weekData = THEORY_DATA.find(w => w.weekId === Store.activeWeek) || THEORY_DATA[0];
    const isCompleted = Store.completedWeeks.includes(weekData.weekId);

    // Breadcrumbs
    const breadcrumbEl = document.getElementById('theory-breadcrumb');
    if (breadcrumbEl) {
      breadcrumbEl.innerHTML = `
        <span class="crumb">Home</span>
        <span class="sep">/</span>
        <span class="crumb">Theory</span>
        <span class="sep">/</span>
        <span class="crumb-current">Week ${weekData.weekId}: ${this.escape(weekData.title)}</span>
      `;
    }

    // Title and Duration
    const titleEl = document.getElementById('theory-content-title');
    const timeEl = document.getElementById('theory-read-time');
    const completeBtn = document.getElementById('btn-mark-complete');

    if (titleEl) titleEl.textContent = weekData.title;
    if (timeEl) timeEl.textContent = `Estimated Reading: ${weekData.estimatedTime}`;

    if (completeBtn) {
      completeBtn.innerHTML = isCompleted ? `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Completed</span>
      ` : `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>
        <span>Mark as Complete</span>
      `;
      completeBtn.className = isCompleted ? 'btn-complete active' : 'btn-complete';

      completeBtn.onclick = () => {
        if (Store.completedWeeks.includes(weekData.weekId)) {
          Store.completedWeeks = Store.completedWeeks.filter(id => id !== weekData.weekId);
        } else {
          Store.completedWeeks.push(weekData.weekId);
        }
        Store.saveState();
        this.renderTheorySidebar();
        this.renderTheoryContent();
      };
    }

    // Body Content (Rendered Markdown)
    const bodyEl = document.getElementById('theory-body-content');
    if (bodyEl) {
      bodyEl.innerHTML = this.formatMarkdown(weekData.content);
    }

    // Prev / Next Navigation Buttons
    const prevBtn = document.getElementById('theory-prev-week-btn');
    const nextBtn = document.getElementById('theory-next-week-btn');

    if (prevBtn) {
      prevBtn.disabled = weekData.weekId <= 1;
      prevBtn.onclick = () => {
        if (Store.activeWeek > 1) {
          Store.activeWeek--;
          Store.saveState();
          this.renderTheorySidebar();
          this.renderTheoryContent();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }

    if (nextBtn) {
      nextBtn.disabled = weekData.weekId >= THEORY_DATA.length;
      nextBtn.onclick = () => {
        if (Store.activeWeek < THEORY_DATA.length) {
          Store.activeWeek++;
          Store.saveState();
          this.renderTheorySidebar();
          this.renderTheoryContent();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }
  },

  // MCQ PRACTICE ARENA RENDERERS
  renderMCQSidebar() {
    const filterSelect = document.getElementById('mcq-filter-select');
    if (filterSelect) {
      filterSelect.value = Store.mcqFilter;
      filterSelect.onchange = (e) => {
        Store.mcqFilter = e.target.value;
        // set current question to first matching question
        const filtered = this.getFilteredQuestions();
        if (filtered.length > 0) {
          Store.currentQuestionId = filtered[0].id;
        }
        Store.saveState();
        this.renderMCQSidebar();
        this.renderMCQQuestion();
      };
    }

    // Palette Stats
    const filteredQuestions = this.getFilteredQuestions();
    const answeredCount = Object.keys(Store.userAnswers).length;
    const flaggedCount = Store.flaggedQuestions.length;

    const statsEl = document.getElementById('mcq-palette-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <span class="stat-tag green">● Answered: ${answeredCount}</span>
        <span class="stat-tag yellow">● Flagged: ${flaggedCount}</span>
        <span class="stat-tag blue">● Filtered: ${filteredQuestions.length}</span>
      `;
    }

    // Question Palette (1 to 120 Grid)
    const paletteGrid = document.getElementById('mcq-palette-grid');
    if (!paletteGrid) return;

    paletteGrid.innerHTML = QUESTIONS_DATA.map(q => {
      const isCurrent = q.id === Store.currentQuestionId;
      const isAnswered = Store.userAnswers[q.id] !== undefined;
      const isFlagged = Store.flaggedQuestions.includes(q.id);
      const isVisited = Store.visitedQuestions.includes(q.id);

      let statusClass = "gray"; // Unvisited
      if (isFlagged) {
        statusClass = "yellow"; // Flagged
      } else if (isAnswered) {
        statusClass = "green"; // Answered
      } else if (isVisited) {
        statusClass = "blue"; // Visited / Unanswered
      }

      if (isCurrent) statusClass += " current";

      return `<button class="palette-cell ${statusClass}" data-qid="${q.id}" title="Question ${q.id} (${q.topic})">${q.id}</button>`;
    }).join('');

    // Click handler for palette cells
    paletteGrid.querySelectorAll('.palette-cell').forEach(btn => {
      btn.addEventListener('click', () => {
        Store.currentQuestionId = parseInt(btn.dataset.qid);
        if (!Store.visitedQuestions.includes(Store.currentQuestionId)) {
          Store.visitedQuestions.push(Store.currentQuestionId);
        }
        Store.saveState();
        this.renderMCQSidebar();
        this.renderMCQQuestion();
        this.closeMobileSidebar();
      });
    });
  },

  getFilteredQuestions() {
    let list = [...QUESTIONS_DATA];
    if (Store.mcqFilter === 'flagged') {
      list = list.filter(q => Store.flaggedQuestions.includes(q.id));
    } else if (Store.mcqFilter.startsWith('week_')) {
      const wId = parseInt(Store.mcqFilter.replace('week_', ''));
      list = list.filter(q => q.weekId === wId);
    } else if (Store.mcqFilter.startsWith('batch_')) {
      const parts = Store.mcqFilter.split('_');
      const start = parseInt(parts[1]);
      const end = parseInt(parts[2]);
      list = list.filter(q => q.id >= start && q.id <= end);
    }
    return list;
  },

  renderMCQQuestion() {
    const cardContainer = document.getElementById('mcq-question-card-container');
    if (!cardContainer) return;
    cardContainer.style.display = 'block';

    const q = QUESTIONS_DATA.find(item => item.id === Store.currentQuestionId) || QUESTIONS_DATA[0];
    const isFlagged = Store.flaggedQuestions.includes(q.id);
    const selectedOption = Store.userAnswers[q.id];
    const hasAnswered = selectedOption !== undefined;

    // Difficulty color
    const diffBadgeClass = q.difficulty === 'Easy' ? 'badge-easy' : (q.difficulty === 'Medium' ? 'badge-med' : 'badge-hard');

    cardContainer.innerHTML = `
      <div class="mcq-card">
        <div class="mcq-card-header">
          <div class="q-number-wrap">
            <span class="q-number-label">Question ${q.id} of 120</span>
            <span class="badge-topic">Week ${q.weekId}: ${this.escape(q.topic)}</span>
            <span class="badge-difficulty ${diffBadgeClass}">${q.difficulty}</span>
          </div>
          <button class="flag-action-btn ${isFlagged ? 'active' : ''}" id="btn-toggle-flag" title="Flag for Review">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFlagged ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
              <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
            <span>${isFlagged ? 'Flagged' : 'Flag for Review'}</span>
          </button>
        </div>

        <h3 class="mcq-question-text">${this.escape(q.question)}</h3>

        <div class="mcq-options-group">
          ${q.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOption === idx;
            const isCorrect = q.correctIndex === idx;

            let cardStateClass = "";
            let statusIcon = "";
            if (hasAnswered) {
              if (isCorrect) {
                cardStateClass = "option-correct";
                statusIcon = `<span class="option-check-icon" aria-label="Correct Answer">✓</span>`;
              } else if (isSelected) {
                cardStateClass = "option-wrong";
                statusIcon = `<span class="option-cross-icon" aria-label="Wrong Answer">✕</span>`;
              }
            }

            return `
              <div class="option-card ${cardStateClass}" data-optindex="${idx}">
                <div class="option-indicator">${letter}</div>
                <div class="option-label-text">${this.escape(opt)}</div>
                ${statusIcon}
              </div>
            `;
          }).join('')}
        </div>

        <!-- Bottom Action Bar -->
        <div class="mcq-bottom-action-bar">
          <div class="action-left-group">
            <button class="btn-action-nav" id="btn-mcq-prev" ${q.id <= 1 ? 'disabled' : ''}>
              ← Previous
            </button>
            <button class="btn-action-nav" id="btn-mcq-clear">
              Clear Choice
            </button>
          </div>
          <div class="action-right-group">
            <button class="btn-action-nav primary" id="btn-mcq-next" ${q.id >= 120 ? 'disabled' : ''}>
              Next Question →
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach Option Click Handler
    cardContainer.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        const optIdx = parseInt(card.dataset.optindex);
        Store.userAnswers[q.id] = optIdx;
        Store.saveState();
        this.renderMCQSidebar();
        this.renderMCQQuestion();
      });
    });

    // Toggle Flag Handler
    const flagBtn = document.getElementById('btn-toggle-flag');
    if (flagBtn) {
      flagBtn.addEventListener('click', () => {
        if (Store.flaggedQuestions.includes(q.id)) {
          Store.flaggedQuestions = Store.flaggedQuestions.filter(id => id !== q.id);
        } else {
          Store.flaggedQuestions.push(q.id);
        }
        Store.saveState();
        this.renderMCQSidebar();
        this.renderMCQQuestion();
      });
    }

    // Previous Button
    const prevBtn = document.getElementById('btn-mcq-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (Store.currentQuestionId > 1) {
          Store.currentQuestionId--;
          if (!Store.visitedQuestions.includes(Store.currentQuestionId)) {
            Store.visitedQuestions.push(Store.currentQuestionId);
          }
          Store.saveState();
          this.renderMCQSidebar();
          this.renderMCQQuestion();
        }
      });
    }

    // Next Button
    const nextBtn = document.getElementById('btn-mcq-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (Store.currentQuestionId < 120) {
          Store.currentQuestionId++;
          if (!Store.visitedQuestions.includes(Store.currentQuestionId)) {
            Store.visitedQuestions.push(Store.currentQuestionId);
          }
          Store.saveState();
          this.renderMCQSidebar();
          this.renderMCQQuestion();
        }
      });
    }

    // Clear Choice Button
    const clearBtn = document.getElementById('btn-mcq-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        delete Store.userAnswers[q.id];
        Store.saveState();
        this.renderMCQSidebar();
        this.renderMCQQuestion();
      });
    }
  },

  closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  },

  // Enhanced Markdown Formatter
  formatMarkdown(md) {
    if (!md) return '';

    // Helper for inline styles
    const formatInline = (text) => {
      if (!text) return '';
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
        .replace(/\$([^$\n]+)\$/g, '<span class="prose-math">$1</span>')
        .replace(/`([^`]+)`/g, '<code class="prose-code">$1</code>');
    };

    // 1. Extract and protect code blocks
    const codeBlocks = [];
    md = md.replace(/```([\s\S]*?)```/g, (match, code) => {
      const placeholder = `___CODE_BLOCK_${codeBlocks.length}___`;
      codeBlocks.push(`<pre class="prose-pre"><code>${this.escape(code.trim())}</code></pre>`);
      return placeholder;
    });

    // 2. Extract and format math display blocks ($$...$$)
    const mathBlocks = [];
    md = md.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
      const placeholder = `___MATH_BLOCK_${mathBlocks.length}___`;
      mathBlocks.push(`<div class="prose-formula">${formula.trim()}</div>`);
      return placeholder;
    });

    // 3. Extract and parse markdown tables
    const tableBlocks = [];
    const tableRegex = /((?:\|[^\n]+\|\r?\n?)+)/g;
    md = md.replace(tableRegex, (match) => {
      const lines = match.trim().split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) return match;

      let html = '<div class="table-responsive"><table class="prose-table">';
      let headerParsed = false;

      lines.forEach((line) => {
        if (/^\|[\s\-:]+(\|[\s\-:]+)+\|?$/.test(line)) {
          return;
        }
        const cells = line.split('|').slice(1, -1).map(c => c.trim());
        if (!headerParsed) {
          html += '<thead><tr>';
          cells.forEach(c => html += `<th>${formatInline(c)}</th>`);
          html += '</tr></thead><tbody>';
          headerParsed = true;
        } else {
          html += '<tr>';
          cells.forEach(c => html += `<td>${formatInline(c)}</td>`);
          html += '</tr>';
        }
      });

      html += '</tbody></table></div>';
      const placeholder = `___TABLE_BLOCK_${tableBlocks.length}___`;
      tableBlocks.push(html);
      return '\n\n' + placeholder + '\n\n';
    });

    // 4. Headers
    md = md
      .replace(/^# (.*$)/gim, '<h1 class="prose-h1">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="prose-h2">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="prose-h3">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 class="prose-h4">$1</h4>');

    // 5. Callouts & Blockquotes
    md = md.replace(/^>\s*\*\*Case Study:\s*(.*?)\*\*\s*\n>\s*(.*$)/gim, (m, title, desc) => {
      return `<div class="prose-callout"><div class="callout-title">Case Study: ${formatInline(title)}</div><p>${formatInline(desc)}</p></div>`;
    });
    md = md.replace(/^>\s*(.*$)/gim, (m, quote) => {
      return `<blockquote class="prose-blockquote">${formatInline(quote)}</blockquote>`;
    });

    // 6. Inline styles
    md = formatInline(md);
    md = md.replace(/^---$/gim, '<hr class="prose-hr">');

    // 7. Bullet lists and numbered lists
    const lines = md.split('\n');
    let inUl = false;
    let inOl = false;
    const processed = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const bulletMatch = line.match(/^(\s*)[*•-]\s+(.*)$/);
      const numMatch = line.match(/^(\s*)\d+\.\s+(.*)$/);

      if (bulletMatch) {
        if (inOl) { processed.push('</ol>'); inOl = false; }
        if (!inUl) { processed.push('<ul class="prose-ul">'); inUl = true; }
        processed.push(`  <li class="prose-li">${bulletMatch[2]}</li>`);
      } else if (numMatch) {
        if (inUl) { processed.push('</ul>'); inUl = false; }
        if (!inOl) { processed.push('<ol class="prose-ol">'); inOl = true; }
        processed.push(`  <li class="prose-li">${numMatch[2]}</li>`);
      } else {
        if (inUl) { processed.push('</ul>'); inUl = false; }
        if (inOl) { processed.push('</ol>'); inOl = false; }
        processed.push(line);
      }
    }
    if (inUl) processed.push('</ul>');
    if (inOl) processed.push('</ol>');

    md = processed.join('\n');

    // 8. Restore protected blocks
    tableBlocks.forEach((tbl, i) => {
      md = md.replace(`___TABLE_BLOCK_${i}___`, tbl);
    });
    mathBlocks.forEach((m, i) => {
      md = md.replace(`___MATH_BLOCK_${i}___`, m);
    });
    codeBlocks.forEach((c, i) => {
      md = md.replace(`___CODE_BLOCK_${i}___`, c);
    });

    return md;
  },

  escape(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  Store.init();
  UI.init();
});
