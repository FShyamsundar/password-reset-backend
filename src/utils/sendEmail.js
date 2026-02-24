import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD.replace(/\s/g, '')
      }
    });
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      html
    });
    
    return info;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

export default sendEmail;
