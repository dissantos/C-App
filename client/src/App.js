import "./App.css";
import ForumPage from "./page/ForumPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <header><Header/></header>
      <main><ForumPage/></main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
