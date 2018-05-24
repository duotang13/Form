const express = require('express')
const app = express()

const cors = require('cors')  // Permet les cross origin requests

const bodyParser = require('body-parser');  // permet d'Accèder au body de notre request
app.use(bodyParser.json());


var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.route('/customer').get((req, res) => {
  res.send({item: "banane"});
});

app.route('/customer').post((req, res) => {
  console.log(req.body);
  res.send(201, req.body);
});

