import logo from './logo.svg';
import './App.css';
import  Header  from './components/Header/Header';
import  Footer  from './components/Footer/Footer';
import Room from './components/Room/Room'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Room className="room"></Room>
      <Footer></Footer>
    </div>
  );
}

export default App;
