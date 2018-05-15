const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  console.log('Request Url: ', req.url);
  next();
});

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello from Express</h1></body></html>')
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  // res.send('<html><body><h1>Person:'+ req.params.id +'</h1></body></html>')
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
});

app.post('/person', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
});

app.post('/personjson', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome from JSON, ' + req.body.username)
});

app.get('/api', (req, res) => {
  res.json({
    firstname: 'John',
    lastname: 'Doe'
  });
});

app.listen(port);
