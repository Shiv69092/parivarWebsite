import React from "react";
import "./Navbar.scss";
import logoImage from "../../images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ textStyle }) => {
  const language = useSelector(selectLanguage);
  const navbarText = {
    en: ["Home", "About", "Services", "Get In Touch"],
    hi: ["घर", "हमारे बारे में", "हमारी सेवाएं", "हमसे संपर्क करें"],
  };

  const navigate = ["home", "about", "services", "contact"];

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
    setActiveLink(elementId);
  };

  return (
    <>
      <header className={`site-header ${isOpen ? "open" : ""}`}>
        <div className="wrapper site-header__wrapper">
          <Link to="/" className="brand">
            <img src={logoImage} alt="Logo Description" className="logo" />
          </Link>
          <nav className="nav">
            <button
              className="nav__toggle"
              aria-expanded={isOpen}
              type="button"
            >
              <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
            </button>
            <ul className="nav__wrapper" style={textStyle}>
              <p style={textStyle}>Menu</p>
              {navbarText[language].map((item, index) => (
                <li
                  className={`nav__item ${
                    activeLink === navigate[index] ? "active" : ""
                  }`}
                  style={textStyle}
                  key={index}
                >
                  <Link
                    to="#"
                    style={textStyle}
                    onClick={() => handleScroll(navigate[index])}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
