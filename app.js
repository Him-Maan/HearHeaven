const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userApi = require("./routes/user");
const CatApi = require("./routes/categories");
const PodcastApi = require("./routes/podcast");
const cors = require("cors");

require("dotenv").config();
require("./conn/conn");

app.use(
  cors({
    origin: [
      "http://localhost:5173",          // Development origin
      "https://flourishing-sopapillas-1277e0.netlify.app" // Production origin
    ],
    credentials: true, // Allows cookies to be sent with requests
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// All routes
app.use("/api/v1", userApi);
app.use("/api/v1", CatApi);
app.use("/api/v1", PodcastApi);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port : ${process.env.PORT}`);
});
