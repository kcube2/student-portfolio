import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
     <NavBar/>
     <HeroSection/>
     <Portfolio/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
