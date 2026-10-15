---
name: design-taste-frontend
description: Anti-slop frontend art direction and design system skill for landing pages, marketing websites, portfolios, and product showcases. Use whenever creating, styling, redesigning, or polishing public-facing web pages, or whenever the user asks for modern, award-winning, high-taste, or non-generic website design.
---

# Taste Skill: High-Agency Anti-Slop Frontend System

A page built by an AI model usually looks like the statistical average of every template online: a centered headline over three lines, a small pill badge above it, a 3-column row of icon cards, a floating purple/blue gradient blob, and a monospace caption. Nothing is broken, but nothing was decided.

This skill replaces those generic defaults with intentional design decisions, rigorous art direction, and structured creative agency.

---

## 1. Active Baseline Dials

Configure these parameters at the start of any generation, and adapt them dynamically based on user prompts:

* **`DESIGN_VARIANCE: 8`** (Scale 1–10)
  * *1–3:* Predictable 12-column symmetry, centered content.
  * *4–7:* Asymmetric offsets, overlapping sections, varied image aspect ratios (4:3 alongside 16:9).
  * *8–10:* High-agency layout asymmetry, fractional grid layouts (`grid-template-columns: 1.4fr 1fr`), bold white-space blocks. *Mobile fallback: collapse cleanly to single-column on viewports < 768px.*

* **`MOTION_INTENSITY: 6`** (Scale 1–10)
  * *1–3:* Static UI with standard `:hover` transitions.
  * *4–7:* Fluid cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), spring physics for buttons (`stiffness: 120, damping: 20`), staggered cascade entrances.
  * *8–10:* Cinematic interactive physics, gesture tracking, parallax cues.

* **`VISUAL_DENSITY: 4`** (Scale 1–10)
  * *1–3 (Art Gallery):* Expansive negative space, huge section rhythm, high luxury feel.
  * *4–7 (Editorial / Modern SaaS):* Balanced spacing, breathing room for copy and media.
  * *8–10 (Cockpit):* Data-dense, utility-driven, zero unnecessary card wrappers.

---

## 2. The 5-Step Execution Workflow

Follow this sequence systematically for any web design task:

### Step 1: Inventory the Subject (Not the Category)
Extract 8–12 tangible facts and artifacts that belong strictly to this specific product or client, and to no competitor:
- The exact origin, address, architecture, materials, numbers (seats, batch size, elevation, founding year).
- The physical artifacts of its world (tickets, stamps, menus, spec sheets, blueprints, receipts, dials).
- Its distinct rituals and schedule (kiln firing temperature, departure times, harvest seasons).

> **The Competitor Test:** Test every concept by imagining a direct competitor using it. If it still works for them, the idea is generic. Reject it.

### Step 2: Write the Argument (Claims & Proof)
Structure the page as a sequence of claims backed by proof before touching layout:
- Claim 1 (Hero): The fundamental value proposition or unique reality.
- Proof 1: Real metric, interactive tool, or tangible artifact.
- Claim 2: How it works / the core craft.
- Proof 2: Direct demonstration or visual breakdown.
- *Rule:* Delete any section that does not make a clear claim or provide real proof (no generic filler sections).

### Step 3: Choose the Visual Direction
Avoid the category default:
- **Editorial / Archival:** Warm paper background (`#faf8f4`), deep ink text (`#121316`), elegant serif or characterful grotesk headers (`Cabinet Grotesk`, `Newsreader`), fine hairlines (`border-black/10`).
- **High-Precision Minimalist:** Neutral stone or cool slate, crisp sans typography (`Geist`, `Satoshi`), geometric bento organization with subtle 1px inner highlights.
- **Atmospheric Dark:** Obsidian/deep coal base (`#0c0d10`), crisp contrasting typography, high-contrast monochrome with a singular high-voltage accent (acid green, electric cobalt, terracotta).

### Step 4: Find the Idea & Add "One Live Thing"
Formulate the core visual idea in one sentence:
> *"On this page, [something that belongs strictly to the subject] becomes [the primary interactive or visual device]."*

**The "One Live Thing" Rule:**
Every landing page must feature one real, engaging interactive element that visitors can touch or test:
- A live configurator, material switcher, dynamic calculator, interactive specimen, or interactive visual breakdown.
- *Requirements:* Operates smoothly with a thumb on mobile, works without breaking layout, and provides immediate tangible feedback.

### Step 5: Write the Words & Deliver Full Content
- **Headline Discipline:** Maximum 2 lines at any viewport width. Target ~32 characters or ≤ 6 words in bold display scale (`text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]`).
- **First Question Answered:** Answer what the thing is and why it matters in the very first viewport.
- **No Placeholder Content:** Always supply realistic, tailored copy—never write `lorem ipsum` or generic placeholder headings.

---

## 3. Strict Anti-Patterns & House Rules

1. **Anti-Emoji Policy:** Emojis in buttons, feature lists, or headers are strictly forbidden. Use Phosphor Icons, Radix Icons, or custom inline SVGs.
2. **The "Lila" Ban:** Strictly avoid purple/indigo neon glows, blurry background circles, and AI-typical card glows.
3. **Card Box-Wrapping Ban:** Do not wrap every data point into identical rectangular cards with heavy drop shadows. Use border dividers (`divide-y divide-black/10`), whitespace groupings, or asymmetric text columns.
4. **Viewport Stability:** Never use `h-screen` on hero sections; use `min-h-[100dvh]` to eliminate iOS Safari viewport jumps.
5. **Native CSS Grid:** Use CSS Grid (`grid grid-cols-1 md:grid-cols-12 gap-8`) with proportional spans instead of fragile flexbox percentage calculations.
6. **Inner Light & Glassmorphism:** If glass effects are required, pair `backdrop-blur` with a 1px border (`border-white/10`) and inset highlight (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`) for realistic tactile refraction.
