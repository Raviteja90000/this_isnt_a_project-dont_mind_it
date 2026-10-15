// Practice, Mock Exam, and Flashcard Engine

const ExamEngine = {
  activeWeek: 'all',
  searchQuery: '',
  bookmarkedOnly: false,
  userAnswers: {}, // questionId -> selectedIndices array
  bookmarks: new Set(JSON.parse(localStorage.getItem('nptel_bookmarks') || '[]')),
  scoreHistory: JSON.parse(localStorage.getItem('nptel_scores') || '[]'),

  // Mock Exam State
  mockState: {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},
    markedReview: new Set(),
    timerInterval: null,
    timeRemaining: 1200, // 20 minutes
    completed: false,
    score: null
  },

  // Flashcards State
  flashcards: {
    cards: [],
    currentIndex: 0,
    flipped: false
  },

  init() {
    this.prepareFlashcards();
  },

  toggleBookmark(questionId) {
    if (this.bookmarks.has(questionId)) {
      this.bookmarks.delete(questionId);
    } else {
      this.bookmarks.add(questionId);
    }
    localStorage.setItem('nptel_bookmarks', JSON.stringify([...this.bookmarks]));
    return this.bookmarks.has(questionId);
  },

  isBookmarked(questionId) {
    return this.bookmarks.has(questionId);
  },

  getFilteredQuestions() {
    return NPTEL_QUESTIONS.filter(q => {
      // Week filter
      if (this.activeWeek !== 'all' && q.week !== parseInt(this.activeWeek)) {
        return false;
      }
      // Bookmark filter
      if (this.bookmarkedOnly && !this.bookmarks.has(q.id)) {
        return false;
      }
      // Search query
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(query);
        const matchesOpts = q.options.some(opt => opt.toLowerCase().includes(query));
        const matchesExp = q.explanation.toLowerCase().includes(query);
        const matchesAns = q.answerText.toLowerCase().includes(query);
        if (!matchesQ && !matchesOpts && !matchesExp && !matchesAns) {
          return false;
        }
      }
      return true;
    });
  },

  selectPracticeOption(questionId, optionIndex) {
    const q = NPTEL_QUESTIONS.find(item => item.id === questionId);
    if (!q) return;

    if (!this.userAnswers[questionId]) {
      this.userAnswers[questionId] = [];
    }

    if (q.isMulti) {
      // Multi-select toggle
      const idx = this.userAnswers[questionId].indexOf(optionIndex);
      if (idx > -1) {
        this.userAnswers[questionId].splice(idx, 1);
      } else {
        this.userAnswers[questionId].push(optionIndex);
      }
    } else {
      // Single select
      this.userAnswers[questionId] = [optionIndex];
    }
  },

  getUserAnswer(questionId) {
    return this.userAnswers[questionId] || [];
  },

  isAnswerCorrect(questionId) {
    const q = NPTEL_QUESTIONS.find(item => item.id === questionId);
    if (!q) return false;
    const userSelected = this.userAnswers[questionId] || [];
    if (userSelected.length === 0) return false;

    if (userSelected.length !== q.correct.length) return false;
    return q.correct.every(idx => userSelected.includes(idx));
  },

  // Mock Exam Methods
  startMockExam(count = 20) {
    // Pick count random questions
    const shuffled = [...NPTEL_QUESTIONS].sort(() => 0.5 - Math.random());
    this.mockState.questions = shuffled.slice(0, count);
    this.mockState.currentIndex = 0;
    this.mockState.answers = {};
    this.mockState.markedReview = new Set();
    this.mockState.timeRemaining = count * 60; // 1 min per question
    this.mockState.active = true;
    this.mockState.completed = false;
    this.mockState.score = null;

    if (this.mockState.timerInterval) {
      clearInterval(this.mockState.timerInterval);
    }
  },

  recordMockAnswer(questionId, optionIndex, isMulti = false) {
    if (!this.mockState.answers[questionId]) {
      this.mockState.answers[questionId] = [];
    }
    if (isMulti) {
      const idx = this.mockState.answers[questionId].indexOf(optionIndex);
      if (idx > -1) {
        this.mockState.answers[questionId].splice(idx, 1);
      } else {
        this.mockState.answers[questionId].push(optionIndex);
      }
    } else {
      this.mockState.answers[questionId] = [optionIndex];
    }
  },

  toggleMockReview(questionId) {
    if (this.mockState.markedReview.has(questionId)) {
      this.mockState.markedReview.delete(questionId);
    } else {
      this.mockState.markedReview.add(questionId);
    }
  },

  finishMockExam() {
    if (this.mockState.timerInterval) {
      clearInterval(this.mockState.timerInterval);
    }
    this.mockState.completed = true;
    this.mockState.active = false;

    let correctCount = 0;
    const reviewDetails = [];

    this.mockState.questions.forEach(q => {
      const userSelected = this.mockState.answers[q.id] || [];
      const isCorrect = userSelected.length === q.correct.length &&
        q.correct.every(idx => userSelected.includes(idx));

      if (isCorrect) correctCount++;

      reviewDetails.push({
        question: q,
        userSelected,
        isCorrect
      });
    });

    const percentage = Math.round((correctCount / this.mockState.questions.length) * 100);
    this.mockState.score = {
      correct: correctCount,
      total: this.mockState.questions.length,
      percentage,
      passed: percentage >= 70,
      reviewDetails
    };

    // Save to history
    this.scoreHistory.unshift({
      date: new Date().toLocaleDateString(),
      score: percentage,
      correct: correctCount,
      total: this.mockState.questions.length
    });
    if (this.scoreHistory.length > 10) this.scoreHistory.pop();
    localStorage.setItem('nptel_scores', JSON.stringify(this.scoreHistory));

    return this.mockState.score;
  },

  // Flashcards Setup
  prepareFlashcards() {
    const cards = [];
    // From high-yield tables
    HIGH_YIELD_TABLES[0].rows.forEach(row => {
      cards.push({
        term: row.metric,
        front: row.metric,
        back: row.formula,
        context: row.significance,
        category: "High-Yield Formula"
      });
    });

    // Add key conceptual questions
    NPTEL_QUESTIONS.forEach(q => {
      cards.push({
        term: `Week ${q.week} Concept`,
        front: q.question,
        back: q.answerText,
        context: q.explanation,
        category: `Week 0${q.week}`.slice(-7)
      });
    });

    this.flashcards.cards = cards;
    this.flashcards.currentIndex = 0;
    this.flashcards.flipped = false;
  },

  shuffleFlashcards() {
    this.flashcards.cards.sort(() => 0.5 - Math.random());
    this.flashcards.currentIndex = 0;
    this.flashcards.flipped = false;
  }
};

ExamEngine.init();
