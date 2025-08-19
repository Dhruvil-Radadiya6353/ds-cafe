import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import promoRouter from "./routes/promoRoute.js";
import contactRouter from "./routes/contactRoute.js";
import adminRoutes from "./routes/adminRoutes.js";



// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// Set EJS as the template engine ✅
app.set("view engine", "ejs");

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/promo", promoRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
