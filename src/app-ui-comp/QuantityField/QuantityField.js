import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FormLabel from "@material-ui/core/FormLabel";
import RemoveIcon from "@material-ui/icons/Remove";
import "./QuantityField.scss";

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
      <Box className="quantityWrapper">
        <FormLabel>Quantity</FormLabel>
        <Box className="quantityField">
          <IconButton onClick={handleQtyChange("minus")}>
            <RemoveIcon fontSize="large" />
          </IconButton>
          <TextField
            type="number"
            variant="outlined"
            value={qty}
            onChange={handleQtyChange("num-change")}
            {...rest}
          />
          <IconButton onClick={handleQtyChange("plus")}>
            <AddIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    );
  }
);
