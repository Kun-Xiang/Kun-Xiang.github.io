# Kun Xiang · Academic homepage preview

A source-based adaptation of [orocoa/orocoa_web](https://github.com/orocoa/orocoa_web), with the original centered greeting, interactive Three.js point cloud, letter-ink zoom transition, and numbered selected-work list. The original implementation modules and their licenses are retained. See `UPSTREAM.md` for the exact source revision and changes.

## Open locally

From the repository directory:

```sh
python3 preview/serve.py
```

Open **http://127.0.0.1:4321/preview/** in a browser. No dependency installation or build is needed. Keep the server running while viewing the site. Another port can be selected with `--port 4325`.

Use the HTTP preview URL. The page uses JavaScript modules and WebGL assets, which browsers restrict for directly opened `file:` pages. Double-clicking this HTML redirects to the default local preview address. The public homepage entry is available locally at http://127.0.0.1:4321/index.html.

## What is included

- Original reference implementation of point-cloud interaction, glyph scrambling, and a scroll-driven zoom into the white letter ink before About appears.
- Original procedural ringed-planet geometry with 220,000 desktop / 100,000 phone particles, directional silver lighting, an ice-blue atmospheric rim, and correct front/back ring occlusion. Pointer movement produces a broad, velocity-sensitive swirling wake that gradually settles. Precession, pause, background-tab suspension, and reduced-motion support are retained.
- Color portrait and English academic introduction, with three compact research directions integrated into About before recent updates.
- Five selected research projects in a content-sized grid, with an aligned heading and first study, a narrower sticky introduction column, and a stacked phone layout. Original glyph/image hover effects and rich paper details are retained.
- All 17 publications, with readable summaries, author information, resource links, and combined category/keyword filtering.
- Research background, community information, contact links, and responsive navigation.

## Main files

- `index.html`: academic page content and structure.
- `site.css`: academic content styles, responsive layout, and paper dialogs.
- `journey.js`: original zoom integration, About reading height, anchors, and motion control.
- `app.js`: publication search/filter, paper dialogs, news, and navigation.
- `data.js`, `research.js`: verified publication metadata and expanded paper descriptions.
- `vendor/orocoa/`: adapted original implementation modules and bundled browser dependencies.
- `assets/research-*.svg`: original research cover thumbnails.
- `CONTENT_SOURCES.md`, `RESEARCH_SOURCES.md`: factual sources and coverage.
- `UPSTREAM.md`, `licenses/`: code provenance, asset boundaries, and licenses.

This review route remains `noindex`. The public root homepage is generated from this HTML with `python3 scripts/sync_homepage.py` and published from `main` through GitHub Pages. Run `python3 scripts/check_site.py` before publishing.
