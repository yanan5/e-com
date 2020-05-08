import React, { useState, useMemo } from "react";
import Box from "@material-ui/core/Box";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

import "./InputPagination.css";

export default React.memo(
  ({ currentPageNo = 1, totalPages = 1, onPageChange = () => {} }) => {
    const [pageNo, setPageNo] = useState(currentPageNo);
    const handlePaginationChange = (action) => (e) => {
      if (
        (pageNo === totalPages && action === "plus") ||
        (pageNo === 1 && action === "minus")
      )
        return;
      let value = pageNo;
      switch (action) {
        case "plus":
          value = pageNo + 1;
          break;
        case "minus":
          value = pageNo - 1;
          break;
        case "select-change":
        default:
          value = Number(e.target.value);
      }
      value = value < 0 ? 0 : value;
      setPageNo(value);
      onPageChange(value);
    };
    const GENERATED_MENU_ITEMS = useMemo(() => {
      let menuItems = [];
      for (let i = 0; i < totalPages; i++) {
        menuItems.push(
          <MenuItem key={i} value={i + 1}>
            {i + 1}
          </MenuItem>
        );
      }
      return menuItems;
    }, [totalPages]);
    return (
      <Box className="inputPagination">
        <Typography component="span">Page</Typography>
        <FormControl variant="outlined">
          <Select
            value={pageNo}
            onChange={handlePaginationChange("select-change")}
          >
            {GENERATED_MENU_ITEMS}
          </Select>
        </FormControl>
        <Typography component="span">of {totalPages}</Typography>
        <IconButton onClick={handlePaginationChange("minus")}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handlePaginationChange("plus")}>
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
      </Box>
    );
  }
);
