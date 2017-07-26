const express = require("express")
const BodyParser = require("body-parser")
const massive = require("massive")
const cors = require ("cors")
const session = require("express-session")
const axios = require("axios")

const app = express();

app.use(BodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + './../dist')); // connects front end files

//end points go here.
app.get('/api/getLatest', (req, res, next) => {
  axios.get('http://marsweather.ingenology.com/v1/latest/').then(function(response) {
    res.status(200).send(response);
  });
});

app.get('/api/getSol', (req, res, next) => {
  axios.get('http://marsweather.ingenology.com/v1/archive/?sol=155').then(response => {
    res.status(200).send(response);
  })
})


app.get('/api/getAll', (req, res, next) => {
  axios.get('http://marsweather.ingenology.com/v1/archive/?page=1').then(response => {
      res.status(200).send(response.data.results);
      console.log("error = " + err);
  })
})





const PORT = 5309;
app.listen(PORT, function(){
  console.log("Listening on port:", PORT);
})
