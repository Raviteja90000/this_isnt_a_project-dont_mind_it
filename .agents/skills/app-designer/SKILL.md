---
name: app-designer
description: Concept-driven application and interface design skill inspired by Tobia Donadon's App Designer. Designs web applications, dashboards, and mobile interfaces that do not look like AI made them by using real-world physical metaphors, multi-directional concept exploration, and anti-slop self-critique.
---

# App Designer: Concept-Driven Interface & Application Design

Most AI-generated apps and dashboards look interchangeable: generic dark mode cards with neon green/lime accents, repetitive metric tiles, standard greetings ("Welcome back, Alex!"), and cookie-cutter tables.

This skill equips the agent with a real product designer's discipline:
1. **A concept, not a theme:** Rooting the interface in a concrete, physical-world metaphor.
2. **Three directions, then one:** Generating three distinct visual directions before writing code.
3. **Automated self-critique:** Scanning every screen for telltale AI flaws before delivering the design.

---

## 1. Core Rule: A Concept, Not a Theme

A theme is superficial (colors and rounded corners). A **concept** is an organizing metaphor taken from reality:
- *Running tracker:* Modeled on an Olympic red athletics track with lane markers and tactile chalk lines.
- *Sleep monitor:* Modeled on a dark hillside village falling asleep, where lit windows represent remaining waking hours.
- *Plant care app:* Modeled on a Henri Matisse paper cut-out, using organic botanical silhouettes and textured paper grounds.
- *Language tutor:* Modeled on a deck of physical Neapolitan playing cards with tactile flipping physics.
- *Financial tracker:* Modeled on clear glass penny jars or an embossed ledger with genuine paper grain.

The metaphor directly dictates:
- **Typography:** Architectural, editorial, industrial, or literary.
- **Color System:** Natural pigments, track clay, archival inks, or parchment.
- **Physical Affordances:** Sliders that feel like physical sliders, dials that mimic weighted metal, buttons with tangible depression.

---

## 2. The 3-Direction Exploration Protocol

Before locking into an interface layout, formulate three distinct directions and select the strongest:

* **Direction A (Tactile / Analog):** Warm textures, physical paper or canvas backgrounds, humanist typography, subtle embossed borders, and analog mechanical toggles.
* **Direction B (Editorial / Precision):** Crisp monochromatic foundation, high-contrast typography, strict grid alignment, fine hairline dividers, and minimal ornamentation.
* **Direction C (Atmospheric / Immersive):** Deep ambient background hues, soft directional illumination, focused interactive elements, and fluid spring micro-animations.

**Selection Criteria:** Which direction gives this specific product its own unmistakable world? Choose that one and declare the rationale in one clear sentence.

---

## 3. Screen Architecture & Layout Rules

1. **Anti-Dashboard Slop:**
   - Ban generic 4-card metric rows with generic sparkline charts.
   - Use meaningful visual groupings: asymmetric layouts, large dominant summary figures, visual meters, and contextual lists.
2. **Authentic System Typography:**
   - Web & Mobile: SF Pro, SF Compact, New York (Serif), Geist, Outfit, or Satoshi.
   - Pair a confident primary display face with a clean monospace face for numbers and timestamps to ensure tabular alignment (`font-mono tabular-nums`).
3. **Tactile Feedback:**
   - Buttons must provide tactile depression on press (`active:scale-[0.97]` or `active:translate-y-0.5`).
   - Toggles and switches should feature subtle spring resistance rather than linear sliding.
4. **Natural Light & Elevation:**
   - Avoid aggressive dark drop shadows.
   - Use layered border illumination: `border-black/5` in light mode or `border-white/10` in dark mode, paired with diffuse ambient shadows.

---

## 4. The Anti-Slop Critic & Scoring Rubric

Before presenting code, run the interface through this 5-point critic evaluation:

| Metric | Criterion | Target Score |
| :--- | :--- | :--- |
| **Concept Fidelity** | Does the interface embody a distinct physical metaphor, or is it a generic dashboard? | ≥ 9 / 10 |
| **Typography Craft** | Are fonts deliberately paired, proportionally sized, and tabuled for figures? | ≥ 9 / 10 |
| **Cliché Immunity** | Are neon purple glows, generic AI greeting cards, and emoji bullet points eliminated? | 10 / 10 |
| **Hierarchy & Breathing Room** | Can the eye immediately recognize the primary action and key data without distraction? | ≥ 9 / 10 |
| **Mobile & Touch Ergonomics** | Are touch targets ≥ 44px with comfortable thumb reach and zero horizontal overflow? | 10 / 10 |

If any criterion scores below 9, refine the layout and styling before outputting the final code.
