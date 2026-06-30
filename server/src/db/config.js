import { connect } from "mongoose";

export const connectToDatabase = async () => {
  try {
    await connect(process.env.MONGODB_URI);

    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection Error: ", error);

    process.exit(1);
  }
};
