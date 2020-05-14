import React from "react";
import { withKnobs, boolean, color } from "@storybook/addon-knobs";
import ExpandableSearch from "./index";

export default {
  title: "BASE-UI-COMP/ExpandableSearch",
  component: ExpandableSearch,
  decorators: [withKnobs]
};

export const Default = () => <ExpandableSearch />