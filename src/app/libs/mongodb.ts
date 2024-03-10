import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDB connected");
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectMongoDB;