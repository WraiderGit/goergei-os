import requests
from http.server import BaseHTTPRequestHandler, HTTPServer

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        data = requests.get("https://ipwho.is/").text
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(data.encode())

HTTPServer(("localhost", 9000), Handler).serve_forever()
