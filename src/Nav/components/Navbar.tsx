import styled, { css } from "styled-components";

import { background, BackgroundProps } from "styled-system";
import { theme } from "../../theme";

const gradient = (props: NavbarProps): string => {
  if (props.flavor == "dark") {
    return `linear-gradient(
        -90deg,
        ${theme.neutral.five}50 0,
        ${theme.neutral.five} 50%,
        ${theme.neutral.five}50 100%
    )`;
  }

  return `linear-gradient(
    -90deg,
    #ffffff50 0,
    #fff 50%,
    #ffffff50 100%
)`;
};

interface NavbarProps extends BackgroundProps {
  flavor: "light" | "dark";
}

export const Navbar = styled.nav<NavbarProps>`
  ${background}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 1rem;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.background &&
    css`
      box-shadow: ${theme.shadow.large};
    `}

  ${props =>
    !props.background &&
    css`
      :after {
        background-image: ${gradient(props)};
        content: "";
        display: block;
        height: 2px;
        opacity: 0.08;
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        width: 100%;
      }
    `}
`;
