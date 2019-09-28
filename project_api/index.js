const express = require("express");
const app = express();

const routes = require("./routes/index");
app.use("/api", routes);

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
