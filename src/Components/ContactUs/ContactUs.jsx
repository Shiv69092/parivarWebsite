import React, { useState } from "react";
import "./ContactUs.scss";
import Title from "../Title/Title";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../Redux/languageSlice";
import emailjs from "emailjs-com";
import { app, firestore } from "../../Components/Firebase/Firebase";

const ContactUs = ({ textStyle }) => {
  const language = useSelector(selectLanguage);
  const contactText = {
    en: `Have Questions Or Need Assistance? Reach Out To Us Anytime. Our Dedicated Support Team Is Here To Provide Guidance, Address Queries, And Ensure A Seamless Experience On Your Career And Financial Empowerment Journey.`,
    hi: `प्रश्न हैं या सहायता की आवश्यकता है? किसी भी समय हमसे संपर्क करें। हमारी समर्पित सहायता टीम मार्गदर्शन प्रदान करने, प्रश्नों का समाधान करने और आपके करियर और वित्तीय सशक्तिकरण यात्रा पर एक निर्बाध अनुभव सुनिश्चित करने के लिए यहां है।`,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    const regexPatterns = {
      firstName: /^[a-zA-Z]{2,}$/,
      lastName: /^[a-zA-Z]{2,}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\d{10}$/,
      company: /^[a-zA-Z0-9\s]+$/,
      jobTitle: /^[a-zA-Z\s]+$/,
      message: /^.{10,}$/,
    };

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
        valid = false;
      } else if (
        regexPatterns[key] &&
        !regexPatterns[key].test(formData[key])
      ) {
        newErrors[key] = `Invalid ${
          key.charAt(0).toUpperCase() + key.slice(1)
        }`;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = async () => {
    try {
      const adminEmailResponse = await emailjs.send(
        "service_ruj48zw",
        "template_j1buwwp",
        {
          to_email: "shivanshumishra9834@gmail.com",
          to_name: "Shivanshu Mishra",
          from_name: formData.firstName,
          message: formData.message,
        },
        "SWSSq7mPq4C6VdL1S"
      );

      const userEmailResponse = await emailjs.send(
        "service_n6ck4jj",
        "template_v52h9o7",
        {
          to_email: formData.email,
          to_name: formData.firstName,
          message: "Thank you for contacting us! We will get back to you soon.",
        },
        "SWSSq7mPq4C6VdL1S"
      );

      console.log("Admin Email Response:", adminEmailResponse);
      console.log("User Confirmation Email Response:", userEmailResponse);
    } catch (error) {
      console.error("Email failed", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const contactsCollection = collection(firestore, "contactus");

      try {
        const docRef = await addDoc(contactsCollection, formData);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          jobTitle: "",
          message: "",
        });

        sendEmail();

        alert("Thank you for contacting us!");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="contact-form-container" id="contact">
      <Title
        title={language === "en" ? "Get In Touch" : "गेट इन टच"}
        className="contactTitle"
        textStyle={textStyle}
      />
      <div className="form-container">
        <div className="right-section">
          <div className="right-section-description" style={textStyle}>
            {contactText[language]}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                className="form-label"
                htmlFor="firstName"
                style={textStyle}
              >
                First Name:
              </label>
              <input
                className="form-input"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeHolder="First Name"
                style={textStyle}
              />
              <div className="error-message" style={textStyle}>
                {errors.firstName}
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label"
                htmlFor="lastName"
                style={textStyle}
              >
                Last Name:
              </label>
              <input
                className="form-input"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeHolder="Last Name"
                style={textStyle}
              />
              <div className="error-message" style={textStyle}>
                {errors.lastName}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email" style={textStyle}>
                Email:
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeHolder="Email"
                style={textStyle}
              />
              <div className="error-message">{errors.email}</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone" style={textStyle}>
                Phone:
              </label>
              <input
                className="form-input"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeHolder="Phone"
                style={textStyle}
              />
              <div className="error-message" style={textStyle}>
                {errors.phone}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="company" style={textStyle}>
                Company:
              </label>
              <input
                className="form-input"
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeHolder="Company"
                style={textStyle}
              />
              <div className="error-message" style={textStyle}>
                {errors.company}
              </div>
            </div>
            <div className="form-group">
              <label
                className="form-label"
                htmlFor="jobTitle"
                style={textStyle}
              >
                Job Title:
              </label>
              <input
                className="form-input"
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeHolder="Job Title"
                style={textStyle}
              />
              <div className="error-message" style={textStyle}>
                {errors.jobTitle}
              </div>
            </div>
            <div className="form-group textareaBox">
              <label className="form-label" htmlFor="message" style={textStyle}>
                How Can We Help?
              </label>
              <textarea
                className="form-input"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={textStyle}
              />
              <div className="error-message" style={textStyle}>
                {errors.message}
              </div>
            </div>
            <div className="formbutton">
              <button type="submit" style={textStyle}>
                {language === "en" ? "Submit" : "सबमिट"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
