import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text, color, select } from "@storybook/addon-knobs";
import RadioFilled from "./index";

export default {
  title: "BASE-UI-COMP/RadioFilled",
  component: RadioFilled,
  decorators: [withKnobs]
};


const options = {
  small: 'small',
  default: 'default',
  large: 'large'
};
const defaultOptionsValue = options.default

export const Checked = () => (
  <RadioFilled
    radioIconColor={color('color', 'yellow')}
    checked={boolean("Enabled",true)}
    onChange={action("onChange")}
    radioIconSize={select("size", options, defaultOptionsValue)}
    value="a"
    name="radio-button-demo"
  />
);
export const UnChecked = () => (
  <RadioFilled
    radioIconColor={color('color', 'yellow')}
    checked={boolean("Enabled",false)}
    onChange={action("onChange")}
    radioIconSize={select("size", options, defaultOptionsValue)}
    value="a"
    name="radio-button-demo"
  />
);