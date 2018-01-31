$('.header__list-item').bind('click', function () {
    $('.header__list-item').removeClass('_active');
    $(this).addClass('_active');
});

['home', 'work', 'about', 'process'].forEach(function (title) {
    $('#' + title + '_btn').bind('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + title).offset().top
        }, {
            duration: 500
        });
    });
});