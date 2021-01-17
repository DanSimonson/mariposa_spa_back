const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
//import routes
const postRoutes = require("./routes/post");

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("error: ", error);
  });

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

//route
app.use("/api", postRoutes);

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
