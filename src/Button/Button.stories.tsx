import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import withPropsCombinations from "react-storybook-addon-props-combinations";
import { action } from "@storybook/addon-actions";
import { PrimaryButton, SecondaryButton } from ".";
import { NeutralDarkButton, NeutralLightButton } from "./Neutral";
import Icon from "./icon.inline.svg";

const WithIcon = () => {
  return (
    <Fragment>
      Click Me
      <Icon />
    </Fragment>
  );
};

storiesOf("Buttons", module)
  .add(
    "Primary",
    withPropsCombinations(PrimaryButton, {
      children: ["Click me"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "Secondary",
    withPropsCombinations(SecondaryButton, {
      children: ["Click me"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "Neutral Dark",
    withPropsCombinations(NeutralDarkButton, {
      children: ["Click me"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "Neutral Light",
    withPropsCombinations(NeutralLightButton, {
      children: ["Click me"],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  )
  .add(
    "With Icon",
    withPropsCombinations(SecondaryButton, {
      children: [<WithIcon />],
      size: ["small", undefined, "large"],
      disabled: [true, false],
      onClick: [action("click")]
    })
  );
