import React from "react";
import PrivacyPolicyI from "../../images/PrivacyPolicy.png";
import "./PrivacyPolicy.scss";
import Navbar from "../Navbar/Navbar";

const PrivacyPolicy = () => {
  const policyData = {
    title: "Privacy Policy",
    description:
      "We prioritize the security of your data. When you use our services, we collect necessary information to enhance your experience. Rest assured, we do not sell your data to third parties. Our use of cookies aims to improve functionality. Any changes to this policy will be communicated. Your privacy matters to us. We prioritize the security of your data. When you use our services, we collect necessary information to enhance your experience. Rest assured, we do not sell your data to third parties. Our use of cookies aims to improve functionality. Any changes to this policy will be communicated. Your privacy matters to us.",
    image: PrivacyPolicyI,
  };

  return (
    <div>
      <Navbar />
      <div className="privacy-policy">
        <div className="policy-title">
          <div className="title-section">{policyData.title}</div>
          <div className="policy-description-section">
            <p className="policy-description">{policyData.description}</p>
          </div>
        </div>
        <div className="policy-image-container">
          <img src={policyData.image} alt="" className="policy-image" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
