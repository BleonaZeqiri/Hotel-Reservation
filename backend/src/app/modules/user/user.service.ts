import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import {
  comparePasswords,
  generateToken,
  generateVerificationToken,
  hashPassword,
  verifyToken
} from '../../../utils/auth';
import { replaceMongoIdInObject } from '../../../utils/data-util';
import { sendMail } from '../../../utils/mailer';
import { IUser } from './user.interface';
import User from './user.model';

// user registration
const createUserService = async (
  userData: Partial<IUser>
): Promise<{ user: Omit<IUser, 'password'> | null; message: string }> => {
  const { username, email, password, role = 'user' } = userData;

  // Check if the email is already registered
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already registered');
  }

  // Create the new user
  const newUser = new User({
    username,
    email,
    password,
    role,
  });

  // Save user to the database (password is hashed automatically before save)
  const user = await newUser.save();

  const token = generateVerificationToken(user._id.toString());

  const clientUrl = config.front_end_url || 'http://localhost:3000';

  const verificationUrl = `${clientUrl}/verify-email/${token}`;
  const subject = 'Email Verification';
  const to = user.email;
  const html = `
      <h2>Hello ${user.username}</h2>
      <p>Verify your email address to complete the signup and login into your <strong>housey</strong> account.</p>
      <p>This link will expire in <strong>20 minutes</strong>.</p>
      <p style="margin-bottom:20px;">Click this link to activate your account:</p>
      <a href="${verificationUrl}" style="background:#0989FF;color:white;border:1px solid #0989FF; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Verify Account</a>
      <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at support@housey.com</p>
      <p style="margin-bottom:0px;">Thank you</p>
      <strong>Housey Team</strong>
   `;

  await sendMail(to, subject, '', html).catch(error => {
    console.error(`Error sending email: ${error}`);
  });

  // Return the newly created user without the password field
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { password: pwd, ...userWithoutPassword } = user.toObject();

  return {
    user: replaceMongoIdInObject(userWithoutPassword),
    message: 'Check your email for verification link',
  };
};

// login user
const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email }).lean();

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid password');
  }

  if (!user.emailVerified) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Email is not verified');
  }

  const token = generateToken(user._id.toString());

  return {
    token,
    user: replaceMongoIdInObject(user),
  };
};

/**
 * Verifies a user's email using a token.
 * @param {string} token - The verification token from the email link.
 * @returns {Promise<{ message: string }>} - A success message or throws an error.
 */

const verifyEmailService = async (
  token: string
): Promise<{ message: string }> => {
  try {
    // Verify the token
    const decoded = verifyToken(token);

    console.log(decoded, 'decoded');

    // Find the user by ID
    const user = await User.findById(decoded?.id);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }

    // Check if the user is already verified
    if (user.emailVerified) {
      return { message: 'Email is already verified' };
    }

    // Update the user's verification status
    user.emailVerified = true;
    await user.save();

    return { message: 'Email verification successful' };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'Verification link has expired'
      );
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid verification link');
    }

    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'An error occurred during email verification'
    );
  }
};

// forgot password
const forgotPassword = async (email: string) => {
  const user = await User.findOne({ email }).lean();

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const token = generateVerificationToken(user._id.toString());

  const clientUrl = config.front_end_url || 'http://localhost:3000';

  const verificationUrl = `${clientUrl}/reset-password/${token}`;
  const subject = 'Password Reset';
  const to = user.email;
  const html = `
      <h2>Hello ${user.username}</h2>
      <p>Reset your password to complete the signup and login into your <strong>housey</strong> account.</p>
      <p>This link will expire in <strong>20 minutes</strong>.</p>
      <p style="margin-bottom:20px;">Click this link to reset your password:</p>
      <a href="${verificationUrl}" style="background:#0989FF;color:white;border:1px solid #0989FF; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Reset Password</a>
      <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at support@housey.com</p>
      <p style="margin-bottom:0px;">Thank you</p>
      <strong>Housey Team</strong>
   `;

  sendMail(to, subject, '', html).catch(error => {
    console.error(`Error sending email: ${error}`);
  });

  return {message: 'Check your email for verification link'};
};

// confirm forgot password
const confirmForgotPassword = async (token: string, password: string) => {
  try {

    if(!token) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Token is required');
    }
    const decoded = verifyToken(token);

    // Find the user by ID
    const user = await User.findById(decoded?.id);
    
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }

    const newPassword = await hashPassword(password);

    user.password = newPassword;
    await user.save();
 
    return { message: 'Password reset successful' };
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'Verification link has expired'
      );
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid verification link');
    }

    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'An error occurred during email verification'
    );
  }
};

export const UsersService = {
  createUserService,
  loginUser,
  verifyEmailService,
  forgotPassword,
  confirmForgotPassword,
};
