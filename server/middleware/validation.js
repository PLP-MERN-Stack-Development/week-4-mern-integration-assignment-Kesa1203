import { body, validationResult } from 'express-validator';

export const validateRegisterInput = [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
];

export const validateLoginInput = [
  body('email', 'Please include a valid email').isEmail(),
  body('password', 'Password is required').exists(),
];

export const validatePostInput = [
  body('title', 'Title is required').not().isEmpty(),
  body('excerpt', 'Excerpt is required').not().isEmpty(),
  body('content', 'Content is required').not().isEmpty(),
  body('location', 'Location is required').not().isEmpty(),
  body('cuisine', 'Cuisine type is required').not().isEmpty(),
  body('rating', 'Rating is required').isFloat({ min: 1, max: 5 }),
];

export const validateCommentInput = [
  body('text', 'Text is required').not().isEmpty(),
];

export const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};