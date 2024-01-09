const mongoose = require("mongoose");

exports.connectdatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME })
    .then((data) =>
      console.log(
        "MongoDB Connected..."
        // process.env.DB_NAME
        // data.connection.db
      )
    )
    .catch((err) => console.log(err));
};
