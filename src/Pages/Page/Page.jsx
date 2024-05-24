import { useSelector } from "react-redux";
import OurServices from "../../Components/OurServices/OurServices";
import Title from "../../Components/Title/Title";
import "./Page.scss";
import { selectLanguage } from "../../Redux/languageSlice";

const Page = ({ textStyle }) => {
  const language = useSelector(selectLanguage);

  const serviceButtonText = {
    en: `Our Services`,
    hi: `हमारी सेवाएँ`,
  };
  return (
    <>
      <Title
        title={serviceButtonText[language]}
        className="our-services"
        textStyle={textStyle}
      />
      <div className="our-services-section">
        <OurServices />
      </div>
    </>
  );
};

export default Page;
