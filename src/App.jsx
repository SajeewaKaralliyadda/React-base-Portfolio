import { useState } from "react";
import "./App.css";

// Pages
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Certifications from "./Certifications.jsx";

// Components
import NavBar from "./Componant/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Certifications />
    </>
  );
}

export default App;
