import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to mongodb Database ${conn.connection.host}`.brightCyan
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};
export default connectDB;