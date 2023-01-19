const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const dbName = "patientDB";

const dbURI = `mongodb://127.0.0.1:27017/${dbName}`;

// for handling errors while connecting to database.
const connectDatabase = () => {
  mongoose
    .connect(dbURI, { useNewUrlParser: true })
    .then((data) => {
      console.log(`Database Connected With Server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;