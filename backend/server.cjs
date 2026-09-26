const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());


// ================================
// EMAIL CONFIGURATION
// ================================

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// ================================
// CONTACT ROUTE
// ================================

app.post("/api/contact", async (req, res) => {

  try {

    const {
      name,
      email,
      subject,
      message,
    } = req.body;


    // Validate required fields

    if (!name || !email || !subject || !message) {

      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });

    }


    // Email sent to you

    const mailOptions = {

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `Portfolio Contact: ${subject}`,

      text: `
New message from your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,

    };


    await transporter.sendMail(mailOptions);


    res.status(200).json({

      success: true,

      message: "Message sent successfully.",

    });


  } catch (error) {

    console.error("Email sending error:", error);

    res.status(500).json({

      success: false,

      message: "Failed to send message.",

    });

  }

});


// ================================
// TEST ROUTE
// ================================

app.get("/", (req, res) => {

  res.send("Portfolio backend is running.");

});


// ================================
// START SERVER
// ================================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio backend running on port ${PORT}`);
});