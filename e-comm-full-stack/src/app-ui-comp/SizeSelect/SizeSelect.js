import React, { useState, useCallback } from "react";
import { Size } from "../../base-ui-comp";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import "./SizeSelect.scss";

export default function SizeSelect({ sizes, selectedSize = "", onClick }) {
  const [sizeSelected, setSize] = useState(selectedSize);

  const handleClick = useCallback(
    (size) => {
      setSize(size);
      onClick(size);
    },
    [onClick]
  );
  return (
    <Box className="sizeSelect">
      <FormLabel>Sizes</FormLabel>
      <Box className="sizeWrapper">
        {sizes &&
          sizes.map((size) => (
            <Size
              key={size}
              size={size}
              selected={sizeSelected === size}
              onClick={handleClick}
            />
          ))}
      </Box>
    </Box>
  );
}
