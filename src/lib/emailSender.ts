import nodemailer from "nodemailer";
import config from "./config";

interface ApiError extends Error {
  statusCode: number;
}

class CustomApiError extends Error implements ApiError {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}

const emailSender = async (subject: string, email: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "ahraju2003@outlook.com",
      pass: "makejsjueoxclwqs",
    },
  });

  const mailOptions = {
    from: `"Rapid Flow" <${config.emailSender.email}>`,
    to: email,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new CustomApiError(500, "Error sending email");
  }
};

export default emailSender;
