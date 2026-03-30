import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.URI);
    console.log(
      "Database Connected Successfully: ",
      connectionInstance.connection.name,
    );
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
