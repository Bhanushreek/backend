// require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js"
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!! ",err);
    
})
