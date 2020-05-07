import React from "react";
import { action } from "@storybook/addon-actions";
import ColorChoice from "./index";

export default {
  title: "APP-UI-COMP/ColorChoice",
  component: ColorChoice,
};

const colors = [
  "#6EB2FB",
  "#00D3CA",
  "#F62F5E",
  "#FE5C07",
  "#F8E71C",
  "#7ED321",
  "#9013FE",
];
const defaultColor = "#F62F5E"
export const WithoutDefaultSelection = () => (
  <ColorChoice
    colors={colors}
    onChange={action("onChange")}
  />
);
export const WithDefaultSelected = () => (
  <ColorChoice
    colors={colors}
    onChange={action("onChange")}
    defaultColor={defaultColor}
  />
);
