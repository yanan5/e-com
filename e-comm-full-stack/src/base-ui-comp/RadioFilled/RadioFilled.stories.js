import React from "react";
import { withKnobs, boolean, color } from "@storybook/addon-knobs";
import RadioFilled from "./index";

export default {
  title: "BASE-UI-COMP/RadioFilled",
  component: RadioFilled,
  decorators: [withKnobs]
};

export const Checked = () => (
  <RadioFilled
    radioIconColor={color('color', 'yellow')}
    checked={boolean("Enabled",true)}
    value="a"
    name="radio-button-demo"
  />
);
export const UnChecked = () => (
  <RadioFilled
    radioIconColor={color('color', 'yellow')}
    checked={boolean("Enabled",false)}
    value="a"
    name="radio-button-demo"
  />
);