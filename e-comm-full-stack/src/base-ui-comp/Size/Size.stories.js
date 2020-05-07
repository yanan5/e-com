import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Size from "./index";

export default {
  title: "BASE-UI-COMP/Size",
  component: Size,
  decorators: [withKnobs]
};

export const WithoutSelection = () => (
  <Size size="S" />
);
export const WithSelection = () => (
  <Size selected size="XXXL"/>
  
);
export const WithClick = () => (
  <Size onClick={action("Size Clicked")} size="XXXL" selected={boolean("selected", false)}/>
);
