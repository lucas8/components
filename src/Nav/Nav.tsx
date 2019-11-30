import React from "react";
import { Wrapper } from "./components/Wrapper";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { BackgroundProps } from "styled-system";

interface NavProps extends BackgroundProps {
  children?: React.ReactNode;
  flavor?: "dark" | "light";
}

const Nav = ({ children, flavor = "dark", ...rest }: NavProps) => {
  return (
    <Wrapper>
      <Navbar flavor={flavor} {...rest}>
        {children}
      </Navbar>
    </Wrapper>
  );
};

Nav.Content = Content;

export { Nav };
