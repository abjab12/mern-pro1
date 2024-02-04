import express from "express";
import { UserController } from '../controllers/user.controller.js';  // the import path

const router = express.Router();
router.get('/test', UserController);

export default router;
