import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { NavbarWithMegaMenu } from './component/Navbar';
import Home from "./component/Home";
import Navbar1 from "./component/Navbar1";
import Donate from "./pages/Donation";

// import Footer from "./component/Footer";
import About from "./pages/About";
import Mks from "./pages/Mks";
import Footer from "./component/Footer";
import Founder from "./pages/Founder";
import PranicHealing from "./pages/PranicHealing";

// import Section1 from './component/Section1';

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/mks" element={<Mks />} />
        <Route path="/pranic" element={<PranicHealing />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
