const express = require("express");
const dotenv = require("dotenv");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB=require('./server/database/connection');


dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;     

// log requist
app.use(morgan("tiny"));


//mongoDB connection
connectDB();


// parse requist
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/ejs") )

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));


//load routers

app.use('/',require('./server/routes/router'))

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
