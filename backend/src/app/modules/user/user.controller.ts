import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UsersService } from './user.service';


// user register
const userRegister = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.createUserService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  })
});

// verify email
const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.verifyEmailService(req.params?.token);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User verified successfully!',
    data: result,
  })
});

// login user
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await UsersService.loginUser(email, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: result,
  })
});

// forgot password
const forgotPassword = catchAsync(async (req: Request, res: Response) => {
    const { email } = req.body;
    const result = await UsersService.forgotPassword(email);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Email sent successfully!',
      data: result,
    })
});


// reset password confirm
const resetPasswordConfirm = catchAsync(async (req: Request, res: Response) => {
  const { token, password } = req.body;
  const result = await UsersService.confirmForgotPassword(token, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password reset successful!',
    data: result,
  })
});

export const UsersController = {
  userRegister,
  verifyEmail,
  loginUser,
  forgotPassword,
  resetPasswordConfirm
};