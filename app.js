const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDatabase = require("./db");

const app = express();
connectDatabase();

const patientRouter = require("./routes/patientRoute");

app.use(express.json());
app.use(cors()); // for frontend conncetivity
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/patient/", patientRouter);

app.listen(3000, () => {
  console.log("Server has started up and running..");
});
