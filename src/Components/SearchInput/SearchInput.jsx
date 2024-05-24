import React from "react";
import "../SearchInput/SearchInput.scss";

const SearchInput = (props) => {
  return (
    <div className="searchContainer">
      <input type="search" name="gsearch" className={props.className} />
      <button>{props.buttonName}</button>
    </div>
  );
};

export default SearchInput;
