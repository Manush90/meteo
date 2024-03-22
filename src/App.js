import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import CityCards from "./components/CityCards.jsx";
import MyMaps from "./components/MyMaps.jsx";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <Body></Body>
      <CityCards></CityCards>
      <MyMaps></MyMaps>
      <Footer></Footer>
    </div>
  );
}

export default App;
