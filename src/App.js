import { useState, useEffect } from "react";
import "./index.css"; 
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Home from './Home';
import Contact from "./Contact";
import ImageGallery from "./Projects";
import Footer from "./Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    // Optionally, persist theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div>
      <Navbar toggleTheme={toggleDarkMode} isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <ImageGallery isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
