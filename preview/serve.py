#!/usr/bin/env python3
"""Serve the academic preview locally, without installing dependencies."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


class PreviewHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(302)
            self.send_header('Location', '/preview/')
            self.end_headers()
            return
        super().do_GET()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4321)
    args = parser.parse_args()
    handler = partial(PreviewHandler, directory=str(ROOT))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        print(f'Academic preview: http://127.0.0.1:{args.port}/preview/', flush=True)
        print(f'Original homepage: http://127.0.0.1:{args.port}/index.html', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print('\nPreview stopped.')
