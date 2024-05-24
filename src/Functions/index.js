const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Firebase Cloud Function
exports.sendNotificationEmail = functions.database
  .ref("/compliments/{pushId}")
  .onCreate(async (snapshot, context) => {
    const adminEmail = "shivanshumishra9834@gmail.com";
    const userEmailAddress = snapshot.val().email; // Assuming email is stored in the 'email' field

    // Create a Nodemailer transporter using your SMTP server details
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: functions.config().email.user,
        pass: functions.config().email.password,
      },
    });

    // Define email options
    const mailOptions = {
      from: "shivanshumishra9834@gmail.com",
      to: [adminEmail, userEmailAddress],
      subject: "Form Submission Notification",
      text: "A new form has been filled.",
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log("Notification email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
