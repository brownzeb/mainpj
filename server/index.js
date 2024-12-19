const express = require("express");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler.js");
const corsOptions = require("./config/corsOptions.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { dbConn } = require("./config/dbConn.js");
// const { dbConnect } = require("./config/dbConn.js");

const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
// const Agenda = require("agenda");

const app = express();

dotenv.config();

// const agenda = new Agenda();

dbConn();

// dbConnection.then(() => {
//   agenda.mongo(mongoose.connection.db, "harvestuser");
// });

// console.log(dbConn.db);
const port = process.env.PORT || 4000;

// const upload = multer({ dest: path.join(__dirname, ".") });

app.use(cors(corsOptions));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "Content-Type",
//     "Authorization"
//   );
// });
app.use(express.json());
// app.use(fileUpload());
app.use(cookieParser());
// app.use(multer({ dest: path.join(__dirname, ".") }));

app.use(userRoutes);
// app.post("/upload", verifyJwt, upload.any(), uploadSong);
// app.get("/getallsongs", getAllSongs);
// app.get("/downloadsong/:id/:name", downLoadSong);
// app.get("/streamsong/:id/:name", streamSong);
// app.get("/getsingleartistsongs", verifyJwt, getSpecificArtistSong);
// app.delete("/deletesong/:id", verifyJwt, deleteSong);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    return res.json({ error: "Resource not found" });
  } else {
    return res.type("txt").send("Resource not found");
  }
});

// app.use(errorHandler);

mongoose.connection.on("open", () => {
  app.listen(
    port,
    console.log(`Server connected to db and listening on port ${port}...`)
  );
});

mongoose.connection.on("error", (err) => {
  throw new Error(err);
});
