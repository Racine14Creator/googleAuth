import mongoose, { mongo } from "mongoose"

export async function connectMongoDB() {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error of mongodb", error);
    }
}