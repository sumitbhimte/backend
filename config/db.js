import mongoose from "mongoose";
import colors from "colors";
const MONGO_URL = "URL_TO_DATABASE"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.MONGO_URL);
        console.log(
            `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(`Errror in Mongodb ${error}`.bgRed.white);
    }
};

export default connectDB;
