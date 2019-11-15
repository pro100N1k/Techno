// $(window).on('load',function() {
//     $('.catalog-table-title__price, .calculate-block-input').text(0);
// });
//
// /*
//  Calculate Plus/Minus
//  */
// $(document).ready(function() {
//     $('.calculate-block-icon__minus').click(function () {
//         const _this = $(this);
//         const wrapper = _this.parent();
//         const input =  wrapper.find('.calculate-block-input');
//
//         let count = parseInt(input.text()) - 1;
//
//         count = count < 0 ? 0 : count;
//         input.text(count);
//         $('.calculate-sum__value').text(input.text()*7);
//     });
//     $('.calculate-block-icon__plus').click(function () {
//         const _this = $(this);
//         const wrapper = _this.parent();
//         const input =  wrapper.find('.calculate-block-input');
//
//         input.text(parseInt(input.text()) + 1);
//         $('.calculate-sum__value').text(input.text()*7);
//     });
//
//     /*
//      *  1 Владивосток - 2100
//      *  1 Приморский край - 2940
//     */
// });
//
//
//
//
//
//
//
//
// $('.catalog-table-title ').on('change',function() {
//     const _this = $(this);
//     const wrapper = _this.closest('.catalog-table');
//     const content = wrapper.find('.catalog-table-item');
//     const checkbox = wrapper.find('.checkbox-input');
//
//     if (!$('.checkbox-table').prop("checked")) {
//         $('.checkbox-input').prop("checked",false);
//     }
//
//     if (!content.hasClass('disabled')) {
//         content.addClass('disabled');
//         wrapper.find('.catalog-table-title__price').text(0);
//         content.find('input').attr('disabled',true);
//     } else {
//         content.removeClass('disabled');
//         content.find('input').removeAttr("disabled");
//     }
// });
//
// if (!$('.checkbox-table').prop("checked")) {
//     $('.checkbox-input').prop("checked",false);
// } else {
//
// }
// $('.catalog-table').each(function() {
//     let ths = $(this);
//     let inputs = ths.find('.checkbox-input');
//
//     inputs.change(function () {
//         const _this = $(this);
//         const totalSum = _this.closest('.calculate-sum__value');
//
//         const table = _this.closest('.catalog-table');
//         let tablePrice = table.find('.catalog-table-title__price');
//
//         let sum = 0;
//         let tableSum = 0;
//
//         inputs.each(function() {
//             const _ths = $(this);
//             const wrapper = _ths.closest('.catalog-table-item');
//             const price = wrapper.find('.catalog-item__price');
//             if (_ths.prop("checked")) {
//                 sum += parseInt(price.text());
//             } else {
//
//             }
//         });
//         tablePrice.text(sum);
//
//         const tableValue = $('.catalog-table-title__price');
//         tableValue.each(function() {
//             let _this = $(this);
//             tableSum += parseInt(_this.text());
//             console.log(tableSum);
//             console.log(typeof(tableSum));
//         });
//
//         $('.calculate-sum__value').text(tableSum);
//     });
// });
//
// $('.checkbox-table').on('change',function() {
//    const _this = $(this);
//    const item = $('.checkbox-table');
//    const wrappers = $('.catalog-table');
//
//    let _sum = 0;
//
//    $('.catalog-table-title__price').each(function () {
//        let _ths = $(this);
//
//        let number = Number(_ths.text());
//
//        _sum += number;
//
//    });
//
//    console.log(_sum);
//
// });
//
