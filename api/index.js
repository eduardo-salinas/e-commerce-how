const mongoose = require("mongoose");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { server } = require("./src/server.js");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then((data) => {
    server.listen("3001", () => console.log("Listen in port 3001."));
    console.log("Conexión exitosa a DB " + data.connections[0].name);
  })
  .catch((err) => console.log(err.message));

module.exports = mongoose;
