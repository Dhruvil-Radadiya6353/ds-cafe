import express from "express";
import { topUsers, topItems, revenue } from "../controllers/adminController.js";

const router = express.Router();

router.get("/top-users", topUsers);
router.get("/top-items", topItems);
router.get("/revenue", revenue);

export default router;
