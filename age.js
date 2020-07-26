const http = require('http')
const date = require('date-and-time')
const app = require('express')()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({extended: true})

app.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/age'  method='post'>";
  html += "<label for='dob'>DOB:</label>";
  html += "<input type='date' id='dob' name='dob'>";
  html += "<input type='submit'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});

app.post('/age', urlencodedParser, function (req, res){
  //var reply='';
  //reply += "Your dob is" + req.body.dob;
  const dob = date.parse(req.body.dob, 'YYYY-MM-DD')
  const diff = date.subtract(new Date(), dob).toMilliseconds();
  var age = Math.abs(new Date(diff).getUTCFullYear() - 1970);
  console.log(age)
  //const reply = date.format(new Date(diff), 'YYYY');
  res.send( "Your age is: " + age);
});

// Running Server Details.
var server = app.listen(9000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});