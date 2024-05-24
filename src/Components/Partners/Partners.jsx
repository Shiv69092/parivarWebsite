import React from "react";
import Ellipse from "../../images/Ellipse.png";
import "./Partners.scss";
import Title from "../Title/Title";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
const Partners = ({ textStyle }) => {
  const language = useSelector(selectLanguage);
  const partnerTitleText = {
    en: `Our Partners`,
    hi: `हमारे सहयोगियों`,
  };
  return (
    <>
      <div className="partnersSection">
        <Title
          title={partnerTitleText[language]}
          className="OurPartners"
          textStyle={textStyle}
        />
        <div className="partners">
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
          <div className="partner-image-section">
            <img className="partnerimage" src={Ellipse} alt="Your Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
