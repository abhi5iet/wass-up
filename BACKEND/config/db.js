import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected Successsfully');
    } catch (err) {
        console.log('Error While Connecting To Database');
    }
}

export default connect;