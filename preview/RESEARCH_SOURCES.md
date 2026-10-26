# Selected research: content sources

Checked on 19 October 2026. `research.js` contains original English research overviews, rather than copied abstracts. Reading coverage was limited to the abstracts, introductions, and the specific method, taxonomy, and evaluation passages listed below. This is website copy, not a full-paper technical review. The presentation leads with a launch-style headline, a brief introduction, and why the work matters; formal paper titles and collaborators remain in the detail footer. Headlines provide editorial framing and do not add new performance claims.

## SeePhys Pro

- [Paper, arXiv:2605.09266v1](https://arxiv.org/html/2605.09266v1), abstract, §3 (four-level benchmark design), §5–6 (normal/blind RL controls and interpretation).
- [Official project page](https://seephyspro.github.io/), Introduction, Benchmark Design, Data Construction, and Training-Time Diagnostic.
- Supported facts: 1,000 seed problems; 4,000 aligned variants; four levels; semantic preservation across representations; visual variable grounding as a bottleneck; gains from blind training do not establish improved visual grounding.
- The description does not treat the later workshop challenge's fifth OOD level as part of the paper's four-level benchmark.

## AtomThink

- [Paper, arXiv:2411.11930v5](https://arxiv.org/html/2411.11930v5), abstract, §A (AMATH and evaluation scope), §C (atomic reasoning, data engine, fine-tuning), §D (reported evaluations).
- [Official repository](https://github.com/Kun-Xiang/AtomThink).
- Supported facts: self-structured reasoning with atomic steps; adaptive length and structure; data engine, supervision, policy-guided inference, and atomic evaluation; 20K AMATH problems; 124K step annotations; 11 evaluation benchmarks.
- The copy avoids ambiguous cross-baseline percentages. The full 15-author record is used in project details; the original homepage's abbreviated author count was corrected from “and 6” to “and 11” after the first four names.

## SeePhys

- [Paper, arXiv:2505.19099v8](https://arxiv.org/html/2505.19099v8), abstract, §3 (data principles and composition), §4.1 (input conditions), Appendix A (composition).
- [Official project page](https://seephys.github.io/), Introduction.
- Supported facts: 2,000 questions; seven physics domains; 21 diagram categories; eight knowledge levels; 75% vision-essential; text/vision, caption, text-only, and fully visual input conditions; open-ended questions with definitive answers.
- No “current best model” claims appear in the website summary, since live project leaderboards and paper-time evaluations differ.

## Physical AI survey

- [Paper, arXiv:2510.04978v5](https://arxiv.org/html/2510.04978v5), abstract, §B.A (capability–task taxonomy), §B.B (definitions), capability-section headings §C–F, discussion headings §G.
- [Official resource collection](https://github.com/AI4Phys/Awesome-AI-for-Physics), linked from the paper.
- Supported facts: four output-based capability areas; distinction between present-state estimation, explanation, prediction/simulation, and intervention; task families; separating capabilities from architectures; discussion of capability progression, sim-to-real, and physical-law internalization.
- Perception-to-action is presented as the survey's organizing perspective, not a measured causal result.

## RynnUnify · added 26 October 2026

- Canonical paper: [RynnUnify: Towards Unified Embodied Brain, arXiv:2610.32965v1](https://arxiv.org/abs/2610.32965), submitted 23 October 2026. The arXiv title, 23-author list, year and public status supersede the repository citation’s placeholder arXiv fields.
- Coverage: [HTML paper](https://arxiv.org/html/2610.32965v1), abstract, Introduction and §2 Model Architecture (including Figure 2); the HTML conversion stops within §3, so later sections were not treated as fully read.
- Further method coverage: [official repository](https://github.com/alibaba-damo-academy/RynnUnify), Introduction / Model Architecture / Agentic Interleaved Thinking; [official project](https://alibaba-damo-academy.github.io/RynnUnify.github.io/), Architecture / Training / Planning / Agentic / WAM sections.
- Supported facts: 16B unified backbone; 8B autoregressive reasoner plus 8B rectified-flow video generator; joint attention and cross-chunk memory; interleaved subtask/video planning; BCPO trains an agent to select direct or video-assisted reasoning while generation stays frozen; WAM connects predictive representations to robot control. No comparative performance claim or unverified acceptance is added.
- Figure: `assets/rynnunify-overview.png` is an unchanged copy of [the authors’ architecture image](https://github.com/alibaba-damo-academy/RynnUnify/blob/main/assets/architecture.png), matching paper Figure 2. The paper specifies [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); the displayed caption attributes Zhu et al. and the original repository. The small `research-rynnunify.svg` cover is original website artwork.
- Author markers (corrected 26 October 2026): the PDF's first nine authors, including Kun Xiang, carry * for core contributors. Those markers are now displayed with a paper-specific “Core contributors” note. See `AUTHOR_AUDIT.md` for the full PDF authorship audit; the earlier decision to omit these markers was incorrect.
