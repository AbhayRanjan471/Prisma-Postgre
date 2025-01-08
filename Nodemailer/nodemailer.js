
import nodemailer from 'nodemailer'  //Nodemailer is used for sending emails
import dotenv from "dotenv"

dotenv.config();


const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io", // Mailtrap SMTP server
  port: 2525, // Mailtrap SMTP port, use for the connection

  auth: {   //auth: Authentication information (username and password) needed to authenticate with the SMTP server.
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;

