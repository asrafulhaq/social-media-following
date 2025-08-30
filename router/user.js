import express from "express";
import { createUser, getAllUsers } from "../controllers/UserController.js";

// init Router
const router = express.Router();

// routing
router.get("/", getAllUsers);
router.post("/", createUser);

// export router
export default router;
