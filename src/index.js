// require("dotenv").config({ path: "./env" });
import mongoose from "mongoose";
import dotenv from "dotenv";
// import { DB_NAME } from "./constant";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

// import express from "express";
// const app = express();
// method-1

// function connectDB(){}
// connectDB()

// method-2(ife-immediate funcion execution)
//  database connect with async await.
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log("app is running on the PORT");
//     });
//   } catch (error) {
//     console.log("ERROR", error);
//     throw error;
//   }
// })();

//method-2 write all the db connection funtionality into the other file inside the db folder and import that here and call it.
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`sever is running on the port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MOGODB Connection failed!!", err);
  }); 
