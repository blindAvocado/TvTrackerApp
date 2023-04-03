import { body } from "express-validator";

export const loginValidation = [
  body("email", "Invalid email").isEmail(),
  body("password", "Minimum length must be 6 chars").isLength({ min: 6 }),
];

export const registerValidation = [
  body("username", "Provide username").isLength({ min: 3 }),
  body("email", "Invalid email").isEmail(),
  body("password", "Minimum length must be 6 chars").isLength({ min: 6 }),
  body("avatarUrl", "Invalid link").optional().isURL(),
];
