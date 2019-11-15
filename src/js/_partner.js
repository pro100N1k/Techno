$('.partner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 300,
    rows: 2,
    appendDots: $('.custom-partner-dots-wrapper'),
    dotsClass: 'custom-dots',
    appendArrows: $('.partner-arrows'),
    prevArrow: $('.partner-arrows-prev'),
    nextArrow: $(' .partner-arrows-next'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                rows: 1,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
