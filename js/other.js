$(document).ready(function () {
	var call_back = function () {
		$(".call__item").click(function () {
			$("body").toggleClass("lock");
			$(".call__item").addClass("open-form");
			$(".call__body").addClass("open-form");
		});

		$(".call-close").click(function () {
			$("body").toggleClass("lock");
			$(".call__item").removeClass("open-form")
			$(".call__body").removeClass("open-form");
		});
	}
	call_back();
	var why_gallery = function () {
		$(".why__block").click(function () {
			$("body").toggleClass("lock");
			$(this).parent().addClass("open");
			$(".call__item").fadeOut(200);
		});
		$(".why__close").click(function () {
			$("body").toggleClass("lock");
			$(".why__item").removeClass("open");
			$(".call__item").fadeIn(200);
		});
	}
	why_gallery();
	
	function scroll () {
		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 80) {
				$(".call__item").fadeIn(1000);
			} else {
				$(".call__item").fadeOut(200);
			}
		});
	}
	scroll();
	AOS.init();

	var count = function () {
		var show = true;
		$(window).on("scroll load resize", function () {
			if (!show) {
				return false;
			}

			var w_top = $(window).scrollTop();
			var e_top = $(".nums").offset().top;

			var w_height = $(window).height();
			var d_height = $(document).height();

			var e_height = $(".nums").outerHeight();

			if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$(".nums-item__title span").spincrement({
					from: 1,
					thousandSeparator: "",
					duration: 1000
				});
				show = false;
			}
		});
	}
	count();

	$(".clients-slider").slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 970,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});