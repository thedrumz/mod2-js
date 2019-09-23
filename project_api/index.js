const express = require("express");
const app = express();

var routes = require("./routes");
app.use("/api", routes);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
