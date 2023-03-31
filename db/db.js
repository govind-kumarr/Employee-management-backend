import { config } from "dotenv";
import mongoose from "mongoose";

config();
export const makeConnection = async (cb) => {
  try {
    const connection = await mongoose.connect(process.env.mongo_url);
    console.log("Connection established!");
    cb();
  } catch (error) {
    console.log("Error connecting to Database");
  }
};
