var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var nunjucks = require('nunjucks');
var keyPublishable = process.env.PUBLISHABLE_KEY;
var keySecret = process.env.SECRET_KEY;

var app = require("express")();
var stripe = require("stripe")("sk_test_IsMOESPs3cDfMwnSRIzeLjHK");


app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure(['views'], {
    autoescape: true,
    express: app
});
stripe.charges.retrieve("ch_1AOzUT4DfuHBrp8zRLL7XvNc", {
  api_key: "sk_test_IsMOESPs3cDfMwnSRIzeLjHK"
});
app.get('/thx',function(req,res){
  res.render('/thx');
});
app.get('/', function (req, res) {
  res.render('example_taskdrive')
});

app.get('/error.html', function (req, res) {
  res.render('error')
});

app.post("/charge", (req, res) => {
	console.log('A post request is made!');
    stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
	//plan: req.body.subscrp
	
  })

  .then(function(customer){
   stripe.charges.create({
      amount : req.body.amount,
      description: req.body.Plan,
         currency: "usd",
         customer: customer.id
  })})

	.then(function(charge){
	res.render("thx",{ price: req.body.amount/100, Plan: req.body.Plan, count: req.body.count})

	})
	
//	.then(function(err){
//	res.send(err.message)})
	
	.catch(function(err) { 
	res.render('error', { error: err });});
	
 
});
/*
app.post('/charge', function (req, res) {
    console.log('you made post request!');
    // connect to stripe
    // ... from stripe documentation: https://stripe.com/docs/checkout/express


    // IF success - thank you page
    // res.render('thankyou');

    // IF failure - display error
  //  res.render('new1', {error: 'this is an error'})
    res.render('thx');
});
*/
app.listen(3000, function () {
  console.log('Checkout page is running on port 3000!')
  
});