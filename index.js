const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/index.js");
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
// parse application/json
app.use(bodyParser.json());
app.use('/api', routes);
app.listen(port, () => {
  console.log(`restaurant app listening on port ${port}`);
});
