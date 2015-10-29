$(document).ready(function() {
	$('button').on('click', function() {
		$(this).toggleClass('activebutton');
		if ($('button').hasClass('activebutton')) {
			$('button').text('Show Less');
			$('.hidden').show();
		} else {
			$('button').text('More About Heather');
			$('.hidden').hide();
		}
	});



});