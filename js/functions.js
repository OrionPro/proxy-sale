// подключение functions.js

$(document).ready(function() {

    // Открываем модальное окно  
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        // var title =  $(this).data('title'); // для изменения title в модалке
        $(".popup[data-modal=" + id + "]").toggle("fade", 200).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
        // $(".popup[data-modal="+id+"] h2").html(title); // прописать в ссылку data-title="нужный title"

        if (window.matchMedia("(min-width: 992px)").matches) {
            $("body").css({ "overflow": "hidden", "padding-right": "17px" });
        }
        if (window.matchMedia("(max-width: 992px)").matches) {

            $("body").css({ "overflow": "hidden", "padding-right": "0px" });
        }
    });
    // overlay для закрытия
    $(".overlay").click(function() {
        $(this).parent().toggle("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
        $(".dm-modal .modal_form_input_wrap .modal_input_error").hide();
    });
    // закрываем модальное окно на крестик
    $(".popup .close").click(function(e) {
        e.preventDefault();
        $(this).parents(".popup").hide("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit", "padding-right": "0" });
        $(".dm-modal .modal_form_input_wrap .modal_input_error").hide();
    });
    //обработчик кнопки на нажатие btn_mnu
    $("#nav-button-label").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('nav-on'); // добавляет класс для анимации самой кнопки
        $(this).next().slideToggle(); // открывает меню main_nav_block, которое было скрыто
        $(this).find('.nav-line').toggleClass('active');
        $(".mnu_dropdown").toggleClass("active");
    });
    // Скрыть элемент при клике за его пределами бутерброд и его выпадающее меню
    $(document).click(function(event) {
        if ($(event.target).closest("#nav-button-label").length)
            return;
        if ($(event.target).closest("[off-canvas]").length)
            return;
        $("#nav-button-label").removeClass("nav-on");
        $("#nav-button-label .nav-line").removeClass("active");

        event.stopPropagation();

    });


});
$(".loader").fadeOut("fast");
