import React from "react";
import { action } from "@storybook/addon-actions";
import QuantityField from "./index";

export default {
  title: "APP-UI-COMP/QuantityField",
  component: QuantityField
}

export const Default = () => <QuantityField />;
export const WithPresetValue = () => <QuantityField existingQty={10}/>;
export const WithActionLogged = () => <QuantityField onQtyChange={action('onQtyChange')}/>
