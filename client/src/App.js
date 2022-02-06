import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
      <form action="../../post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form>
      <Footer></Footer>
    </div>
  );
}

export default App;
