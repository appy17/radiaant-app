import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { NavbarWithMegaMenu } from './component/Navbar';
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Donate from "./pages/Donation";

// import Footer from "./component/Footer";
import About from "./pages/About";
import Mks from "./pages/Mks";
import Footer from "./component/Footer";

// import Section1 from './component/Section1';

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mks" element={<Mks />} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
