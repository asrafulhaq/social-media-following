import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import userRouter from "./router/user.js";
import followRouter from "./router/follow.js";

// env vars
dotenv.config();

const PORT = process.env.PORT || 9090;

// init app
const app = express();

// supports
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
app.use("/api/v1/user", userRouter);
app.use("/api/v1/follow", followRouter);

// server listen
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgCyan.black);
});
