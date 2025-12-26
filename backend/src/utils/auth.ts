import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = config.bycrypt_salt_rounds ? Number(config.bycrypt_salt_rounds) : 10;
  return await bcrypt.hash(password, saltRounds)
}

export const comparePasswords = async (password: string,hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, config.jwt.secret as string, {
    expiresIn: config.jwt.expires_in,
  })
}


export const generateVerificationToken = (userId: string): string => {
  const secret = config.jwt.secret as string;
  return jwt.sign({ id: userId }, secret, { expiresIn: '20m' });
};

export const verifyToken = (token: string): JwtPayload => {
  const secret = config.jwt.secret as string;
  return jwt.verify(token, secret) as JwtPayload;
}