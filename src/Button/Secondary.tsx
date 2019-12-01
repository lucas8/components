import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import {
  styles,
  getPaddingFromSize,
  getFontSizeFromSize,
  ButtonProps
} from "./base";

const Button = styled.button<ButtonProps>`
  ${styles.base};
  background: #fff;
  color: ${theme.brand.default};

  &:hover {
    ${styles.hover};
    background: #fcfcfd;
  }
  &:active {
    ${styles.active};
    background: #f7f7f8;
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 3px ${theme.primary.nine}50;
  }
`;

export const SecondaryButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <Button {...props} py={py} px={px} fontSize={fontSize} />;
};
