import React from "react";
import Circle from "./Circle";
import styled from "styled-components";

interface SpinnerProps {
  flavor?: "light" | "dark";
  size?: number;
}

export const Spinner = (props: SpinnerProps) => {
  const { flavor = "light", size = 30 } = props;

  return (
    <Container>
      <Circle flavor={flavor} size={size} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
