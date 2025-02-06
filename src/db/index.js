import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URL}${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOSt: ${connectionInstace.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection error", error);
    process.exit();
  }
};

export default connectDB;
