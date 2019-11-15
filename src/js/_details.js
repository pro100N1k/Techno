$('.details-item-title-wrapper').on('click', function() {
    //$('.answers-content-item__text').toggle("slow");
    const _this = $(this);
    const tabID = _this.attr("data-item");
    const currentTab = $('.details-item-content[data-item="' + tabID + '"]');



    if(_this.hasClass('details-item-content--active')) {
        currentTab.slideUp(500);
        _this.removeClass('details-item-content--active');
    } else {
        currentTab.slideDown(500);
        _this.addClass('details-item-content--active');
    }

    // _this.addClass('details-item-content--active');
    // if (_this.hasClass('details-item-content--active')) {
    //     currentTab.slideDown();
    //     _this.removeClass('details-item-content--active');
    //     return false;
    // };

    //
    // $('.answers-content-item').removeClass('answers-content-item--active');
    // $('.answers-content-item__text').slideUp();
    // currentTab.parent('.answers-content-item').addClass('answers-content-item--active');
    // currentTab.slideToggle();

});