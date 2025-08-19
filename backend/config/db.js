import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Dscafe');
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

