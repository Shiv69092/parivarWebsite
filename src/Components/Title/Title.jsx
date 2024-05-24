import React from "react";
import "./Title.scss";

const Title = ({ className, title, textStyle }) => {
  return (
    <>
      {
        <div className={`title-container ${className} `}>
          <div className="title-comp" style={textStyle}>
            {title}
          </div>
          <hr />
        </div>
      }
    </>
  );
};

export default Title;
