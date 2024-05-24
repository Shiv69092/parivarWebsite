import React from "react";
import "./Footer.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ textStyle }) => {
  const language = useSelector(selectLanguage);
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="nav-list">
          <h2> {language === "en" ? "About" : "अबाउट"}</h2>
          <div
            className="list"
            style={textStyle}
            onClick={() => handleScroll("about")}
          >
            <a href> {language === "en" ? "Who we Are" : "हू वी आर"}</a>
          </div>
          <div
            className="list"
            style={textStyle}
            onClick={() => handleScroll("join")}
          >
            <a href> {language === "en" ? "Join us" : "जॉइन अस"}</a>
          </div>
          <div
            className="list"
            style={textStyle}
            onClick={() => handleScroll("contact")}
          >
            <a href> {language === "en" ? "Contact Us" : "कांटैक्ट अस"}</a>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="social">
          <h4 style={textStyle}>
            {" "}
            {language === "en" ? "Social media" : "सोशल मीडिया"}
          </h4>
          <div className="icon-list">
            <a
              href="https://www.linkedin.com/posts/parivaargrouporg_atgatmatbatrataatmasnatpatmatdatg-atuatgateatnassaslataatuataatb-activity-7158846230003933184-GOwQ/?utm_source=share&utm_medium=member_android"
              className="icon linkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/parivaargrouporg?igsh=b2RybzBtaWJoZzJo"
              className="icon instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/Parivaargrouporg?mibextid=ZbWKwL"
              className="icon facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <Link to="/privacy" style={textStyle}>
          {language === "en" ? "Privacy Policy" : "प्राइवेसी पॉलिसी"}
        </Link>
        <Link to="/return" style={textStyle}>
          {language === "en" ? "Return Policy" : "रिटर्न पॉलिसी"}
        </Link>
        <Link to="/terms" style={textStyle}>
          {language === "en" ? "Terms And Conditions" : "नियम और शर्तें"}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
