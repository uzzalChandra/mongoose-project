const express = require("express");
const cors = require("cors");
require("./config/db");

const userRouter = require("./routes/user.route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// //database conation with mongoose
// mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://0.0.0.0:27017/test')
//   .then(() => console.log("connection successful!"))
//   .catch((err) => {
//     console.log("db is not connect");
//     console.log(err);
//   });

//router err
app.use((req, res, next) => {
  res.status(404).json({
    message: "page not found!",
  });
});
//server err
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something err!",
  });
});
module.exports = app;
