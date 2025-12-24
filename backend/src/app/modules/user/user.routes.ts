import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UsersController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.createUserZodSchema),
  UsersController.userRegister
);

router.post(
  '/login',
  validateRequest(UserValidation.loginUserZodSchema),
  UsersController.loginUser
);

router.get('/verify-email/:token', UsersController.verifyEmail);

router.post('/forgot-password', UsersController.forgotPassword);
router.patch('/reset-password', UsersController.resetPasswordConfirm);

export const UserRoutes = router;
