import mongoose from "mongoose"

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOBD_URL)
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
