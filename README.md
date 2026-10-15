# HCI & Software Engineering Study Portal

A modern, responsive, anti-slop interactive study portal and practice platform for **Human-Computer Interaction (HCI) and Software Engineering** (aligned with NPTEL 12-week curriculum).

## Features

- **12-Week Theory Course Viewer:**
  - Comprehensive, verified curriculum notes covering Foundations of Interactive Systems, Usability, Life Cycles (Waterfall & Spiral), Contextual Inquiry, Interface vs. Code Design, Norman's 7 Stages of Action, Prototyping (Fidelity & Wizard of Oz), Inspection & SUS Evaluation, DFD/ERD, OOD & UML, Coding Guidelines, Black-box & White-box Testing (CFG & McCabe Cyclomatic Complexity), Empirical Research, and COCOMO / Agile project management.
  - Interactive Reading Progress tracker with completion marks.
  - Markdown-rendered tables, code blocks, math formulas, and block diagrams.
  - Collapsible minimalist sidebar navigation (`Week-01` to `Week-12`).

- **120-Question MCQ Practice Arena:**
  - 120 verified multiple-choice questions with verified rationales and explanations.
  - **Study Mode:** Instant visual feedback (green/red indicators) and in-depth rationales upon selecting an option.
  - **Exam Simulation Mode:** Live timer, distraction-free option selection, flag for review, and streamlined final score dashboard (`Correct / Total`, percentage, and instant `Restart Test` button).
  - Question Palette (1 to 120) with 4-state visual indicators (Unvisited, Visited, Answered, Flagged).
  - Filtering by Topic/Week, Flagged questions, or custom 20-question batches.

- **Mobile First & Ergonomic:**
  - Fluid responsive layouts engineered down to 320px–375px mobile viewports (iPhone SE, Android).
  - 2×2 mobile thumb action toolbar.
  - Top-aligned option cards with text overflow protection (`min-width: 0`, `overflow-wrap: anywhere`).
  - Sticky mobile navigation bar with one-tap dark/light mode toggle.

- **Design Philosophy:**
  - Designed according to anti-slop principles: warm obsidian and stone tones, high-contrast typography, zero generic AI clichés, and fluid spring animations.
  - Light and Dark theme support with instant persistence via `localStorage`.

## Getting Started

Because the application is built with standard Vanilla HTML, CSS, and JavaScript, no build step or package installation is required:

### Option 1: Direct File Open
Double click `index.html` in your browser.

### Option 2: Local HTTP Server
Run any local static server:
```bash
# Python 3
python -m http.server 5173

# Node.js
npx serve .
```
Then visit `http://localhost:5173/` in your browser.

## Project Structure

```text
├── index.html          # Main application markup & view shell
├── css/
│   └── styles.css      # Core anti-slop design system & responsive styling
├── js/
│   ├── app.js          # Reactive controller, state management, UI events
│   ├── theoryData.js   # Complete 12-week course theory & formulas
│   └── questionsData.js# 120 verified MCQs with answers & explanations
├── GEMINI.md           # Workspace design system guidelines
└── README.md           # Project documentation
```
