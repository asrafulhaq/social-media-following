import express from "express";
import { createFollow, getAllFollow } from "../controllers/FollowController.js";

// init Router
const router = express.Router();

// routing

router.get("/", getAllFollow);
router.post("/", createFollow);

// export router
export default router;
