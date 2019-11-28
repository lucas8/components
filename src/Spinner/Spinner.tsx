import React from "react";
import Circle from "./Circle";
import styled from "styled-components";

interface SpinnerProps {
  flavor?: "light" | "dark";
}

export const Spinner = (props: SpinnerProps) => {
  const { flavor = "light" } = props;

  return (
    <Container>
      <Circle flavor={flavor} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
