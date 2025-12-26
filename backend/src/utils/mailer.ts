import httpStatus from 'http-status';
import nodemailer from 'nodemailer';
import config from '../config';
import ApiError from '../errors/ApiError';

export const sendMail = async (to: string, subject: string, text: string, html?: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host:config.email.email_host,
      service:config.email.email_service, 
      port:Number(config.email.email_port),
      secure: false,
      auth: {
        user: config.email.email_user,
        pass: config.email.email_pass,
      },
    });

    const mailOptions = {
      from: config.email.email_user,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return info;
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email not sent');
  }
};
