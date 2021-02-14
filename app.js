const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const blogsRouter = require("./controllers/blogs");
const config = require("./utils/config");
const logger = require("./utils/logger");

const app = express();

logger.info("connected to", config.MONGODB_URI);
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => logger.info("connected to mongodb"));


app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogsRouter);

module.exports = app;