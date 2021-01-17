import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ExpandableSearch from "./index";

export default {
  title: "BASE-UI-COMP/ExpandableSearch",
  component: ExpandableSearch,
  decorators: [withKnobs],
};

export const Default = () => <ExpandableSearch />;

export const widthActionLogged = () => (
  <ExpandableSearch onSearch={action("search")} />
);
