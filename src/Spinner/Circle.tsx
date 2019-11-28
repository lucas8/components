import styled, { keyframes } from "styled-components";
import { theme } from "../theme";

const spin = keyframes`
  to {transform: rotate(360deg);}
`;

interface SpinnerProps {
  flavor: "light" | "dark";
  size: number;
}

export default styled.span<SpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    top: 0;
    left: 0;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    border-radius: 50%;
    border: 2px solid
      ${props =>
        props.flavor == "light" ? theme.neutral.eight : theme.neutral.three};
    border-top-color: transparent;
    border-right-color: ${props =>
      props.flavor == "light" ? theme.neutral.eight : theme.neutral.three};
    border-bottom-color: transparent;
    animation: ${spin} 2s linear infinite;
  }
`;
