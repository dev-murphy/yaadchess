import webview
from pathlib import Path
import sys

def get_resource_path(relative_path: str) -> Path:
  """ Resolve resources in development and packaged builds. """
  if getattr(sys, 'frozen', False):
    base_path = Path(sys._MEIPASS)
  else:
    base_path = Path(__file__).resolve().parent.parent

  return base_path / relative_path

def main():
  # Get URLs for dev and production server
  DEV_URL = "http://localhost:5173"
  PROD_URL = get_resource_path("ui/dist/index.html")

  # Check mode
  mode = sys.argv[1] if len(sys.argv) > 1 else "--prod"
  
  if mode == "--prod" and not PROD_URL.exists():
    raise FileNotFoundError(
      f'Production frontend not found: {PROD_URL}'
    )
    
  url = DEV_URL if mode == "--dev" else PROD_URL.as_uri()
  webview.create_window(
    title="Yaad Chess",
    url=url,
  )
  webview.start(icon=get_resource_path("ui/src/assets/logo.png"), debug=mode == "--dev")

if __name__ == "__main__":
 main()