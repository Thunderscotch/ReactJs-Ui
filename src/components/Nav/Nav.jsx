import styled from "styled-components";
import cn from "classnames";

const NavStyle = styled.nav`
    display: flex;
    justify-content: center;
    justify-self: center;
    width: 50%;
    top: 20px;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.isDark ? "var(--green-blue)" : "var(--copper-rose)"};
    transition: all 0.3s ease;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 3;
    position: sticky;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a { 
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: ${(props) => props.isDark ? "var(--bunker-dark)" : "var(--mint-julip)"};
        border-radius: 50px;
        transition: all 0.3s ease;
    }

    a:hover {
        color: ${(props) => props.isDark ? "var(--green-blue)" : "var(--copper-rose)"};
        background-color: ${(props) => props.isDark ? "var(--bunker-dark)" : "var(--copper-rose)"};
        border-radius: 50px;
    }
    `;

export const Nav = ({ navigators, ...props }) => {
    return (
        <NavStyle {...props} isDark={props.isDark} className={cn(props.className)}>
            <ul>
                {navigators.map((navigator) => (
                    <li key={navigator.id}>
                        <a href={navigator.href}>{navigator.name}</a>
                    </li>
                ))}
            </ul>
        </NavStyle>
    )
}

Nav.displayName = "Nav"