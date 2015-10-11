$(document).ready(function() {
	$('button').on('click', function() {
		$(this).toggleClass('activebutton');
		if ($('button').hasClass('activebutton')) {
			$('button').text('Show Less');
			$('.hidden').slideDown();
		} else {
			$('button').text('More About Heather');
			$('.hidden').slideUp();
		}
	});



});