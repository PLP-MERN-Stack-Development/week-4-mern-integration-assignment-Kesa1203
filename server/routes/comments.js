import express from 'express';
import {
  getCommentsByPost,
  addComment,
  deleteComment
} from '../controllers/commentController.js';
import { auth } from '../middleware/auth.js';
import { validateCommentInput, checkValidation } from '../middleware/validation.js';

const router = express.Router();

router.get('/post/:postId', getCommentsByPost);
router.post(
  '/post/:postId',
  auth,
  validateCommentInput,
  checkValidation,
  addComment
);
router.delete('/:commentId', auth, deleteComment);

export default router;