// questionsData.js - 120 Verified Questions with Answers & Explanations

const QUESTIONS_DATA = [
  // WEEK 1
  {
    id: 1,
    weekId: 1,
    topic: "Computing Eras & Usability",
    difficulty: "Medium",
    question: "While we talk about the evaluation phases of the computer, _____ is called the modern age of computers.",
    options: ["1985 onwards", "1998 onwards", "2007 onwards", "2011 onwards"],
    correctIndex: 3,
    explanation: "The evolution of computing is divided into Pre-History (1940s-1970s), Early Phase (1980s-early 2000s), Pre-Modern Phase (late 1990s-2010), and the Modern Phase (2011 onwards) characterized by ubiquitous computing, smartphones, IoT, and cyber-physical systems."
  },
  {
    id: 2,
    weekId: 1,
    topic: "User Categorization",
    difficulty: "Easy",
    question: "Which among the following is NOT a generic category of users in Human-Computer Interaction?",
    options: ["Novice", "Super knowledgeable", "Intermittent", "Expert"],
    correctIndex: 1,
    explanation: "Standard HCI literature categorizes users into three operational profiles: Novice (first-time, needs heavy guidance), Intermittent (uses system periodically, relies on recognition and consistent layout), and Expert (demands accelerators, keyboard hotkeys, and concise flows). 'Super knowledgeable' is not a standard category."
  },
  {
    id: 3,
    weekId: 1,
    topic: "Software Life Cycles",
    difficulty: "Medium",
    question: "In the Spiral Model, why is the second quadrant crucial for interactive software development?",
    options: [
      "It defines the UI layout and colors",
      "It finalizes the underlying database architecture",
      "It identifies and mitigates usability risks via prototyping",
      "It handles automated deployment and client delivery"
    ],
    correctIndex: 2,
    explanation: "Quadrant 2 of Boehm's Spiral Model is dedicated to Risk Analysis, Assessment, and Mitigation. In interactive software (HCI), usability uncertainties and user-interface risks are identified and mitigated in this quadrant by building early prototypes."
  },
  {
    id: 4,
    weekId: 1,
    topic: "Usability Attributes",
    difficulty: "Easy",
    question: "What does the term 'utility' refer to in the context of usability frameworks?",
    options: [
      "Speed of task completion by novice users",
      "Visual appeal and aesthetic elegance of the design",
      "Functional support for user needs to accomplish goals",
      "Frequency and reliability of software feature updates"
    ],
    correctIndex: 2,
    explanation: "According to Jacob Nielsen's Usability Framework (2012), a product must possess Utility (functional capacity to support user needs) and Usability (practical ease and pleasantness of use) to achieve overall usefulness."
  },
  {
    id: 5,
    weekId: 1,
    topic: "Computer Fundamentals",
    difficulty: "Easy",
    question: "Which one of the following is NOT a computer according to standard definitions?",
    options: ["Desktop PC", "Digital Pedometer", "Smartphone", "None of the above"],
    correctIndex: 3,
    explanation: "By the Oxford English Dictionary definition, all of these are computers. Even a digital pedometer receives motion data, executes procedural instructions with conversion formulas, and produces informational outputs (steps/distance)."
  },
  {
    id: 6,
    weekId: 1,
    topic: "HCI Engineering",
    difficulty: "Easy",
    question: "Interactive software development is ______ in nature.",
    options: ["sporadic", "iterative", "variable", "discrete"],
    correctIndex: 1,
    explanation: "Interactive systems development revolves around repeated Design-Prototype-Evaluate cycles until usability stabilization is achieved before transitioning to system code design."
  },
  {
    id: 7,
    weekId: 1,
    topic: "Nielsen Usability Framework",
    difficulty: "Medium",
    question: "Which of the following is NOT one of the five quality components of usability proposed by Jacob Nielsen?",
    options: ["Learnability", "Efficiency", "Satisfaction", "Memorization"],
    correctIndex: 3,
    explanation: "Jacob Nielsen's 5 Usability Quality Attributes are Learnability, Efficiency, Memorability (not 'Memorization'), Errors, and Satisfaction."
  },
  {
    id: 8,
    weekId: 1,
    topic: "Classical Life Cycles",
    difficulty: "Medium",
    question: "Which of the following is NOT a characteristic stage of the classical Waterfall model?",
    options: ["Feasibility study", "Learnability study", "System integration and testing", "Maintenance"],
    correctIndex: 1,
    explanation: "The classical Waterfall lifecycle includes Feasibility Study, Requirements Analysis, System Design, Coding/Unit Testing, Integration/System Testing, Deployment, and Maintenance. 'Learnability study' is an empirical HCI activity, not a Waterfall stage."
  },
  {
    id: 9,
    weekId: 1,
    topic: "Spiral Model",
    difficulty: "Hard",
    question: "'Identify objectives' and 'customer evaluation and planning' are located in which quadrants of the spiral model respectively?",
    options: ["First, Fourth", "Second, Third", "Third, Fourth", "Fourth, Second"],
    correctIndex: 0,
    explanation: "Boehm's Spiral Model quadrants: Q1 = Identify objectives and alternative constraints; Q2 = Risk analysis and prototyping; Q3 = Engineering/development; Q4 = Customer evaluation and planning for next cycle."
  },
  {
    id: 10,
    weekId: 1,
    topic: "Design Paradigms",
    difficulty: "Easy",
    question: "Which design approach focuses primarily on what a programmer finds interesting or convenient to build?",
    options: ["System-Centered Design", "User-Centered Design", "Utility-Based Design", "Participatory Design"],
    correctIndex: 0,
    explanation: "System-Centered Design (SCD) is driven by platform tools, ease of programming, and developer interest, whereas User-Centered Design (UCD) focuses on end-user capabilities, tasks, and cognitive needs."
  },

  // WEEK 2
  {
    id: 11,
    weekId: 2,
    topic: "Contextual Inquiry",
    difficulty: "Medium",
    question: "Contextual inquiry is methodologically classified as a __________.",
    options: ["Structured laboratory interview", "Passive video observation", "Semi-structured ethnographic interview", "Closed statistical survey"],
    correctIndex: 2,
    explanation: "Contextual Inquiry (CI) is a semi-structured ethnographic interview and observation technique conducted directly in the user's natural work environment."
  },
  {
    id: 12,
    weekId: 2,
    topic: "Requirements Specification",
    difficulty: "Medium",
    question: "In standard Software Requirements Specification (SRS), functions are NOT formally represented by:",
    options: ["Function Name", "Input specification", "Output specification", "Developer Motivation"],
    correctIndex: 3,
    explanation: "Standard SRS function specifications define Identifier (Rx), Function Name (verb-noun), Input, Output, and Description of behavior. Developer 'Motivation' is not part of functional requirement specification."
  },
  {
    id: 13,
    weekId: 2,
    topic: "Contextual Inquiry Modes",
    difficulty: "Easy",
    question: "Contextual inquiry can be performed in active mode and ________ mode.",
    options: ["passive", "semi-active", "neutral", "synchronous"],
    correctIndex: 0,
    explanation: "Contextual Inquiry operates in Active Mode (observer is present, watching and asking real-time clarifying questions) and Passive Mode (activities recorded on video/logs without immediate interruption)."
  },
  {
    id: 14,
    weekId: 2,
    topic: "Contextual Inquiry Stages",
    difficulty: "Medium",
    question: "How many sequential stages are defined in the Contextual Inquiry process?",
    options: ["Two", "Five", "Six", "Eight"],
    correctIndex: 1,
    explanation: "The 5 sequential stages of Contextual Inquiry are: 1. Plan, 2. Initiate, 3. Execute, 4. Close, and 5. Reflect."
  },
  {
    id: 15,
    weekId: 2,
    topic: "Contextual Inquiry Stages",
    difficulty: "Medium",
    question: "Which stage in the Contextual Inquiry process involves arranging recording instruments and scripting the observation procedure?",
    options: ["Plan Stage", "Initiate Stage", "Execute Stage", "Reflect Stage"],
    correctIndex: 0,
    explanation: "The Plan Stage involves identifying observation goals, understanding the domain, scheduling users and locations, and scripting the procedure."
  },
  {
    id: 16,
    weekId: 2,
    topic: "Affinity Diagramming",
    difficulty: "Easy",
    question: "The Affinity Diagramming synthesis method consists of how many sequential steps?",
    options: ["Three", "Two", "Six", "Five"],
    correctIndex: 3,
    explanation: "Affinity Diagramming consists of 5 steps: 1. Generate ideas/observations on sticky notes, 2. Display ideas randomly, 3. Sort into natural affinity groups, 4. Create group headers, 5. Draw finished visual diagram."
  },
  {
    id: 17,
    weekId: 2,
    topic: "Requirements Classification",
    difficulty: "Easy",
    question: "Usability requirements are technically categorized as a type of:",
    options: ["Functional Requirement", "Non-Functional Requirement (NFR)", "Structural Requirement", "Compiler Directive"],
    correctIndex: 1,
    explanation: "Usability requirements are Non-Functional Requirements (NFR) that specify quality attributes, ease of learning, interaction compatibility, and subjective user satisfaction."
  },
  {
    id: 18,
    weekId: 2,
    topic: "Contextual Inquiry",
    difficulty: "Medium",
    question: "What is the primary objective of the Contextual Inquiry research method?",
    options: [
      "To watch and observe users perform tasks in their natural work setting",
      "To conduct standardized multiple-choice question surveys",
      "To inspect software code line-by-line for compiler warnings",
      "To benchmark algorithmic execution speed on target hardware"
    ],
    correctIndex: 0,
    explanation: "The foundational core of Contextual Inquiry is grounded observation: watching users execute real tasks in their actual operational environment (Master-Apprentice model)."
  },
  {
    id: 19,
    weekId: 2,
    topic: "Contextual Inquiry Stages",
    difficulty: "Medium",
    question: "What is the key purpose of the 'Reflect' stage in Contextual Inquiry?",
    options: [
      "To request formal security clearances from client management",
      "To analyze the collected observational data and identify design goals",
      "To practice and rehearse observation scripts prior to field entry",
      "To deploy production code to client servers"
    ],
    correctIndex: 1,
    explanation: "The Reflect stage takes place post-session to synthesize observations, identify breakdowns, extract user insights, and generate design goals/requirements."
  },
  {
    id: 20,
    weekId: 2,
    topic: "Contextual Inquiry Duration",
    difficulty: "Easy",
    question: "How long does an individual Contextual Inquiry session typically continue per participant?",
    options: ["One to two weeks", "One to two hours", "One to two months", "Ten to fifteen minutes"],
    correctIndex: 1,
    explanation: "Standard Contextual Inquiry sessions typically run for 1 to 2 hours per participant to avoid fatigue while gathering deep authentic task observations."
  },

  // WEEK 3
  {
    id: 21,
    weekId: 3,
    topic: "SRS Decomposition",
    difficulty: "Medium",
    question: "In an SRS document, functional requirements should describe HOW the system internally computes the output from the input.",
    options: ["True", "False", "Only in agile mode", "Mandatory for embedded systems"],
    correctIndex: 1,
    explanation: "An SRS document must describe WHAT the system should do, strictly abstracting away HOW it will be implemented internally (black-box specification)."
  },
  {
    id: 22,
    weekId: 3,
    topic: "Contextual Inquiry Insights",
    difficulty: "Easy",
    question: "New functional requirements can be formally discovered and added based on observational insights during contextual inquiry.",
    options: ["True", "False", "Prohibited by ISO", "Restricted to hardware only"],
    correctIndex: 0,
    explanation: "Discoveries of unarticulated user needs or workarounds observed during Contextual Inquiry often surface brand new functional requirements."
  },
  {
    id: 23,
    weekId: 3,
    topic: "User-Centered Design",
    difficulty: "Easy",
    question: "In user-centered design, engineering efforts address two major concerns: Interface design and ________.",
    options: ["Machine design", "Hardware design", "Code design", "Marketing design"],
    correctIndex: 2,
    explanation: "In UCD, design splits into Interface Design (the user-facing interaction layer) and Code Design (the underlying system and computational architecture)."
  },
  {
    id: 24,
    weekId: 3,
    topic: "Design Cycles",
    difficulty: "Medium",
    question: "The rapid design-prototype-evaluate cycle primarily caters to which design domain?",
    options: ["Interface design", "Code design", "Database schema design", "Assembly optimization"],
    correctIndex: 0,
    explanation: "The rapid design-prototype-evaluate cycle focuses specifically on Interface Design. Once the interface stabilizes, engineering shifts to detailed code design."
  },
  {
    id: 25,
    weekId: 3,
    topic: "Code Design Specification",
    difficulty: "Medium",
    question: "Code design can be expressed in natural languages, semi-formal languages, and __________.",
    options: ["Informal languages", "Formal languages", "Context-free grammars only", "Machine bytecode"],
    correctIndex: 1,
    explanation: "Code design specification languages span natural languages (English prose), semi-formal notations (DFDs, Structure Charts, UML), and formal mathematical notations (Z, VDM, Petri Nets)."
  },
  {
    id: 26,
    weekId: 3,
    topic: "Data Flow Diagrams",
    difficulty: "Easy",
    question: "A Data Flow Diagram (DFD) is categorized as a ________ code design specification language.",
    options: ["Natural", "Semi-formal", "Informal", "Context-sensitive"],
    correctIndex: 1,
    explanation: "Data Flow Diagrams (DFDs) use standardized graphical rules and naming conventions, categorizing them as semi-formal design notations."
  },
  {
    id: 27,
    weekId: 3,
    topic: "Shneiderman's Heuristics",
    difficulty: "Easy",
    question: "Ben Shneiderman proposed how many Golden Rules covering broad aspects of interactive systems design?",
    options: ["Five", "Seven", "Eight", "Ten"],
    correctIndex: 2,
    explanation: "Ben Shneiderman formulated the famous 'Eight Golden Rules of Interface Design' in 1986."
  },
  {
    id: 28,
    weekId: 3,
    topic: "Shneiderman's Heuristics",
    difficulty: "Medium",
    question: "\"The interface should not force users to remember too many things\" directly corresponds to which Golden Rule?",
    options: ["Strive for consistency", "Permit easy reversal of actions", "Reduce short-term memory load", "Keep users in control"],
    correctIndex: 2,
    explanation: "Rule 8 of Shneiderman's Golden Rules states: Reduce Short-Term Memory Load (grounded in George Miller's 7 ± 2 chunks rule of human cognitive capacity)."
  },
  {
    id: 29,
    weekId: 3,
    topic: "Interface Guidelines",
    difficulty: "Easy",
    question: "Human Interface Guidelines formulated for Apple systems are classified as ______ design guidelines.",
    options: ["Generic", "Specific", "Abstract", "Theoretical"],
    correctIndex: 1,
    explanation: "Apple's Human Interface Guidelines (HIG) provide platform-specific design instructions for macOS/iOS, distinguishing them from generic HCI guidelines."
  },
  {
    id: 30,
    weekId: 3,
    topic: "Code Design Phases",
    difficulty: "Medium",
    question: "The identification of internal data structures and detailed algorithms for different modules occurs in which phase?",
    options: ["Preliminary (high-level) design", "Detailed design", "Feasibility analysis", "Architectural overview"],
    correctIndex: 1,
    explanation: "High-level design identifies modules and their control/interface connections; Detailed Design specifies the exact internal algorithms and data structures within each module."
  },

  // WEEK 4
  {
    id: 31,
    weekId: 4,
    topic: "Norman's Interaction Model",
    difficulty: "Medium",
    question: "Donald Norman's Model of Interaction represents user behavior with interactive systems in terms of a series of ______.",
    options: ["actions", "random selections", "heuristic evaluations", "system interrupts"],
    correctIndex: 0,
    explanation: "Don Norman's 1988 Model of Interaction depicts user activity as the '7 Stages of Action' divided between Execution and Evaluation phases."
  },
  {
    id: 32,
    weekId: 4,
    topic: "Norman's Interaction Model",
    difficulty: "Easy",
    question: "In Norman's interaction model, the two overarching macro phases are the execution stage and the ______ stage.",
    options: ["design", "evaluation", "prototyping", "compilation"],
    correctIndex: 1,
    explanation: "The two macro phases of interaction in Norman's model are the Execution Stage (translating goals into physical manipulation) and the Evaluation Stage (perceiving and assessing system response)."
  },
  {
    id: 33,
    weekId: 4,
    topic: "Norman's 7 Stages",
    difficulty: "Medium",
    question: "\"Perceiving the system state\" falls strictly under which stage of Norman's interaction loop?",
    options: ["Execution stage", "Intention stage", "Evaluation stage", "Specification stage"],
    correctIndex: 2,
    explanation: "The Evaluation phase consists of: 5. Perceiving system state, 6. Interpreting the perception, and 7. Evaluating the interpretation against the original goal."
  },
  {
    id: 34,
    weekId: 4,
    topic: "The Two Gulfs",
    difficulty: "Hard",
    question: "The psychological distance between user intentions and the physical actions permitted by the interface is known as:",
    options: ["The Gulf of Execution", "The Gulf of Evaluation", "The Gulf of Interaction", "The Gulf of Perception"],
    correctIndex: 0,
    explanation: "The Gulf of Execution is the psychological gap between the user's intended goal and the physical actions permitted by the interface."
  },
  {
    id: 35,
    weekId: 4,
    topic: "Human Error Classification",
    difficulty: "Medium",
    question: "In cognitive HCI, interaction errors are fundamentally categorized into slips and ________.",
    options: ["glitches", "mistakes", "lapses", "oversights"],
    correctIndex: 1,
    explanation: "Norman categorizes human errors into Slips (correct goal and plan, but incorrect execution of physical action) and Mistakes (formulation of an incorrect goal or plan due to flawed mental model)."
  },
  {
    id: 36,
    weekId: 4,
    topic: "Prototyping Dimensions",
    difficulty: "Medium",
    question: "In a vertical prototype, the entire interface is depicted at a broad surface level without any underlying functionality.",
    options: ["True", "False", "Valid only for mobile apps", "Applies to wireframes only"],
    correctIndex: 1,
    explanation: "That is the definition of a Horizontal Prototype. A Vertical Prototype implements a narrow subset of features completely from top UI to bottom backend database logic."
  },
  {
    id: 37,
    weekId: 4,
    topic: "Prototype Fidelity",
    difficulty: "Easy",
    question: "Sketched paper mock-ups and index cards are classic examples of which prototype fidelity level?",
    options: ["Low fidelity", "Medium fidelity", "High fidelity", "Extreme fidelity"],
    correctIndex: 0,
    explanation: "Paper sketches, index cards, and cardboard mockups are classic examples of Low-Fidelity (Lo-Fi) prototypes."
  },
  {
    id: 38,
    weekId: 4,
    topic: "Cognitive Walkthrough",
    difficulty: "Medium",
    question: "A standard Cognitive Walkthrough evaluation team typically requires how many specialist evaluators?",
    options: ["3–5 members", "7–10 members", "12–25 members", "Exactly 1 member"],
    correctIndex: 0,
    explanation: "Cognitive Walkthrough and Heuristic Evaluation both typically require a panel of 3 to 5 expert evaluators to identify the vast majority of usability flaws."
  },
  {
    id: 39,
    weekId: 4,
    topic: "Cognitive Walkthrough",
    difficulty: "Medium",
    question: "In a cognitive walkthrough inspection, evaluators are expected to answer task questions strictly in binary 'Yes' or 'No'.",
    options: ["True", "False", "Recommended by Nielsen", "Required by IEEE"],
    correctIndex: 1,
    explanation: "Evaluators must formulate reasons and qualitative explanations for where and why the user's knowledge or feedback loops break down, not just binary yes/no answers."
  },
  {
    id: 40,
    weekId: 4,
    topic: "Prototyping Techniques",
    difficulty: "Hard",
    question: "Which prototyping technique involves a human participant interacting with a software system secretly operated by a hidden human operator?",
    options: ["Incremental prototyping", "Horizontal wireframing", "Wizard of Oz technique", "Evolutionary prototyping"],
    correctIndex: 2,
    explanation: "The Wizard of Oz technique uses a hidden human operator simulating autonomous intelligent behavior (pioneered in IBM's 1984 'Listening Typewriter' experiment)."
  },

  // WEEK 5
  {
    id: 41,
    weekId: 5,
    topic: "Usability Evaluation",
    difficulty: "Easy",
    question: "How do human-computer interaction engineers holistically evaluate an interactive interface?",
    options: ["By assessing visual color contrast alone", "By measuring memorability in isolation", "By evaluating overall usability metrics", "By running compiler unit tests"],
    correctIndex: 2,
    explanation: "Interface evaluation is comprehensively performed by evaluating overall Usability (which encompasses learnability, efficiency, memorability, error prevention, and satisfaction)."
  },
  {
    id: 42,
    weekId: 5,
    topic: "Cognitive Walkthrough",
    difficulty: "Medium",
    question: "Evaluators must establish specific task scenarios and review questions prior to conducting a cognitive walkthrough.",
    options: ["True", "False", "Only required for live software", "Optional for paper mockups"],
    correctIndex: 0,
    explanation: "Before a Cognitive Walkthrough, practitioners define clear task scenarios and the 4 standard review questions for each step."
  },
  {
    id: 43,
    weekId: 5,
    topic: "Heuristic Evaluation",
    difficulty: "Easy",
    question: "In a heuristic evaluation, the recognized usability principles on the checklist are formally called:",
    options: ["checkboxes", "heuristics", "test vectors", "anomalies"],
    correctIndex: 1,
    explanation: "Heuristic Evaluation inspects an interface against recognized usability principles or rules of thumb, known as Heuristics (such as Nielsen's 10 Heuristics)."
  },
  {
    id: 44,
    weekId: 5,
    topic: "Self-Report Metrics",
    difficulty: "Easy",
    question: "Which self-report method allows users to numerically grade their perception of usability across system attributes?",
    options: ["Verbal think-aloud only", "Rating on a Likert scale", "Eye-tracking heatmaps", "Code tracing"],
    correctIndex: 1,
    explanation: "Rating on a Likert scale (e.g. 1 to 5 or 1 to 7) is the standard psychometric self-report method used in questionnaires like ASQ and SUS."
  },
  {
    id: 45,
    weekId: 5,
    topic: "Questionnaire Standards",
    difficulty: "Medium",
    question: "The After-Scenario Questionnaire (ASQ) is formally classified as a:",
    options: ["Post-task questionnaire", "Post-session questionnaire", "Longitudinal survey", "Pre-test screener"],
    correctIndex: 0,
    explanation: "ASQ (After-Scenario Questionnaire) is administered immediately following a single task, while SUS (System Usability Scale) is administered post-session."
  },
  {
    id: 46,
    weekId: 5,
    topic: "System Usability Scale (SUS)",
    difficulty: "Medium",
    question: "In empirical usability studies, what SUS composite score percentage is widely considered the threshold for acceptable usability?",
    options: ["50", "60", "70", "85"],
    correctIndex: 2,
    explanation: "An SUS composite score of 68-70 is widely recognized as the empirical benchmark threshold for acceptable product usability (corresponds to an average 'Grade C' or acceptable rating)."
  },
  {
    id: 47,
    weekId: 5,
    topic: "Expert Inspection",
    difficulty: "Medium",
    question: "According to research by Nielsen and Landauer, how many expert evaluators are needed to find 75–85% of usability issues?",
    options: ["3–5 members", "7–9 members", "12–15 members", "Over 20 members"],
    correctIndex: 0,
    explanation: "Empirical research by Nielsen and Landauer shows that 3 to 5 expert evaluators identify roughly 75-85% of usability issues."
  },
  {
    id: 48,
    weekId: 5,
    topic: "Heuristic Checklist",
    difficulty: "Easy",
    question: "The standardized inspection rules in heuristic evaluation are referred to as:",
    options: ["Heuristics", "Action vectors", "Syntax checks", "Assertion points"],
    correctIndex: 0,
    explanation: "The evaluation guidelines are called Usability Heuristics."
  },
  {
    id: 49,
    weekId: 5,
    topic: "SUS Definition",
    difficulty: "Easy",
    question: "What is the full expansion of the acronym SUS in usability engineering?",
    options: ["Software Usability Score", "Software Usability Scale", "System Usability Score", "System Usability Scale"],
    correctIndex: 3,
    explanation: "SUS stands for System Usability Scale, formulated by John Brooke in 1986."
  },
  {
    id: 50,
    weekId: 5,
    topic: "Prototype Inspection",
    difficulty: "Medium",
    question: "Which of the following are recognized expert prototype evaluation methods?",
    options: ["Cognitive Walkthrough and Heuristic Evaluation", "Affinity Diagramming and Gantt Charting", "Contextual Inquiry and DFD", "PERT and COCOMO"],
    correctIndex: 0,
    explanation: "Cognitive Walkthrough and Heuristic Evaluation are prototype evaluation techniques; Affinity Diagramming is a qualitative requirement analysis method."
  },

  // WEEK 6
  {
    id: 51,
    weekId: 6,
    topic: "Software Design Characteristics",
    difficulty: "Easy",
    question: "Which of the following is NOT a formal technical characteristic of good software design?",
    options: ["Functional Coverage", "Correctness", "Understandability", "Colorful UI"],
    correctIndex: 3,
    explanation: "Software design characteristics include Coverage, Correctness, Understandability, Efficiency, and Maintainability. Being 'Colorful' is superficial and not a software engineering design metric."
  },
  {
    id: 52,
    weekId: 6,
    topic: "Module Cohesion",
    difficulty: "Hard",
    question: "When all functions grouped inside a module perform logically similar operations (e.g., error reporting), it exhibits:",
    options: ["Logical cohesion", "Temporal cohesion", "Procedural cohesion", "Sequential cohesion"],
    correctIndex: 0,
    explanation: "Logical Cohesion occurs when elements perform logically similar operations grouped into a module (e.g., an all-in-one error handling or math utility module)."
  },
  {
    id: 53,
    weekId: 6,
    topic: "Inter-Module Coupling",
    difficulty: "Hard",
    question: "If one module directly modifies or branches into the internal implementation code of another, it exhibits:",
    options: ["Data coupling", "Control coupling", "Content coupling", "Stamp coupling"],
    correctIndex: 2,
    explanation: "Content Coupling (the tightest and worst form) occurs when one module modifies, shares, or branches directly into the internal implementation code of another module."
  },
  {
    id: 54,
    weekId: 6,
    topic: "Design Paradigms",
    difficulty: "Easy",
    question: "The two foundational structural software design paradigms are Function-Oriented Design and ________-Oriented Design.",
    options: ["Logic", "Folder", "Object", "Class"],
    correctIndex: 2,
    explanation: "The two classic paradigms in software engineering are Function-Oriented Design (structured/procedural) and Object-Oriented Design (OOD)."
  },
  {
    id: 55,
    weekId: 6,
    topic: "Entity-Relationship Modeling",
    difficulty: "Easy",
    question: "The three foundational structural components of Peter Chen's ER model are: Entity, Relationship, and ________.",
    options: ["Object", "Method", "Attribute", "Pointer"],
    correctIndex: 2,
    explanation: "Peter Chen's 1976 Entity-Relationship (ER) model is constructed from Entities (rectangles), Attributes (ellipses), and Relationships (diamonds)."
  },
  {
    id: 56,
    weekId: 6,
    topic: "Database Modeling",
    difficulty: "Medium",
    question: "In database ER modeling, a 'Null attribute' represents that:",
    options: [
      "An entity instance does not have an assigned or applicable value for an attribute",
      "A value must be dynamically derived using a mathematical formula",
      "The attribute is a foreign key pointing to multiple tables",
      "The attribute stores binary machine instructions"
    ],
    correctIndex: 0,
    explanation: "Null values indicate missing, unassigned, or inapplicable attribute values for a specific entity instance."
  },
  {
    id: 57,
    weekId: 6,
    topic: "Cardinality Mappings",
    difficulty: "Easy",
    question: "The four mapping cardinalities in an ER diagram are 1:1, 1:N, N:1, and ________.",
    options: ["Many-to-binary", "Many-to-many (M:N)", "Binary-to-many", "Ternary-to-one"],
    correctIndex: 1,
    explanation: "The four mapping cardinalities are 1:1, 1:N, N:1, and M:N (Many-to-Many)."
  },
  {
    id: 58,
    weekId: 6,
    topic: "Cohesion vs Coupling",
    difficulty: "Medium",
    question: "Which of the following are valid recognized types of cohesion within software modules?",
    options: ["Temporal and Functional", "Content and Control", "Data and Stamp", "Binary and Derived"],
    correctIndex: 0,
    explanation: "Temporal and Functional are types of Cohesion. 'Content', 'Control', and 'Data' are types of Coupling."
  },
  {
    id: 59,
    weekId: 6,
    topic: "Software Modularity",
    difficulty: "Easy",
    question: "Which metric quantitatively captures the degree of interdependence between different software modules?",
    options: ["Cohesion", "Coupling", "Polymorphism", "Inheritance"],
    correctIndex: 1,
    explanation: "Coupling measures the degree of interdependence between modules. Cohesion measures functional relatedness inside a single module."
  },
  {
    id: 60,
    weekId: 6,
    topic: "Data Flow Diagrams",
    difficulty: "Easy",
    question: "What is the full expansion of the acronym DFD in software engineering?",
    options: ["Data Flow Design", "Data Flow Decision", "Data Flow Development", "Data Flow Diagram"],
    correctIndex: 3,
    explanation: "DFD stands for Data Flow Diagram."
  },

  // WEEK 7
  {
    id: 61,
    weekId: 7,
    topic: "Procedural vs Object-Oriented",
    difficulty: "Easy",
    question: "In procedural and functional software design, system behavior is primarily realized through:",
    options: ["Static data stores", "Functions and subroutines", "Autonomous objects", "Polymorphic classes"],
    correctIndex: 1,
    explanation: "Functional/procedural decomposition views software as a collection of subroutines and functions transforming inputs into outputs."
  },
  {
    id: 62,
    weekId: 7,
    topic: "OOD Philosophy",
    difficulty: "Medium",
    question: "In pure Object-Oriented Design (OOD), we do not consider centralized procedural 'services' offered by the system.",
    options: ["True", "False", "Only in Java", "Forbidden by UML"],
    correctIndex: 0,
    explanation: "In OOD, we decompose the domain into autonomous objects encapsulating data and behavior, rather than global procedural system 'services'."
  },
  {
    id: 63,
    weekId: 7,
    topic: "Class Encapsulation",
    difficulty: "Easy",
    question: "In object-oriented modeling, a class encapsulates internal attributes and external ________.",
    options: ["Data stores", "Operations (methods)", "Global variables", "Foreign keys"],
    correctIndex: 1,
    explanation: "A Class encapsulates state (attributes) and behavior (operations/methods)."
  },
  {
    id: 64,
    weekId: 7,
    topic: "Object Attributes",
    difficulty: "Easy",
    question: "An attribute in a class indicates the structural nature of data that an object can contain.",
    options: ["True", "False", "Attributes specify operations", "Attributes are only used in databases"],
    correctIndex: 0,
    explanation: "Attributes specify the data types and properties held by instances of a class."
  },
  {
    id: 65,
    weekId: 7,
    topic: "OOA Definition",
    difficulty: "Easy",
    question: "What does the acronym OOA represent in software engineering?",
    options: ["Object Oriented Assignment", "Object Oriented Assistance", "Object Oriented Analysis", "Object Oriented Attributes"],
    correctIndex: 2,
    explanation: "OOA stands for Object-Oriented Analysis."
  },
  {
    id: 66,
    weekId: 7,
    topic: "Class Behavior",
    difficulty: "Easy",
    question: "Which component of an object-oriented class effectively denotes its dynamic runtime behavior?",
    options: ["Attributes", "Operations", "Memory pointers", "Static constants"],
    correctIndex: 1,
    explanation: "Operations (methods/functions) define the dynamic behavioral capabilities of a class."
  },
  {
    id: 67,
    weekId: 7,
    topic: "Unified Modeling Language",
    difficulty: "Medium",
    question: "UML is primarily formulated as a visual language to represent:",
    options: ["OOP code compilation", "OOA informal prose", "OOD architectural specifications", "Operating system scheduling"],
    correctIndex: 2,
    explanation: "Unified Modeling Language (UML) is a visual specification language designed to represent Object-Oriented Design (OOD)."
  },
  {
    id: 68,
    weekId: 7,
    topic: "UML Definition",
    difficulty: "Medium",
    question: "UML is formally defined as a complete software engineering design methodology.",
    options: ["True", "False", "Only in Agile", "Only in RUP"],
    correctIndex: 1,
    explanation: "UML is a modeling, specification, and visualization language, NOT a design methodology or process."
  },
  {
    id: 69,
    weekId: 7,
    topic: "UML Architectural Views",
    difficulty: "Hard",
    question: "In UML's five architectural views, the Implementation View is formally captured using which diagram?",
    options: ["Deployment diagram", "Component diagram", "Class diagram", "Use case diagram"],
    correctIndex: 1,
    explanation: "In UML's 5 architectural views: User View = Use Case; Behavioral View = Sequence/Activity; Structural View = Class/Object; Implementation View = Component Diagram; Environment View = Deployment Diagram."
  },
  {
    id: 70,
    weekId: 7,
    topic: "Domain Modeling",
    difficulty: "Medium",
    question: "In domain object modeling, which objects are responsible for holding persistent system and business data?",
    options: ["Boundary objects", "Controller objects", "Entity objects", "Interface widgets"],
    correctIndex: 2,
    explanation: "In domain modeling, Entity Objects encapsulate persistent real-world business data; Boundary Objects interface with actors; Controller Objects orchestrate interactions."
  },

  // WEEK 8
  {
    id: 71,
    weekId: 8,
    topic: "Coding Standards",
    difficulty: "Easy",
    question: "Adhering to professional coding guidelines directly improves which software engineering facets?",
    options: [
      "Compiler execution speed only",
      "Network throughput only",
      "Memory allocation efficiency only",
      "Readability, understandability, and team collaboration"
    ],
    correctIndex: 3,
    explanation: "Adhering to uniform coding standards ensures code readability, ease of understanding across developers, and smooth collaboration in engineering teams."
  },
  {
    id: 72,
    weekId: 8,
    topic: "Function Length Rule",
    difficulty: "Medium",
    question: "As a recognized software engineering rule of thumb, an individual function should ideally not exceed how many lines of code?",
    options: ["5 lines", "16 lines", "10 lines", "50 lines"],
    correctIndex: 2,
    explanation: "As an engineering rule of thumb taught in standard NPTEL software design guidelines, individual functions should ideally not exceed 10 lines of code."
  },
  {
    id: 73,
    weekId: 8,
    topic: "Coding Anti-Patterns",
    difficulty: "Medium",
    question: "Which of the following practices should be strictly avoided when writing production code?",
    options: [
      "Consistent 2-space or 4-space code indentation",
      "Lengthy monolithic functions, variable recycling, and indiscriminate goto statements",
      "Comprehensive unit test coverage with assertions",
      "Writing descriptive explanatory comments for algorithms"
    ],
    correctIndex: 1,
    explanation: "Lengthy functions, variable recycling, and unconstrained goto statements are anti-patterns that degrade maintainability. Proper indentation is a recommended best practice."
  },
  {
    id: 74,
    weekId: 8,
    topic: "Code Testing Categories",
    difficulty: "Easy",
    question: "Two broad categories of code testing methodologies are Review-Based Testing and ________ Testing.",
    options: ["Theoretical", "Execution-Based", "Compiler-Based", "Informal"],
    correctIndex: 1,
    explanation: "Testing is broadly partitioned into Review-Based Testing (static evaluation without executing binary) and Execution-Based Testing (dynamic runtime validation)."
  },
  {
    id: 75,
    weekId: 8,
    topic: "Review-Based Testing",
    difficulty: "Medium",
    question: "What are the two common formal methods for static review-based testing?",
    options: [
      "Code inspection and Code walkthrough",
      "Unit testing and Integration testing",
      "Stress testing and Volume testing",
      "White-box testing and Black-box testing"
    ],
    correctIndex: 0,
    explanation: "Static code reviews consist of Code Walkthroughs (informal team simulation) and Code Inspections (formal checklist verification). Unit testing is execution-based."
  },
  {
    id: 76,
    weekId: 8,
    topic: "White-Box Testing",
    difficulty: "Easy",
    question: "White-box testing refers to designing test cases leveraging knowledge of the internal control structure of the software.",
    options: ["True", "False", "Only for web APIs", "Forbidden in safety-critical code"],
    correctIndex: 0,
    explanation: "White-box (structural) testing designs test cases leveraging internal control flows, branches, and code logic."
  },
  {
    id: 77,
    weekId: 8,
    topic: "Code Walkthrough Team",
    difficulty: "Medium",
    question: "How many members should ideally constitute an effective code walkthrough team?",
    options: ["1 member", "3–5 members", "8–12 members", "15–20 members"],
    correctIndex: 1,
    explanation: "An effective code walkthrough team consists of 3 to 5 members (including the author, moderator, and peer reviewers)."
  },
  {
    id: 78,
    weekId: 8,
    topic: "Code Walkthrough Technique",
    difficulty: "Medium",
    question: "Which code testing method requires team members to manually simulate code execution by hand?",
    options: ["Code walkthrough", "Code inspection", "Black-box testing", "Stress testing"],
    correctIndex: 0,
    explanation: "In a Code Walkthrough, developers manually step through source statements by hand using sample test inputs."
  },
  {
    id: 79,
    weekId: 8,
    topic: "Code Inspection Faults",
    difficulty: "Easy",
    question: "Uninitialized variables represent a common defect class that is easily discovered through static code inspection.",
    options: ["True", "False", "Only found by compilers", "Only detected during runtime crashes"],
    correctIndex: 0,
    explanation: "Code inspection checklists specifically target static defects like uninitialized variables, infinite loops, and operator precedence faults."
  },
  {
    id: 80,
    weekId: 8,
    topic: "Black-Box Independence",
    difficulty: "Easy",
    question: "Which of the following is NOT required to perform functional black-box testing?",
    options: [
      "Equivalence class partitioning",
      "Boundary value analysis",
      "Input/Output specifications",
      "Knowledge of the internal source code structure"
    ],
    correctIndex: 3,
    explanation: "Black-box testing treats the system as an opaque box; it relies strictly on input/output specifications and requires zero knowledge of internal code structure."
  },

  // WEEK 9
  {
    id: 81,
    weekId: 9,
    topic: "Testing Definitions",
    difficulty: "Easy",
    question: "The complete set of all test cases designed to test a given software program is known as a:",
    options: ["Test harness", "Test suite", "Test vector", "Test driver"],
    correctIndex: 1,
    explanation: "A Test Suite is the comprehensive collection of all test cases designed to evaluate a software program."
  },
  {
    id: 82,
    weekId: 9,
    topic: "Test Suite Efficiency",
    difficulty: "Medium",
    question: "Randomly selected test cases do not necessarily contribute to the fault-detection significance of a test suite.",
    options: ["True", "False", "Random testing is optimal", "Mandated by ISO 9001"],
    correctIndex: 0,
    explanation: "Randomly picking inputs often re-tests identical execution paths, swelling test size without increasing defect detection probability."
  },
  {
    id: 83,
    weekId: 9,
    topic: "Black-Box Approaches",
    difficulty: "Medium",
    question: "In black-box testing, the two primary systematic approaches to design test cases are Equivalence Class Partitioning and ________.",
    options: ["Cyclomatic Complexity Analysis", "Boundary Value Analysis (BVA)", "Path Coverage", "Control Flow Graphing"],
    correctIndex: 1,
    explanation: "The two foundational techniques for black-box test design are Equivalence Class Partitioning (ECP) and Boundary Value Analysis (BVA)."
  },
  {
    id: 84,
    weekId: 9,
    topic: "Equivalence Partitioning",
    difficulty: "Medium",
    question: "Testing code with any ____ representative value of an equivalence class is assumed to be as good as testing with ALL values in that class.",
    options: ["One", "Two", "Five", "Ten"],
    correctIndex: 0,
    explanation: "The core postulate of ECP is that any single representative value from an equivalence class will expose the same errors as testing every value in that class."
  },
  {
    id: 85,
    weekId: 9,
    topic: "Equivalence Classes",
    difficulty: "Easy",
    question: "In black-box testing, the partitioned disjoint subsets of the input domain are formally called:",
    options: ["Partition classes", "Equivalence classes", "Program states", "Type domains"],
    correctIndex: 1,
    explanation: "The partitioned input sub-domains are called Equivalence Classes."
  },
  {
    id: 86,
    weekId: 9,
    topic: "Review-Based Testing",
    difficulty: "Easy",
    question: "Which of the following pairs represents valid static review-based testing techniques?",
    options: [
      "Code walkthrough and Code inspection",
      "Unit testing and Regression testing",
      "Path testing and Branch testing",
      "Alpha testing and Beta testing"
    ],
    correctIndex: 0,
    explanation: "The two formal review-based testing techniques are Code Walkthrough and Code Inspection."
  },
  {
    id: 87,
    weekId: 9,
    topic: "Test Suite",
    difficulty: "Easy",
    question: "The complete set of all test cases designed to evaluate a software program is called a test ____.",
    options: ["questionnaire", "vector", "suite", "module"],
    correctIndex: 2,
    explanation: "It is called a Test Suite."
  },
  {
    id: 88,
    weekId: 9,
    topic: "Black-Box Test Design",
    difficulty: "Easy",
    question: "In functional black-box testing, test cases are designed based strictly on:",
    options: [
      "Input domain specifications and expected output behaviors",
      "Internal control flow branches and pointer arithmetic",
      "Compiler abstract syntax trees",
      "Hardware clock cycles and registers"
    ],
    correctIndex: 0,
    explanation: "Black-box test design operates strictly on input specifications and expected output behaviors."
  },
  {
    id: 89,
    weekId: 9,
    topic: "Equivalence Domain",
    difficulty: "Easy",
    question: "The partitioning of the input domain into disjoint subsets of equivalent behavioral expectations is called equivalence class partitioning.",
    options: ["True", "False", "Only applies to strings", "Only applies to floats"],
    correctIndex: 0,
    explanation: "True: Disjoint input partitions form equivalence classes."
  },
  {
    id: 90,
    weekId: 9,
    topic: "Functional Testing",
    difficulty: "Easy",
    question: "Functional testing is directly synonymous with which category of testing?",
    options: ["Black-box testing", "White-box testing", "Structural testing", "Complexity analysis"],
    correctIndex: 0,
    explanation: "Functional testing validates functional behavior against specifications, making it black-box testing."
  },

  // WEEK 10
  {
    id: 91,
    weekId: 10,
    topic: "White-Box Prerequisites",
    difficulty: "Easy",
    question: "Performing structural white-box testing strictly requires knowledge of:",
    options: ["Marketing forecasts", "Internal code and architectural structure", "User personas only", "Deployment cloud provider"],
    correctIndex: 1,
    explanation: "White-box testing explicitly requires access to source code and control flow architecture."
  },
  {
    id: 92,
    weekId: 10,
    topic: "Control Flow Graphs",
    difficulty: "Medium",
    question: "To visualize the control logic and program flow in white-box testing, engineers construct a:",
    options: ["CFG (Control Flow Graph)", "DFD (Data Flow Diagram)", "ERD (Entity-Relationship Diagram)", "Class Diagram"],
    correctIndex: 0,
    explanation: "A Control Flow Graph (CFG) represents statements as nodes and control branching as directed edges."
  },
  {
    id: 93,
    weekId: 10,
    topic: "CFG Construction",
    difficulty: "Medium",
    question: "In constructing a CFG, program statements are numbered to form nodes, and execution transfers are represented by:",
    options: ["Inverting the nodes", "Adding directed edges", "Sorting the classes", "Creating global variables"],
    correctIndex: 1,
    explanation: "Edges are added between statement nodes to represent potential transfers of control during execution."
  },
  {
    id: 94,
    weekId: 10,
    topic: "Coverage Hierarchy",
    difficulty: "Hard",
    question: "Achieving 100% branch coverage strictly guarantees 100% statement coverage in a program.",
    options: ["True", "False", "Only if loops are absent", "Only for switch statements"],
    correctIndex: 0,
    explanation: "By executing both True and False branches of every decision point, every statement contained within those branches is guaranteed to be executed."
  },
  {
    id: 95,
    weekId: 10,
    topic: "Path Coverage",
    difficulty: "Medium",
    question: "In path coverage testing, test cases must ensure that all ________ in the program are executed at least once.",
    options: [
      "Linearly independent paths",
      "Linearly dependent paths",
      "Recursive calls only",
      "External library routines"
    ],
    correctIndex: 0,
    explanation: "Path coverage requires executing all linearly independent paths through the program's CFG from entry to exit."
  },
  {
    id: 96,
    weekId: 10,
    topic: "McCabe's Cyclomatic Complexity",
    difficulty: "Hard",
    question: "McCabe's Cyclomatic Complexity formula based on the number of edges (E) and nodes (N) in a CFG is:",
    options: ["V(G) = E - N + 2", "V(G) = E - N + 1", "V(G) = E + N - 2", "V(G) = E + N + 1"],
    correctIndex: 0,
    explanation: "McCabe's Cyclomatic Complexity formula based on graph topology is V(G) = E - N + 2 (or V(G) = D + 1 where D is the count of decision predicate statements)."
  },
  {
    id: 97,
    weekId: 10,
    topic: "System Testing Stages",
    difficulty: "Medium",
    question: "The three progressive stages of system testing are Alpha testing, Beta testing, and ________.",
    options: ["Gamma testing", "Sigma testing", "Acceptance testing", "Omega testing"],
    correctIndex: 2,
    explanation: "System testing progresses through: 1. Alpha Testing (internal dev team), 2. Beta Testing (external friendly users), and 3. Acceptance Testing (conducted by client/customer for sign-off)."
  },
  {
    id: 98,
    weekId: 10,
    topic: "Performance Testing",
    difficulty: "Easy",
    question: "Volume testing evaluates how the software performs under sustained ________ data inputs.",
    options: ["Small", "Large", "Malformed", "Encrypted"],
    correctIndex: 1,
    explanation: "Volume testing assesses system performance and stability under sustained massive volumes of data."
  },
  {
    id: 99,
    weekId: 10,
    topic: "Empirical Research Stages",
    difficulty: "Medium",
    question: "How many formal stages comprise empirical research in human-computer interaction?",
    options: ["Three", "Four", "Five", "Six"],
    correctIndex: 1,
    explanation: "The 4 stages of Empirical Research: 1. Identification of Research Questions/Hypotheses, 2. Determination of Variables & Scales, 3. Experiment Design, 4. Data Analysis."
  },
  {
    id: 100,
    weekId: 10,
    topic: "Empirical Data",
    difficulty: "Easy",
    question: "Data collected directly through observation and experimental measurement is termed:",
    options: ["Reflective data", "Empirical data", "Authoritative data", "Theoretical data"],
    correctIndex: 1,
    explanation: "Information gathered through direct observation and measurement in experiments is called Empirical data."
  },

  // WEEK 11
  {
    id: 101,
    weekId: 11,
    topic: "Empirical Experimentation",
    difficulty: "Easy",
    question: "When a controlled experiment is conducted to collect and analyze user behavior data, the process is known as:",
    options: ["Programmable research", "Hypothetical modeling", "Empirical research", "Theoretical proofing"],
    correctIndex: 2,
    explanation: "Controlled experimentation on human user performance is termed Empirical Research."
  },
  {
    id: 102,
    weekId: 11,
    topic: "Empirical Research Stages",
    difficulty: "Easy",
    question: "There are broadly how many stages in empirical research methodology?",
    options: ["Two", "Three", "Four", "Five"],
    correctIndex: 2,
    explanation: "There are four stages: Question/Hypothesis Formulation, Variable/Scale Selection, Experiment Design, and Statistical Analysis."
  },
  {
    id: 103,
    weekId: 11,
    topic: "Research Questions",
    difficulty: "Hard",
    question: "Comparing 'Does the new interface let users enter text faster than MS Word?' (RQ3) with 'Is the new technique good?' (RQ1), RQ3 is ________ whereas RQ1 is ________.",
    options: [
      "Testable, Non-testable",
      "Alternative hypothesis, Null hypothesis",
      "Dependent variable, Independent variable",
      "Ordinal, Nominal"
    ],
    correctIndex: 0,
    explanation: "RQ3 ('faster', measurable in Characters Per Minute / CPM) is concrete and testable. RQ1 ('good', subjective and vague) is non-testable."
  },
  {
    id: 104,
    weekId: 11,
    topic: "Statistical Hypotheses",
    difficulty: "Medium",
    question: "A hypothesis stating that the experimental test condition produces no significant difference on the outcome is called the:",
    options: ["Null hypothesis (H0)", "Alternative hypothesis (H1)", "Directional hypothesis", "Confounding hypothesis"],
    correctIndex: 0,
    explanation: "The Null Hypothesis (H0) states that there is no difference or effect caused by the treatment. In research, we seek to refute/reject H0."
  },
  {
    id: 105,
    weekId: 11,
    topic: "Stevens' Measurement Scales",
    difficulty: "Medium",
    question: "In which measurement scale are arbitrary numbers assigned strictly as labels to categories without mathematical ranking?",
    options: ["Nominal scale", "Ordinal scale", "Interval scale", "Ratio scale"],
    correctIndex: 0,
    explanation: "Nominal scales assign arbitrary categorical labels or codes (e.g. 1 = Male, 2 = Female) without inherent numerical order or mathematical ranking."
  },
  {
    id: 106,
    weekId: 11,
    topic: "Measurement Scales",
    difficulty: "Medium",
    question: "Recording temperature data from a standard thermometer represents an example of interval scaled data.",
    options: ["True", "False", "It is ratio scaled", "It is ordinal scaled"],
    correctIndex: 0,
    explanation: "Temperature in °C or °F has equal metric intervals but an arbitrary zero point (0° does not mean absence of temperature), which classifies it as Interval data."
  },
  {
    id: 107,
    weekId: 11,
    topic: "Experimental Variables",
    difficulty: "Hard",
    question: "Variables that systematically influence both independent and dependent variables, potentially distorting study conclusions, are:",
    options: ["Control variables", "Extraneous constants", "Confounding variables", "Dummy variables"],
    correctIndex: 2,
    explanation: "Confounding variables are extraneous uncontrolled factors (like the learning/practice effect) that distort the observed relationship between independent and dependent variables."
  },
  {
    id: 108,
    weekId: 11,
    topic: "Sample Sizing",
    difficulty: "Easy",
    question: "For preliminary pilot studies or small-scale formative usability testing, approximately 5 participants is sufficient.",
    options: ["True", "False", "At least 50 required", "Only 1 is valid"],
    correctIndex: 0,
    explanation: "For exploratory or pilot usability studies, 5 participants generally suffice to discover early critical issues."
  },
  {
    id: 109,
    weekId: 11,
    topic: "Empirical Sample Sizing",
    difficulty: "Medium",
    question: "To draw statistically reliable and generalizable conclusions in formal HCI empirical research, sample sizes should range between:",
    options: ["1 and 5 participants", "2 and 5 participants", "12 and 25 participants", "100 and 200 participants"],
    correctIndex: 2,
    explanation: "Formal empirical research in HCI requires 12 to 25 participants to achieve adequate statistical power and reliable generalizations."
  },
  {
    id: 110,
    weekId: 11,
    topic: "Subject Allocation",
    difficulty: "Medium",
    question: "When participants are divided into disjoint groups such that each group is exposed to only a distinct subset of conditions, it is a:",
    options: ["Between-subject design", "Within-subject design", "Repeated-measures design", "Factorial regression"],
    correctIndex: 0,
    explanation: "In Between-Subject designs, participants are separated into distinct groups testing different conditions, eliminating practice/learning interference between conditions."
  },

  // WEEK 12
  {
    id: 111,
    weekId: 12,
    topic: "Statistical Significance",
    difficulty: "Medium",
    question: "In scientific hypothesis testing, an inferential significance test aims to:",
    options: ["Accept the null hypothesis", "Refute/reject the null hypothesis", "Prove the null hypothesis is flawless", "Eliminate sample variance"],
    correctIndex: 1,
    explanation: "Statistical significance tests (like t-tests) aim to refute/reject the Null Hypothesis (H0) with high confidence (p < 0.05), thereby supporting the Alternative Hypothesis (H1)."
  },
  {
    id: 112,
    weekId: 12,
    topic: "Statistical Errors",
    difficulty: "Hard",
    question: "A Type I statistical error (Alpha, α) is formally defined as a:",
    options: ["False positive", "False negative", "True positive", "True negative"],
    correctIndex: 0,
    explanation: "Type I Error (Alpha, α) is a 'False Positive': rejecting the null hypothesis when it is actually true."
  },
  {
    id: 113,
    weekId: 12,
    topic: "Statistical Tests",
    difficulty: "Medium",
    question: "The Student's t-test statistic is the ONLY mathematical method available to test for statistical significance.",
    options: ["True", "False", "Mandated by ISO", "True for samples < 30"],
    correctIndex: 1,
    explanation: "False: ANOVA, Chi-Square, Wilcoxon, Mann-Whitney U, and Kruskal-Wallis are other parametric and non-parametric significance tests."
  },
  {
    id: 114,
    weekId: 12,
    topic: "Statistical Test Classes",
    difficulty: "Easy",
    question: "Statistical significance tests are broadly divided into two major methodological categories:",
    options: [
      "Parametric and Non-parametric tests",
      "t-test and non t-test",
      "Linear and Non-linear curves",
      "Frequentist and Bayesian algorithms"
    ],
    correctIndex: 0,
    explanation: "Significance tests divide into Parametric tests (assumes Gaussian normal distribution and interval/ratio scales) and Non-Parametric tests (distribution-free)."
  },
  {
    id: 115,
    weekId: 12,
    topic: "Project Planning",
    difficulty: "Easy",
    question: "Comprehensive software project planning fundamentally involves the estimation of Project size, Cost, Duration, and Effort.",
    options: ["True", "False", "Cost is excluded in Agile", "Duration is unplannable"],
    correctIndex: 0,
    explanation: "Comprehensive software project planning requires estimating software size (LoC / FP), effort (Person-Months), duration (calendar months), and total cost."
  },
  {
    id: 116,
    weekId: 12,
    topic: "COCOMO Origin",
    difficulty: "Easy",
    question: "What does the software estimation acronym COCOMO formally stand for?",
    options: [
      "Conducive Cost Estimation Model",
      "Constructive Cost Estimation Model",
      "Constructive Category Estimation Model",
      "Continuous Cost Optimization Model"
    ],
    correctIndex: 1,
    explanation: "COCOMO stands for Constructive Cost Estimation Model, developed by Barry Boehm in 1981."
  },
  {
    id: 117,
    weekId: 12,
    topic: "COCOMO Tiers",
    difficulty: "Medium",
    question: "According to Barry Boehm, COCOMO software cost estimation is structured through how many progressive complexity tiers?",
    options: ["Two tiers", "Three tiers", "Four tiers", "Five tiers"],
    correctIndex: 1,
    explanation: "Boehm proposed three complexity tiers of COCOMO: Basic COCOMO, Intermediate COCOMO, and Complete (Detailed) COCOMO."
  },
  {
    id: 118,
    weekId: 12,
    topic: "Agile Development",
    difficulty: "Easy",
    question: "Agile software development frameworks are structured to ensure rapid iterative releases and quick project turnaround.",
    options: ["True", "False", "Agile forbids customer meetings", "Waterfall is faster than Agile"],
    correctIndex: 0,
    explanation: "Agile emphasizes short iterative sprint cycles (typically 4 to 6 weeks) delivering working increments rapidly."
  },
  {
    id: 119,
    weekId: 12,
    topic: "Agile Frameworks",
    difficulty: "Easy",
    question: "Scrum is widely classified as a __________ software project management methodology.",
    options: ["Traditional Waterfall", "Agile", "Formal Verification", "Assembler"],
    correctIndex: 1,
    explanation: "Scrum is the most widely adopted lightweight Agile process framework."
  },
  {
    id: 120,
    weekId: 12,
    topic: "Gantt Charting",
    difficulty: "Medium",
    question: "In a standard project Gantt chart, the horizontal length of each bar is directly proportional to the:",
    options: ["Planned calendar duration of the activity", "Total developer salary cost", "Lines of code written", "Number of database queries"],
    correctIndex: 0,
    explanation: "In a Gantt chart (developed by Henry Gantt), the horizontal length of each bar is directly proportional to the planned calendar duration of the task."
  }
];
