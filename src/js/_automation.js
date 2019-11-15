// $('.automation-info-item').on('click', function() {
//     //$('.answers-content-item__text').toggle("slow");
//     const _button = $(this);
//     const wrapper = _button.closest('.automation-info-item');
//     const tabID = _button.attr("data-item");
//     const currentText = $('.automation-info-item__text[data-item="' + tabID + '"]');
//
//     $('.automation-info-item').removeClass('active');
//
//     wrapper.addClass('active');
//
//     if( wrapper.hasClass('active')) {
//         currentText.slideDown();
//         // wrapper.removeClass('active');
//     } else {
//        wrapper.removeClass('active');
//         currentText.slideUp();
//     }
//
//
//
//
//
//
//     // $('.automation-info-item-title').removeClass('automation-info-item-title--active');
//     // _button.addClass('automation-info-item-title--active');
//     //
//     //     $('.automation-info-item').removeClass('active');
//     //     wrapper.addClass('active');
//     //
//     //     if(wrapper.hasClass('active')) {
//     //         $('.automation-info-item__text').slideUp();
//     //         currentText.slideDown();
//     //     }
//
//     // if(_button.hasClass('automation-info-item-title--active')) {
//     //     $('.automation-info-item__text').slideUp();
//     //     currentText.slideDown();
//     // }
//
//     // if (currentText.parent('.automation-info-item-title-wrapper').hasClass('active-item')) {
//     //     currentText.slideUp();
//     //     currentText.parent('.automation-info-item-title-wrapper').removeClass('active-item');
//     //     return false;
//     // };
//
// });

function init() {
    let header = $('.automation-info-item');

    header.on('click', function (e) {
        e.preventDefault();

        let ths = $(this);
        let box = ths.closest('.automation-info-item');
        let content = box.find('.automation-info-item__text');

        header.not(ths).removeClass('active');

        $('.automation-info-item__text').slideUp(500);

        if (ths.hasClass('active')) {
            ths.removeClass('active');

            content.slideUp(500);
        }else {
            ths.addClass('active');
            content.slideDown(500);
        }

    });
}
init();