// HCI & NPTEL Master Dataset: 120 Weekly Assignment Questions & 12 Comprehensive Theory Units

const NPTEL_QUESTIONS = [
  // WEEK 01
  {
    id: 1,
    week: 1,
    question: "While we talk about the evaluation phases of the computer, _____ is called the modern age of computers.",
    options: ["a. 1985 onwards", "b. 1998 onwards", "c. 2007 onwards", "d. 2011 onwards"],
    correct: [3],
    answerText: "d. 2011 onwards",
    explanation: "The evolution of computing is divided into Pre-History (1940s-1970s), Early Phase (1980s-early 2000s), Pre-Modern Phase (late 1990s-2010), and the Modern Phase (2011 onwards) characterized by ubiquitous computing, smartphones, IoT, and cyber-physical systems."
  },
  {
    id: 2,
    week: 1,
    question: "Which among the following is NOT a generic category of users?",
    options: ["a. Novice", "b. Super knowledgeable", "c. Intermittent", "d. Expert"],
    correct: [1],
    answerText: "b. Super knowledgeable",
    explanation: "Standard HCI literature categorizes users into three operational profiles: Novice (first-time, needs heavy guidance), Intermittent (uses system periodically, relies on recognition and consistent layout), and Expert (demands accelerators, keyboard hotkeys, and concise flows). 'Super knowledgeable' is not a standard category."
  },
  {
    id: 3,
    week: 1,
    question: "In the Spiral Model, why is the second quadrant crucial for interactive software development?",
    options: ["a. It defines the UI layout", "b. It finalizes the system architecture", "c. It identifies and mitigates usability risks via prototyping", "d. It handles testing and deployment"],
    correct: [2],
    answerText: "c. It identifies and mitigates usability risks via prototyping",
    explanation: "Quadrant 2 of Boehm's Spiral Model is dedicated to Risk Analysis, Assessment, and Mitigation. In interactive software (HCI), usability uncertainties are mitigated here by creating early prototypes."
  },
  {
    id: 4,
    week: 1,
    question: "What does the term 'utility' refer to in the context of usability?",
    options: ["a. Speed of task completion", "b. Visual appeal of the design", "c. Functional support for user needs", "d. Frequency of feature updates"],
    correct: [2],
    answerText: "c. Functional support for user needs",
    explanation: "According to Jacob Nielsen's Usability Framework (2012), a product must have Utility (functional capacity to support user needs) and Usability (practical ease and pleasantness of use) to achieve overall usefulness."
  },
  {
    id: 5,
    week: 1,
    question: "Which one of the following is NOT a computer?",
    options: ["a. Desktop", "b. Digital Pedometer", "c. Smartphone", "d. None of the above"],
    correct: [3],
    answerText: "d. None of the above",
    explanation: "By the Oxford English Dictionary definition, all of these are computers. Even a digital pedometer receives data (step vibrations), performs programmatic operations with stored conversion formulas, and outputs distance/step counts."
  },
  {
    id: 6,
    week: 1,
    question: "Interactive software development is ______ in nature.",
    options: ["a. sporadic", "b. iterative", "c. variable", "d. discrete"],
    correct: [1],
    answerText: "b. iterative",
    explanation: "Interactive systems development revolves around repeated Design-Prototype-Evaluate cycles until usability stabilization is achieved before transitioning to system code design."
  },
  {
    id: 7,
    week: 1,
    question: "Which of the following is NOT one of the five quality components of usability proposed by Jacob Nielsen?",
    options: ["a. Learnability", "b. Efficiency", "c. Satisfaction", "d. Memorization"],
    correct: [3],
    answerText: "d. Memorization",
    explanation: "Jacob Nielsen's 5 Usability Quality Attributes are Learnability, Efficiency, Memorability (not 'Memorization'), Errors, and Satisfaction."
  },
  {
    id: 8,
    week: 1,
    question: "Which of the following is NOT a characteristic of the Waterfall model?",
    options: ["a. Feasibility study", "b. Learnability study", "c. System integration and testing", "d. Maintenance"],
    correct: [1],
    answerText: "b. Learnability study",
    explanation: "The classical Waterfall lifecycle includes Feasibility Study, Requirements Analysis, System Design, Coding/Unit Testing, Integration/System Testing, Deployment, and Maintenance. 'Learnability study' is an empirical HCI activity, not a Waterfall stage."
  },
  {
    id: 9,
    week: 1,
    question: "'Identify objectives' and 'customer evaluation and planning' is in the _____ and _____ quadrant of the spiral model respectively.",
    options: ["a. First, Fourth", "b. Second, Third", "c. Third, Fourth", "d. Fourth, Second"],
    correct: [0],
    answerText: "a. First, Fourth",
    explanation: "Boehm's Spiral Model quadrants: Q1 = Identify objectives and constraints; Q2 = Risk analysis and prototyping; Q3 = Engineering/development; Q4 = Customer evaluation and planning for next cycle."
  },
  {
    id: 10,
    week: 1,
    question: "Which design approach focuses on what a programmer finds interesting to build?",
    options: ["a. System-Centered Design", "b. User-Centered Design", "c. Utility-Based Design", "d. Participatory Design"],
    correct: [0],
    answerText: "a. System-Centered Design",
    explanation: "System-Centered Design (SCD) is driven by platform tools, ease of programming, and developer interest, whereas User-Centered Design (UCD) focuses on end-user capabilities, tasks, and cognitive needs."
  },

  // WEEK 02
  {
    id: 11,
    week: 2,
    question: "Contextual inquiry is also known as __________.",
    options: ["a. Interview", "b. Observation", "c. Semi-structured interview"],
    correct: [2],
    answerText: "c. Semi-structured interview",
    explanation: "Contextual Inquiry (CI) is a semi-structured ethnographic interview and observation technique conducted directly in the user's natural work environment."
  },
  {
    id: 12,
    week: 2,
    question: "In SRS, functions are not represented as",
    options: ["a. Function name", "b. Input", "c. Output", "d. Description", "e. Motivation"],
    correct: [4],
    answerText: "e. Motivation",
    explanation: "Standard SRS function specifications define Identifier (Rx), Function Name (verb-noun), Input, Output, and Description of behavior. 'Motivation' is not part of functional requirement specification."
  },
  {
    id: 13,
    week: 2,
    question: "Contextual inquiry can be done in ______ and passive mode.",
    options: ["a. active", "b. semi-active", "c. neutral"],
    correct: [0],
    answerText: "a. active",
    explanation: "Contextual Inquiry operates in Active Mode (observer is present, watching and asking real-time clarifying questions) and Passive Mode (activities recorded on video/logs without interruption)."
  },
  {
    id: 14,
    week: 2,
    question: "There are ______ stages in contextual inquiry.",
    options: ["a. two", "b. five", "c. six", "d. eight"],
    correct: [1],
    answerText: "b. five",
    explanation: "The 5 sequential stages of Contextual Inquiry are: 1. Plan, 2. Initiate, 3. Execute, 4. Close, and 5. Reflect."
  },
  {
    id: 15,
    week: 2,
    question: "Which stage in the Contextual Inquiry process involves arranging for recording observations and scripting the procedure?",
    options: ["a. Plan Stage", "b. Initiate Stage", "c. Execute Stage", "d. Reflect Stage"],
    correct: [0],
    answerText: "a. Plan Stage",
    explanation: "The Plan Stage involves identifying observation goals, understanding the domain, scheduling users and locations, and scripting the procedure."
  },
  {
    id: 16,
    week: 2,
    question: "Affinity diagram method consists of ______ steps.",
    options: ["a. Three", "b. Two", "c. Six", "d. Five"],
    correct: [3],
    answerText: "d. Five",
    explanation: "Affinity Diagramming consists of 5 steps: 1. Generate ideas/observations on sticky notes, 2. Display ideas randomly, 3. Sort into natural affinity groups, 4. Create group headers, 5. Draw finished visual diagram."
  },
  {
    id: 17,
    week: 2,
    question: "Usability requirements is one type of _____.",
    options: ["a. Functional Requirement", "b. Non-functional requirement"],
    correct: [1],
    answerText: "b. Non-functional requirement",
    explanation: "Usability requirements are Non-Functional Requirements (NFR) that specify quality attributes, ease of learning, interaction compatibility, and subjective user satisfaction."
  },
  {
    id: 18,
    week: 2,
    question: "What is the primary objective of Contextual Inquiry?",
    options: [
      "a. To watch and observe users perform tasks in their natural work setting",
      "b. To conduct semi-structured interviews with users",
      "c. To develop design recommendations",
      "d. To study user behavior using physical note-taking"
    ],
    correct: [0],
    answerText: "a. To watch and observe users perform tasks in their natural work setting",
    explanation: "The foundational core of Contextual Inquiry is grounded observation: watching users execute real tasks in their actual operational environment (Master-Apprentice model)."
  },
  {
    id: 19,
    week: 2,
    question: "What is the purpose of the 'Reflect' stage in the Contextual Inquiry process?",
    options: [
      "a. To contact the authorities for permission",
      "b. To analyze the data collected and identify design goals",
      "c. To script the procedure and rehearse for observations"
    ],
    correct: [1],
    answerText: "b. To analyze the data collected and identify design goals",
    explanation: "The Reflect stage takes place post-session to synthesize observations, identify breakdowns, extract user insights, and generate design goals/requirements."
  },
  {
    id: 20,
    week: 2,
    question: "How long does the Contextual Inquiry process typically continue?",
    options: ["a. One to two weeks", "b. One to two hours", "c. One to two months"],
    correct: [1],
    answerText: "b. One to two hours",
    explanation: "Standard Contextual Inquiry sessions typically run for 1 to 2 hours per participant to avoid fatigue while gathering deep authentic task observations."
  },

  // WEEK 03
  {
    id: 21,
    week: 3,
    question: "In SRS document the functions should describe HOW to get the output from the given input.",
    options: ["a. True", "b. False"],
    correct: [1],
    answerText: "b. False",
    explanation: "An SRS document must describe WHAT the system should do, strictly abstracting away HOW it will be implemented internally (black-box specification)."
  },
  {
    id: 22,
    week: 3,
    question: "We can also add new functional requirements based on the observations made in contextual inquiry.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Discoveries of unarticulated user needs or workarounds observed during Contextual Inquiry often surface brand new functional requirements."
  },
  {
    id: 23,
    week: 3,
    question: "In user-centered design, we have two concerns: Interface design and ________",
    options: ["a. Machine design", "b. Hardware design", "c. Code design", "d. System design"],
    correct: [2],
    answerText: "c. Code design",
    explanation: "In UCD, design splits into Interface Design (the user-facing interaction layer) and Code Design (the underlying system and computational architecture)."
  },
  {
    id: 24,
    week: 3,
    question: "The design-prototype-evaluate cycle primarily caters to ______ design.",
    options: ["a. Interface", "b. Code", "c. System"],
    correct: [0],
    answerText: "a. Interface",
    explanation: "The rapid design-prototype-evaluate cycle focuses specifically on Interface Design. Once the interface stabilizes, engineering shifts to detailed code design."
  },
  {
    id: 25,
    week: 3,
    question: "Code design can be expressed in natural languages, semi-formal languages and __________.",
    options: ["a. Informal languages", "b. Formal languages", "c. Context sensitive languages"],
    correct: [1],
    answerText: "b. Formal languages",
    explanation: "Code design specification languages span natural languages (English prose), semi-formal notations (DFDs, Structure Charts, UML), and formal mathematical notations (Z, VDM, Petri Nets)."
  },
  {
    id: 26,
    week: 3,
    question: "DFD is a ________ code design language.",
    options: ["a. Natural", "b. Semi-formal", "c. Informal", "d. Context sensitive"],
    correct: [1],
    answerText: "b. Semi-formal",
    explanation: "Data Flow Diagrams (DFDs) use standardized graphical rules and naming conventions, categorizing them as semi-formal design notations."
  },
  {
    id: 27,
    week: 3,
    question: "Shneiderman proposed _______ rules that covers broad aspects of interactive systems.",
    options: ["a. Five", "b. Seven", "c. Eight", "d. Nine"],
    correct: [2],
    answerText: "c. Eight",
    explanation: "Ben Shneiderman formulated the famous 'Eight Golden Rules of Interface Design' in 1986."
  },
  {
    id: 28,
    week: 3,
    question: "\"The interface should not force users to remember too many things\" - this statement falls under \"__________\", one of the golden rules proposed by Shneiderman.",
    options: ["a. Strive for consistency", "b. Permit easy reversal of actions", "c. Reduce short-term memory load", "d. Keep users in control"],
    correct: [2],
    answerText: "c. Reduce short-term memory load",
    explanation: "Rule 8 of Shneiderman's Golden Rules states: Reduce Short-Term Memory Load (grounded in George Miller's 7 ± 2 chunks rule of human cognitive capacity)."
  },
  {
    id: 29,
    week: 3,
    question: "Human interface guidelines for the apple systems are the ______ design guidelines.",
    options: ["a. Generic", "b. Specific"],
    correct: [1],
    answerText: "b. Specific",
    explanation: "Apple's Human Interface Guidelines (HIG) provide platform-specific design instructions for macOS/iOS, distinguishing them from generic HCI guidelines."
  },
  {
    id: 30,
    week: 3,
    question: "Identification of data structures and algorithms for different modules is done on the __________ phase of code design.",
    options: ["a. Preliminary (high-level design)", "b. Detailed design"],
    correct: [1],
    answerText: "b. Detailed design",
    explanation: "High-level design identifies modules and their control/interface connections; Detailed Design specifies the exact internal algorithms and data structures within each module."
  },

  // WEEK 04
  {
    id: 31,
    week: 4,
    question: "Norman's Model of Interaction represents behavior of a user of interactive systems in terms of a series of ______.",
    options: ["a. actions", "b. selection", "c. manipulation"],
    correct: [0],
    answerText: "a. actions",
    explanation: "Don Norman's 1988 Model of Interaction depicts user activity as the '7 Stages of Action' divided between Execution and Evaluation phases."
  },
  {
    id: 32,
    week: 4,
    question: "There are broadly two stages of interaction execution stage and ______ stage.",
    options: ["a. design", "b. evaluation", "c. interaction"],
    correct: [1],
    answerText: "b. evaluation",
    explanation: "The two macro phases of interaction in Norman's model are the Execution Stage (translating goals into physical manipulation) and the Evaluation Stage (perceiving and assessing system response)."
  },
  {
    id: 33,
    week: 4,
    question: "Perceive system state comes under the _____ stage of interaction.",
    options: ["a. execution", "b. design", "c. evaluation", "d. interaction"],
    correct: [2],
    answerText: "c. evaluation",
    explanation: "The Evaluation phase consists of: 5. Perceiving system state, 6. Interpreting the perception, and 7. Evaluating the interpretation against the original goal."
  },
  {
    id: 34,
    week: 4,
    question: "Actions we specify to translate intentions may not be supported by the interface leading to gap (gulf) between the first three and the last actions in the execution stage. It is called ______.",
    options: ["a. The gulf of execution", "b. The gulf of evaluation", "c. The gulf of Interaction"],
    correct: [0],
    answerText: "a. The gulf of execution",
    explanation: "The Gulf of Execution is the psychological gap between the user's intended goal and the physical actions permitted by the interface."
  },
  {
    id: 35,
    week: 4,
    question: "Particularly in the context of errors during interaction is explained in terms of slips and _____.",
    options: ["a. error", "b. mistakes", "c. human error"],
    correct: [1],
    answerText: "b. mistakes",
    explanation: "Norman categorizes human errors into Slips (correct goal and plan, but incorrect execution of physical action) and Mistakes (formulation of an incorrect goal or plan due to flawed mental model)."
  },
  {
    id: 36,
    week: 4,
    question: "In a vertical prototype, the entire interface is depicted at the surface level without any functionality.",
    options: ["a. True", "b. False"],
    correct: [1],
    answerText: "b. False",
    explanation: "That is the definition of a Horizontal Prototype. A Vertical Prototype implements a narrow subset of features completely from top UI to bottom backend database logic."
  },
  {
    id: 37,
    week: 4,
    question: "Paper mock-ups are the example of _______ prototype.",
    options: ["a. Low fidelity", "b. High fidelity", "c. Medium fidelity"],
    correct: [0],
    answerText: "a. Low fidelity",
    explanation: "Paper sketches, index cards, and cardboard mockups are classic examples of Low-Fidelity (Lo-Fi) prototypes."
  },
  {
    id: 38,
    week: 4,
    question: "There is a requirement of 3-5 member team for the cognitive walkthrough.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Cognitive Walkthrough and Heuristic Evaluation both typically require a panel of 3 to 5 expert evaluators to identify the vast majority of usability flaws."
  },
  {
    id: 39,
    week: 4,
    question: "In a cognitive walkthrough evaluation, evaluators re expected to answer the questions only in 'yes' or 'no'",
    options: ["a. True", "b. False"],
    correct: [1],
    answerText: "b. False",
    explanation: "Evaluators must formulate reasons and qualitative explanations for where and why the user's knowledge or feedback loops break down, not just binary yes/no answers."
  },
  {
    id: 40,
    week: 4,
    question: "In this technique, a human subject believes to interact with an autonomous computer. But, in reality, however, the computer is operated by an 'unseen' human being. This technique is called_______ approach.",
    options: ["a. Medium fidelity", "b. Vertical", "c. Wizard of Oz", "d. Incremental"],
    correct: [2],
    answerText: "c. Wizard of Oz",
    explanation: "The Wizard of Oz technique uses a hidden human operator simulating autonomous intelligent behavior (pioneered in IBM's 1984 'Listening Typewriter' experiment)."
  },

  // WEEK 05
  {
    id: 41,
    week: 5,
    question: "How do we evaluate an interface?",
    options: ["a. by evaluating satisfaction", "b. by evaluating memorability", "c. by evaluating usability"],
    correct: [2],
    answerText: "c. by evaluating usability",
    explanation: "Interface evaluation is comprehensively performed by evaluating overall Usability (which encompasses learnability, efficiency, memorability, error prevention, and satisfaction)."
  },
  {
    id: 42,
    week: 5,
    question: "We need to frame a set of questions (usability issues) for the evaluators before performing a cognitive walkthrough",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Before a Cognitive Walkthrough, practitioners define clear task scenarios and the 4 standard review questions for each step."
  },
  {
    id: 43,
    week: 5,
    question: "In a heuristic evaluation, the items in the checklist are called _________.",
    options: ["a. checkbox", "b. heuristics", "c. usability issues", "d. problems"],
    correct: [1],
    answerText: "b. heuristics",
    explanation: "Heuristic Evaluation inspects an interface against recognized usability principles or rules of thumb, known as Heuristics (such as Nielsen's 10 Heuristics)."
  },
  {
    id: 44,
    week: 5,
    question: "There are many ways of collecting user feedback in evaluation with self report methods: ____________, can ask them to choose from a list of system attributes ask direct and open-ended questions.",
    options: ["a. Utter the option", "b. Rating on a scale"],
    correct: [1],
    answerText: "b. Rating on a scale",
    explanation: "Rating on a Likert scale (e.g. 1 to 5 or 1 to 7) is the standard psychometric self-report method used in questionnaires like ASQ and SUS."
  },
  {
    id: 45,
    week: 5,
    question: "ASQ is a ______________.",
    options: ["a. Post-task questionnaire", "b. Post-session questionnaire"],
    correct: [0],
    answerText: "a. Post-task questionnaire",
    explanation: "ASQ (After-Scenario Questionnaire) is administered immediately following a single task, while SUS (System Usability Scale) is administered post-session."
  },
  {
    id: 46,
    week: 5,
    question: "It is generally assumed that an SUS score around ______ percent or higher is desirable",
    options: ["a. 10", "b. 20", "c. 50", "d. 70"],
    correct: [3],
    answerText: "d. 70",
    explanation: "An SUS composite score of 68-70 is widely recognized as the empirical benchmark threshold for acceptable product usability (corresponds to an average 'Grade C' or acceptable rating)."
  },
  {
    id: 47,
    week: 5,
    question: "In expert evaluation, the evaluation team should have at least ________ members.",
    options: ["a. 3-5", "b. 4-7", "c. 5-7", "d. 7-9"],
    correct: [0],
    answerText: "a. 3-5",
    explanation: "Empirical research by Nielsen and Landauer shows that 3 to 5 expert evaluators identify roughly 75-85% of usability issues."
  },
  {
    id: 48,
    week: 5,
    question: "In heuristic evaluation, a system is evaluated with a checklist are called ____ .",
    options: ["a. Heuristics", "b. Actions", "c. Statement"],
    correct: [0],
    answerText: "a. Heuristics",
    explanation: "The evaluation guidelines are called Usability Heuristics."
  },
  {
    id: 49,
    week: 5,
    question: "What is the full form of SUS",
    options: ["a. Software usability score", "b. Software usability scale", "c. System usability score", "d. System usability scale"],
    correct: [3],
    answerText: "d. System usability scale",
    explanation: "SUS stands for System Usability Scale, formulated by John Brooke in 1986."
  },
  {
    id: 50,
    week: 5,
    question: "Which are from the following are the valid prototype evaluation methods? (Select all that apply)",
    options: ["a. Cognitive walkthrough", "b. Affinity diagram", "c. Heuristic evaluation"],
    correct: [0, 2],
    isMulti: true,
    answerText: "a. Cognitive walkthrough, c. Heuristic evaluation",
    explanation: "Cognitive Walkthrough and Heuristic Evaluation are prototype evaluation techniques; Affinity Diagramming is a qualitative requirement analysis method."
  },

  // WEEK 06
  {
    id: 51,
    week: 6,
    question: "Which of the following is NOT a characteristic of Good design",
    options: ["a. Coverage", "b. Correctness", "c. Understandability", "d. Colorful"],
    correct: [3],
    answerText: "d. Colorful",
    explanation: "Software design characteristics include Coverage, Correctness, Understandability, Efficiency, and Maintainability. Being 'Colorful' is superficial and not a software engineering design metric."
  },
  {
    id: 52,
    week: 6,
    question: "If all functions perform similar operations it falls under ________ cohesion.",
    options: ["a. Logical", "b. Temporal", "c. Procedural", "d. Sequential"],
    correct: [0],
    answerText: "a. Logical",
    explanation: "Logical Cohesion occurs when elements perform logically similar operations grouped into a module (e.g., an all-in-one error handling or math utility module)."
  },
  {
    id: 53,
    week: 6,
    question: "If two modules share code, it falls under _________ coupling.",
    options: ["a. Data", "b. Control", "c. Content"],
    correct: [2],
    answerText: "c. Content",
    explanation: "Content Coupling (the tightest and worst form) occurs when one module modifies, shares, or branches directly into the internal implementation code of another module."
  },
  {
    id: 54,
    week: 6,
    question: "There are two basic design approaches: function oriented and ______ oriented.",
    options: ["a. Logic", "b. Folder", "c. Object", "d. Class"],
    correct: [2],
    answerText: "c. Object",
    explanation: "The two classic paradigms in software engineering are Function-Oriented Design (structured/procedural) and Object-Oriented Design (OOD)."
  },
  {
    id: 55,
    week: 6,
    question: "Basic components of ER diagram are: Entity, _____ and Relationship",
    options: ["a. Object", "b. User", "c. Attribute", "d. Class"],
    correct: [2],
    answerText: "c. Attribute",
    explanation: "Peter Chen's 1976 Entity-Relationship (ER) model is constructed from Entities (rectangles), Attributes (ellipses), and Relationships (diamonds)."
  },
  {
    id: 56,
    week: 6,
    question: "Null attributes are used when:",
    options: [
      "a. An entity does not have a value for an attribute",
      "b. A value needs to be derived from other attributes or entities"
    ],
    correct: [0],
    answerText: "a. An entity does not have a value for an attribute",
    explanation: "Null values indicate missing, unassigned, or inapplicable attribute values for a specific entity instance."
  },
  {
    id: 57,
    week: 6,
    question: "There are four types of relationships in ER diagram: one-to-one, one-to-many, many-to-one and ______.",
    options: ["a. Many-to-binary", "b. Many-to-many", "c. Binary-to-many", "d. Binary-to-one"],
    correct: [1],
    answerText: "b. Many-to-many",
    explanation: "The four mapping cardinalities are 1:1, 1:N, N:1, and M:N (Many-to-Many)."
  },
  {
    id: 58,
    week: 6,
    question: "Which of the following is/are the type of cohesion? (Select all that apply)",
    options: ["a. Temporal", "b. Functional", "c. Content", "d. All of the above"],
    correct: [0, 1],
    isMulti: true,
    answerText: "a. Temporal, b. Functional",
    explanation: "Temporal and Functional are types of Cohesion. 'Content' is a type of Coupling, not cohesion."
  },
  {
    id: 59,
    week: 6,
    question: "Which one from the following are related with between modules?",
    options: ["a. Cohesion", "b. Coupling", "c. Both"],
    correct: [1],
    answerText: "b. Coupling",
    explanation: "Coupling measures the degree of interdependence *between* modules. Cohesion measures functional relatedness *inside* a single module."
  },
  {
    id: 60,
    week: 6,
    question: "What is the full form of the DFD",
    options: ["a. Data flow design", "b. Data flow decision", "c. Data flow development", "d. Data flow diagram"],
    correct: [3],
    answerText: "d. Data flow diagram",
    explanation: "DFD stands for Data Flow Diagram."
  },

  // WEEK 07
  {
    id: 61,
    week: 7,
    question: "In procedural/functional design, system behavior is realized through:",
    options: ["a. Data", "b. Functions", "c. Objects", "d. Classes"],
    correct: [1],
    answerText: "b. Functions",
    explanation: "Functional/procedural decomposition views software as a collection of subroutines and functions transforming inputs into outputs."
  },
  {
    id: 62,
    week: 7,
    question: "In \"Object Oriented Design approach\", we do not consider \"services\" offered by system.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "In OOD, we decompose the domain into autonomous objects encapsulating data and behavior, rather than global procedural system 'services'."
  },
  {
    id: 63,
    week: 7,
    question: "A class contains attributes and __________.",
    options: ["a. Data", "b. Operations", "c. Objects"],
    correct: [1],
    answerText: "b. Operations",
    explanation: "A Class encapsulates state (attributes) and behavior (operations/methods)."
  },
  {
    id: 64,
    week: 7,
    question: "Attribute indicates nature of data that an object can contain.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Attributes specify the data types and properties held by instances of a class."
  },
  {
    id: 65,
    week: 7,
    question: "Full form of OOA is:",
    options: ["a. object oriented assignment", "b. object oriented assistance", "c. object oriented analysis", "d. object oriented attributes"],
    correct: [2],
    answerText: "c. object oriented analysis",
    explanation: "OOA stands for Object-Oriented Analysis."
  },
  {
    id: 66,
    week: 7,
    question: "______ effectively denotes the behavior of class.",
    options: ["a. Data", "b. Operations", "c. Objects", "d. Attributes"],
    correct: [1],
    answerText: "b. Operations",
    explanation: "Operations (methods/functions) define the dynamic behavioral capabilities of a class."
  },
  {
    id: 67,
    week: 7,
    question: "UML is a language to represent",
    options: ["a. OOP", "b. OOA", "c. OOD"],
    correct: [2],
    answerText: "c. OOD",
    explanation: "Unified Modeling Language (UML) is a visual specification language designed to represent Object-Oriented Design (OOD)."
  },
  {
    id: 68,
    week: 7,
    question: "UML is a design methodology",
    options: ["a. True", "b. False"],
    correct: [1],
    answerText: "b. False",
    explanation: "UML is a modeling, specification, and visualization language, NOT a design methodology or process."
  },
  {
    id: 69,
    week: 7,
    question: "Implementation view can be captured using _______.",
    options: ["a. Deployment diagram", "b. Component diagram", "c. Class diagram", "d. Use case diagram"],
    correct: [1],
    answerText: "b. Component diagram",
    explanation: "In UML's 5 architectural views: User View = Use Case; Behavioral View = Sequence/Activity; Structural View = Class/Object; Implementation View = Component Diagram; Environment View = Deployment Diagram."
  },
  {
    id: 70,
    week: 7,
    question: "______ objects normally hold information (e.g. book, book registers etc).",
    options: ["a. Boundary", "b. Controller", "c. Entity"],
    correct: [2],
    answerText: "c. Entity",
    explanation: "In domain modeling, Entity Objects encapsulate persistent real-world business data; Boundary Objects interface with actors; Controller Objects orchestrate interactions."
  },

  // WEEK 08
  {
    id: 71,
    week: 8,
    question: "Following standard coding guidelines helps to improve _____.",
    options: [
      "a. Readability only",
      "b. Understandability only",
      "c. Teamwork only",
      "d. Readability, understandability, and teamwork"
    ],
    correct: [3],
    answerText: "d. Readability, understandability, and teamwork",
    explanation: "Adhering to uniform coding standards ensures code readability, ease of understanding across developers, and smooth collaboration in engineering teams."
  },
  {
    id: 72,
    week: 8,
    question: "A function should have no longer than ____ lines of code.",
    options: ["a. 5", "b. 16", "c. 10", "d. 8"],
    correct: [2],
    answerText: "c. 10",
    explanation: "As an engineering rule of thumb taught in standard NPTEL software design guidelines, individual functions should ideally not exceed 10 lines of code."
  },
  {
    id: 73,
    week: 8,
    question: "What are some things to avoid when writing code? (Choose all that apply)",
    options: [
      "a. Using lengthy functions",
      "b. Using the same identifier for multiple purposes",
      "c. Using 'goto' (branching) statements indiscriminately",
      "d. Using proper indentation"
    ],
    correct: [0, 1, 2],
    isMulti: true,
    answerText: "a. Using lengthy functions, b. Using the same identifier for multiple purposes, c. Using 'goto' (branching) statements indiscriminately",
    explanation: "Lengthy functions, variable recycling, and unconstrained goto statements are anti-patterns that degrade maintainability. Proper indentation is a recommended best practice."
  },
  {
    id: 74,
    week: 8,
    question: "Two broad categories of code testing methods are review-based method and _________ method.",
    options: ["a. Manual testing", "b. Execution-based"],
    correct: [1],
    answerText: "b. Execution-based",
    explanation: "Testing is broadly partitioned into Review-Based Testing (static evaluation without executing binary) and Execution-Based Testing (dynamic runtime validation)."
  },
  {
    id: 75,
    week: 8,
    question: "What are the two common methods for review-based testing? (Choose all that apply)",
    options: ["a. Code inspection", "b. Code walkthrough", "c. Unit testing"],
    correct: [0, 1],
    isMulti: true,
    answerText: "a. Code inspection, b. Code walkthrough",
    explanation: "Static code reviews consist of Code Walkthroughs (informal team simulation) and Code Inspections (formal checklist verification). Unit testing is execution-based."
  },
  {
    id: 76,
    week: 8,
    question: "White-box testing refers to designing test cases using knowledge of internal structure of the software.",
    options: ["a. True", "b. false"],
    correct: [0],
    answerText: "a. True",
    explanation: "White-box (structural) testing designs test cases leveraging internal control flows, branches, and code logic."
  },
  {
    id: 77,
    week: 8,
    question: "How many members should be present in a code walkthrough team?",
    options: ["a. 2-3 members", "b. 3-5 members", "c. 5-7 members", "d. 7-10 members"],
    correct: [1],
    answerText: "b. 3-5 members",
    explanation: "An effective code walkthrough team consists of 3 to 5 members (including the author, moderator, and peer reviewers)."
  },
  {
    id: 78,
    week: 8,
    question: "Which of the following code testing method requires simulation of code execution by hand?",
    options: ["a. Code walkthrough", "b. Code inspection", "c. Black box testing", "d. White box testing"],
    correct: [0],
    answerText: "a. Code walkthrough",
    explanation: "In a Code Walkthrough, developers manually step through source statements by hand using sample test inputs."
  },
  {
    id: 79,
    week: 8,
    question: "Uninitialized variable is one of the common errors in programming that can be identified through code inspection.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Code inspection checklists specifically target static defects like uninitialized variables, infinite loops, and operator precedence faults."
  },
  {
    id: 80,
    week: 8,
    question: "Which of the following is not required to perform black box testing?",
    options: [
      "a. Equivalence class partitioning",
      "b. Boundary value analysis",
      "c. Test suite creation",
      "d. Knowledge of the internal structure of the code"
    ],
    correct: [3],
    answerText: "d. Knowledge of the internal structure of the code",
    explanation: "Black-box testing treats the system as an opaque box; it relies strictly on input/output specifications and requires zero knowledge of internal code structure."
  },

  // WEEK 09
  {
    id: 81,
    week: 9,
    question: "Set of all test cases with which a given software is to be tested is known as _______.",
    options: ["a. Testcase", "b. Test suite"],
    correct: [1],
    answerText: "b. Test suite",
    explanation: "A Test Suite is the comprehensive collection of all test cases designed to evaluate a software program."
  },
  {
    id: 82,
    week: 9,
    question: "Randomly selected test cases do not necessarily contribute to significance of test suite.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Randomly picking inputs often re-tests identical execution paths, swelling test size without increasing defect detection probability."
  },
  {
    id: 83,
    week: 9,
    question: "In black box testing the two main approaches to design test cases are: Equivalence class partitioning and ____________.",
    options: ["a. Structural analysis", "b. Boundary value analysis", "c. Equivalence class analysis", "d. System analysis"],
    correct: [1],
    answerText: "b. Boundary value analysis",
    explanation: "The two foundational techniques for black-box test design are Equivalence Class Partitioning (ECP) and Boundary Value Analysis (BVA)."
  },
  {
    id: 84,
    week: 9,
    question: "Testing code with any ____ value(s) of an equivalence class is as good as testing with ALL input values belonging to that class.",
    options: ["a. One", "b. Two", "c. Five", "d. Four"],
    correct: [0],
    answerText: "a. One",
    explanation: "The core postulate of ECP is that any single representative value from an equivalence class will expose the same errors as testing every value in that class."
  },
  {
    id: 85,
    week: 9,
    question: "In black box testing, domain of input values partitioned into sets, each sets are called _______.",
    options: ["a. Partition class", "b. Equivalence class", "c. Program class"],
    correct: [1],
    answerText: "b. Equivalence class",
    explanation: "The partitioned input sub-domains are called Equivalence Classes."
  },
  {
    id: 86,
    week: 9,
    question: "Which is/are from the following are valid review based testing (Select all that apply)",
    options: ["a. Code walkthrough", "b. Code inspection", "c. Code analysis", "d. Code assessment"],
    correct: [0, 1],
    isMulti: true,
    answerText: "a. Code walkthrough, b. Code inspection",
    explanation: "The two formal review-based testing techniques are Code Walkthrough and Code Inspection."
  },
  {
    id: 87,
    week: 9,
    question: "Set of all test cases with which a given software is to be tested is called test ____",
    options: ["a. Question", "b. Questionnaire", "c. Suite"],
    correct: [2],
    answerText: "c. Suite",
    explanation: "It is called a Test Suite."
  },
  {
    id: 88,
    week: 9,
    question: "In Black-box testing, the test cases are based on (Select all that apply)",
    options: ["a. input", "b. knowledge of design", "c. output", "d. knowledge of code"],
    correct: [0, 2],
    isMulti: true,
    answerText: "a. input, c. output",
    explanation: "Black-box test design operates strictly on input specifications and expected output behaviors."
  },
  {
    id: 89,
    week: 9,
    question: "Domain of input values partitioned into set is called equivalence class",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "True: Disjoint input partitions form equivalence classes."
  },
  {
    id: 90,
    week: 9,
    question: "Functional testing is related to",
    options: ["a. Black-box testing", "b. White-box testing"],
    correct: [0],
    answerText: "a. Black-box testing",
    explanation: "Functional testing validates functional behavior against specifications, making it black-box testing."
  },

  // WEEK 10
  {
    id: 91,
    week: 10,
    question: "To do a white-box testing, knowledge of internal structure is required.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "White-box testing explicitly requires access to source code and control flow architecture."
  },
  {
    id: 92,
    week: 10,
    question: "To understand white-box testing strategies, program (flow) visualization helps. To visualize the program we can take help of _______.",
    options: ["a. CFG", "b. DFD", "c. ERD", "d. Class diagram"],
    correct: [0],
    answerText: "a. CFG",
    explanation: "A Control Flow Graph (CFG) represents statements as nodes and control branching as directed edges."
  },
  {
    id: 93,
    week: 10,
    question: "To construct a CFG we assign numbers to all statements of the program, create a node in the CFG for each numbered statement and____________.",
    options: ["a. Complement the CFG", "b. Add edges", "c. Sort the nodes"],
    correct: [1],
    answerText: "b. Add edges",
    explanation: "Edges are added between statement nodes to represent potential transfers of control during execution."
  },
  {
    id: 94,
    week: 10,
    question: "Branch coverage guarantees statement coverage.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "By executing both True and False branches of every decision point, every statement contained within those branches is guaranteed to be executed."
  },
  {
    id: 95,
    week: 10,
    question: "In path coverage, test cases should ensure all _________ in the code executed at least once.",
    options: ["a. Linearly independent paths", "b. Linearly dependent paths"],
    correct: [0],
    answerText: "a. Linearly independent paths",
    explanation: "Path coverage requires executing all linearly independent paths through the program's CFG from entry to exit."
  },
  {
    id: 96,
    week: 10,
    question: "To compute cyclomatic complexity, we can use __________, where E=number of edges, N=number of nodes.",
    options: ["a. E-N+2", "b. E-N+1", "c. E+N-2", "d. E+N-1"],
    correct: [0],
    answerText: "a. E-N+2",
    explanation: "McCabe's Cyclomatic Complexity formula based on graph topology is V(G) = E - N + 2 (or V(G) = D + 1 where D is the count of decision predicate statements)."
  },
  {
    id: 97,
    week: 10,
    question: "Three main stages of system testing is alpha testing, beta testing and ________.",
    options: ["a. Gama testing", "b. Sigma testing", "c. Acceptance testing", "d. Omega testing"],
    correct: [2],
    answerText: "c. Acceptance testing",
    explanation: "System testing progresses through: 1. Alpha Testing (internal dev team), 2. Beta Testing (external friendly users), and 3. Acceptance Testing (conducted by client/customer for sign-off)."
  },
  {
    id: 98,
    week: 10,
    question: "Volume testing tests system performance for _____ input.",
    options: ["a. Small", "b. Large"],
    correct: [1],
    answerText: "b. Large",
    explanation: "Volume testing assesses system performance and stability under sustained massive volumes of data."
  },
  {
    id: 99,
    week: 10,
    question: "There are _____ stages of empirical research.",
    options: ["a. Three", "b. Four", "c. Five", "d. Six"],
    correct: [1],
    answerText: "b. Four",
    explanation: "The 4 stages of Empirical Research: 1. Identification of Research Questions/Hypotheses, 2. Determination of Variables & Scales, 3. Experiment Design, 4. Data Analysis."
  },
  {
    id: 100,
    week: 10,
    question: "Data we get from observation is _______ data.",
    options: ["a. Reflective", "b. Empirical", "c. Authoritative", "d. Experiential"],
    correct: [1],
    answerText: "b. Empirical",
    explanation: "Information gathered through direct observation and measurement in experiments is called Empirical data."
  },

  // WEEK 11
  {
    id: 101,
    week: 11,
    question: "When we perform a controlled experiment to collect and analyze data on user behavior, the entire process is known as __________.",
    options: ["a. programmable research", "b. hypothetical research", "c. empirical research", "d. theoretical research"],
    correct: [2],
    answerText: "c. empirical research",
    explanation: "Controlled experimentation on human user performance is termed Empirical Research."
  },
  {
    id: 102,
    week: 11,
    question: "There are broadly __________ stages of empirical research?",
    options: ["a. Two", "b. three", "c. four", "d. five"],
    correct: [2],
    answerText: "c. four",
    explanation: "There are four stages: Question/Hypothesis Formulation, Variable/Scale Selection, Experiment Design, and Statistical Analysis."
  },
  {
    id: 103,
    week: 11,
    question: "Suppose we formed two research questions: RQ1: Is the new technique good? RQ2: Is our text input interface better than the text input interface provided by, say, MS Word? RQ3: Does the new interface let me enter text \"faster\" than MS Word? We call RQ3 __________ and RQ1 as ____________.",
    options: ["a. testable, non-testable", "b. alternative hypothesis, null hypothesis"],
    correct: [0],
    answerText: "a. testable, non-testable",
    explanation: "RQ3 ('faster', measurable in Characters Per Minute / CPM) is concrete and testable. RQ1 ('good', subjective and vague) is non-testable."
  },
  {
    id: 104,
    week: 11,
    question: "When we form a hypothesis, essentially stating that the test condition is not going to affect the outcome (judgment). This hypothesis is called __________.",
    options: ["a. null hypothesis", "b. alternative hypothesis"],
    correct: [0],
    answerText: "a. null hypothesis",
    explanation: "The Null Hypothesis (H0) states that there is no difference or effect caused by the treatment. In research, we seek to refute/reject H0."
  },
  {
    id: 105,
    week: 11,
    question: "In ________, we assign some (arbitrary) codes to attributes of observational data.",
    options: ["a. nominal", "b. ordinal", "c. interval", "d. ratio"],
    correct: [0],
    answerText: "a. nominal",
    explanation: "Nominal scales assign arbitrary categorical labels or codes (e.g. 1 = Male, 2 = Female) without inherent numerical order or mathematical ranking."
  },
  {
    id: 106,
    week: 11,
    question: "Recording data from a thermometer is an example of interval scaled data.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Temperature in °C or °F has equal metric intervals but an arbitrary zero point (0° does not mean absence of temperature), which classifies it as Interval data."
  },
  {
    id: 107,
    week: 11,
    question: "__________ are variables that influence both the independent and dependent variables in a study, potentially leading to incorrect conclusions about the relationship between the two.",
    options: ["a. Dependent variables", "b. Independent variables", "c. Confounding variables", "d. Control variables"],
    correct: [2],
    answerText: "c. Confounding variables",
    explanation: "Confounding variables are extraneous uncontrolled factors (like the learning/practice effect) that distort the observed relationship between independent and dependent variables."
  },
  {
    id: 108,
    week: 11,
    question: "For any pilot study (or small-scale studies), 5 is probably a good number.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "For exploratory or pilot usability studies, 5 participants generally suffice to discover early critical issues."
  },
  {
    id: 109,
    week: 11,
    question: "To draw reliable conclusions from empirical data, we should use between __________ and __________ participants.",
    options: ["a. 1, 5", "b. 2, 5", "c. 12, 25", "d. 10, 12"],
    correct: [2],
    answerText: "c. 12, 25",
    explanation: "Formal empirical research in HCI requires 12 to 25 participants to achieve adequate statistical power and reliable generalizations."
  },
  {
    id: 110,
    week: 11,
    question: "When we distribute the tasks to participants in the way explained above, we call the study as __________. (Participants divided into disjoint groups, each exposed to a distinct subset)",
    options: ["a. between-subject", "b. within-subject", "c. uni-subject", "d. center-subject"],
    correct: [0],
    answerText: "a. between-subject",
    explanation: "In Between-Subject designs, participants are separated into distinct groups testing different conditions, eliminating practice/learning interference between conditions."
  },

  // WEEK 12
  {
    id: 111,
    week: 12,
    question: "With the significance test, we try to ____________ the null hypothesis.",
    options: ["a. Accept", "b. Refute"],
    correct: [1],
    answerText: "b. Refute",
    explanation: "Statistical significance tests (like t-tests) aim to refute/reject the Null Hypothesis (H0) with high confidence (p < 0.05), thereby supporting the Alternative Hypothesis (H1)."
  },
  {
    id: 112,
    week: 12,
    question: "Type I error is also known as ____________.",
    options: ["a. False positive", "b. False negative", "c. True positive", "d. True negative"],
    correct: [0],
    answerText: "a. False positive",
    explanation: "Type I Error (Alpha, α) is a 'False Positive': rejecting the null hypothesis when it is actually true."
  },
  {
    id: 113,
    week: 12,
    question: "t-statistic is the ONLY way to test for statistical significance.",
    options: ["a. True", "b. False"],
    correct: [1],
    answerText: "b. False",
    explanation: "False: ANOVA, Chi-Square, Wilcoxon, Mann-Whitney U, and Kruskal-Wallis are other parametric and non-parametric significance tests."
  },
  {
    id: 114,
    week: 12,
    question: "There are broadly two categories of the techniques for significance test: ____________ and __________.",
    options: ["a. Parametric and Non-parametric", "b. t-test and non t-test"],
    correct: [0],
    answerText: "a. Parametric and Non-parametric",
    explanation: "Significance tests divide into Parametric tests (assumes Gaussian normal distribution and interval/ratio scales) and Non-Parametric tests (distribution-free)."
  },
  {
    id: 115,
    week: 12,
    question: "Project planning involves estimation of Project size, Cost, Duration and Effort.",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Comprehensive software project planning requires estimating software size (LoC / FP), effort (Person-Months), duration (calendar months), and total cost."
  },
  {
    id: 116,
    week: 12,
    question: "COCOMO stands for ____________.",
    options: [
      "a. Conducive Cost Estimation Model",
      "b. Constructive Cost Estimation Model",
      "c. Constructive Category Estimation Model",
      "d. Conducive Category Estimation Model"
    ],
    correct: [1],
    answerText: "b. Constructive Cost Estimation Model",
    explanation: "COCOMO stands for Constructive Cost Estimation Model, developed by Barry Boehm in 1981."
  },
  {
    id: 117,
    week: 12,
    question: "According to Boehm, software cost estimation should be done through ____________ stages.",
    options: ["a. Two", "b. Three", "c. Four", "d. Five"],
    correct: [1],
    answerText: "b. Three",
    explanation: "Boehm proposed three complexity tiers of COCOMO: Basic COCOMO, Intermediate COCOMO, and Complete (Detailed) COCOMO."
  },
  {
    id: 118,
    week: 12,
    question: "Agile development ensure quick turn-around of projects",
    options: ["a. True", "b. False"],
    correct: [0],
    answerText: "a. True",
    explanation: "Agile emphasizes short iterative sprint cycles (typically 4 to 6 weeks) delivering working increments rapidly."
  },
  {
    id: 119,
    week: 12,
    question: "Scrum is a __________ method.",
    options: ["a. Traditional SDLC", "b. Agile"],
    correct: [1],
    answerText: "b. Agile",
    explanation: "Scrum is the most widely adopted lightweight Agile process framework."
  },
  {
    id: 120,
    week: 12,
    question: "In a Gantt chart the length is proportional to _________ for activity",
    options: ["a. Duration planned", "b. Effort", "c. Cost"],
    correct: [0],
    answerText: "a. Duration planned",
    explanation: "In a Gantt chart (developed by Henry Gantt), the horizontal length of each bar is directly proportional to the planned calendar duration of the task."
  }
];

const NPTEL_UNITS = [
  {
    id: 1,
    title: "Unit 1: Foundations of Interactive Systems & Usability",
    summary: "Historical milestones (1950 SAGE to modern era), UCD 4 Pillars, ISO 9241-210 standard, Nielsen's 5 Quality Attributes.",
    content: `
### Concept of Interactive Systems & Computers
* **Interactive Software:** Computer software that facilitates real-time interaction between the system and human users.
* **Engineering Interactive Systems:** Systematic design, development, and implementation of usable software.
* **Definition of Computer (Oxford English Dictionary):** An electronic device capable of receiving information/data in a particular form and performing a sequence of operations in accordance with a predetermined but variable set of procedural instructions (program) to produce results as information or signals.
* **Pedometer as a Computer:** Distinguishes between walking and standing, counts steps across varying speeds, stores a conversion formula, and computes distance from step count.
* **User Base:** Interactive systems are used primarily by laymen (non-technology experts).
* **User-Centric Design (UCD) Goal:** System design must not force users to understand the underlying technical architecture. Interfaces must avoid inducing anxiety or demotivation caused by unexpected states.

#### Four Pillars of User-Centric Design
1. Design elements acceptable to users.
2. Geometric layouts meeting user expectations.
3. Clear perception of the current system state.
4. Interaction flows that guide the user to desired system states.

### Historical Evolution of HCI
* **Pre-History Phase (1940s–1970s):**
  * **1950:** Video Display Units via the SAGE system (introduced light pen input).
  * **1963:** Sketchpad by Ivan Sutherland (pioneered GUI and direct computer interaction).
  * **1968:** NLS (oN-Line System) by Douglas Engelbart (introduced the computer mouse).
  * **1971:** First commercial microprocessor released (Intel 4004).
  * **1972:** Dynabook concept by Alan Kay.
* **Early Phase (1980s–Early 2000s):**
  * **Early PCs:** Xerox Alto (1973), Altair 8800 (1974), Apple I (1976), Apple II (1977).
  * **1981:** IBM PC (first commercially successful PC).
  * **1981:** Xerox Star (pioneered commercial GUI, WYSIWYG editing, desktop metaphors).
  * **1982:** Direct Manipulation conceptualized by Ben Shneiderman.
  * **1984:** Apple Macintosh.
  * **1989:** World Wide Web (WWW) invented by Tim Berners-Lee.
  * **1993:** Mosaic web browser released.
* **Pre-Modern Phase (Late 1990s–2010):**
  * **1996:** Palm Pilot (Personal Digital Assistant / PDA).
  * **1996:** Nokia 9000 Communicator (merged PDA and cellular telephony).
  * **2008:** Android 1.0 launched.
* **Modern Phase (2011–Present):**
  * Era of interconnected and ubiquitous computing.
  * **1991:** Ubiquitous Computing coined by Mark Weiser.
  * **1999:** Internet of Things (IoT) coined by Kevin Ashton.
  * **2006:** Cyber-Physical Systems (CPS) coined by Helen Gill.

### Usability Definitions & Standards
* **HCI Definition (ACM SIGCHI):** A discipline concerned with the design, evaluation, and implementation of interactive computing systems for human use and with the study of major phenomena surrounding them.
* **ISO 9241-210:2009 Definition:** The extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency, and satisfaction in a specified context of use.
* **Jacob Nielsen's Usability Framework (2012):** A product must possess Utility (functional capacity) and Usability (practical ease of use) to be useful. (ISO "effectiveness" maps to Nielsen's "utility").

#### Nielsen's 5 Usability Quality Attributes
1. **Learnability:** Ease with which a novice user performs basic tasks on first exposure.
2. **Efficiency:** Speed and productivity with which proficient users execute tasks.
3. **Memorability:** Ease with which an intermittent user re-establishes proficiency after non-use.
4. **Errors:** Error frequency rate, severity of errors, and ease of error recovery.
5. **Satisfaction:** Perceived subjective pleasantness of using the design.
`
  },
  {
    id: 2,
    title: "Unit 2: Interactive Software Engineering Life Cycles",
    summary: "Waterfall limitations, Boehm's Spiral Model 4 Quadrants, ISDLC rapid inner Design-Prototype-Evaluate loop.",
    content: `
### Classical vs. Interactive Life Cycles
* **Classical Waterfall Model Stages:**
  1. Feasibility Study
  2. Requirement Gathering, Analysis, and Specification
  3. System Design
  4. Coding and Unit Testing
  5. Integration and System Testing
  6. Deployment & Maintenance
* **Limitation of Waterfall in UCD:** Lacks flexibility for frequent user feedback loops; focuses almost entirely on system/algorithmic efficiency rather than usability.

### Spiral Model (Boehm)
A risk-driven meta-model where each iteration encompasses four quadrants:
* **Quadrant 1:** Identify objectives and alternative constraints; identify risks.
* **Quadrant 2:** Risk analysis, assessment, and mitigation (e.g., prototyping).
* **Quadrant 3:** Product/prototype development and unit testing.
* **Quadrant 4:** Customer review, evaluation, and planning for the next spiral cycle.

### Human-Computer Interface Development Life Cycle (ISDLC)
* Embeds an inner, rapid **Design-Prototype-Evaluate Loop** before extensive coding.
* Separates code testing (verifying functional correctness against specifications) from empirical usability testing (verifying user performance with actual end users).
* **Cost Rule:** Loops outside the rapid design-prototype-evaluate stage must be minimized to avoid high resource and manpower overhead.

\`\`\`
Feasibility Study 
  ↓
Requirement Gathering (Contextual Inquiry / Usability NFRs)
  ↓
+---->[ Interface & Code Design ]
|         ↓
|       [ Prototyping ]
|         ↓
+------ [ Evaluation ] (Heuristics / Cognitive Walkthrough)
          ↓ (Once interface design stabilizes)
Coding & Unit Testing
  ↓
Integration & System Testing (Empirical Usability Study)
  ↓
Deployment & Maintenance
\`\`\`

### Functional vs. Non-Functional Requirements
* **System-Centered Design (SCD):** Driven by platform tools, ease of programming, and developer interest.
* **User-Centered Design (UCD):** Driven by user capabilities, operational context, and real-world task goals.
* **Non-Functional Requirements (NFR) Categories:** Performance, Operating Constraints, Economic, Life-Cycle, Interface & Usability.
`
  },
  {
    id: 3,
    title: "Unit 3: Requirement Gathering & Contextual Inquiry",
    summary: "Ethnographic CI method, Master-Apprentice model, 5 Stages of CI, Affinity Diagramming 5 steps, SRS format.",
    content: `
### Contextual Inquiry (CI)
* **Definition:** A semi-structured ethnographic interview and observation technique conducted within the user's natural work environment.
* **Core Philosophy:** **Observer as Apprentice, User as Master.** The interviewer's role is to learn, not teach or correct.
* **Duration:** Typically 1 to 2 hours per session.
* **Operational Modes:**
  * **Active Mode:** Observer is physically present, observing and asking real-time clarifying questions.
  * **Passive Mode:** Activities are recorded (video/audio/logs) without immediate interruption and analyzed post-session.

#### The 5 Stages of Contextual Inquiry
1. **Plan:** Identify observation goals, understand domain, schedule users/locations, prepare scripts.
2. **Initiate:** Obtain official clearances, communicate with end users to alleviate anxiety.
3. **Execute:** Observe users performing natural tasks, record objective qualitative and quantitative data.
4. **Close:** Summarize notes with the user, send formal thank-you notes.
5. **Reflect:** Analyze findings, identify usability breakdowns, generate design requirements.

### Affinity Diagramming
A collaborative inductive analysis method used to structure large volumes of qualitative observations into hierarchical groupings.
* **5 Sequential Steps:**
  1. *Generate Ideas/Observations:* Write distinct observations on individual sticky notes.
  2. *Display Ideas:* Place all notes randomly across a shared surface.
  3. *Sort into Groups:* Cluster notes based on natural relationships and common affinities.
  4. *Create Group Headers:* Assign descriptive, meaningful category labels to each cluster.
  5. *Draw Finished Diagram:* Connect and document the finalized hierarchical visual structure.

### Functional Requirement Specification (SRS Format)
* **Principle:** Maintain strict abstraction: Define **WHAT** the system must do, never **HOW** to implement it.
* **Template Structure:** Identifier (Rx), Function Name (verb-noun), Input, Output, Description.
`
  },
  {
    id: 4,
    title: "Unit 4: Interaction Design Principles & Models",
    summary: "Shneiderman's Eight Golden Rules, Norman's 7 Stages of Action, Gulf of Execution vs. Evaluation, Slips vs. Mistakes.",
    content: `
### Shneiderman’s Eight Golden Rules (1986)
1. **Strive for Consistency:** Uniform terminology, layouts, colors, fonts, and action sequences.
2. **Design for Universal Usability:** Cater to novices, intermittent users, and experts (e.g., hotkeys vs. menus).
3. **Offer Informative Feedback:** Immediate visual/auditory responses for every user action.
4. **Design Dialogues to Yield Closure:** Interactions have a clear beginning, middle, and end with terminal feedback.
5. **Offer Error Prevention and Simple Error Handling:** Gray out invalid choices, clear recovery steps.
6. **Permit Easy Reversal of Actions:** Include standard Undo/Redo mechanisms to relieve exploratory anxiety.
7. **Keep Users in Control:** User remains the initiator of actions rather than feeling dictated to.
8. **Reduce Short-Term Memory Load:** Adhere to George Miller’s rule of 7 ± 2 chunks of cognitive capacity.

### Norman’s Model & 7 Stages of Action (1988)
Human-computer interaction is a continuous loop across Execution and Evaluation:

\`\`\`
                    Goal (Establish Goal)
                    /                   \\
            [EXECUTION]               [EVALUATION]
          Intention to act           Perceive system state
                 ↓                            ↑
         Sequence of actions          Interpret perception
                 ↓                            ↑
         Execution of actions         Evaluate against goal
                    \\                   /
                    Physical System Interface
\`\`\`

#### The 7 Stages:
* **Execution Phase:** 1. Establishing Goal (Mental), 2. Forming Intention (Mental), 3. Specifying Action Sequence (Mental), 4. Executing Action via motor controls (Physical).
* **Evaluation Phase:** 5. Perceiving System State (Sensory), 6. Interpreting Perception (Mental), 7. Evaluating Interpretation against Goal (Mental).

#### The Two Gulfs:
* **Gulf of Execution:** Psychological distance between user's internal goals/intentions and physical actions allowed by interface.
* **Gulf of Evaluation:** Psychological distance between physical system state presentation and user's mental interpretation of goal fulfillment.

#### Error Typology:
* **Slip:** Correct goal and plan, but physical action executed incorrectly (e.g., typos, clicking wrong button). *Remedy: Better affordances, constraints, undo.*
* **Mistake:** Incorrect goal or flawed plan formed due to faulty mental model. *Remedy: Better transparency, explanations, guidance.*
`
  },
  {
    id: 5,
    title: "Unit 5: Prototyping Strategies & Evaluation Methods",
    summary: "Horizontal vs Vertical prototypes, Wizard of Oz, Cognitive Walkthrough, Nielsen's 10 Heuristics, ASQ & SUS formulas.",
    content: `
### Prototyping Dimensions & Categorization
* **Horizontal Prototype:** Broad surface-level interface coverage without backend logic. Tests screen layouts, information architecture, navigation.
* **Vertical Prototype:** Implements a narrow selection of features deeply from top UI to bottom backend database logic. Tests interaction sequences and latency.
* **Fidelity Levels:**
  * *Low Fidelity:* Paper mock-ups, sketches, cardboard. Cheap, disposable.
  * *Medium Fidelity:* Interactive wireframes (Figma, slide mockups). Simulates transitions without production code.
  * *High Fidelity:* Functional programmatic code (React, Java Swing, Qt). High development cost; matches final look and logic.
* **Wizard of Oz:** Participant interacts with an apparently autonomous system secretly operated by a hidden human 'wizard' (e.g., IBM 1984 Listening Typewriter).

### Expert Evaluation Methods (3-5 Evaluators)
* **Cognitive Walkthrough:** Task- and scenario-based. Asks 4 core questions:
  1. Will the user try to achieve the right effect?
  2. Will the user notice that the correct action/control is available?
  3. Will the user associate the correct control with their desired intent?
  4. If the correct action is performed, will the user see progress toward goal completion (feedback)?
* **Heuristic Evaluation:** Scenario-independent checklist against Nielsen's 10 Heuristics (1994):
  1. Visibility of system status
  2. Match between system and real world
  3. User control and freedom (emergency exits, undo)
  4. Consistency and standards
  5. Error prevention
  6. Recognition rather than recall
  7. Flexibility and efficiency of use (accelerators)
  8. Aesthetic and minimalist design
  9. Help users recognize, diagnose, and recover from errors
  10. Help and documentation

### Self-Report Usability Metrics
* **ASQ (After-Scenario Questionnaire):** Post-task questionnaire with 3 items scored on a 7-point Likert scale (Effectiveness, Efficiency, Satisfaction).
* **SUS (System Usability Scale):** 10 statements alternating positive (odd) and negative (even) on a 5-point Likert scale:
  * For positive statements: $C_i = R_i - 1$
  * For negative statements: $C_i = 5 - R_i$
  * Composite Score: $S = \\left(\\sum_{i=1}^{10} C_i\\right) \\times 2.5$ (Yields 0 to 100).
  * **Benchmark:** $S \\ge 70$ indicates acceptable usability.
`
  },
  {
    id: 6,
    title: "Unit 6: Converting Interface to System Design (DFD & ERD)",
    summary: "System design phases, Cohesion (7 levels) vs Coupling (worst: Content, safest: Data), DFD rules, Peter Chen's ERD.",
    content: `
### System Design Fundamentals
* **Design Transition:** Rapid design-prototype-evaluate loop caters to interface design. Once the interface stabilizes, engineering transitions to system (code) design.
* **Two Phases:**
  * *Preliminary (High-Level) Design:* Identifies modules, control relationships, and module interfaces.
  * *Detailed Design:* Specifies module-level algorithms and data structures.

### Cohesion and Coupling
* **Core Rule:** **High Cohesion** within modules + **Low Coupling** between modules = robust, modular system.
* **Cohesion Spectrum (Worst to Best):** Coincidental → Logical → Temporal → Procedural → Communicational → Sequential → Functional.
* **Coupling Spectrum (Worst/Tightest to Safest):**
  * *Content Coupling (Worst):* One module directly modifies or branches into the internal code of another.
  * *Control Coupling:* One module passes flags that control the internal logic flow of another.
  * *Data Coupling (Safest):* Modules communicate strictly via simple, primitive data arguments.

### Data Flow Diagrams (DFD)
* **Components:** External Entity (Source/Sink, Rectangle), Process (Circle/Bubble, Verb Phrase), Data Store (Open/Parallel Lines, Noun), Data Flow (Directed Arrow, Noun).
* **Critical Rules:**
  * A process must have at least one incoming and one outgoing flow.
  * Data stores cannot generate data autonomously.
  * **Illegal Flows:** Entity ↔ Entity, Entity ↔ Data Store, Data Store ↔ Data Store (all require a Process in between).
* **Decomposition:**
  * *Level 0 (Context Diagram):* 1 process, external entities, **NO data stores shown**.
  * *Level 1 (Overview Diagram):* Central process decomposed into sub-processes; data stores appear for the first time.
  * *Level 2:* Detailed breakdown of sub-processes.

### Entity-Relationship Diagrams (ERD)
* Proposed by Peter Chen (1976).
* Rectangle = Entity; Ellipse = Attribute; Diamond = Relationship.
* Double Ellipse = Multi-valued Attribute; Dashed Ellipse = Derived Attribute.
`
  },
  {
    id: 7,
    title: "Unit 7: Object-Oriented Design (OOD) & UML",
    summary: "Procedural vs OOD, UML 5 views & 9 diagrams, Domain modeling (Boundary, Controller, Entity), Aggregation vs Composition.",
    content: `
### Procedural vs. Object-Oriented Paradigm
* **Procedural:** Software viewed as a provider of 'services' executed through subroutines.
* **Object-Oriented Design (OOD):** Software viewed as an ecosystem of autonomous objects encapsulating data (attributes) and behavior (operations).
* **UML Nature:** UML is an artifact specification and visualization language, **NOT a design methodology**.

### 5 Views & 9 Diagrams of UML
1. **User View:** Use Case Diagram.
2. **Behavioral View:** Sequence, Collaboration, State Chart, and Activity Diagrams.
3. **Structural View:** Class and Object Diagrams.
4. **Implementation View:** Component Diagram.
5. **Environment View:** Deployment Diagram.

### Domain Modeling
* **Boundary Objects:** Elements with which actors interact directly (input forms, screens, menus).
* **Controller Objects:** Coordinate business actions and message routing between boundary and entity objects.
* **Entity Objects:** Store persistent data and business logic (e.g., Book, Member, Account).

### Class Relationships
* **Association:** Standard connection (solid line, multiplicity 1..*).
* **Aggregation:** Specialized 'whole-part' where parts can exist independently of the whole (rendered with a **hollow diamond ◇** at the whole end).
* **Composition:** Strict 'whole-part' where parts are existence-dependent on the whole; destroying the whole destroys the parts (rendered with a **solid filled diamond ◆** at the whole end).
`
  },
  {
    id: 8,
    title: "Unit 8: System Implementation & Code Testing Basics",
    summary: "Coding guidelines (10 lines rule, 1 comment per 3 lines), Walkthrough (informal, 3-5 people) vs Inspection (formal checklist).",
    content: `
### Professional Coding Guidelines
* **Readability:** Clean indentation and clear naming over cryptic one-liners.
* **Comment Standard:** Rule of thumb: At least **1 concise explanatory comment for every 3 lines of source code**.
* **Function Length Constraint:** Functions should ideally **not exceed 10 lines of code**.
* **Practices to Avoid:** Indiscriminate \`goto\` statements, cryptic abbreviations, reusing temporary variables for different purposes across routines, obscure side effects.

### Testing Dimensions
* **Fundamental Limitation:** Exhaustive testing of all possible input combinations is practically impossible because input domains are infinite.
* **Formal Test Case Triplet:** $[I, S, O]$ where $I =$ Input Data, $S =$ System State at execution, $O =$ Expected Output.
* **Test Suite:** Complete set of all test cases designed to test a program.

### Review-Based Testing (Static Evaluation)
* **Code Walkthrough:** Informal peer review (3 to 5 members). Team manually steps through source code by hand with sample inputs. Focuses on finding errors, not fixing them. (HCI analogue: Cognitive Walkthrough).
* **Code Inspection:** Formal checklist inspection verifying adherence to coding standards and checking for typical faults (uninitialized variables, infinite loops, memory leaks). (HCI analogue: Heuristic Evaluation).
`
  },
  {
    id: 9,
    title: "Unit 9: Execution-Based Black-Box Testing",
    summary: "Equivalence Class Partitioning (ECP) with [0, 5000] worked example, Boundary Value Analysis (BVA) test points.",
    content: `
### Black-Box vs. White-Box Concepts
* **Black-Box (Functional) Testing:** Designed purely against input/output specifications with zero knowledge of internal code or control logic.
* **White-Box (Structural) Testing:** Derived using knowledge of internal control flow paths, loops, and data branches.

### Equivalence Class Partitioning (ECP)
* Partitions the input domain into disjoint equivalence classes such that testing any single value from a partition is assumed to produce the same result as testing with all values in that partition.
* A robust suite must draw at least one representative test case from each valid and invalid class.

#### Worked Example: Square Root Function for $[0, 5000]$
* *Incorrect Strategy:* A single class $[0, 5000]$ (misses negative and overflow inputs).
* *Correct ECP (3 Partitions):*
  * **Class 1 (Invalid):** Integers $< 0$ (e.g., input $-5$).
  * **Class 2 (Valid):** Integers in $[0, 5000]$ (e.g., input $500$).
  * **Class 3 (Invalid):** Integers $> 5000$ (e.g., input $6000$).

### Boundary Value Analysis (BVA)
* Rationale: Programmers make the most mistakes at the extreme edges due to off-by-one errors (e.g., confusing $<$ with $\\le$).
* Evaluates exact boundaries along with values immediately above and below.
* **BVA Applied to $[0, 5000]$ Range:**
  * Lower Boundary: $-1$ (just below) and $0$ (exact).
  * Upper Boundary: $5000$ (exact) and $5001$ (just above).
  * Test Suite Values: $\\{-1, 0, 5000, 5001\\}$ alongside mid-range values.
`
  },
  {
    id: 10,
    title: "Unit 10: Structural (White-Box) Testing & System Testing",
    summary: "CFG construction, Coverage hierarchy (Statement < Branch < Condition < Path), McCabe's V(G) = E - N + 2 = D + 1, System Testing stages.",
    content: `
### Control Flow Graph (CFG) & Code Coverage
* **CFG Construction:** Number statements chronologically (each forms a node). Connect nodes with directed edges when execution transfers.
* **Control Structures:**
  * Sequence: $1 \\to 2$.
  * Selection (if-else): Node splits into 2 branch edges that converge downstream.
  * Iteration (while): Edge routes back to loop condition node, exit edge bypasses body.

#### Coverage Hierarchy (Strength Comparison):
1. **Statement Coverage (Weakest):** Ensures every statement is executed at least once.
2. **Branch Coverage (Edge Testing):** Requires each decision condition to evaluate to both True and False at least once. **Branch coverage guarantees Statement Coverage.**
3. **Condition Coverage:** Requires every atomic boolean sub-condition in a composite expression to evaluate to both True and False ($2^n$ test cases for $n$ atomic components). **Condition coverage guarantees Branch Coverage.**
4. **Path Coverage (Strongest):** Executes all linearly independent paths from start to finish.

### McCabe's Cyclomatic Complexity
Provides an upper bound on the number of linearly independent paths:
* **Edge-Node Formula:** $V(G) = E - N + 2$ ($E =$ edges, $N =$ nodes).
* **Decision Points Formula:** $V(G) = D + 1$ ($D =$ number of decision/predicate statements).
* *Example (GCD/Subtraction):* $E = 7, N = 6, D = 2 \\implies V(G) = 7 - 6 + 2 = 3$ or $2 + 1 = 3$.

### Integration & System Testing Strategies
* **Top-Down Integration:** Starts from main routine/skeleton. Requires **Stubs** (simulates lower-level subroutines).
* **Bottom-Up Integration:** Starts from lowest-level modules. Requires **Drivers** (simulates calling routines).
* **Stages of System Testing:** Alpha (in-house dev team) → Beta (recruited external users) → Acceptance (client contract sign-off).
`
  },
  {
    id: 11,
    title: "Unit 11: Empirical Research & Experiment Design",
    summary: "4 Stages of empirical research, Stevens' 4 Scales (Nominal, Ordinal, Interval, Ratio), Within vs Between subjects, Latin Square.",
    content: `
### Four Stages of Empirical Research
1. Identification of Research Questions / Hypotheses
2. Determination of Variables and Measurement Scales
3. Experiment Design (Subject selection, task design, allocation)
4. Analysis of Empirical Data (Statistical inference)

### Research Questions & Hypotheses
* **Testable vs Untestable:** Vague questions ('Is it good?') are untestable. Concrete questions ('Does it achieve faster Text Entry Rate in CPM?') are testable.
* **Null Hypothesis ($H_0$):** States test condition has no significant effect. Research goal: **Reject/refute $H_0$**.
* **Alternative Hypothesis ($H_1$):** States test condition has a significant effect.

### Stevens' 4 Scales of Measurement
1. **Nominal:** Categorical labels; arbitrary numeric codes; no mathematical ranking (e.g., Gender: 1=Male, 2=Female; Interface type).
2. **Ordinal:** Establishes order/ranking; interval distances between ranks are unequal or unknown (e.g., 1st, 2nd, 3rd; Likert ratings).
3. **Interval:** Ordered values with equal uniform metric spacing, but an **arbitrary zero point** (e.g., Temperature in °F/°C).
4. **Ratio:** Most sophisticated; equal intervals with an **absolute, non-arbitrary zero point** (e.g., Text entry rate in CPM, Task completion time in seconds).

### Task Allocation & Sizing
* **Sample Size:** 5 participants for pilot studies; **12 to 25 participants** for formal empirical research.
* **Within-Subject (Repeated Measures):** Every participant tests all conditions. Fewer participants needed; vulnerable to fatigue and practice effects.
* **Between-Subject:** Participants split into disjoint groups. Eliminates practice effect; requires much larger participant pool.
* **Counterbalancing:** Mitigate practice effect using **Latin Square Method** ($N \\times N$ matrix where each condition appears once per row and once per column).
`
  },
  {
    id: 12,
    title: "Unit 12: Statistical Data Analysis, Agile & Project Management",
    summary: "Significance threshold (p < 0.05), Type I vs II errors, Parametric conditions, COCOMO model equations & modes, Agile/Scrum.",
    content: `
### Inferential Statistics & Hypothesis Testing
* **Statistical Significance Metric:** Threshold $p < 0.05$ (Alpha level). Meaning: Probability that observed difference occurred by pure chance is $< 5\\%$ ($95\\%$ confidence that difference is caused by experimental treatment).
* **Reporting Format:** $t(df) = t\\text{-value}, p < 0.05$ (where $df = N - 1$).

#### Statistical Decision Errors:
| Decision | True Reality: $H_0$ is TRUE | True Reality: $H_0$ is FALSE |
| :--- | :--- | :--- |
| **Reject $H_0$** | **Type I Error ($\\alpha$ / False Positive)** | **Correct Decision (High Power)** |
| **Fail to Reject $H_0$** | **Correct Decision** | **Type II Error ($\\beta$ / False Negative)** |

* **3 Mandatory Conditions for Parametric Tests (t-test):**
  1. Data follows Normal (Gaussian) Distribution (tested with Shapiro-Wilk or Kolmogorov-Smirnov).
  2. Dependent variable measured on at least an Interval scale (Ratio preferred).
  3. Variance across test groups approximately equal (Homogeneity of Variance).
  *(If violated, use Non-Parametric tests like Mann-Whitney U or Wilcoxon).*

### Software Cost Estimation & COCOMO (Boehm 1981)
Equations:
$$\\text{Effort} = a \\times (\\text{KLoC})^{a_1} \\quad [\\text{Person-Months / PM}]$$
$$T_{dev} = b \\times (\\text{Effort})^{b_1} \\quad [\\text{Months}]$$

| Project Mode | Environmental Profile | $a$ | $a_1$ | $b$ | $b_1$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Organic** | Small teams, routine problem domain, highly experienced staff | 2.4 | 1.05 | 2.5 | 0.38 |
| **Semidetached** | Medium-sized team, mixed experience, medium constraints | 3.0 | 1.12 | 2.5 | 0.35 |
| **Embedded** | Stringent operational regulations, complex hardware coupling | 3.6 | 1.20 | 2.5 | 0.32 |

### Project Scheduling & Agile
* **Gantt Chart:** Horizontal bar chart where length is proportional to planned calendar duration.
* **PERT Chart:** 3 probabilistic estimates: Optimistic, Likely, Pessimistic durations.
* **Agile Philosophy:** Rapid turnarounds, 4-6 week sprint cycles, daily standups, working software demos, continuous client feedback.
`
  }
];

const HIGH_YIELD_TABLES = [
  {
    category: "High-Yield NPTEL Exam Reference",
    rows: [
      { metric: "Cyclomatic Complexity (Graph)", formula: "V(G) = E - N + 2", significance: "Edge (E) and Node (N) topology" },
      { metric: "Cyclomatic Complexity (Decisions)", formula: "V(G) = D + 1", significance: "D = number of decision statements" },
      { metric: "Condition Coverage Test Cases", formula: "2^n", significance: "n = number of atomic boolean conditions" },
      { metric: "Top-Down Integration Aid", formula: "Stubs", significance: "Replaces unwritten lower subroutines" },
      { metric: "Bottom-Up Integration Aid", formula: "Drivers", significance: "Replaces unwritten upper caller routines" },
      { metric: "Alpha vs. Beta Testing", formula: "Alpha = In-house, Beta = Recruited users", significance: "Internal vs. external pre-release test" },
      { metric: "Parametric Normality Tests", formula: "Shapiro-Wilk / Kolmogorov-Smirnov", significance: "Checks for Gaussian normal distribution" },
      { metric: "Standard Statistical Significance", formula: "p < 0.05 (Alpha level)", significance: "< 5% probability observed effect is chance" },
      { metric: "Type I Error (α)", formula: "False Positive", significance: "Incorrectly rejecting a true null hypothesis" },
      { metric: "Type II Error (β)", formula: "False Negative", significance: "Failing to reject a false null hypothesis" },
      { metric: "Counterbalancing Method", formula: "Latin Square Matrix", significance: "Cancels out within-subject practice effects" },
      { metric: "Empirical Study Sample Size", formula: "12 to 25 participants", significance: "Statistically valid formal research sample" },
      { metric: "Ratio Scale Definition", formula: "Equal intervals with absolute zero", significance: "Required for metrics like CPM and time" },
      { metric: "COCOMO Originator & Year", formula: "Barry Boehm (1981)", significance: "Constructive Cost Model foundation" },
      { metric: "Basic COCOMO (Organic)", formula: "a = 2.4, a1 = 1.05, b = 2.5, b1 = 0.38", significance: "Small teams, routine application domain" },
      { metric: "Basic COCOMO (Embedded)", formula: "a = 3.6, a1 = 1.20, b = 2.5, b1 = 0.32", significance: "Complex hardware, strict operational rules" },
      { metric: "PERT 3-Point Estimates", formula: "Optimistic, Likely, and Pessimistic", significance: "Triple duration inputs on activity boxes" },
      { metric: "Agile Iteration Length", formula: "4 to 6 weeks per cycle", significance: "Standard sprint cadence" },
      { metric: "Short-Term Memory Capacity", formula: "George A. Miller (1956)", significance: "7 ± 2 items" },
      { metric: "SUS Questionnaire Items", formula: "10 alternating statements", significance: "5-point Likert scale (odd pos, even neg)" },
      { metric: "SUS Score Multiplier", formula: "Score = (∑ Ci) × 2.5", significance: "Benchmark threshold ≥ 70%" },
      { metric: "ASQ Questionnaire Items", formula: "3 statements", significance: "Effectiveness, Efficiency, Satisfaction (7-point Likert)" },
      { metric: "Recommended Evaluator Panel", formula: "3 to 5 expert evaluators", significance: "Cognitive Walkthrough / Heuristic Evaluation" },
      { metric: "Contextual Inquiry Ratio", formula: "Apprentice to Master", significance: "Interviewer learns from user in their setting" },
      { metric: "Contextual Inquiry Duration", formula: "1 to 2 hours per session", significance: "Standard session length" },
      { metric: "Norman's Error Typology", formula: "Slip vs. Mistake", significance: "Slip = execution flaw; Mistake = goal/planning flaw" },
      { metric: "Usability Standard", formula: "ISO 9241-210:2009", significance: "Effectiveness, Efficiency, Satisfaction" },
      { metric: "Term: User-Centered Design", formula: "Ben Shneiderman (1986)", significance: "Coined in foundational publications" },
      { metric: "Term: Ubiquitous Computing", formula: "Mark Weiser (1991)", significance: "Integrated, calm computing era" },
      { metric: "First Microprocessor", formula: "Intel 4004 (1971)", significance: "Commercial 4-bit CPU launch" },
      { metric: "First Commercial GUI/Mouse", formula: "Xerox Star (1981) / Engelbart NLS (1968)", significance: "Introduced desktop metaphor and pointer" },
      { metric: "Tightest (Worst) Coupling", formula: "Content Coupling", significance: "Direct branching/access into module code" },
      { metric: "Safest Coupling", formula: "Data Coupling", significance: "Simple primitive data parameters" },
      { metric: "Sequential Cohesion", formula: "Step output = next step input", significance: "Pipelines like get -> validate -> sort" },
      { metric: "Context Diagram (Level 0 DFD)", formula: "Exactly 1 process", significance: "Shows external entities; NO data stores" },
      { metric: "First DFD Data Store Appearance", formula: "Level 1 DFD", significance: "Sub-processes and stores appear together" },
      { metric: "Originator of ER Modeling", formula: "Peter Chen (1976)", significance: "Relational entity-relationship modeling" },
      { metric: "Derived Attribute Symbol", formula: "Dashed / Dotted Ellipse", significance: "e.g., Age derived from Date of Birth" },
      { metric: "Multi-valued Attribute Symbol", formula: "Double Ellipse", significance: "e.g., Multiple phone numbers" },
      { metric: "Aggregation vs. Composition", formula: "Hollow ◇ vs. Solid ◆ Diamond", significance: "Independent life vs. Existence dependent" },
      { metric: "Total Views & Diagrams in UML", formula: "5 Views captured using 9 Diagrams", significance: "User, Behavioral, Structural, Implementation, Environment" },
      { metric: "Documentation Standard", formula: "1 comment line per 3 lines code", significance: "Standard software engineering guideline" },
      { metric: "Function Length Rule", formula: "Ideal maximum ≤ 10 lines", significance: "Prevents monolithic bugs" },
      { metric: "BVA Test Points for [0, 5000]", formula: "{-1, 0, 5000, 5001}", significance: "Exact edges and off-by-one test points" }
    ]
  }
];
