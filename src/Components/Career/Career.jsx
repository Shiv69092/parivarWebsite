import React from "react";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import Title from "../Title/Title";
import "./Career.scss";
import { selectLanguage } from "../../Redux/languageSlice";
const Career = ({ textStyle }) => {
  const language = useSelector(selectLanguage);
  const careerText = {
    en: `Dive Into A Plethora Of Career Possibilities Tailored To Your Expertise. Discover Roles That Align With Your Skills And Passion, Opening Doors To A Fulfilling Professional Journey.`,
    hi: `अपनी विशेषज्ञता के अनुरूप ढेर सारी कैरियर संभावनाओं का लाभ उठाएं। ऐसी भूमिकाएँ खोजें जो आपके कौशल और जुनून के अनुरूप हों, जो एक पूर्ण व्यावसायिक यात्रा के द्वार खोलती हों।`,
  };
  const jobPortalText = {
    en: `Check our Job portal`,
    hi: `हमारा जॉब पोर्टल देखें`,
  };
  return (
    <div className="Career-section" id="join">
      <Title
        title={language === "en" ? "Career" : "आजीविका"}
        className="careerClass"
        textStyle={textStyle}
      />
      <div className="Career-section-description" style={textStyle}>
        {careerText[language]}
      </div>
      <div className="Career-section-link">
        <p style={textStyle}>{jobPortalText[language]}</p>
        <button href="https://www.google.com/">
          {language === "en" ? "Secure A Job" : "सिक्योर ए जॉब"}
        </button>
      </div>
      <SearchInput
        buttonName={language === "en" ? "Join" : "जॉइन"}
        className="joinSearch"
      />
    </div>
  );
};

export default Career;
