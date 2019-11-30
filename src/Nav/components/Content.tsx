import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = ({ children }: { children: ReactNode }) => {
  return <Container ref={undefined}>{children}</Container>;
};
