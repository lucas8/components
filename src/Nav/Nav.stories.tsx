import React from "react";
import { storiesOf } from "@storybook/react";
import { Nav } from "./Nav";
import { PrimaryButton } from "../Button";

const ChangefeedNav = () => (
  <div style={{ height: "200vh" }}>
    <Nav>
      <div>
        <strong>Some</strong> product
      </div>
      <Nav.Content>
        <PrimaryButton size="small">Login</PrimaryButton>
      </Nav.Content>
    </Nav>

    <h1>Navbar</h1>
  </div>
);

storiesOf("Nav", module)
  .add("Desktop", ChangefeedNav)
  .add("Mobile", ChangefeedNav, { viewport: { defaultViewport: "iphonex" } });
