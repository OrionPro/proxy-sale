
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


$(document).ready( function() {
	// slider
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

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		// $(".from_what_is_seo .from_what_is_seo_bot_decor svg").css("bottom", "-217px");
		// $(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		// $(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
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

});

$(window).scroll(function() {
    
});

