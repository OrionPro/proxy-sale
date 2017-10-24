// подключение common.js

// табы tabs
function tabs(obj) {
	const buttons = document.querySelectorAll(obj.btn);
	const bodyTabs = document.querySelectorAll(obj.tabsBody);

	let func = function () {
		"use strict";
		for (let i = buttons.length; i--;) {
			buttons[i].classList.remove(obj.classBtn);
			bodyTabs[i].classList.remove(obj.classBody);
		}
		this.classList.add(obj.classBtn);
		let item = [].indexOf.call(buttons, this);
		bodyTabs[item].classList.add(obj.classBody)
	};

	[].forEach.call(buttons, item => item.addEventListener('click', func));
}

// Определения браузера
function get_name_browser() {
	// получаем данные userAgent
	var ua = navigator.userAgent;
	// с помощью регулярок проверяем наличие текста,
	// соответствующие тому или иному браузеру
	if (ua.search(/Chrome/) > 0) return 'Google Chrome';
	if (ua.search(/Firefox/) > 0) return 'Firefox';
	if (ua.search(/Opera/) > 0) return 'Opera';
	if (ua.search(/Safari/) > 0) return 'Safari';
	if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
	if (ua.search(/Trident/) > 0) return 'Trident';
	// условий может быть и больше.
	// сейчас сделаны проверки только
	// для популярных браузеров
	return 'Не определен';
}

$(document).ready(function () {
	// Показываем пароль
	function ShowHidePassword(el) {
		var element = el;
		element.replaceWith(element.clone().attr('type',(element.attr('type') == 'password') ? 'text' : 'password'))
	}
	$('.pid-link').on('click', function (e) {
		e.preventDefault();
		 var elem = $(this).siblings('input');
		ShowHidePassword(elem);
	});

	// показывает форму login-to-your-account
	$('#open-login-to-your-account').on('click', function (e) {
		e.preventDefault();
		$('.form-customer-registration').hide();
		$('.login-to-your-account').addClass('animated flipInX').show();
	});
	// записывает из выпадашек значение
	$('.dropdown-menu a').click(function (e) {
		e.preventDefault();
		var self = $(this),
			value = self.attr('rel') || false,
			dropdown = self.closest('.dropdown').find('.dropdown-value');
		if (value === false) return false;
		if (self.hasClass('packet-ico')) dropdown.addClass('packet-ico').attr('style', self.attr('style'));
		dropdown.text(self.text()).data('value', value).triggerHandler('change');
	});

	$(".dropdown-menu li a").click(function () {
		$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
		$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
	});
	// для сафари к примеру, чтобы кликабельный body стал, для закрытия popover
	if ('ontouchstart' in document.documentElement) { // or whatever "is this a touch device?" test we want to use
		$('body').css('cursor', 'pointer');
	}
	// slider
	$("#slider-its-configuration").slider({
		value: 3,
		min: 2,
		max: 8,
		step: 1,
		range: "min",
		slide: function (event, ui) {
			switch (ui.value) {
				case 2:
					$("#amount").val(ui.value + " ядра по 2 ГГц");
					$("#amount-span").text("ядра");
					break;
				case 3:
					$("#amount").val(ui.value + " ядра по 2 ГГц");
					$("#amount-span").text("ядра");
					break;
				case 4:
					$("#amount").val(ui.value + " ядра по 2 ГГц");
					$("#amount-span").text("ядра");
					break;
				case 5:
					$("#amount").val(ui.value + " ядер по 2 ГГц");
					$("#amount-span").text("ядeр");
					break;
				case 6:
					$("#amount").val(ui.value + " ядер по 2 ГГц");
					$("#amount-span").text("ядeр");
					break;
				case 7:
					$("#amount").val(ui.value + " ядер по 2 ГГц");
					$("#amount-span").text("ядeр");
					break;
				case 8:
					$("#amount").val(ui.value + " ядер по 2 ГГц");
					$("#amount-span").text("ядeр");
					break;
			}

			$(this).find('.my-handle').text(ui.value);
			$('#amount-input').val(ui.value);
		},
		change: function (event, ui) {
			$(this).find('.my-handle').text(ui.value);
		}
	});


	$("#amount").val($("#slider-its-configuration").slider("value") + " ядра по 2 ГГц");
	$("#amount-input").val($("#slider-its-configuration").slider("value"));
	$("#amount-input").keyup(function () {
		$("#slider-its-configuration").slider("value", $(this).val());
		$('#amount-input').val($(this).val());
	});
	setTimeout(function () {
		$("#slider-its-configuration .my-handle").text($("#slider-its-configuration").slider("value"));
	}, 300);

	$("#slider-its-configuration2").slider({
		value: 4,
		min: 2,
		max: 32,
		step: 2,
		range: "min",
		slide: function (event, ui) {
			$("#amount-input2").val(ui.value);
			$("#amount2").val(ui.value + " Гб");
			$(this).find('.my-handle').text(ui.value);
		},
		change: function (event, ui) {
			$(this).find('.my-handle').text(ui.value);
		}
	});

	$("#amount2").val($("#slider-its-configuration2").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " Гб");
	setTimeout(function () {
		$("#slider-its-configuration2 .my-handle").text($("#slider-its-configuration2").slider("value"));
	}, 300);
	$("#amount-input2").val($("#slider-its-configuration2").slider("value"));
	$("#amount-input2").keyup(function () {
		$("#slider-its-configuration2").slider("value", $(this).val());
		$('#amount-input2').val($(this).val());
	});

	$("#slider-its-configuration3").slider({
		value: 100,
		min: 50,
		max: 500,
		step: 50,
		range: "min",
		slide: function (event, ui) {
			$("#amount-input3").val(ui.value);
			$("#amount3").val(ui.value + " Гб");
			$(this).find('.my-handle').text(ui.value);

		},
		change: function (event, ui) {
			$(this).find('.my-handle').text(ui.value);
		},
		create: function (event, ui) {
			$('.slider span').append('<div class="my-handle"></div>');
		}
	});

	$("#amount3").val($("#slider-its-configuration3").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " Гб");
	setTimeout(function () {
		$("#slider-its-configuration3 .my-handle").text($("#slider-its-configuration3").slider("value"));
	}, 300);
	$("#amount-input3").val($("#slider-its-configuration3").slider("value"));
	$("#amount-input3").keyup(function () {
		$("#slider-its-configuration3").slider("value", $(this).val());
		$('#amount-input3').val($(this).val());
	});
	// слайдеры в configure-the-settings.html АДРЕСА IPV
	var configurationIPvCounter = 0;
	$(".slider-its-configurationIPv").each(function () {
		$(this).slider({
			value: 30,
			min: 1,
			max: 254,
			step: 1,
			range: "min",
			slide: function (event, ui) {
				$(this).parents('.rent-VPS-VDS-servers-its-configuration__sliders-item').find('.amount input').val(ui.value);
				$(this).parents('.rent-VPS-VDS-servers-its-configuration__sliders-item').find('.amount span').val(ui.value + " Шт");
				$(this).find('.my-handle').text(ui.value);

			},
			change: function (event, ui) {
				$(this).find('.my-handle').text(ui.value);
			},
			create: function (event, ui) {
				if(configurationIPvCounter === $(".slider-its-configurationIPv").length - 1) {
					$('.slider-its-configurationIPv span').append('<div class="my-handle"></div>');
				}
				configurationIPvCounter++;
			}
		});
	});

	$("#amount4").val($("#slider-its-configuration4").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " Шт");
	setTimeout(function () {
		$("#slider-its-configuration4 .my-handle").text($("#slider-its-configuration4").slider("value"));
	}, 300);
	$("#amount-input4").val($("#slider-its-configuration4").slider("value"));
	$("#amount-input4").keyup(function () {
		$("#slider-its-configuration4").slider("value", $(this).val());
		$('#amount-input4').val($(this).val());
	});

	$("#amount5").val($("#slider-its-configuration5").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " Шт");
	setTimeout(function () {
		$("#slider-its-configuration5 .my-handle").text($("#slider-its-configuration5").slider("value"));
	}, 300);
	$("#amount-input5").val($("#slider-its-configuration5").slider("value"));
	$("#amount-input5").keyup(function () {
		$("#slider-its-configuration5").slider("value", $(this).val());
		$('#amount-input5').val($(this).val());
	});
	// вызов tabs
	tabs({
		btn: '.tabs-items-wrap .tabs-item',
		tabsBody: '.tabs-wrap',
		classBody: 'active',
		classBtn: 'active'
	});
	tabs({
		btn: '.FAQ-tab-items .FAQ-tab-item',
		tabsBody: '.FAQ-tabs-wrap',
		classBody: 'active',
		classBtn: 'active'
	});
	// Активация popover
	$('[data-toggle="popover"]').popover();

	if (get_name_browser() == "Safari") {

		if (window.matchMedia("(min-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("min-height", "578px");
		}
		if (window.matchMedia("(max-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("min-height", "100%");
		}
	}

	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	// $(".scroll_to").on("clcik", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $("#" + anchor.data('scroll')).offset().top
	//     }, 500);
	//     return false;
	// });

	//  Активация слайдера
	// $(".owl-carousel").owlCarousel({
	//     loop: true,
	//     items: 1,
	//     dots: true
	// });

	// Кастомные кнопки управления слайдером
	// var owl = $('.owl-carousel');
	// owl.owlCarousel();
	// // Go to the next item
	// $('.customNextBtn').click(function() {
	//     owl.trigger('next.owl.carousel', [700]);
	// });
	// // Go to the previous item
	// $('.customPrevBtn').click(function() {
	//     // With optional speed parameter
	//     // Parameters has to be in square bracket '[]'
	//     owl.trigger('prev.owl.carousel', [700]);
	// });


});

$(window).resize(function () {
	if (get_name_browser() == "Safari") {

		if (window.matchMedia("(min-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("height", "578px");
		}
		if (window.matchMedia("(max-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("height", "inherit");
		}
	}
});

$(window).scroll(function () {

});

