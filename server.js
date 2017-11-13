// server.js
// where your node app starts

// init project
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", upload.single('avatar'), function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

app.post('/', upload.single('userFile'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any
  res.send({"size": req.file.size});
});

app.get('/profile', function (req, res){
  res.send(req.file.size);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
