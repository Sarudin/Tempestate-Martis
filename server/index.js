const express = require("express")
const BodyParser = require("body-parser")
const massive = require("massive")
const cors = require ("cors")
const session = require("express-session")
const axios = require("axios")

const app = module.exports = express();

app.use(BodyParser.json());
app.use(cors());

app.use(express.static(__dirname + './../public')); // connects front end files

//end points go here.
app.get('/api/getLatest', (req, res, next) => {
  axios.get('http://marsweather.ingenology.com/v1/latest/').then(function(response) {
    console.log(response.data.report);
    res.status(200).send();
  });
});

app.get('/api/getSol', (req, res, next) => {
  axios.get('http://marsweather.ingenology.com/v1/archive/?sol=155').then(response => {
    console.log(response.data.results);
    res.status(200).send();
  })
})


app.get('/api/getAll', (req, res, next) => {
  axios.get("http://marsweather.ingenology.com/v1/archive/?page=1").then(response => {
    console.log(response.data.results);
    res.status(200).send(response.data.results);
  })
})





const PORT = 5309;
app.listen(PORT, function(){
  console.log("Listening on port:", PORT);
})
