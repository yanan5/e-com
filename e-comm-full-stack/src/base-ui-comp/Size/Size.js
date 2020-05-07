import React from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import "./Size.css";

export default React.memo(({ selected, size, onClick = () => {}, ...rest }) => (
  <Button
    variant="contained"
    component="div"
    size="large"
    className={classNames("size", { selected: selected })}
    onClick={() => onClick(selected ? "" : size)}
    {...rest}
  >
    <span>{size}</span>
  </Button>
));
