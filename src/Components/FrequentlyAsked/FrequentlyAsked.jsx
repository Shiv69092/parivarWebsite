import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Title from "../Title/Title";
import "./FrequentlyAsked.scss";

const FrequentlyAsked = ({ textStyle }) => {
  return (
    <div className="frquent-section">
      <Title title="FAQ" textStyle={textStyle} />
      <div className="frequent-section-description" style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </div>
      <SearchInput buttonName="ASK" textStyle={textStyle} />
    </div>
  );
};

export default FrequentlyAsked;
