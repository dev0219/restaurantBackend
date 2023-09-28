const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/index.js");
var cors = require("cors");
// const path = __dirname + '/views/';
// app.use(express.static(path));
app.use(cors());

// app.get('*', function (req,res) {
//   res.sendFile(path + "index.html");
// });
app.use(express.json({limit: '50mb'}));
const bodyParser = require("body-parser");
// parse application/json
app.use(bodyParser.json());
app.use('/api', routes);
app.listen(port, () => {
  console.log(`restaurant app listening on port ${port}`);
});
