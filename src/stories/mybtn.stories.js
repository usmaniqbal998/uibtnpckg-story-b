import MyButton from "../components/mybtn";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  component: MyButton,
  title: "MyButton Component",
};

export const buttons = () => (
  <div>
    <MyButton
      content="Primary"
      handleClick={action("Primary Button Pressed")}
      _class="primary-btn"
    />
    <MyButton
      content="Secondary"
      handleClick={action("Secondary Button Pressed")}
      _class="secondary-btn"
    />
  </div>
);

export const primaryBtn = () => (
  <MyButton
    content="Primary"
    handleClick={action("Primary Button Pressed")}
    _class="primary-btn"
  />
);

export const secondaryBtn = () => (
  <MyButton
    content="Secondary"
    handleClick={action("Secondary Button Pressed")}
    _class="secondary-btn"
  />
);
