if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const router = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const authentication = require("./middlewares/authentication");

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin || "*");
    },
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(authentication);
app.use("/", router);

app.listen(PORT, () => console.log("app is running in PORT " + PORT));
