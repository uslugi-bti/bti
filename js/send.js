$(document).ready(function() {
	$('.call-form').submit(function() {
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: $(this).serialize()
		}).done(function() {
			$('.call-form').css({
				display: "none"
			});
			$(".call-thank-you").fadeIn();
			$(this).find('input').val('');
			$('.call-form').trigger('reset');
		});
		return false;
	});
});

$(function($){
	$('[name="tel"]').mask("+38(999)-999-99-99");
});