# Kun Xiang's Homepage

Live website: **https://kun-xiang.github.io/**

The site is a buildless academic homepage with an interactive ringed-planet point cloud, research highlights, publications, and contact information. GitHub Pages publishes the root of `main`; the existing `.nojekyll` file keeps deployment static.

## Edit and preview

Edit the shared content in `preview/`, then regenerate the public root entry:

```sh
python3 scripts/sync_homepage.py
python3 scripts/check_site.py
python3 -m http.server 4321 --bind 127.0.0.1
```

Open http://127.0.0.1:4321/ for the public entry or http://127.0.0.1:4321/preview/ for the review preview. The public entry uses the same assets, scripts and data; the preview route remains `noindex`. Resource URLs in paper dialogs resolve relative to their source module, so they work from both entries.

When editing point-cloud source files, first rebuild the checked-in `pointcloud.min.js` entry with the command in `preview/UPSTREAM.md`, then sync and check the homepage. The early point-cloud entry is independent of publication and scrolling modules.

Push validated changes to `main` to publish. GitHub's existing Pages build and deployment workflow serves the site; `Check static site` validates the generated homepage, local assets, publication data and JavaScript syntax on pushes and pull requests.

The existing `projects/`, `images/` and `css/` directories remain available at their original URLs. Reference-code provenance, source coverage and licenses are documented in `preview/UPSTREAM.md`, `preview/CONTENT_SOURCES.md`, `preview/RESEARCH_SOURCES.md` and `preview/licenses/`.
