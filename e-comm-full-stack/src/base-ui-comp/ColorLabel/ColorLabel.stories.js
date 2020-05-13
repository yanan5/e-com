import React from "react";
import { withKnobs, color, text } from "@storybook/addon-knobs";
import ColorLabel from "./index";

export default {
  title: "BASE-UI-COMP/ColorLabel",
  component: ColorLabel,
  decorators: [withKnobs],
};

export const Default = () => (
  <ColorLabel color={color("labelColor", "#00D3CA")} name={text("labelText", "TEST")} />
);
