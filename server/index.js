const express = require("express")
const BodyParser = require("body-parser")
const massive = require("massive")
const cors = require ("cors")
const session = ("express-session")

const app = module.exports = express();

app.use(BodyParser.json());
app.use(cors());

app.use(express.static(__dirname + './../public')); // connects front end files

const PORT = 4444;
app.listen(PORT, function(){
  console.log("Listening on port:", PORT);
})
