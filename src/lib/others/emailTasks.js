import emailjs from "@emailjs/browser";

export const sendEmailVerificationOTP = async (email) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000); // generates random 4-digit number
    const result = await emailjs.send(
      "service_yazebws", // SERVICE ID
      "template_173bjgu", // TEMPLATE ID
      {
        passcode: otp,
        time: new Date().toLocaleString(),
        email: email,
      },
      "pfh6zXVqeS53yRLsj" // PUBLIC KEY is the 4th argument
    );
    console.log("Email sent!", result.text);
    // alert("Message sent successfully!");
    return otp;
  } catch (error) {
    console.error("Failed to send email.", error.text);
    alert("Something went wrong. Please try again.");
  }
};
