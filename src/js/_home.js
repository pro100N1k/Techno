$('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    appendDots: $('.custom-dots-wrapper'),
    dotsClass: 'custom-dots',
    appendArrows: $('.home-slider-arrows'),
    prevArrow: $('.home-slider-prev'),
    nextArrow: $(' .home-slider-next'),
});
