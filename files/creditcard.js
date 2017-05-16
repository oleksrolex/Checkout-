var ChargeOver = ChargeOver || {};

ChargeOver.CreditCard = {

	ACTION_TOKENIZE: 'CreditCard.tokenize',
	ACTION_VALIDATE: 'CreditCard.validate',
	ACTION_TYPE: 'CreditCard.type',
	ACTION_GET: 'CreditCard.get', 

	tokenize: function(creditcard, callback)
	{
		if (typeof chargeover_creditcard_cse === 'undefined')
		{
			
		}
		else
		{
			var config = ChargeOver.Core.pluginconfig('adyen');

			creditcard = chargeover_creditcard_cse(config, creditcard);
		}

		ChargeOver.Core.jsonp(ChargeOver.CreditCard.ACTION_TOKENIZE, creditcard, callback);
		return true;
	},

	validate: function(creditcard, callback)
	{
		ChargeOver.Core.jsonp(ChargeOver.CreditCard.ACTION_VALIDATE, creditcard, callback);
		return true;
	},

	type: function(creditcard, callback)
	{
		ChargeOver.Core.jsonp(ChargeOver.CreditCard.ACTION_TYPE, creditcard, callback);
		return true;
	},

	get: function(token, callback)
	{
		ChargeOver.Core.jsonp(ChargeOver.CreditCard.ACTION_GET, token, callback);
	}
};