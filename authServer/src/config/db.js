import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL;
const dbName = "auth";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(mongoUrl, { dbName: dbName });
    console.log(`mongoDB running on host ${connection.host} `);
  } catch (error) {
    console.log("error occured", error);
  }
};

export default connectDB;
