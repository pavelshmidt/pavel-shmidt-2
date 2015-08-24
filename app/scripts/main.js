var myModyle = function () {
    //Инициализация
    var init = function () {
        _setUpListners();
        _slider();
        _tableColor();
        _colums();
    };
    //Прослушка события
    var _setUpListners = function () {
        $(".user-panel__basket").hover(_hover_over, _hover_out);
        $(".user-panel__link-hover").hover(_hover_over, _hover_out);
        $('#up').on('click', _scrollUp);
    };
    //Слайдер
    var _slider = function() {
        $('#slider-product').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#slider-product-for',
            //dots: true,
            //centerMode: true,
            //focusOnSelect: true
        });
        $('#slider-product-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            //fade: true,
            asNavFor: '#slider-product'
        });
    };
    //hover эффект
    var _hover_over = function() {
        $(".basket-hover").show()
    }
    var _hover_out = function() {
        $(".basket-hover").hide()
    };
    //Покраска таблицы
    var _tableColor = function() {
        $('.product-specs tr:odd').addClass('product-specs_grey');
    }
    //Создание колонок
    var _colums = function () {
        $('.about-store__text').columnize({
            width:300,
            colums:3
        })
    }
    //Кнопра скрола наверх
    var _scrollUp = function (e) {
        e.preventDefault()
        $('body, html').animate({scrollTop:0},300)
    }
    //Возвращаемый модуль
    return {
            init:init
    }
}();
myModyle.init();