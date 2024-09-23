import "./App.css";
import FetchData from "./FetchData";

function App() {
  return (
    <div className="content">
      <header>
        <img src="" alt="" />
        <h1>Rede Social</h1>
      </header>

      <main className="main">
        <h2>Postagens</h2>
        <FetchData />
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
