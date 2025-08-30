import express from "express";
import {
  createUser,
  getAllUsers,
  getUserProfile,
} from "../controllers/UserController.js";

// init Router
const router = express.Router();

// routing
router.get("/", getAllUsers);
router.get("/:id", getUserProfile);
router.post("/", createUser);

// export router
export default router;
