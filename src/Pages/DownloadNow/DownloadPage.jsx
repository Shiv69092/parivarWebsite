import Download from "../../Components/Download/Download";
import Title from "../../Components/Title/Title";
import { useSelector } from "react-redux";
import DownloadImage from "../../images/Download-Now.png";
import "./DownloadPage.scss";
import { selectLanguage } from "../../Redux/languageSlice";
function DownloadPage({ textStyle }) {
  const downloadTitleText = {
    en: `Download now`,
    hi: `अब डाउनलोड करो`,
  };

  const language = useSelector(selectLanguage);
  return (
    <>
      <Title
        title={downloadTitleText[language]}
        className="title"
        textStyle={textStyle}
      />
      <div className="downloadpage-section">
        <div className="download-section-container">
          <Download textStyle={textStyle} />
        </div>
        <div className="image-container">
          <img className="download-image" src={DownloadImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default DownloadPage;
