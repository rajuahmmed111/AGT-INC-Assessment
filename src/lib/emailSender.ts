import nodemailer from "nodemailer"
import config from "./config"

interface ApiError extends Error {
  statusCode: number
}

class CustomApiError extends Error implements ApiError {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.name = "ApiError"
  }
}

const emailSender = async (subject: string, email: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.emailSender.email,
      pass: config.emailSender.app_pass,
    },
  })

  const emailTransport = transporter
  const mailOptions = {
    from: `"Rapid Flow" <${config.emailSender.email}>`,
    to: email,
    subject,
    html,
  }

  // Send the email
  try {
    const info = await emailTransport.sendMail(mailOptions)
    // console.log("Email sent: " + info.response);
    return info
  } catch (error) {
    console.error("Error sending email:", error)
    throw new CustomApiError(500, "Error sending email")
  }
}

export default emailSender
