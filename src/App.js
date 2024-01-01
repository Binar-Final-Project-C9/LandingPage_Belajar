import "./App.css";
import Home from "./Components/landingPage/Home";
import About from "./Components/landingPage/About";
import Product from "./Components/landingPage/Product";
import Testimonials from "./Components/landingPage/Testimonial";
import Footer from "./Components/landingPage/Footer";
function App() {
  return (
    <div>
      <div className="App">
        <Home />
        <About />
        <Product />
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
