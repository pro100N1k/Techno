$(document).ready(function () {

    (function () {

        $('.catalog-table-title__price').text(0);
        $('.calculate-sum__value').text(0);

        $('.checkbox-table').on('change', function () {

            let _this = $(this),

                wrapper = _this.closest('.catalog-table'),

                priceSelector = wrapper.find('.catalog-table-title__price'),

                items = wrapper.find('.catalog-table-item'),

                inputs = items.find('.checkbox-input');

            if (_this.prop('checked')) {
                items.removeClass('disabled');
                inputs.removeAttr('disabled');
            }else {
                items.addClass('disabled');
                priceSelector.text(0);
                inputs.attr('disabled', 'disabled');
                inputs.prop('checked', false)
            }

            sumItems();

        });

        $('.checkbox-input').on('change', function () {

            let _ths = $(this),

                wrapper = _ths.closest('.catalog-table'),

                sumSelector = wrapper.find('.catalog-table-title__price'),

                items = wrapper.find('.checkbox-input');

            let sum = 0;

            items.each(function () {

                let _ths = $(this),

                    price = Number(_ths.closest('.catalog-table-item').find('.catalog-item__price').text());

                if (_ths.prop('checked')) {

                    sum += price;

                }

            });
            sumSelector.text(sum);

            sumItems();
        });

        // Select value
        $('.js-select').on('change', function () {
            $('.calculate-sum__value').attr('data-calc-3', $(this).val());
            lastSum();
        });

    })();

    // Catalog Sum
    function sumItems() {
        let sumSelector = $('.calculate-sum__value');

        let _items = $('.catalog-table-title__price');

        let sum = 0;

        _items.each(function () {

            let _this = $(this);

            let number = Number(_this.text());

            sum += number;

        });


        sumSelector.attr('data-calc-2', sum);

        lastSum();
    }

    $('.calculate-block-icon').on('click', function (e) {
        e.preventDefault();

        let _this = $(this),

            wrapper =  _this.closest('.calculate-block'),

            output = wrapper.find('.calculate-block-input'),

            startVal = output.text() ? Number(output.text()) : 0;

        if (_this.hasClass('calculate-block-icon__minus')) {

            startVal = (startVal == 0) ? 0 : startVal - 1;

        } else {
            startVal = startVal + 1;
        }

        output.text(startVal);

        sumCoeficient();

    });

    function sumCoeficient() {

        let item = $('.calculate-block-input');

        let outSum = 0;

        item.each(function () {

            let ths = $(this),

                thsVal = Number(ths.text()),

                coeficient = Number(ths.attr('data-number'));

            outSum = thsVal * coeficient;

            ths.attr('data-last', outSum);

        });

        sumLastCoeficient();

    }

    // Calc Counter Sum
    function sumLastCoeficient() {

        let item = $('.calculate-block-input');

        let sum = 0;


        item.each(function () {

            let ths = $(this),

                thsVal = ths.attr('data-last') ? Number(ths.attr('data-last')) : 0;

            sum += thsVal;

        });

        // let oldNumber = Number($('.calculate-sum__value').eq(0).text());

        // let newNumber = +(oldNumber + sum);
        //
        // console.log(oldNumber);
        //
        // console.log($('.calculate-sum__value').text());
        //
        $('.calculate-sum__value').attr('data-calc-1', sum);

        lastSum();
        // debugger;
    }

    // Total Sum
    function lastSum() {
        let num_1 = $('.calculate-sum__value').eq(0).attr('data-calc-1') ? Number($('.calculate-sum__value').eq(0).attr('data-calc-1')) : 0;
        let num_2 = $('.calculate-sum__value').eq(0).attr('data-calc-2') ? Number($('.calculate-sum__value').eq(0).attr('data-calc-2')) : 0;
        let num_3 = $('.calculate-sum__value').eq(0).attr('data-calc-3') ? Number($('.calculate-sum__value').eq(0).attr('data-calc-3')) : 0;

        let lastSum = num_1 + num_2 + num_3;

        $('.calculate-sum__value').text(lastSum);
    }
});