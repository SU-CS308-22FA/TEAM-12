import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import matchRouter from "./Routers/matchRouter.js";
import refereeRouter from "./Routers/refereeRouter.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/matches", matchRouter);
app.use("/referees", refereeRouter);

app.listen(5000, () => {
  // connect to database
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});