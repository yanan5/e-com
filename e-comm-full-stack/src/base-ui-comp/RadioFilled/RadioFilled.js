import React from "react";
import Radio from "@material-ui/core/Radio";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

import "./RadioFilled.scss";

export default React.memo(({ radioIconColor, radioIconSize, ...rest }) => {
  return (
    <Radio
      className="filledRadio"
      checkedIcon={
        <RadioButtonCheckedIcon
          style={{ fill: radioIconColor || "#FFF" }}
          fontSize="default"
        />
      }
      icon={
        <Brightness1Icon
          style={{ fill: radioIconColor || "#FFF" }}
          fontSize="default"
        />
      }
      {...rest}
    />
  );
});
