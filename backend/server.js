require("dotenv").config();

const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/err");
const connectDB = require("./config/db");

const app = express();

connectDB();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use("/api/auth", require("./routes/auth"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);


process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});