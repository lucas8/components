import React from "react";
import { storiesOf } from "@storybook/react";
import PImage from "./PImage";

const Image = () => {
  return (
    <PImage
      image="https://source.unsplash.com/WLUHO9A_xik/600x600"
      placeholder="https://source.unsplash.com/WLUHO9A_xik/60x60"
    />
  );
};

storiesOf("Progressive Image", module).add("Default", Image);
