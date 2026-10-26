# Publication reconciliation and homepage copy

Checked on 19 October 2026. This is a local website preview. Sources inform publication metadata and original short summaries; no full abstracts or other researchers' personal introductions are reproduced.

## Google Scholar coverage

The [public Kun Xiang profile](https://scholar.google.com/citations?user=geHeQVYAAAAJ&hl=en&sortby=pubdate) was read in the browser. Identity matches the existing homepage link, Sun Yat-sen University affiliation, verified university email domain, and the profile's link back to this repository's website. The complete list shows “Articles 1–16” with Show More disabled. All 16 records now have entries in `data.js`; seven were absent from the original nine-entry preview. Distinct works remain separate. Citation counts and h-index are not copied into the site.

### Five recent additions: verified against primary arXiv records

For these five papers, title, complete author list including Kun Xiang, submission date, and abstract were read directly on the linked arXiv page. Each remains labeled as an arXiv preprint; no conference acceptance is inferred. Summary coverage is the abstract, rather than a full-paper review. Summaries omit benchmark performance claims and are written in original language.

| Entry                      | Primary source                                       | Submitted  | Summary grounding                                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GeoThinker-F               | [arXiv:2610.20592](https://arxiv.org/abs/2610.20592) | 2026-10-14 | Predictive latent geometry and future semantic representations, external expert used in training and removed at inference. The math-formatted F is rendered as plain F in the site title. |
| L2T                        | [arXiv:2610.15810](https://arxiv.org/abs/2610.15810) | 2026-10-11 | Unified visual-token and text computation; adaptive reasoning mode and depth.                                                                                                             |
| VR-JEPA                    | [arXiv:2609.40129](https://arxiv.org/abs/2609.40129) | 2026-09-30 | Localized contrastive-state learning, task-specific latent trajectories, guidance for generation-based video reasoning.                                                                   |
| Beyond the Eye / BEE       | [arXiv:2607.11106](https://arxiv.org/abs/2607.11106) | 2026-07-13 | Implicit visual tools, self-regulated invocation, avoiding redundant tool usage.                                                                                                          |
| Latent Visual States / EVA | [arXiv:2606.24233](https://arxiv.org/abs/2606.24233) | 2026-06-23 | Continuous latent visual thoughts, joint latent/text optimization, D-GSPO decoupled reinforcement learning.                                                                               |

### Two older missing records: corroborated

- **Physics–Physical Reasoning position paper.** The [Scholar detail record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=geHeQVYAAAAJ&citation_for_view=geHeQVYAAAAJ:eQOLeE2rZwMC) supplies the complete nine-author list, workshop name, and abstract. The [indexed primary PDF](https://openreview.net/pdf/c5ee57b6b5ecb0b92ac8b094abf522ba29d5eea0.pdf) corroborates the title, authors, equal-contribution stars on the first three authors, and the abstract. The direct [OpenReview record](https://openreview.net/forum?id=XF7kHMLdWX) and PDF requested a browser verification check, so no full-paper reading is claimed. Year 2025 is the workshop year, since the Scholar entry has no separate year field. It is explicitly classified as a **workshop**, and the short summary presents an argument rather than a measured result.
- **MMK-DRO.** The [Scholar detail record](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=geHeQVYAAAAJ&citation_for_view=geHeQVYAAAAJ:UeHWp8X0CEIC) supplies the exact title, six authors, publication date 2024-07-01, journal Information Sciences, volume 673, article 120705, publisher, abstract excerpt, and publisher link. The [official code repository](https://github.com/sysu19351146/MMK-DRO) identifies itself as the implementation of this exact paper. The [publisher page](https://www.sciencedirect.com/science/article/pii/S0020025524006182) returned 403 and the [DOI](https://doi.org/10.1016/j.ins.2024.120705) returned 429 in the reading tool. No full-paper or direct registry verification is claimed. The summary stays within the available description: morphological priors, diagnostic attention, distribution shifts, and adversarial robustness.

### Existing-record corrections

- **GeoThinker:** changed the venue/type from arXiv/preprint to ICML 2026/conference. The public Scholar entry and the coauthor's [publication listing](https://jwbian.net/) both identify ICML 2026. The current [arXiv record](https://arxiv.org/abs/2602.06037) has nine authors; the abbreviated author line was corrected from “and 4 more” to “and 5 more” following the first four names. The arXiv and code links are retained. The coauthor listing and arXiv differ in the order of later collaborators, so the website retains the checked arXiv author order and does not claim to reproduce the proceedings version's complete metadata.
- **AtomThink:** Scholar's journal record uses a different title from the current arXiv manuscript. The preview retains the exact title of the linked arXiv version, already checked for the selected-work overview; it does not create a duplicate entry for the title variant.
- Older records otherwise retain existing homepage metadata; this pass reconciles coverage rather than independently auditing every legacy field.

## Public LinkedIn style references

The requested “rising star” direction is treated as a tone preference, not a verified award or career designation. No such label, award, citation metric, new affiliation, or claimed research achievement is added to Kun's biography.

- [Yuke Zhu's public profile](https://www.linkedin.com/in/yukez): only the beginning of About is public. It leads with connected research threads. Adopted pattern: connect the research areas in one clear sentence, then explain the shared question. No inaccessible remainder is assumed to have been read.
- [Boyuan Chen's public research post](https://www.linkedin.com/posts/boyuan-chen-b30854a0_excited-to-share-a-project-we-started-nearly-activity-7417609801175691264-yc_d): the post by the Duke researcher connects a concrete result to a long-term research vision and personal motivation. Adopted pattern: let specific capabilities explain the ambition. This is separate from the different Boyuan Chen at OpenAI.
- [Jim Fan's public profile](https://www.linkedin.com/in/drjimfan): search-indexed About opening is aspirational; the direct page returned 999. A [public Eureka post](https://www.linkedin.com/posts/drjimfan_animation-is-about-controlling-characters-activity-7122227684427894784-xG-C) starts from a familiar limitation and explains a concrete capability and use case. Adopted pattern: accessible verbs and a clear research goal, with less grand rhetorical language for this homepage.
- [Jiayuan Mao's public profile](https://www.linkedin.com/in/maojiayuan): no full About text is public in the retrieved page. A visible workshop announcement is a **repost by Yifei Shao**, not Mao's own biographical writing. It provides supporting context for problem-first communication about reasoning, acting, recovery, and feedback; it is not presented as Mao's self-introduction.

## Copy decisions

- Hero: a short research goal followed by the concrete capabilities of visual reasoning, world modeling, and interaction-based learning.
- About: existing identity and affiliation facts, then specific interests in where to look, how long to think, and how feedback changes decisions. These are framed as interests, not completed agent deployments.
- Research directions retain the user's requested physical-world learning and agentic RL focus. Research cards continue to use original paper-grounded launch-style introductions documented in `RESEARCH_SOURCES.md`.
- Contact names the actual research topics for discussion. All prose is English, the portrait remains in color, About precedes Recent Updates, and no em dash is introduced into introductory sentences.

## Author corrections · 26 October 2026

- Contact email supplied directly by Kun Xiang: `kun.xiang001@gmail.com`. The About invitation links to Contact; Contact mail links and the copy button use this address.
- Existing news dates and destinations are retained. Copy uses simple past tense consistently: “We introduced/released/announced …” for announcements and “Our … was accepted …” for acceptances. The May 2025 challenge item describes its announcement, rather than implying the ICML event took place in May.
- The author’s latest requested Reviewer wording is: “Reviewer: NeurIPS, ICLR, ICML, ACL, AAAI, IEEE TNNLS, etc.” It stays on one line, with local horizontal scrolling on narrow screens. The missing separator between ICML and ACL in the request is normalized as a comma.
- Contact is reduced to a compact Contact heading, one email action, profile links, and the footer; redundant invitation copy and the large arrow are removed.

## RynnUnify and news template update · 26 October 2026

- Added RynnUnify from the user-specified [official repository](https://github.com/alibaba-damo-academy/RynnUnify) and verified canonical [arXiv:2610.32965](https://arxiv.org/abs/2610.32965). The site now has 17 publication records and five research highlights.
- Release news uses “We released …”. Paper acceptances end at the venue: “One paper was accepted by [venue].”, with the corresponding paper linked through the news item and no appended title or description. The workshop item reads “Our 3rd AI for Math Workshop was accepted by ICML 2026.” Existing dates and links are retained and the RynnUnify release is added for October 2026.
- The challenge wording is grounded in the [official ICML 2025 challenge page](https://sites.google.com/view/ai4mathworkshopicml2025/challenge): SeePhys is Track 2, and submissions opened on 21 May 2025.

## PDF author audit · 26 October 2026

- `AUTHOR_AUDIT.md` and `author-audit.json` supersede earlier author-marker decisions. Fourteen PDFs were downloaded and their first pages inspected; the position paper was checked against indexed official PDF text. MMK-DRO and Weight pruning remain pending direct PDF access.
- RynnUnify has nine core contributors, including Kun Xiang. VR-JEPA and CAP were missing Kun Xiang's equal-contribution marker. GeoThinker and GeoThinker-F were missing the first two authors' equal-contribution markers.
- Full author lists now replace abbreviated counts. Contribution groups are stored separately from names and rendered with per-paper definitions in both Publications and research details. Corresponding-author asterisks are not repurposed as contribution markers.

## Beyond the Eye acceptance · 26 October 2026

- Kun Xiang directly confirmed in this chat that Beyond the Eye was accepted by TPAMI in October 2026. Its type is updated from preprint to journal, the venue to `TPAMI · 2026`, and the acceptance month to `2026-10`.
- A linked October update uses the requested short wording, “One paper was accepted by TPAMI.” The arXiv manuscript link is retained; no DOI, volume, issue, or formal online-publication date is inferred from the acceptance notice.
