import "./App.css";
import FetchData from "./FetchData";

function App() {
  return (
    <div className="content">
      <header>
        <h1>Rede Social</h1>
      </header>

      <main className="main">
        <h2>Postagens</h2>
        <FetchData />
      </main>

      <footer className="footer">
        <p>© 2024 Rede Social. Site feito por Bruno Müller.</p>
      </footer>
    </div>
  );
}

export default App;
