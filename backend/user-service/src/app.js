const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const responseMiddleware = require("./middlewares/response.middleware");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

const connectDB = require("./config/db.config");

const app = express();

connectDB();
app.use(cors()); // for debugging

app.use(express.json());

app.use(responseMiddleware);

const appRouter = require("./routes");

// Register user endpoints

app.use("/api/users", appRouter.userRouter);

app.get("/test", (req, res, next) => {
  return res.success({ message: "Api testing running" });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
