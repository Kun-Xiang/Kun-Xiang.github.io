#!/usr/bin/env python3
"""Generate the public root homepage from the reviewed preview HTML."""
import argparse
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent


def public_html():
    html = (ROOT / 'preview/index.html').read_text()
    html = html.replace(
        '<meta name="robots" content="noindex,nofollow" />',
        '<meta name="robots" content="index,follow" />\n'
        '    <meta name="author" content="Kun Xiang" />\n'
        '    <link rel="canonical" href="https://kun-xiang.github.io/" />',
    )
    html = html.replace(
        '      if (location.protocol === "file:")\n'
        '        location.replace("http://127.0.0.1:4321/preview/");\n',
        '',
    )

    def asset_url(match):
        attribute, value = match.groups()
        if value.startswith('../images/'):
            value = value[3:]
        elif value.startswith(('assets/', 'vendor/', 'site.css', 'app.js')):
            value = 'preview/' + value
        return f'{attribute}="{value}"'

    html = re.sub(r'\b(src|href)="([^"]+)"', asset_url, html)

    def import_map(match):
        mapping = json.loads(match.group(1))
        mapping['imports'] = {
            './preview/' + key[2:]: './preview/' + value[2:]
            for key, value in mapping['imports'].items()
        }
        return '<script type="importmap">\n      ' + json.dumps(mapping) + '\n    </script>'

    html = re.sub(
        r'<script type="importmap">\s*(.*?)\s*</script>',
        import_map, html, flags=re.DOTALL,
    )
    return html.replace(
        '<!doctype html>',
        '<!doctype html>\n<!-- Generated from preview/index.html by scripts/sync_homepage.py. -->',
        1,
    )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail if root HTML is stale')
    args = parser.parse_args()
    html = public_html()
    target = ROOT / 'index.html'
    if args.check:
        if target.read_text() != html:
            raise SystemExit('Run python3 scripts/sync_homepage.py to update index.html.')
        print('Public homepage matches the reviewed preview.')
    else:
        target.write_text(html)
        print('Generated index.html for https://kun-xiang.github.io/.')


if __name__ == '__main__':
    main()
