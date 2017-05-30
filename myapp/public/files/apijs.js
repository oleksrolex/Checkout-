$('form').on('submit',function(e){
	event.preventDefault();
	$.ajax('/thx.html', {
		type: 'POST',
		success: function(result){
			$('form').remove();
			$('#main-container').hide().html('result').fadeIn();
		}
	});
});