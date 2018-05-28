// Initialisation
// import { validatingForm } from './testing.js';

var validator = require('validator');
const express = require('express');
const app = express()

const cors = require('cors') // Permet les cross origin requests

const bodyParser = require('body-parser'); // permet d'Accèder au body de notre request
app.use(bodyParser.json());


var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.listen(3000, () => console.log('Example app listening on port 3000!'))



// Methode et propriété

var tempCustomer;

app.route('/customer').get((req, res) => {
  res.send({});
});

app.route('/customer').post((req, res) => {
  tempCustomer = req.body;
  res.send(201, req.body);
  if (validatingForm()) {
    return res.render( './index');
  }
  console.log(tempCustomer);
});







function validatingForm() {

  var a = !validator.isEmpty(tempCustomer["firstName"]);
  var b = !validator.isEmpty(tempCustomer["lastName"]);
  var c = !validator.isEmpty(tempCustomer["companyName"]);
  var d = validator.isEmail(tempCustomer["email"]);
  var e = !validator.isEmpty(tempCustomer["nbEmployees"]);
  var f = !validator.isEmpty(tempCustomer["country"]);
  var g = !validator.isEmpty(tempCustomer["phone"]);
  if (a && b && c && d && e && f && g) {
    return "true";

  } else {
    return "false";
  }
}