import path from "path";
import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import matchRouter from "./routers/matchRouter.js";
import refereeRouter from "./routers/refereeRouter.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname + "/public")));
app.use(cors());
app.use(express.json());
app.use("/matches", matchRouter);
app.use("/users", userRouter);
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