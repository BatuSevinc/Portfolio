//Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
//React Router DOM
import { Routes, Route } from "react-router-dom";
//Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
//Css
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;