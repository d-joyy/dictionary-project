import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Danielle and is{" "}
            <a
              href="https://github.com/d-joyy/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
              class="open-source-code"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://practical-shockley-5dc54f.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              class="hosted"
            >
              Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
