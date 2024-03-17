import mongoose from "mongoose";

const DATABASE_URL = process.env.DB_URL || "mongodb://localhost:27017/zap-track";
const DATABASE_NAME = process.env.DB_NAME || "zap-track";

if (!DATABASE_URL) {
    throw new Error("Please define the DB_URL environment variable")
}

var connection: any;
var promise: any;

const connectDB = async () => {
    if (connection)
        return connection;

    if (!promise) {
        promise = mongoose.connect(DATABASE_URL, {
            serverSelectionTimeoutMS: 5000,
            dbName: DATABASE_NAME,
            bufferCommands: false
        }).then((mongoose) => {
            return mongoose;
        })
    }

    connection = await promise;
    return connection;
}

export default connectDB;