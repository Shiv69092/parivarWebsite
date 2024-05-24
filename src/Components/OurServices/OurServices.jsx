// import React from "react";
// import { useSelector } from "react-redux";
// import { selectLanguage } from "../../Redux/languageSlice";
// import "./OurServices.scss";
// import ClanPlay from "../../images/ClanPlay.png";
// import ReginEd from "../../images/ReginED.png";
// import SecureJob from "../../images/SecureJob.png";
// import ZeroRental from "../../images/ZeroRental.png";

// const serviceText = {
//   en: [
//     "Navigate the competitive job market with confidence through our Secure A Job service. We offer a comprehensive solution to match your skills with the right opportunities. From resume building to interview preparation, we've got your back. Secure your dream job and embark on a fulfilling career journey with our tailored services.",
//     "Navigate the competitive job market with confidence through our Secure A Job service. We offer a comprehensive solution to match your skills with the right opportunities. From resume building to interview preparation, we've got your back. Secure your dream job and embark on a fulfilling career journey with our tailored services.",
//     "Discover the innovation of freedom from rental hassles with our 'Zero Rental' service. Whether you're in search of residential or commercial space, we offer a fresh and seamless solution that eliminates the burdens of traditional renting.",
//     "ReginED is a comprehensive educational service committed to reshaping the learning landscape. Our mission is to provide transformative education tailored to every learner's needs. From personalized learning programs to innovative teaching resources, ReginED empowers students, educators, and institutions to create a brighter future through education that transcends boundaries. Join us in the journey of discovery, growth, and excellence with ReginED. Education that goes beyond, transforms lives.",
//   ],
//   hi: [
//     "अपने कौशल और आकांक्षाओं के अनुसार बनाए गए अवसरों की दुनिया का पर्दा उठाएं। हमारा जॉब डिस्कवरी हब नौकरी खोज प्रक्रिया को सरल बनाता है, और आर्थिक भले-बुरे की ओर एक यात्रा पर निकलें",
//     "हमारे रोमांचक क्विज के साथ अपने वित्तीय स्वास्थ्य को बढ़ाएं। सवालों का जवाब दें, अनुसूचित कूपन अनलॉक करें, और आर्थिक भले-बुरे की ओर एक यात्रा पर निकलें",
//     "अपने करियर पथ को सफलतापूर्वक नेविगेट करने के लिए अनुकूलित सलाह और दर्शन प्राप्त करें। हमारी व्यक्तिगत करियर मार्गदर्शन सेवा सुनिश्चित करती है कि आप सूचित निर्णय लेते हैं",
//     "हमारे कौशल सुधार वर्कशॉप के साथ प्रतिस्पर्धी नौकरी बाजार में एक कदम आगे रहें। मौजूदा प्रतिभाओं को सुधारने से लेकर नए प्राप्त करने तक",
//   ],
//   serviceTitleText: {
//     en: ["Clan Play", "Secure A Job", "Zero Rental", "ReginED"],
//     hi: ["कबीले का खेल", "कबीले का खेल", "कबीले का खेल", "कबीले का खेल"],
//   },
// };

// const cardData = [
//   {
//     image: ClanPlay,
//     link: "https://www.google.com/",
//   },
//   {
//     image: SecureJob,
//     link: "https://www.google.com/",
//   },
//   {
//     image: ZeroRental,
//     link: "https://www.google.com/",
//   },
//   {
//     image: ReginEd,
//     link: "https://www.google.com/",
//   },
// ];

// const OurServices = () => {
//   const language = useSelector(selectLanguage);

//   return (
//     <>
//       {cardData.map((card, index) => (
//         <div key={index} className="cards">
//           <div className="card-wrapper">
//             <div className="card-image-section">
//               <img className="card-image" src={card.image} alt={card.title} />
//             </div>
//             <div className="card-body">
//               <h2>{serviceText.serviceTitleText[language][index]}</h2>
//               <p>{serviceText[language][index]}</p>
//               <div className="card-read-more">
//                 <a className="card-button" href={card.link}>
//                   {language === "en" ? "Read More" : "और पढ़ें"}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default OurServices;
import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
import "./OurServices.scss";
import ClanPlay from "../../images/ClanPlay.png";
import ReginEd from "../../images/ReginED.png";
import SecureJob from "../../images/secureJobs.png";
import ZeroRental from "../../images/ZeroRental.png";

const serviceText = {
  en: [
    "Immerse yourself in the world of Clan Play, where gaming transcends the ordinary. Our platform is designed to redefine the gaming community experience. Connect with like-minded players, form alliances, and embark on epic gaming adventures. Elevate your gaming journey with Clan Play – where every move is a step towards a thrilling digital realm.",
    "Navigate the competitive job market with confidence through our Secure A Job service. We offer a comprehensive solution to match your skills with the right opportunities. From resume building to interview preparation, we've got your back. Secure your dream job and embark on a fulfilling career journey with our tailored services.",
    "Discover the innovation of freedom from rental hassles with our 'Zero Rental' service. Whether you're in search of residential or commercial space, we offer a fresh and seamless solution that eliminates the burdens of traditional renting.",
    "ReginED is a comprehensive educational service committed to reshaping the learning landscape. Our mission is to provide transformative education tailored to every learner's needs. From personalized learning programs to innovative teaching resources, ReginED empowers students, educators, and institutions to create a brighter future through education that transcends boundaries. Join us in the journey of discovery, growth, and excellence with ReginED. Education that goes beyond, transforms lives.",
  ],
  hi: [
    "अपने कौशल और आकांक्षाओं के अनुसार बनाए गए अवसरों की दुनिया का पर्दा उठाएं। हमारा जॉब डिस्कवरी हब नौकरी खोज प्रक्रिया को सरल बनाता है, और आर्थिक भले-बुरे की ओर एक यात्रा पर निकलें",
    "हमारे रोमांचक क्विज के साथ अपने वित्तीय स्वास्थ्य को बढ़ाएं। सवालों का जवाब दें, अनुसूचित कूपन अनलॉक करें, और आर्थिक भले-बुरे की ओर एक यात्रा पर निकलें",
    "अपने करियर पथ को सफलतापूर्वक नेविगेट करने के लिए अनुकूलित सलाह और दर्शन प्राप्त करें। हमारी व्यक्तिगत करियर मार्गदर्शन सेवा सुनिश्चित करती है कि आप सूचित निर्णय लेते हैं",
    "हमारे कौशल सुधार वर्कशॉप के साथ प्रतिस्पर्धी नौकरी बाजार में एक कदम आगे रहें। मौजूदा प्रतिभाओं को सुधारने से लेकर नए प्राप्त करने तक",
  ],
  serviceTitleText: {
    en: ["Clan Play", "Secure A Job", "Zero Rental", "ReginED"],
    hi: ["क्लैन प्ले", "सिक्योर अ जॉब", "जीरो रेंटल", "रीजिनईड"],
  },
};

const cardData = [
  {
    image: ClanPlay,
    link: "https://www.google.com/",
  },
  {
    image: SecureJob,
    link: "https://www.google.com/",
  },
  {
    image: ZeroRental,
    link: "https://www.google.com/",
  },
  {
    image: ReginEd,
    link: "https://www.google.com/",
  },
];

const OurServices = ({ textStyle }) => {
  const language = useSelector(selectLanguage);

  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="cards">
          <div className="card-wrapper">
            <div className="card-image-section">
              <img
                className="card-image"
                src={card.image}
                alt={serviceText.serviceTitleText[language][index]}
              />
            </div>
            <div className="card-body">
              <h2 style={textStyle}>
                {serviceText.serviceTitleText[language][index]}
              </h2>
              <p style={textStyle}>
                {serviceText[language][index].length > 80 ? (
                  <>
                    {serviceText[language][index].slice(0, 80)}...
                    <div className="card-read-more" style={textStyle}>
                      <a
                        className="card-button"
                        style={textStyle}
                        href={card.link}
                      >
                        {language === "en" ? " Read More" : " और पढ़ें"}
                      </a>
                    </div>
                  </>
                ) : (
                  serviceText[language][index]
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OurServices;
