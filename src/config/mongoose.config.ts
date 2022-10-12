import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: `${path.resolve(__dirname, "..")}/.env`,
});

mongoose.connect(process.env.MONGO_URL);

const database = mongoose.connection;

export {
    database
};
