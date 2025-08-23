import styled from "styled-components";
import cn from "clsx";

const nav = styled.nav`{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 77%;
    top: 20px;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    background-color: ${isDark ? "rgba(8, 104, 104, 0.425)" : "var(--copper-rose)"};
    color: ${isDark ? "var(--green-blue)" : "var(--mint-julip)"};
    transition: all 0.3s ease;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: 2;
    position: sticky;
    margin: -800px auto 10px;
}`

export const Nav = ({ navigators, ...props }) => {
    return (
        <nav {...props} className={cn("nav", props.className)}>
            <ul>
                {navigators.map((navigator) => (
                    <li key={navigator.id}>
                        <a href={navigator.href}>{navigator.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Nav.displayName = "Nav"