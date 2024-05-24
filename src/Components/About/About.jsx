import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import aboutPng from "../../images/about.png";
import "./About.scss";
import Title from "../Title/Title";
import { selectLanguage } from "../../Redux/languageSlice";

const About = ({ textStyle }) => {
  const language = useSelector(selectLanguage);

  const aboutText = {
    en: `Welcome to Parivaar Group, where we believe in transforming lives through meaningful employment and financial empowerment. At Parivaar, our mission is to connect individuals with a diverse range of job opportunities, catering to various skill sets and aspirations. We go beyond the conventional job search by offering an engaging platform where users can not only discover exciting career paths but also boost their financial well-being. Our unique approach includes rewarding users with exclusive coupons for participating in informative quizzes, making the job-seeking experience both educational and rewarding.`,
    hi: `परिवार ग्रुप में आपका स्वागत है, जहाँ हम मान्यता से रोजगार और वित्तीय सशक्तिकरण के माध्यम से जीवनों को परिवर्तित करने में विश्वास रखते हैं। परिवार में, हमारा मिशन है व्यक्तियों को विभिन्न कौशल सेट्स और आकांक्षाओं को समर्थन करने वाले विभिन्न प्रकार के नौकरी के अवसरों से जोड़ना। हम सामान्य रूप से नौकरी खोज को पारंपरिक से परे जाते हैं और उपयोगकर्ताओं को एक रोमांचक करियर पथ खोजने के लिए ही नहीं, बल्कि अपने वित्तीय भले-बुरे को सुधारने के लिए एक आकर्षक प्लेटफ़ॉर्म प्रदान करने के साथ। हमारा अद्वितीय दृष्टिकोण शिक्षात्मक और पुरस्कृत जानकारी प्रदान करने के लिए सौजन्यिक क्विज में भाग लेने के लिए उपयोगकर्ताओं को एक मात्र प्लेटफ़ॉर्म के साथ नहीं ही रोजगार खोज का अनुभव करा है, बल्कि उनके वित्तीय कल्याण को बढ़ावा देने के लिए भी शामिल है।`,
  };
  const aboutTitleText = {
    en: `About Us`,
    hi: `हमारे बारे में`,
  };

  return (
    <div className="about-container" id="about">
      <Title
        title={aboutTitleText[language]}
        className="aboutclass fadeIn"
        textStyle={textStyle}
      />

      <div className="about-container_inner">
        <div className="image-section fadeIn">
          <img src={aboutPng} alt="" />
        </div>
        <div className="description-section">
          <div className="fadeIn description" style={textStyle}>
            {aboutText[language]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
