$(document).ready(function(){

	$('.col-lg-4').hover(
		function(){
			$(this).animate({
				marginTop: "-=1%",
			},200);
		},
		function(){
			$(this).animate({
				marginTop: "0%",
			},200);
		}

		);
});