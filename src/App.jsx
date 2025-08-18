import './App.css'
import { useState } from "react";
import darkImg from "./assets/imagedark.jpg";
import lightImg from "./assets/imagelight.jpg";

function App() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div id="home" aria-label="Home">
      <div className="header_image">
        <img className="header_image-img" src={isOn ? darkImg : lightImg} alt="image in dark mode" />
        
        {/* Switch Button */}
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={handleToggle} />
          <span className="slider"></span>
        </label>

        {/* Dynamically toggle class */}
        <h1 className={`header_image-h1 ${!isOn ? "light_h1-active" : "dark_h1-active"}`}>
          The Memories: <br />
          That Fades Over Time
        </h1>
      </div>
    </div>
  )
}

export default App;
