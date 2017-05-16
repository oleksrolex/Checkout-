var ChargeOver = ChargeOver || {};

ChargeOver.Signup = {

	ACTION_SIGNUP: 'Signup.signup',

	signup: function(data, callback)
	{
		ChargeOver.Core.jsonp(ChargeOver.Signup.ACTION_SIGNUP, data, callback);
		return true;
	}

};