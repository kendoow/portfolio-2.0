$(function(){

    $('.reviews-slider').slick({
        infinite:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
        responsive: [
            {
              breakpoint: 1106  ,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
        ]
    });

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });
})