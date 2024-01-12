import express from "express";
import { signup, login } from "../controllers/auth.js";
// googleAuth
const router = express.Router();

// Create a User
router.post("/signup", signup);

// Sign In
router.post("/signin", login);

// Google Auth
router.post("/google");

export default router;
