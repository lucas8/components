import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import {
  styles,
  getPaddingFromSize,
  getFontSizeFromSize,
  ButtonProps
} from "./base";

const DarkButton = styled.button<ButtonProps>`
  ${styles.base};
  background: ${theme.neutral.one};
  color: #fff;

  &:hover {
    ${styles.hover};
    background: ${theme.neutral.two};
  }
  &:active {
    ${styles.active};
    background: ${theme.neutral.three};
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 3px ${theme.neutral.eight}50;
  }
`;

export const NeutralDarkButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <DarkButton {...props} py={py} px={px} fontSize={fontSize} />;
};

const LightButton = styled.button<ButtonProps>`
  ${styles.base};
  background: #fff;
  color: ${theme.neutral.one};

  &:hover {
    ${styles.hover};
    background: #fcfcfc;
  }
  &:active {
    ${styles.active};
    background: #fafafa;
  }
  &:focus {
    ${styles.focus};
    box-shadow: 0 0 0 3px ${theme.neutral.eight}50;
  }
`;

export const NeutralLightButton = (props: ButtonProps) => {
  const { size } = props;
  const { py, px } = getPaddingFromSize(size);
  const fontSize = getFontSizeFromSize(size);
  return <LightButton {...props} py={py} px={px} fontSize={fontSize} />;
};
