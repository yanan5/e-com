import React from "react";
import Radio from "@material-ui/core/Radio";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

export default ({ radioIconColor, radioIconSize, ...rest }) => (
  <Radio
    checkedIcon={
      <RadioButtonCheckedIcon
        style={{ fill: radioIconColor || "#FFF" }}
        fontSize={radioIconSize || "default"}
      />
    }
    icon={
      <Brightness1Icon
        style={{ fill: radioIconColor || "#FFF" }}
        fontSize={radioIconSize || "default"}
      />
    }
    {...rest}
  />
);
