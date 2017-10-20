
// подключение common.js

// табы tabs
function tabs(obj) {
	const buttons = document.querySelectorAll(obj.btn);
	const bodyTabs = document.querySelectorAll(obj.tabsBody);

	let func = function(){
		"use strict";
		for( let i = buttons.length; i--; ){
			buttons[i].classList.remove(obj.classBtn);
			bodyTabs[i].classList.remove(obj.classBody);
		}
		this.classList.add(obj.classBtn);
		let item = [].indexOf.call(buttons,this);
		bodyTabs[item].classList.add(obj.classBody)
	};

	[].forEach.call(buttons,item => item.addEventListener('click',func));
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

$(document).ready( function() {

	$('.dropdown-menu a').click(function(e){
		e.preventDefault();
		var self = $(this),
			value = self.attr('rel') || false,
			dropdown = self.closest('.dropdown').find('.dropdown-value');
		if (value === false) return false;
		if (self.hasClass('packet-ico')) dropdown.addClass('packet-ico').attr('style', self.attr('style'));
		dropdown.text(self.text()).data('value', value).triggerHandler('change');
	});

	$(".dropdown-menu li a").click(function(){
		$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
		$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
	});
	// для сафари к примеру, чтобы кликабельный body стал, для закрытия popover
	if ('ontouchstart' in document.documentElement) { // or whatever "is this a touch device?" test we want to use
		$('body').css('cursor', 'pointer');
	}
	// slider
	$("#slider-its-configuration").slider({
		value: 5,
		min: 2,
		max: 8,
		step: 1,
		range: "min",
		slide: function(event, ui) {
			if(ui.value ){

			}
			$("#amount").val(ui.value + " ядер по 2 ГГц");

		}
	});
	$("#amount").val($("#slider-its-configuration").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " ядер по 2 ГГц");

	$("#slider-its-configuration2").slider({
		value: 16,
		min: 2,
		max: 32,
		step: 2,
		range: "min",
		slide: function(event, ui) {
			$("#amount2").val(ui.value  + " Гб");
		}
	});
	$("#amount2").val($("#slider-its-configuration2").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " Гб");

	$("#slider-its-configuration3").slider({
		value: 150,
		min: 50,
		max: 500,
		step: 50,
		range: "min",
		slide: function(event, ui) {
			$("#amount3").val(ui.value  + " Гб");
		}
	});
	$("#amount3").val($("#slider-its-configuration3").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " Гб");
	// вызов tabs
	tabs({
		btn:'.tabs-items-wrap .tabs-item',
		tabsBody:'.tabs-wrap',
		classBody:'active',
		classBtn: 'active'
	});
	tabs({
		btn:'.FAQ-tab-items .FAQ-tab-item',
		tabsBody:'.FAQ-tabs-wrap',
		classBody:'active',
		classBtn: 'active'
	});
	// Активация popover
	$('[data-toggle="popover"]').popover();

	if (get_name_browser() == "Safari") {

		if(window.matchMedia("(min-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("min-height", "578px");
		}
		if(window.matchMedia("(max-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("min-height", "inherit");
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

$(window).resize(function() {
	if (get_name_browser() == "Safari") {

		if(window.matchMedia("(min-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("height", "578px");
		}
		if(window.matchMedia("(max-width: 768px)").matches) {
			$(".FAQ .FAQ-tabs-wrap").css("height", "inherit");
		}
	}
});

$(window).scroll(function() {
    
});

