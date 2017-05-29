var express = require('express');
var app = express();
var nunjucks = require('nunjucks');


nunjucks.configure(['views'], {
    autoescape: true,
    express: app
});

app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('new1')
});

app.post('/', function (req, res) {
    console.log('you made post request!');
    // connect to stripe
    // ... from stripe documentation: https://stripe.com/docs/checkout/express


    // IF success - thank you page
    // res.render('thankyou');

    // IF failure - display error
    res.render('new1', {error: 'this is an error'})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
