import "../src/assets/App.css";
import { useState, useEffect } from "react";
import darkImg from "./assets/imagedark.jpg";
import lightImg from "./assets/imagelight.jpg";
import { Card } from './components/Card/card';

function App() {
  const [isDark, setisDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
  }, [isDark]);
  
  const handleToggle = () => {
    setisDark(!isDark);
  };

  return (
    <div id="home" aria-label="Home">
      <div className={`header_image ${!isDark ? "header_image-light" : "header_image-dark"}`}>
        <img className="header_image-img" src={isDark ? darkImg : lightImg} alt="image in dark mode" />
        
        {/* Switch Button */}
        <label className="switch">
          <input type="checkbox" checked={isDark} onChange={handleToggle} />
          <span className="slider"></span>
        </label>

        {/* Dynamically toggle class */}
        <h1 className={`header_image-h1 ${!isDark ? "light_h1-active" : "dark_h1-active"}`}>
          The Memories: <br />
          That Fades Over Time
        </h1>
      
      <Card 
      title="Illustration"
      desctription="The imagination of Certain some one came out of the void."
      dark={isDark}
      />
      </div>
    </div>
  )
}

export default App;
