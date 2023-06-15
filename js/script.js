$(document).ready(function () {
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();
	var header = function () {	
		$(".header__menu").click(function () {
			$("body").toggleClass("lock");
			$(".header__body").toggleClass("active");
			$(".header__menu").toggleClass("active");
		});
		window.addEventListener("resize", width);
		var width = function () {
			$(".header__list>li>a").click(function () {
				var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				if (w <= 767) {
					$("body").toggleClass("lock");
					$(".header__body").toggleClass("active");
					$(".header__menu").toggleClass("active");
				} else {
					return;
				}
			});
		}
		width();
	}
	header();
});