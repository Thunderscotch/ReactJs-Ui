import "../src/assets/App.css";
import { useState, useEffect } from "react";
import darkImg from "./assets/imagedark.jpg";
import lightImg from "./assets/imagelight.jpg";
import { Card } from './components/Card/card';
import styled from "styled-components";

const Bubble = styled.div`
  position: absolute;
  width: 30%;
  height: 20%;
  border-radius: 120px;
  background-color: ${props => props.color? "rgba(8, 104, 104, 0.425)" : "rgba(242, 235, 193, 0.959)"};
  color: ${(props) => (props.color ? "var(--green-blue)" : "var(--copper-rose)")};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: -90px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05) translate(5px, -5px);
    background-color: ${props => props.color? " var(--green-blue)" : "var(--mint-julip)"};
    color: ${props => props.color? "var(--bunker-dark)" : "var(--copper-rose)"};
  }
`;

const Title = styled.h2`{
  line-height: 1.1;
  transition: all 0.3s ease;
}`

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

      <Bubble color={isDark}>
          <Title> {isDark ? "Life Becomes dark sometimes" : "But Light Shines In the Dark"} </Title>
      </Bubble>
      
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
