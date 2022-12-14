import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import matchRouter from "./Routers/matchRouter.js";
import refereeRouter from "./Routers/refereeRouter.js";
import cors from "cors";
import path from "path";
dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname + "/public")));
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/matches", matchRouter);
app.use("/referees", refereeRouter);
app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html"); 
});
app.listen(process.env.PORT || 5000, () => {
  // connect to database
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});