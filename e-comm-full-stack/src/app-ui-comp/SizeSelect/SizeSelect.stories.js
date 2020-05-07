import React from "react";
import { action } from "@storybook/addon-actions";
import SizeSelect from "./index";

export default {
  title: "APP-UI-COMP/SizeSelect",
  component: SizeSelect,
};

const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const SELECTED_SIZE = "XL";

export const WithoutDefaultSelection = () => (
  <SizeSelect
    sizes={sizes}
    onClick={action("onChange")}
  />
);
export const WithDefaultSelection = () => (
  <SizeSelect
    sizes={sizes}
    onClick={action("onChange")}
    selectedSize={SELECTED_SIZE}
  />
);
