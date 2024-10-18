import React, { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  useEffect(() => {
    // Check for user's preference for dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial dark mode based on user's preference
    setIsDarkMode(mediaQuery.matches);

    // Listener to detect changes in the preference
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Clean up listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-800 text-gray-200" : "bg-[#014f86] text-white"
      } text-center py-4 w-full transition-colors duration-300`}
    >
      <p className="text-sm">
        Ahsan Taqweem &copy; {currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
