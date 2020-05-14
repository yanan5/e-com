import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchAppBar() {
  return (
    <div className="search">
      <div className="searchIcon">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <InputBase
        type="search"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        
      />
    </div>
  );
}
