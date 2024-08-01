// server/routes/contact.js

const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ message: 'Email and message are required.' });
  }

  try {
    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., Gmail, Yahoo, Outlook
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: 'niggswhatisloveniggs@gmail.com', // Your email
      subject: 'Contact Form Message',
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

module.exports = router;
