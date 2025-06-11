import emailjs from "@emailjs/browser";

export const sendEmailVerificationOTP = async (email) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP

    // Calculate expiry time (15 minutes from now)
    const expiryTime = new Date(Date.now() + 15 * 60000).toLocaleString();

    const result = await emailjs.send(
      "service_yazebws", // SERVICE ID
      "template_173bjgu", // TEMPLATE ID
      {
        passcode: otp,
        expiry: expiryTime,
        email: email,
      },
      "pfh6zXVqeS53yRLsj" // PUBLIC KEY
    );

    console.log("Email sent!", result.text);
    return otp;
  } catch (error) {
    console.error("Failed to send email.", error?.text || error);
    alert("Something went wrong. Please try again.");
  }
};
