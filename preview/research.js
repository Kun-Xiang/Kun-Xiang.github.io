// Launch-style research introductions grounded in the linked papers and official project pages.
// Evidence coverage and version locators are recorded in RESEARCH_SOURCES.md.
export const researchDetails = {
  rynnunify: {
  "stats": [
    {
      "value": "16B",
      "label": "unified embodied backbone"
    },
    {
      "value": "8B + 8B",
      "label": "reasoner and video generator"
    },
    {
      "value": "BCPO",
      "label": "agentic reasoning and routing"
    }
  ],
  "overview": [
    "Embodied intelligence needs to connect the present scene with the consequences of an action. RynnUnify combines visual-language reasoning with video generation, allowing a plan to develop through alternating subtasks and predicted outcomes.",
    "The backbone pairs an 8B autoregressive Reasoner with an 8B rectified-flow video Generator, connected through joint attention. Scene memory and self-forcing training help planning continue across video chunks. An agentic extension trained with Branch-Conditional Policy Optimization learns whether generated evidence is useful for a question. The World-Action Model extension uses predictive representations for robot control."
  ],
  "highlights": [
    {
      "title": "Plan with predicted outcomes.",
      "text": "Alternate subtask reasoning and video prediction, carrying scene context across planning steps."
    },
    {
      "title": "Learn when imagination helps.",
      "text": "BCPO trains an agent to choose between direct answers and generation-assisted reasoning. The video generator stays frozen during this agentic training."
    },
    {
      "title": "Connect prediction to action.",
      "text": "A World-Action Model extension adds joint video-action training and evaluates manipulation in simulation and on a real robot."
    }
  ],
  "figureCaption": "RynnUnify architecture, Figure 2 by Zhu et al. (2026), reproduced without modification from the authors’ repository. CC BY 4.0.",
  "sources": [
    {
      "label": "Paper · Abstract, Introduction, and Model Architecture (§1–2)",
      "url": "https://arxiv.org/html/2610.32965v1"
    },
    {
      "label": "Official repository · Agentic Interleaved Thinking and model releases",
      "url": "https://github.com/alibaba-damo-academy/RynnUnify"
    },
    {
      "label": "Official project · Planning, agentic reasoning, and world-action modeling",
      "url": "https://alibaba-damo-academy.github.io/RynnUnify.github.io/"
    },
    {
      "label": "Figure license · Creative Commons Attribution 4.0",
      "url": "https://creativecommons.org/licenses/by/4.0/"
    }
  ],
  "headline": "Reason about what comes next.",
  "deck": "Meet RynnUnify: a 16B model connecting embodied understanding, video prediction, and long-horizon planning."
},
  seephyspro: {
    stats: [
      {
        value: "1,000",
        label: "seed physics problems",
      },
      {
        value: "4,000",
        label: "semantically aligned variants",
      },
      {
        value: "4",
        label: "levels of modality transfer",
      },
    ],
    overview: [
      "A physics problem should remain the same problem when its information moves into a diagram. Today’s models often struggle with that shift. SeePhys Pro makes the gap measurable by holding the physical system and answer fixed while changing where the evidence appears.",
      "Starting from 1,000 seed problems, the benchmark creates 4,000 aligned variants across four levels. These separate the costs of reading structure, grounding variables, and processing fully visual input. Matched normal and blind RL experiments then test a harder question: do training gains reflect better visual grounding, or can they arise even when training images are masked?",
    ],
    highlights: [
      {
        title: "One problem. Four views.",
        text: "Compare matched versions of the same question, from text-only physics to a fully visual problem.",
      },
      {
        title: "Find the visual bottleneck.",
        text: "Separate structural understanding from variable grounding and rendering costs. The evaluation identifies visual variable grounding as a major obstacle.",
      },
      {
        title: "Put RL gains to the test.",
        text: "Blind training can improve final-answer accuracy on unmasked validation data. Higher scores alone do not establish better use of visual evidence.",
      },
    ],
    figureCaption:
      "The four aligned input levels progressively transfer task-critical information from language into images.",
    sources: [
      {
        label: "Paper · Benchmark design and training diagnostics (§3–6)",
        url: "https://arxiv.org/html/2605.09266v1",
      },
      {
        label: "Official project · Data, evaluation, and resources",
        url: "https://seephyspro.github.io/",
      },
    ],
    headline: "Same physics. Can AI still solve it?",
    deck: "Meet SeePhys Pro: four versions of every problem that reveal whether physics reasoning survives the move from text to images.",
  },
  atomthink: {
    stats: [
      {
        value: "20K",
        label: "AMATH mathematical problems",
      },
      {
        value: "124K",
        label: "atomic-step annotations",
      },
      {
        value: "11",
        label: "evaluation benchmarks",
      },
    ],
    overview: [
      "Hard problems call for deeper thought. Easier problems should not require a longer answer. AtomThink lets multimodal models assemble their own reasoning from small, meaningful steps, adapting both the structure and length of a solution to the task.",
      "Self-structured Chain-of-Thought connects a reasoning-data engine, atomic-step fine-tuning, policy-guided multi-turn inference, and capability evaluation. AMATH provides 20K mathematical problems with 124K step annotations. Process supervision and step search help explore reasoning paths, with evaluation across 11 mathematical, scientific, and general benchmarks.",
    ],
    highlights: [
      {
        title: "Think as deeply as needed.",
        text: "Generate flexible reasoning paths instead of following the same fixed template for every problem.",
      },
      {
        title: "Make each step count.",
        text: "Train on atomic steps and evaluate how individual reasoning behaviors contribute to a solution.",
      },
      {
        title: "Use reasoning more efficiently.",
        text: "The paper’s evaluations report improvements in accuracy, data utilization, and inference efficiency over the compared baselines.",
      },
    ],
    figureCaption:
      "AtomThink connects multimodal reasoning-data construction, atomic-step learning, and inference-time reasoning.",
    sources: [
      {
        label:
          "Paper · Self-structured reasoning, AMATH, and experiments (§A, C–D)",
        url: "https://arxiv.org/html/2411.11930v5",
      },
      {
        label: "Official repository · Code and training resources",
        url: "https://github.com/Kun-Xiang/AtomThink",
      },
    ],
    headline: "Give every reasoning step a purpose.",
    deck: "Meet AtomThink: adaptive slow thinking that builds multimodal solutions one atomic step at a time.",
  },
  seephys: {
    stats: [
      {
        value: "2,000",
        label: "validated physics questions",
      },
      {
        value: "7 / 21",
        label: "physics domains / diagram types",
      },
      {
        value: "75%",
        label: "vision-essential questions",
      },
    ],
    overview: [
      "Can a model solve a physics problem when essential evidence lives in the diagram? SeePhys makes that question concrete. In 75% of its problems, the image contains information required for the answer, so solving the text alone is not enough.",
      "Expert-curated, open-ended questions span seven physics domains, 21 diagram types, and eight knowledge levels, from middle school to PhD qualifying examinations. Evaluation compares diagrams, diagram captions, text-only questions, and fully visual renderings. These conditions expose the difficulty of connecting diagram interpretation with physical deduction.",
    ],
    highlights: [
      {
        title: "Make the image indispensable.",
        text: "Vision-essential questions require extracting quantities, structures, or spatial relationships from the diagram.",
      },
      {
        title: "Follow physics from school to research.",
        text: "Eight knowledge levels bring elementary principles and advanced scientific reasoning into one benchmark.",
      },
      {
        title: "See what changes without the diagram.",
        text: "Controlled input conditions reveal how models respond when visual evidence is present, described in words, or removed.",
      },
    ],
    figureCaption:
      "SeePhys spans multiple levels of physics knowledge and heterogeneous scientific diagrams.",
    sources: [
      {
        label: "Paper · Benchmark construction and evaluation protocols (§3–4)",
        url: "https://arxiv.org/html/2505.19099v8",
      },
      {
        label: "Official project · Benchmark and evaluation resources",
        url: "https://seephys.github.io/",
      },
    ],
    headline: "Physics you have to see to solve.",
    deck: "Meet SeePhys: 2,000 physics questions that put visual understanding at the center of reasoning.",
  },
  physicalai: {
    stats: [
      {
        value: "4",
        label: "connected capability areas",
      },
      {
        value: "Unified",
        label: "capability–task taxonomy",
      },
      {
        value: "Open",
        label: "continuously updated resources",
      },
    ],
    overview: [
      "Understanding the physical world takes more than recognizing what is in a picture. AI must also explain what happens, predict what comes next, and choose how to act. This survey brings those capabilities into a common framework, connecting symbolic physics reasoning with embodied and generative systems.",
      "The taxonomy organizes research by what a system produces: a present-state estimate, an explanation, a prediction or simulation, or an action. It spans material properties, causal reasoning, video generation, robotics, and autonomous driving, while separating these capabilities from model architectures and training strategies.",
    ],
    highlights: [
      {
        title: "Four capabilities. One framework.",
        text: "Connect perception, physics reasoning, world modeling, and interaction through a shared vocabulary.",
      },
      {
        title: "Compare what models actually do.",
        text: "Output-based definitions help relate systems across architectures and application domains.",
      },
      {
        title: "Follow the open problems.",
        text: "Explore capability connections, the sim-to-real gap, and physical-law internalization, with an open resource for related research.",
      },
    ],
    figureCaption:
      "A unified view of physical perception, physics reasoning, world modeling, and embodied interaction.",
    sources: [
      {
        label: "Paper · Taxonomy, capability areas, and discussion (§B–G)",
        url: "https://arxiv.org/html/2510.04978v5",
      },
      {
        label: "Official resource · Awesome AI for Physics",
        url: "https://github.com/AI4Phys/Awesome-AI-for-Physics",
      },
    ],
    headline: "From seeing the world to acting in it.",
    deck: "A unified guide to the four capabilities that connect physical perception, reasoning, world modeling, and embodied interaction.",
  },
};
