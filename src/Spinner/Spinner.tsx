import React from "react";
import Circle from "./Circle";
import styled from "styled-components";

export const Spinner = () => (
  <Container>
    <Circle></Circle>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
