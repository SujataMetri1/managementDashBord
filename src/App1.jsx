import React from 'react'
import  { useState, useEffect } from "react";

function App1() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; 
  }, [theme]);

  const toggleTheme=()=>{
    setTheme((prev)=>(prev==='light' ?'dark':'light'))
  };
 
  return (
    <div className={`app ${theme}`}>
      <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}



export default App1