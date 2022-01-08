import "./App.css";
import ActivitiesPage from "./pages/ActivitiesPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ActivitiesPage />
      <Footer></Footer>
    </div>
  );
}

export default App;
