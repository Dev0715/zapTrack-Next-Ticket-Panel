import mongoose from "mongoose";

export const dbConnect = (dbUrl) => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        // logger: process.env.NODE_ENV === "development",
        serverSelectionTimeoutMS: 5000,
        // dbName: "answersheet",
        dbName: "zap-track"
    });
    mongoose.connection.on("connected", () => {
        console.log(`Database was connected successfully! ===>: ${dbUrl}`);
    });
}