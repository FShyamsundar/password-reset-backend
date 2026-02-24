import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD.replace(/\s/g, '')
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      html
    });
    
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email sending error:', error.message);
    throw new Error('Failed to send email: ' + error.message);
  }
};

export default sendEmail;
