import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import "./Size.css";

const Size = React.memo(({ selected, size, onClick = () => {}, ...rest }) => (
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

Size.defaultProps = {
  onClick: () => {},
  selected: false,
  size: "",
};
Size.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  size: PropTypes.string,
};

export default Size;
