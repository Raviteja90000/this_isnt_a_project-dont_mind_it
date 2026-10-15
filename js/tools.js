// HCI Engineering Tooling & Calculators

// 1. McCabe Cyclomatic Complexity Calculator
const McCabeTool = {
  calculate(edges, nodes, decisions, conditions = 1) {
    const e = parseInt(edges) || 0;
    const n = parseInt(nodes) || 0;
    const d = parseInt(decisions) || 0;
    const c = parseInt(conditions) || 1;

    const vgEdgesNodes = Math.max(0, e - n + 2);
    const vgDecisions = Math.max(0, d + 1);
    const conditionCases = Math.pow(2, c);

    return {
      vgEdgesNodes,
      vgDecisions,
      conditionCases,
      isConsistent: (e > 0 && n > 0 && d > 0) ? (vgEdgesNodes === vgDecisions) : true
    };
  },

  renderPreset(preset) {
    const presets = {
      gcd: { e: 7, n: 6, d: 2, c: 1, label: "GCD / Euclid Subtraction Code (Worked Slide Example)" },
      linear: { e: 5, n: 6, d: 0, c: 1, label: "Linear Sequential Sequence (No branches)" },
      two_if: { e: 8, n: 6, d: 2, c: 2, label: "Two Independent if-else Conditions" },
      loop_branch: { e: 10, n: 7, d: 3, c: 3, label: "While Loop with Nested if-else" }
    };
    return presets[preset] || presets.gcd;
  }
};

// 2. COCOMO Software Cost Estimation Calculator
const COCOMOTool = {
  modes: {
    organic: {
      name: "Organic",
      profile: "Small teams, routine problem domain, highly experienced staff",
      a: 2.4,
      a1: 1.05,
      b: 2.5,
      b1: 0.38
    },
    semidetached: {
      name: "Semidetached",
      profile: "Medium-sized team, mixed experience levels, medium constraints",
      a: 3.0,
      a1: 1.12,
      b: 2.5,
      b1: 0.35
    },
    embedded: {
      name: "Embedded",
      profile: "Stringent operational regulations, complex hardware coupling",
      a: 3.6,
      a1: 1.20,
      b: 2.5,
      b1: 0.32
    }
  },

  calculate(kloc, modeKey = 'organic') {
    const k = Math.max(0.1, parseFloat(kloc) || 10);
    const mode = this.modes[modeKey] || this.modes.organic;

    // Effort = a * (KLoC)^a1 [Person-Months]
    const effort = mode.a * Math.pow(k, mode.a1);

    // Tdev = b * (Effort)^b1 [Months]
    const tdev = mode.b * Math.pow(effort, mode.b1);

    // Average staff needed
    const staff = effort / tdev;

    // Productivity: LoC per Person-Month
    const productivity = (k * 1000) / effort;

    return {
      kloc: k,
      mode: mode.name,
      profile: mode.profile,
      effort: effort.toFixed(2),
      tdev: tdev.toFixed(2),
      staff: staff.toFixed(1),
      productivity: Math.round(productivity)
    };
  }
};

// 3. System Usability Scale (SUS) Calculator
const SUSTool = {
  questions: [
    { id: 1, text: "I think that I would like to use this system frequently.", isPositive: true },
    { id: 2, text: "I found the system unnecessarily complex.", isPositive: false },
    { id: 3, text: "I thought the system was easy to use.", isPositive: true },
    { id: 4, text: "I think that I would need the support of a technical person to be able to use this system.", isPositive: false },
    { id: 5, text: "I found the various functions in this system were well integrated.", isPositive: true },
    { id: 6, text: "I thought there was too much inconsistency in this system.", isPositive: false },
    { id: 7, text: "I would imagine that most people would learn to use this system very quickly.", isPositive: true },
    { id: 8, text: "I found the system very cumbersome to use.", isPositive: false },
    { id: 9, text: "I felt very confident using the system.", isPositive: true },
    { id: 10, text: "I needed to learn a lot of things before I could get going with this system.", isPositive: false }
  ],

  calculate(responses) {
    // responses: array of numbers 1..5 for questions 1..10
    let totalContributedScore = 0;
    const itemScores = [];

    for (let i = 0; i < 10; i++) {
      const r = responses[i] || 3;
      let c = 0;
      if (this.questions[i].isPositive) {
        c = r - 1;
      } else {
        c = 5 - r;
      }
      itemScores.push(c);
      totalContributedScore += c;
    }

    const susScore = totalContributedScore * 2.5;

    let grade = "F";
    let adjective = "Unacceptable";
    let passesBenchmark = susScore >= 70;

    if (susScore >= 85) {
      grade = "A+";
      adjective = "Exceptional / Best Imaginable";
    } else if (susScore >= 80) {
      grade = "A";
      adjective = "Excellent";
    } else if (susScore >= 70) {
      grade = "B/C";
      adjective = "Acceptable (Above 70% threshold)";
    } else if (susScore >= 50) {
      grade = "D";
      adjective = "Marginal / Below Benchmark";
    } else {
      grade = "F";
      adjective = "Critical Usability Barriers";
    }

    return {
      score: susScore.toFixed(1),
      sumCi: totalContributedScore,
      itemScores,
      grade,
      adjective,
      passesBenchmark
    };
  }
};
