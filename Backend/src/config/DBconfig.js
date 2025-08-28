import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Database connected successfully: ${process.env.MONGO_URI}`);
  } catch (err) {
    console.error("❌ Error occurred while connecting to database:", err.message);
    process.exit(1);
  }
};
