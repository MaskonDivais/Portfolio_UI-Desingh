$(document).ready(function() {
	$('.burger').click(function(event){
		$('.burger,.menu,.shadow').toggleClass('active');
		$('body').toggleClass('lock');
	});
});