import express, { Router } from "express";
import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";
import auth from "../middleware/auth.js";

const router = express.Router()

router.post('/singup', signup);
router.post('/login',login);

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router