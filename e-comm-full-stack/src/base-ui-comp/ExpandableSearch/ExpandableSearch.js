import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./ExpandableSearch.scss";

export default function ExpandableSearch({ onSearch = () => {} }) {
  const textRef = useRef(null);
  const setInputFocus = () => {
    textRef.current && textRef.current.focus();
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSearch(textRef.current.value);
  };
  const onTextChange = (e) => {
    if (e.target.value.trim() === "") onSearch("");
  };
  return (
    <form className="expandableSearch" onSubmit={onSearchSubmit}>
      <IconButton onClick={setInputFocus}>
        <SearchIcon />
      </IconButton>
      <TextField
        inputRef={textRef}
        onChange={onTextChange}
        variant="outlined"
        type="search"
        placeholder="search anything"
      />
    </form>
  );
}
