$(document).ready(function(){
	
	$('button').click(function() {
		var message = $('input').val();
		$('#wall').prepend('<div><img src="https://media2.giphy.com/media/97DVwH0GcYZVu/200_s.gif" height=128px length=128px>'+message+'</div>')
	});

	

	// YOUR CODE GOES HERE
});
