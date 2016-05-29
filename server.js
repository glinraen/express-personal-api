// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

// var db = require('./models');
var Vacation = require('./app/models/vacation');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//get all vacas
app.get("/vacation", function(req, res) {
  Vacation.find(function(err, vacations) {
  res.json("vacations");
  });
});

//create a vaca
app.post("/vacation", function(req, res) {
  var newVacation = req.body.name;
  vacation.push(newVacation);
  res.send(name + " is created.");
});

/*  "/vacation:id"
 *    GET: find vacation by id
 *    PUT: update vacation by id
 *    DELETE: deletes vacation by id
 */
//get one vaca
app.get("/vacation/:id", function(req, res) {
  var vacation = vacation[req.param.id];
  res.json(vacation);
});

//update a vaca
app.put("/vacation/:id", function(req, res) {
  res
});

//delete a vaca
app.delete("/vacation/:id", function(req, res) {
  quotes.splice(req.params.id, 1);
  res.json(true);
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "peaceful-cliffs-50130.herokuapp.com", // CHANGE ME
    description: "Returns all vacations that are avaiable to access.",

    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "About me"}, // CHANGE ME
      {method: "POST", path: "/api/vacation", description: "Create a new vacation"} // CHANGE ME
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
