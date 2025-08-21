import "../src/assets/App.css";
import { useState, useEffect } from "react";
import darkImg from "./assets/imagedark.jpg";
import lightImg from "./assets/imagelight.jpg";
import { Card } from './components/Card/card';
import styled, { ThemeProvider } from "styled-components";

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
`;

const lightTheme = {
  backgroundColor: "var(--mint-julip)",
  color: "var(--copper-rose)",
}

const darkTheme = {
  backgroundColor: "var(--bunker-dark)",
  color: "var(--green-blue)",
}

// const Box = styled.h1`
//   position: absolute;
//   fontSize: clamp(2.9rem, 2.6rem + 6.8vw, 6.2rem);
//   top: 80%;
//   right: -5%;
//   display: block;
//   text-align: start;
//   z-index: 2;
//   color: ${props => {props.theme.color;
//     console.log(props.theme.color); return props.theme.color;
//   }};
//   background-color: ${props => {props.theme.backgroundColor;
//     console.log(props.theme.backgroundColor); return props.theme.backgroundColor;
//   }};
//   padding: 0.5rem 1.5rem;
//   border-radius: 60px;
//   transition: all 0.3s ease;  
// `;

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
      <div id="home" aria-label="Home">
        {/* <div className={`header_image ${!isDark ? "header_image-light" : "header_image-dark"}`}> */}
        <div className="header_image">
          <img className="header_image-img" src={isDark ? darkImg : lightImg} alt="image in dark mode" />

          {/* Switch Button */}
          <label className="switch">
            <input type="checkbox" checked={isDark} onChange={handleToggle} />
            <span className="slider"></span>
          </label>

          {/* Dynamically toggle class */}
          <h1 className={`header_image-h1 ${!isDark ? "light_h1-active" : "dark_h1-active"}`}>
          {/* <Box> */}
            The Memories: <br />
            That Fades Over Time
          {/* </Box> */}
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
    </ThemeProvider>
  )
}

export default App;
