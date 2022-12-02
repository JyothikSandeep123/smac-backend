// express module
const express = require("express");
const app = express();
//routes
const routes = require("./tasks/routes/smac");
// console.log(routes.route);
//db connection
const connectDB = require("./tasks/db/connect");
//.env module
require("dotenv").config();
const notFound = require("./tasks/middleware/notfound");

//express.json
app.use(express.json());
app.use("/", routes);
app.use(notFound);
// console.log(app);

//data base and server connection

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    const port = 3000;
    app.listen(port, console.log("server is listening..."));
    console.log("Data base connected");
  } catch (error) {
    console.log(error);
  }
};
start();

// app.listen(port, console.log("server is listenig to the port"));
