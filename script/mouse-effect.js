$(document).on('mousemove', (event) => {
	$('.ghost').css({
		left: event.clientX,
		top: event.clientY,
	},);

});
