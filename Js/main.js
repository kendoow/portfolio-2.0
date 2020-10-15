$(function(){

    $('.reviews-slider').slick({
        infinite:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
    });

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });
})