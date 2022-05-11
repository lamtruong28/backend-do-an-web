import mongoose from 'mongoose';
import 'dotenv/config';

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.URL_DB);
        console.log('Connected database mongodb successfully!');
    } catch (error) {
        console.log(`Connect database failure! ${error.message}`)
    }
}
