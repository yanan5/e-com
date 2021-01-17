import React from "react";
import FormLabel from "@material-ui/core/FormLabel";

import "./ColorLabel.scss";

const ColorLabel = (props) => (
  <FormLabel
    filled
    className="colorLabel"
    style={{ backgroundColor: props.color }}
  >
    {props.name}
  </FormLabel>
);

export default ColorLabel;
