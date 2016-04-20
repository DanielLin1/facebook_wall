$(document).ready(function(){
	
	$('button').click(function() {
		var message = $('input').val();
		$('#wall').prepend('<div class="group"><img src="https://media2.giphy.com/media/97DVwH0GcYZVu/200_s.gif" height="128px" length="128px">'+  message+'<button> like </button></div>')
		
		var number = $("#number").html();
	    console.log(number);
	    number++;
	    $("#number").html(number);
	});

	
	

	// YOUR CODE GOES HERE
});
