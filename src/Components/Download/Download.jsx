import React from "react";
import ClanPlay from "../../images/ClanPlay.png";
import "./Download.scss";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
import ReginEd from "../../images/ReginED.png";
import SecureJob from "../../images/secureJobs.png";
import ZeroRental from "../../images/ZeroRental.png";

const Download = ({ textStyle }) => {
  const language = useSelector(selectLanguage);
  const downloadTitleText = {
    en: ["Clan Play", "Secure A Job", "Zero Rental", "ReginED"],
    hi: ["क्लैन प्ले", "सिक्योर अ जॉब", "जीरो रेंटल", "रीजिनईड"],
  };
  const downloadImage = [ClanPlay, SecureJob, ZeroRental, ReginEd];

  return (
    <>
      {downloadTitleText[language].map((title, index) => (
        <div className="download-section" key={index}>
          <div className="download-cards">
            <div className="download-card-wrapper">
              <img
                className="download-card-image"
                src={downloadImage[index]}
                alt=""
              />
              <div className="download-card-body">
                <h2 className="title" style={textStyle}>
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Download;
