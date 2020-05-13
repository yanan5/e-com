import React from "react";
import { withKnobs, boolean, color } from "@storybook/addon-knobs";
import ColorLabel from "./index";

export default {
  title: "../ColorLabel",
  component: ColorLabel,
  decorators: [withKnobs]
};

export const Default = () => <ColorLabel />