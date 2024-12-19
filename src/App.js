import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OpenSource from "./components/OpenSource";
// import ServiceCards from "./components/ServiceCards";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      {/* <ServiceCards /> */}
      <OpenSource />
      <Footer />
    </div>
  );
}

export default App;
