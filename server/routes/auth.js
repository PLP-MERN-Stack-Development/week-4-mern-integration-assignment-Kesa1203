import express from 'express';
import {
  registerUser,
  loginUser,
  getCurrentUser
} from '../controllers/authController.js';
import { validateRegisterInput, validateLoginInput, checkValidation } from '../middleware/validation.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/register',
  validateRegisterInput,
  checkValidation,
  registerUser
);
router.post(
  '/login',
  validateLoginInput,
  checkValidation,
  loginUser
);
router.get('/me', auth, getCurrentUser);

export default router;