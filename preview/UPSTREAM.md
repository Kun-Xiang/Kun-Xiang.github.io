# Source-based rebuild

Reference: [orocoa/orocoa_web](https://github.com/orocoa/orocoa_web), commit `a508ea4b3f873d5f1aa173f1a3d07761aa773b52`, inspected and adapted on 19 October 2026.

## Reused implementation

- `vendor/orocoa/home/style.css`: original greeting composition, typography, canvas, and responsive layout.
- `vendor/orocoa/home/pointcloud.js` and `home/vendor/`: original Three.js point-cloud renderer, shaders, view-space pointer forces, recovery, frame capture, visibility handling, and WebGL context recovery. Adaptations: an original mathematical model replaces the computer scan; point budgets and model scale fit this geometry; user pause and reduced motion stop motion; messages are English. The 26 October revision adds original directional-light shaders, a dark ellipsoidal subsurface to occlude rear points and rings, and a thin atmosphere mesh. Its interaction update regenerates 220,000 samples, draws 100,000 on phones, expands the force radius, adds filtered pointer velocity and tangential flow, and extends the recovery time for a visible wake. Zero-offset frames retain the existing early-exit optimization. Larger responsive framing and gentle precession give the planet a stronger silhouette.
- `vendor/orocoa/home/greeting.js`, `greeting-palette.js`, `rise.js`: original measured glyph scrambling and recovery; language switching and sample identity were removed.
- `vendor/orocoa/home/zoom.js`: original measurement of white letter ink, point-cloud capture, and exponential zoom into the letter. The final white frame briefly fades to the white About destination.
- `vendor/orocoa/fields/fields.css` and `fields.js`: original numbered list styling, grayscale-to-color image reels, and staggered glyph hover layers. The 26 October alignment revision replaces the absolute-position composition with an intrinsic grid, shared top alignment, and a narrower sticky heading column. Adaptations: academic metadata, original thumbnails, English-only content, readable text sizes, and paper dialogs.
- `vendor/orocoa/assets/catalog/` and `assets/page-scroll.js`: original Lenis lifecycle and one shared scrolling driver.
- `vendor/orocoa/vi/`: original design tokens and matching canvas palette.

`journey.js` adapts the reference's shared scroll-clock arrangement to an About destination with variable reading height. `site.css` provides the academic content layout; it does not load the earlier preview's layered styles. `app.js` retains the publication search/filter and source-grounded paper dialogs.

## Assets and licenses

Original code retains the upstream MIT notice in `licenses/OROCOA-MIT.txt`. Upstream third-party notices and license files are retained under `licenses/`; only the Three.js, Lenis, and Bricolage font dependencies used here are served. No GSAP or device-transition assets are used.

The reference's computer point-cloud scan, portfolio covers, photographs, and branding are not included. The ringed planet is generated from deterministic oblate-sphere and annular surfaces by `vendor/orocoa/home/assets/generate-planet.py`. It replaces the previous cradle geometry while retaining the reference renderer and its interaction. The four SVG research thumbnails are original vector artwork. The profile photograph and paper figures remain this repository's existing assets. Bricolage's font license is retained in `assets/OFL-BricolageGrotesque.txt`.

## Content retained

The original 16 publication records plus RynnUnify, the evidence-grounded five-project detail content, color portrait, English-only presentation, physical-world learning and agentic RL directions, and About before Recent Updates remain. Bibliographic and content evidence is recorded in `CONTENT_SOURCES.md` and `RESEARCH_SOURCES.md`.

The pre-rebuild preview is preserved locally at `/tmp/kun-xiang-preview-before-source-rebuild/`. This is a development backup, not a second published website.

The later 26 October refinement fixes the pointer radius at twice the original value, including fast movements; pointer velocity continues to shape force and tangential flow. On desktop, the selected-research grid uses a 1.15:2 column ratio, placing its numbered text-and-image list within approximately 52% of the viewport width. Tablet and phone stacking remains responsive. The About heading uses three explicit lines: “Building the”, “Reasoning Foundation”, and “of Physical AI”. Its final two lines are blue; print and forced-color modes use a solid text color.
