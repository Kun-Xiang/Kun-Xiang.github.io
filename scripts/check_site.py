#!/usr/bin/env python3
"""Check the public homepage, local assets, publication records and JS syntax."""
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
from urllib.parse import unquote, urljoin, urlsplit

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = 'https://kun-xiang.github.io/'


def check_url(base, value):
    url = urlsplit(urljoin(ORIGIN + base, value))
    if url.scheme not in ('http', 'https') or url.netloc != 'kun-xiang.github.io':
        return
    path = unquote(url.path).lstrip('/') or 'index.html'
    target = ROOT / path
    if target.is_dir():
        target /= 'index.html'
    if not target.is_file():
        raise ValueError(f'Missing local asset: {base} -> {value}')


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.anchors, self.projects = path, [], [], []
        self.in_map, self.map_text = False, ''

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for attr in ('src', 'href'):
            value = attrs.get(attr)
            if value and not value.startswith('#'):
                check_url(self.path, value)
        if attrs.get('href', '').startswith('#'):
            self.anchors.append(attrs['href'][1:])
        if 'data-project' in attrs:
            self.projects.append(attrs['data-project'])
        if tag == 'script' and attrs.get('type') == 'importmap':
            self.in_map = True

    def handle_data(self, data):
        if self.in_map:
            self.map_text += data

    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_map = False

    def validate(self):
        if len(self.ids) != len(set(self.ids)):
            raise ValueError(f'Duplicate HTML IDs in {self.path}')
        if not set(self.anchors).issubset(self.ids):
            raise ValueError(f'Broken section anchor in {self.path}')
        for key, value in json.loads(self.map_text)['imports'].items():
            check_url(self.path, key)
            check_url(self.path, value)


def main():
    subprocess.run(['python3', 'scripts/sync_homepage.py', '--check'], cwd=ROOT, check=True)
    source = (ROOT / 'preview/data.js').read_text()
    papers = json.loads(source.split('export const publications = ', 1)[1].strip().removesuffix(';'))
    ids = [p['id'] for p in papers]
    if len(ids) != len(set(ids)):
        raise ValueError('Duplicate publication IDs')
    for paper in papers:
        if paper.get('image'):
            check_url('preview/app.js', paper['image'])
        if not paper['authors'] or not set(paper.get('contribution', {}).get('authors', [])).issubset(paper['authors']):
            raise ValueError(f'Invalid author contribution record: {paper["id"]}')
    for path in ('index.html', 'preview/index.html'):
        page = Page(path)
        page.feed((ROOT / path).read_text())
        page.validate()
        if not set(page.projects).issubset(ids):
            raise ValueError(f'Missing highlighted publication in {path}')
    html = (ROOT / 'index.html').read_text()
    if 'noindex' in html or 'localhost' in html or '127.0.0.1' in html:
        raise ValueError('Local-preview settings remain in the public homepage')
    if '<link rel="canonical" href="https://kun-xiang.github.io/" />' not in html:
        raise ValueError('Missing production canonical URL')
    for css in (ROOT / 'preview').rglob('*.css'):
        for value in re.findall(r'url\(([^)]+)\)', css.read_text()):
            check_url(css.relative_to(ROOT).as_posix(), value.strip('\"\''))
    assets = ROOT / 'preview/vendor/orocoa/home/assets'
    meta = json.loads((assets / 'pointcloud.json').read_text())
    if (assets / meta['file']).stat().st_size != meta['points'] * 16:
        raise ValueError('Point-cloud geometry is incomplete')
    js_files = [ROOT / 'preview' / name for name in ('app.js', 'data.js', 'research.js', 'journey.js')]
    js_files.extend(ROOT / 'preview/vendor/orocoa/home' / name for name in ('pointcloud.js', 'assets/planet-worker.js', 'vendor/three.planet.min.js'))
    subprocess.run(['node', 'scripts/check_planet.mjs'], cwd=ROOT, check=True)
    for path in js_files:
        subprocess.run(['node', '--input-type=module', '--check'], input=path.read_text(), text=True, check=True)
    print(f'Checked both entry pages, {len(papers)} publications, local assets, point cloud and JS syntax.')


if __name__ == '__main__':
    main()
