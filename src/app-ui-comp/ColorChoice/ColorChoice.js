import React, { useState } from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { RadioFilled } from "../../base-ui-comp";
import "./ColorChoice.scss";

export default function ColorChoice({ colors, defaultColor = "", onChange }) {
  const [value, setValue] = useState(defaultColor);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Box className="colorWrapper">
      <FormLabel component="legend">Color</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
        row={true}
      >
        {colors &&
          colors.map((color) => (
            <RadioFilled key={color} radioIconColor={color} value={color} />
          ))}
      </RadioGroup>
    </Box>
  );
}
