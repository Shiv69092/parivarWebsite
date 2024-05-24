import React, { useEffect, useState } from "react";

import About from "../../Components/About/About.jsx";
import Career from "../../Components/Career/Career.jsx";
import ContactUs from "../../Components/ContactUs/ContactUs.jsx";
// import FrequentlyAsked from "../Components/FrequentlyAsked/FrequentlyAsked.jsx";
import HomepageBanner from "../../Components/HomepageBanner/HomepageBanner.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { useSelector } from "react-redux";

import Partners from "../../Components/Partners/Partners.jsx";
import Page from "../Page/Page.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import DownloadPage from "../DownloadNow/DownloadPage.jsx";
import Modal from "../../Components/Modal/Modal.jsx";
import { selectLanguage } from "../../Redux/languageSlice";

const Dashboard = () => {
  const language = useSelector(selectLanguage);

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setFlag(language === "hi" ? false : true);
  }, [language]);

  const textStyle = flag
    ? { fontFamily: "poppins" }
    : {
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans'",
      };
  return (
    <>
      <div className="components">
        <div className="heroSection" id="home">
          <Navbar textStyle={textStyle} />
          <HomepageBanner textStyle={textStyle} />
        </div>
        <About textStyle={textStyle} />
        <section id="services">
          <Page textStyle={textStyle} />
        </section>
        {/* <Partners /> */}
        <DownloadPage textStyle={textStyle} />
        <Career textStyle={textStyle} />
        <ContactUs textStyle={textStyle} />
        <Footer textStyle={textStyle} />
      </div>
      <div className="modal-overlay">
        <Modal textStyle={textStyle} />
      </div>
      {/* <FrequentlyAsked /> */}
    </>
  );
};

export default Dashboard;
