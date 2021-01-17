import React from "react";
import { action } from "@storybook/addon-actions";
import InputPagination from "./index";

export default {
  title: "APP-UI-COMP/InputPagination",
  component: InputPagination,
};

export const Default = () => <InputPagination />;
export const PageSize4 = () => <InputPagination totalPages={4} />;
export const CurrentPageSelected = () => (
  <InputPagination totalPages={10} currentPageNo={3} />
);
export const WithEventHandler = () => (
  <InputPagination
    totalPages={10}
    currentPageNo={3}
    onPageChange={action("onPageChange")}
  />
);
