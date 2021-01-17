import React from "react";
import { withKnobs, boolean, color } from "@storybook/addon-knobs";
import TopBar from "./index";

export default {
  title: "APP-UI-COMP/TopBar",
  component: TopBar,
  decorators: [withKnobs]
};

export const Default = () => <TopBar />