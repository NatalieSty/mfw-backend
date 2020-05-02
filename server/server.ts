const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });


var corsOptions = {
    origin: "http://localhost:5000"
  };


  app.use(cors(corsOptions));

  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // simple route
  app.get("/", (req, res) => {
    res.send('hello');
  });
  
  require("./routes/article.routes.js")(app);
  // set port, listen for requests
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });