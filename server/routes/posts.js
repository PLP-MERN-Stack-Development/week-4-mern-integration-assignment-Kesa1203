import express from 'express';
import {
  getPosts,
  getPostById,
  getUserPosts,
  createPost,
  updatePost,
  deletePost
} from '../controllers/postController.js';
import { auth } from '../middleware/auth.js';
import { validatePostInput, checkValidation } from '../middleware/validation.js';
import { uploadSingleImage } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/me', auth, getUserPosts);
router.get('/:id', getPostById);
router.post(
  '/',
  auth,
  uploadSingleImage,
  validatePostInput,
  checkValidation,
  createPost
);
router.put(
  '/:id',
  auth,
  uploadSingleImage,
  validatePostInput,
  checkValidation,
  updatePost
);
router.delete('/:id', auth, deletePost);

export default router;