import express from  'express';
import { signup } from '../controllers/auth.controller.js';
//import router from './user.route.js';
const router = express.Router();
router.post("/signup",signup);
export default router;