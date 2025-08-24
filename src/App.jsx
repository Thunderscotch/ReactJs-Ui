import "../src/App.css";
import { useState, useEffect } from "react";
import darkImg from "./assets/imagedark.jpg";
import lightImg from "./assets/imagelight.jpg";
import { Card } from './components/Card/card';
import styled, { ThemeProvider } from "styled-components";
import { Creator } from "./page/creator";
import { Nav } from './components/Nav/Nav.jsx'

const Bubble = styled.div`
  position: absolute;
  width: 30%;
  height: 20%;
  border-radius: 120px;
  background-color: ${props => props.color ? "rgba(8, 104, 104, 0.425)" : "rgba(242, 235, 193, 0.959)"};
  color: ${(props) => (props.color ? "var(--green-blue)" : "var(--copper-rose)")};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: -90px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05) translate(5px, -5px);
    background-color: ${props => props.color ? " var(--green-blue)" : "var(--mint-julip)"};
    color: ${props => props.color ? "var(--bunker-dark)" : "var(--copper-rose)"};
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 30%;
    height: 10%;
    font-size: clamp(5px, 5px + 0.5vw, 10px);
    left: -20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 30%;
    height: 10%;
    font-size: var(--text--2);
    left: -20px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40%;
    height: 15%;
    left: -20px;
    font-size: var(--text--1);
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 40%;
    height: 15%;
    left: -50px;
    font-size: var(--text--1);
  }
`;

const navigator = [
  {
    id: 1,
    name: 'The Illustration',
    href: '#home'
  },
  {
    id: 2,
    name: 'The Creator',
    href: '#about'
  }
];

const lightTheme = {
  backgroundColor: "var(--mint-julip)",
  color: "var(--copper-rose)",
  hoverBgColor: "var(--copper-rose)",
  hoverColor: "var(--mint-julip)"
}

const darkTheme = {
  backgroundColor: "rgba(8, 104, 104, 0.425)",
  color: "var(--green-blue)",
  hoverBgColor: "var(--green-blue)",
  hoverColor: "var(--bunker-dark)"
}

const Box = styled.h1`
  position: absolute;
  font-size: var(--text-4);
  top: 80%;
  right: -5%;
  display: block;
  text-align: start;
  z-index: 2;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  padding: 0.5rem 1.5rem;
  border-radius: 60px;
  transition: all 0.3s ease; 
  
  &:hover {
    transform: scale(1.05) translate(5px, -5px);
    background-color: ${props => props.theme.hoverBgColor};
    color: ${props => props.theme.hoverColor};
  }

  @media (max-width: 768px) {
    font-size: var(--text-2);
  }
  @media (max-width: 480px) {
    font-size: var(--text-1);
  }
`;

const Title = styled.h2`
  line-height: 1.1;
  transition: all 0.3s ease;
`

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
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Nav
        navigators={navigator}
        isDark={isDark}
      />
      <div id="home" aria-label="Home">
        <div className="header_image">
          <img className="header_image-img" src={isDark ? darkImg : lightImg} alt="image in dark mode" />

          <label className="switch" aria-label="switch">
            <input type="checkbox" checked={isDark} onChange={handleToggle} />
            <span className="slider"></span>
          </label>

          <Box>
            The Memories: <br />
            That Fades Over Time
          </Box>

          <Bubble color={isDark}>
            <Title> {isDark ? "Life Becomes dark sometimes" : "But Light Shines In the Dark"} </Title>
          </Bubble>

          <Card
            title="Illustration"
            desctription="The imagination of Certain some one came out of the void."
            dark={isDark}
          />
        </div>
        <div id="about" aria-label="About">
          <Creator isDark={isDark} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;
