import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./HomepageBanner.scss";
import bannerImage from "../../images/banner.png";
import { useTypingText } from "../../Utils/useTypingText";
import { setLanguage, selectLanguage } from "../../Redux/languageSlice";

const HomepageBanner = ({ textStyle }) => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const { word } = useTypingText(
    [
      "families during financial crisis",
      "students to achieve their goal",
      " jobseekers to find suitable Job",
      "families to get rental flat within budget",
    ],
    65,
    20
  );

  const HomeDescriptionData = {
    description: {
      en: "Your gateway to diverse job opportunities and financial empowerment. Answer quizzes, unlock coupons, and shape your career journey with us!",
      hi: "विभिन्न नौकरी के अवसरों और वित्तीय सशक्तिकरण के लिए आपका गेटवे। क्विज का उत्तर दें, कूपन खोलें, और हमारे साथ अपने करियर की यात्रा को आकार दें!",
    },
    bannerButtonText: {
      en: `Get In Touch`,
      hi: `संपर्क में रहो`,
    },
  };

  const handleLanguageChange = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div className="homePageContainer">
      <div className="searchSection">
        {/* <SearchInput buttonName="Search"/> */}
      </div>
      <div className="language">
        <div className="wrapper">
          <button
            className={`langBtn ${language === "en" ? "active" : ""}`}
            onClick={() => {
              handleLanguageChange("en");
            }}
            style={textStyle}
          >
            English
          </button>

          <button
            className={`langBtn ${language === "hi" ? "active" : ""}`}
            onClick={() => {
              handleLanguageChange("hi");
            }}
            style={textStyle}
          >
            Hindi
          </button>
        </div>
      </div>
      <img src={bannerImage} alt="" />
      <div className="banner-content">
        <div className="content-wrapper">
          <h1 className="banner-title" style={textStyle}>
            Helping {word}
          </h1>
          {/* <span className="banner-title">|</span> */}
          <p className="fadeIn banner-description" style={textStyle}>
            {HomeDescriptionData.description[language]}
          </p>
          <button style={textStyle}>
            {HomeDescriptionData.bannerButtonText[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
