const express = require("express");
const app = express();
const mongoose = require("mongoose"); // To connect with the database
const cors = require("cors");

const port = process.env.PORT || 2022;
const host = "localhost";

const cloudUrl =
  "mongodb+srv://second:mongo321@cluster0.khewj.mongodb.net/assignment4?retryWrites=true&w=majority";
const localUrl = "mongodb://127.0.0.1:27017/assignment4";

const routes = require("./Routes/index");

app.use(cors());
// app.options('*', cors());
app.use(express.json());
app.use("/", routes);

mongoose
  .connect(cloudUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, host, () => {
      console.log(`server Running on port ${port}`);
    });
  })
  .catch();

// app.listen(port, host, () => {
//   console.log(`server Running on port ${port}`);
// });
