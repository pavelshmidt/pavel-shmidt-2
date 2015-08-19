var myModyle = function () {
    //Инициализация
    var init = function () {
        _setUpListners();
        _slider();
    };
    //Прослушка события
    var _setUpListners = function () {
        $(".user-panel__item_korzina").hover(_hover_over, _hover_out)
        $(".user-panel__link-hover").hover(_hover_over, _hover_out)
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
        $(".user-panel__link-hover").show()
    }
    var _hover_out = function() {
        $(".user-panel__link-hover").hide()
    }
    //Возвращаемый модуль
    return {
            init:init
    }
}();
myModyle.init();