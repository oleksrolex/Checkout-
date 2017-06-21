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
	var test = req.query.price;
	var test2 = req.query.plan;
	var test3 = req.query.count;
	
  res.render('thx', {price: test, Plan:test2, count: test3 });
});

app.get('/error.html', function (req, res) {
//	var test4= req.query.errMsg;
  res.render('error')
});

app.get('/', function (req, res) {
  res.render('example_taskdrive')
});



app.post("/charge", (req, res) => {
	console.log('A post request is made!');
    stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
		
  })

  .then(function(customer){
	  if (req.body.subscrp) {
		  
		  if (req.body.AdditSubscrp){
		  return stripe.subscriptions.create({
			customer: customer.id,
			items: [
			{plan: req.body.subscrp,
			},
			{
			plan: req.body.AdditSubscrp,
			quantity: req.body.count-1,
			},
			]
			
		  });
		  } else {
			  return stripe.subscriptions.create({
				customer: customer.id,
				plan: req.body.subscrp
				});
		  }
		}
		  else{
			  return stripe.charges.create({
				amount: req.body.amount,
				description: req.body.Plan,
				currency: "usd",
				customer: customer.id
				});
		  }
	  
	  
	})

	.then(function(charge){
	var price = encodeURIComponent(req.body.amount/100);
	var Plan = encodeURIComponent(req.body.Plan);
	var count = encodeURIComponent(req.body.count);
	var AdditPlan= encodeURIComponent(req.body.AdditSubscrp);
	res.json({status: "Success", redirect: ('/thx/?price='+price+ '&plan='+Plan+'&count='+count+'&AdditPlan='+AdditPlan)});
	
	})
	
	
	.catch(function(err) { 
	res.render('error', { error: err });
 
});
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