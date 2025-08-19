import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

// Fetch user details
userRouter.get("/profile", async (req, res) => {
    const token = req.headers.token;
    if (!token) return res.json({ success: false, message: "No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).select("-password");
        if (!user) return res.json({ success: false, message: "User not found" });

        res.json({ success: true, user });
    } catch (error) {
        res.json({ success: false, message: "Invalid token" });
    }
});



export default userRouter;