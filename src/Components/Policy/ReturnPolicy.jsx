import React from "react";
import Return from "../../images/ReturnPolicy.png";
import "./ReturnPolicy.scss";
import Navbar from "../Navbar/Navbar";

const ReturnPolicy = () => {
  const policyData = {
    title: "Return Policy",
    description:
      "We prioritize the security of your data. When you use our services, we collect necessary information to enhance your experience. Rest assured, we do not sell your data to third parties. Our use of cookies aims to improve functionality. Any changes to this policy will be communicated. Your privacy matters to us. We prioritize the security of your data. When you use our services, we collect necessary information to enhance your experience. Rest assured, we do not sell your data to third parties. Our use of cookies aims to improve functionality. Any changes to this policy will be communicated. Your privacy matters to us.",
    image: Return,
  };

  return (
    <div>
      <Navbar />
      <div className="return-policy">
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

export default ReturnPolicy;
