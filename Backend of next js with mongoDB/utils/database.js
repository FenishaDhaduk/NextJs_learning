import mongoose from "mongoose";

// DB connect karva mate function
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb://localhost:27017/",
      {
        dbName: "nextjs",
      }
    );
    console.log(`Databased connect on ${connection.host}`);
  } catch (error) {
    console.log(`error`, error);
  }
};
