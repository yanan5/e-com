import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./QuantityField.css";

export default React.memo(
  ({ existingQty = 0, onQtyChange = () => {}, ...rest }) => {
    const [qty, setQuantity] = useState(existingQty);
    const handleQtyChange = (action) => (e) => {
      let value = qty;
      switch (action) {
        case "plus":
          value = qty + 1;
          break;
        case "minus":
          value = qty - 1;
          break;
        case "num-change":
        default:
          value = Number(e.target.value);
      }
      value = value < 0 ? 0 : value;
      setQuantity(value);
      onQtyChange(value);
    };
    return (
      <Box className="quantityField">
        <IconButton>
          <RemoveIcon fontSize="large" onClick={handleQtyChange("minus")} />
        </IconButton>
        <TextField
          type="number"
          variant="outlined"
          value={qty}
          onChange={handleQtyChange("num-change")}
          {...rest}
        />
        <IconButton>
          <AddIcon fontSize="large" onClick={handleQtyChange("plus")} />
        </IconButton>
      </Box>
    );
  }
);
