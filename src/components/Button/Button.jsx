import styled from "styled-components";
import cn from "classnames";

const StyledButton = styled.button`
    height: 3rem;
    width: 10rem;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: ${(props) => (props.isDark ? "rgba(8, 104, 104, 0.425)" : "var(--copper-rose)")};
    color: ${(props) => (props.isDark ? "var(--green-blue)" : "var(--mint-julip)")};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05) translate(5px, -5px);
        background-color: ${(props) => (props.isDark ? "var(--green-blue)" :  "var(--mint-julip)")};
        color: ${(props) => (props.isDark ?  "var(--bunker-dark)" : "var(--copper-rose)")};
    }
`

export const Button = ({ onClick, isDark, className, ...props }) => {
    return (
        <StyledButton onClick={onClick} isDark={isDark} {...props} className={cn(className)}/>
    )
}

Button.displayName = "Button"