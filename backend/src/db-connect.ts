import mongoose from 'mongoose';
import config from './config';

const dbConnect = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`🛢   Database is connected successfully`);
  } catch (err) {
    console.error('Database connection failed:', err);
  }
};

export default dbConnect;
