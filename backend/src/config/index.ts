import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  front_end_url: process.env.CLIENT_SITE_URL,
  email:{
    email_user: process.env.EMAIL_USER,
    email_pass: process.env.EMAIL_PASS,
    email_service: process.env.EMAIL_SERVICE,
    email_host: process.env.EMAIL_HOST,
    email_port: process.env.EMAIL_PORT
  },
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
  cloudinary:{
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  }
};
