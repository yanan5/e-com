import React, { useState, useCallback } from "react";
import { Size } from "../../base-ui-comp";
import Box from "@material-ui/core/Box";
import "./SizeSelect.css";

export default function SizeSelect({ sizes, selectedSize = "", onClick }) {
  const [sizeSelected, setSize] = useState(selectedSize);

  const handleClick = useCallback((size) => {
    setSize(size);
    onClick(size);
  }, [onClick]);
  return (
    <Box className="sizeSelect">
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
  );
}
