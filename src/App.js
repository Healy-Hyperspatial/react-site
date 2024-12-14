import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
