# Authorship and contribution-marker audit

Checked on **26 October 2026**. Scope: all 17 publications in the local preview. This audit covers author order, names and contribution-symbol definitions; it is not a full technical review.

## Display convention

- `*` is shown for equal contribution or core contribution, with the correct meaning printed beside each paper. Roles are stored separately from names.
- Corresponding-author, affiliation, internship and project-leader symbols are not converted into contribution asterisks.
- All authors are displayed in source order, so neither the site owner nor a contribution group disappears behind an abbreviated count.
- Publications and research dialogs use the same canonical record in `data.js`; `research.js` no longer duplicates authorship data.
- A missing marker on an unresolved record is not a verified finding that the paper has no equal contributors.

## Findings

| Paper | Contribution group | Evidence and coverage |
| --- | --- | --- |
| RynnUnify | Core: Minghao Zhu, Bohan Hou, **Kun Xiang**, Zixuan Wang, Yinzhou Tang, Yifei Yang, Zhikai Wang, Tianyi Zhang, Kehan Li | [2610.32965v1 PDF](https://arxiv.org/pdf/2610.32965v1), p. 1 author block and symbol definitions. Added all nine core markers. |
| GeoThinker-F | Equal: Haoyuan Li, Qihang Cao | [2610.20592v1 PDF](https://arxiv.org/pdf/2610.20592v1), p. 1 author block and bottom footnote. Added two markers. |
| L2T | No equal/core designation in the inspected author block | [2610.15810v1 PDF](https://arxiv.org/pdf/2610.15810v1), p. 1. Asterisks mark Xianming Liu and Xiaodan Liang as corresponding authors. |
| VR-JEPA | Equal: Zehua Ma, **Kun Xiang** | [2609.40129v1 PDF](https://arxiv.org/pdf/2609.40129v1), p. 1 author block and bottom footnote. Added both markers. |
| Beyond the Eye | No equal/core designation in the inspected author block | [2607.11106v1 PDF](https://arxiv.org/pdf/2607.11106v1), p. 1. Dagger marks the corresponding author. |
| EVA | No equal/core designation in the inspected author block | [2606.24233v1 PDF](https://arxiv.org/pdf/2606.24233v1), p. 1. Asterisk marks the corresponding author. |
| Physical AI survey | Equal: **Kun Xiang**, Terry Jingchen Zhang, Yinya Huang | [2510.04978v5 PDF](https://arxiv.org/pdf/2510.04978v5), p. 1 author block and left-column footnote. Existing group confirmed. |
| SeePhys Pro | No equal/core designation in the inspected author block | [2605.09266v2 PDF](https://arxiv.org/pdf/2605.09266v2), p. 1. Asterisks mark Dandan Tu and Xiaodan Liang as corresponding authors. |
| RADAR | No equal/core designation in the inspected author block | [2602.12892v1 PDF](https://arxiv.org/pdf/2602.12892v1), p. 1. Daggers mark corresponding authors. |
| GeoThinker | Equal: Haoyuan Li, Qihang Cao | [2602.06037v5 PDF](https://arxiv.org/pdf/2602.06037v5), p. 1 author block and bottom-left footnote. Added two markers. |
| AtomThink | Equal: **Kun Xiang**, Zhili Liu | [2411.11930v5 PDF](https://arxiv.org/pdf/2411.11930v5), p. 1 author block and left-column footnote. Existing group confirmed. |
| SeePhys | Equal: **Kun Xiang**, Heng Li, Terry Jingchen Zhang, Yinya Huang | [2505.19099v8 PDF](https://arxiv.org/pdf/2505.19099v8), p. 1 author block and bottom footnote. Existing group confirmed. |
| EMOVA | Equal: Kai Chen, Yunhao Gou, Runhui Huang, Zhili Liu, Daxin Tan | [2409.18042v4 PDF](https://arxiv.org/pdf/2409.18042v4), p. 1. The five are listed alphabetically by surname. Kun Xiang is twelfth, unmarked; his name is now visible. |
| Physics–Physical Reasoning position paper | Equal: Terry Jingchen Zhang, **Kun Xiang**, Yinya Huang | [Official OpenReview PDF](https://openreview.net/pdf/c5ee57b6b5ecb0b92ac8b094abf522ba29d5eea0.pdf), indexed PDF text includes the author block and equal-contribution footnote. Live retrieval returns verification/403. **Indexed-text checked**, not downloaded. Existing group retained. |
| MMK-DRO | **Pending PDF**; existing unmarked display retained | [Publisher record](https://doi.org/10.1016/j.ins.2024.120705). Crossref confirms names/order; publisher API exposes metadata only. PDF requests return a verification page. No role inference made. |
| CAP | Equal: **Kun Xiang**, Xing Zhang | [2211.16806v1 PDF](https://arxiv.org/pdf/2211.16806v1), p. 1 author block and bottom-left footnote. Added both markers. |
| Weight pruning | **Pending PDF**; existing unmarked display retained | [Publisher record](https://doi.org/10.1016/j.asoc.2021.107707). Indexed text contains equal-contribution footnote 1 but omits its mapping to authors. PDF requests return a verification page. Crossref confirms the seven names/order, not their contribution roles. |

The 14 linked arXiv PDFs were downloaded, their first-page text checked, and their first pages rendered and visually inspected. Findings of no designation are limited to those author blocks and footnotes, not a claim about any unpublished contribution agreement.

## Evidence and remaining coverage

`author-audit.json` records all 17 results, inspected PDF versions, SHA-256 checksums and page locators. Downloaded PDFs, extracted text and rendered pages are working files under `/tmp/kun-author-audit-20261026/`; bulk PDFs are not bundled into the website.

The two publisher PDFs are required to finish direct PDF verification for MMK-DRO and Weight pruning. A readable OpenReview PDF would close the live-download gap for the position paper; its existing three-person equal-contribution group is supported by the indexed official PDF text.
