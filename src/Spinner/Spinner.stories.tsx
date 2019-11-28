import { storiesOf } from "@storybook/react";
import withPropsCombinations from "react-storybook-addon-props-combinations";
import { Spinner } from "./";

storiesOf("Spinner", module).add(
  "Default",
  withPropsCombinations(Spinner, {
    flavor: ["light", "dark"]
  })
);
