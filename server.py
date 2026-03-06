from http.server import SimpleHTTPRequestHandler, HTTPServer
import urllib.request

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/geoip":
            with urllib.request.urlopen("https://ipwho.is/") as response:
                data = response.read()

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            self.wfile.write(data)
        else:
            super().do_GET()

HTTPServer(("localhost", 8000), Handler).serve_forever()
