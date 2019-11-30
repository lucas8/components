import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ContentProps {
  children?: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <Container ref={undefined}>{children}</Container>;
};
