import webview

def main():
  webview.create_window(
    title="Yaad Chess",
    url="http://localhost:5173",
  )
  
  webview.start(icon="../ui/src/assets/logo.png")

if __name__ == "__main__":
 main()