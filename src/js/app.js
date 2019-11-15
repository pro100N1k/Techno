import { detectBrowser } from './_helpers';

import '@fancyapps/fancybox';
import 'slick-carousel';
import 'jquery-validation';
import '../../node_modules/select2/dist/js/select2.min';
import 'parallax-js';

import './_home';
import './_partner';
import './_automation';
import './_details';
import './_calculator_js';
import parallax from './_Parallax';
// import './_calculate';

class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        // INIT YOUR PLUGINS
        if ($('#mouse').length > 0) {
            parallax();
        }
    };

    static initializeModules() {
        // INIT YOUR MODULES

        /* Svg to IMG */
        (function($) {
            $.fn.toSVG = function(options) {
                var params = $.extend({
                    svgClass: "replaced-svg",
                    onComplete: function() {},
                }, options)
                this.each(function() {
                    var $img = jQuery(this);
                    var imgID = $img.attr('id');
                    var imgClass = $img.attr('class');
                    var imgURL = $img.attr('src');
                    if (!(/\.(svg)$/i.test(imgURL))) {
                        console.warn("image src='" + imgURL + "' is not a SVG, item remained tag <img/> ");
                        return;
                    }
                    $.get(imgURL, function(data) {
                        var $svg = jQuery(data).find('svg');
                        if (typeof imgID !== 'undefined') {
                            $svg = $svg.attr('id', imgID);
                        }
                        if (typeof imgClass !== 'undefined') {
                            $svg = $svg.attr('class', imgClass + params.svgClass);
                        }
                        $svg = $svg.removeAttr('xmlns:a');
                        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                        }
                        $img.replaceWith($svg);
                        typeof params.onComplete == "function" ? params.onComplete.call(this, $svg) : '';
                    })
                });
            }
        })(jQuery);
        $('img.svg-img').toSVG();

        /* Fancybox */
        $('.fancybox').fancybox();


        $('.partner-item__link').on('click',function(e) {
            e.preventDefault();

            const _this = $(this);
            const wrapper = _this.parent('.partner-item');
            const img = wrapper.find('.partner-item__img').attr('src');
            const text = wrapper.find('.partner-item__text').html();

            const modal = $('#modal-partner');
            modal.find('.modal-content__logo').attr('src',img);
            modal.find('.modal-content__text').html(text);
        });

        $('.modal-content-btn').on('click',function(e) {
            e.preventDefault();
           const wrapper = $(this).parent('#modal-partner');
           console.log('click');
           $.fancybox.close();
        });

        /* Select */
        $(document).ready(function() {
            $('.js-select').select2({
                minimumResultsForSearch: -1
            }).on("select2:select", function (e) {
                var selected_element = $(e.currentTarget);
                var select_val = selected_element.val();
            });
        });

        /* Header */
        $('.scroll').on('click', function (e) {
            e.preventDefault();

            let id  = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });

        $('.menu-bar').on('click', function() {
            const menu = $('.header-menu-wrapper');

            if($(window).innerWidth() < 1025) {
                $('.header-menu-item__link').on('click',function() {
                   $('.menu-bar').addClass('active');

                    $('.header-menu-wrapper').slideUp(500);
                    menu.removeClass('header-menu--opened');
                });
            }

            if($(this).is('.active:not(.back)')) {
                $(this).addClass('back');
            } else if ($(this).is('.back')) {
                $(this).removeClass('back');
            } else {
                $(this).addClass('active');
            }


            if(!menu.hasClass('header-menu--opened')) {
                menu.slideDown(500);
                menu.addClass('header-menu--opened');

            } else {
                menu.slideUp(500);
                menu.removeClass('header-menu--opened');
            }


            if($('.sublist').hasClass('sublist-active')) {
                $('.sublist').removeClass('sublist-active');
            } else {
                $('.sublist').addClass('sublist-active');
            }





        });

        $(document).mouseup(function (e) {
            const Div = $('.sublist, .menu-bar');
            const menu = $('.menu-bar');

            if (!Div.is(e.target) && Div.has(e.target).length === 0) {
                Div.removeClass('sublist-active');
                // menu.removeClass('active');
                if(menu.is('.active')) {
                    menu.addClass('back');
                } else if (menu.is('.back')) {
                    menu.removeClass('back');
                } else {
                    menu.addClass('active');
                }
            }
        });

        /* Validation */
        $("form").each(function() { //Change
            var th = $(this);
            th.validate({
                rules: {
                    phone: {
                        required: true
                    }
                },
                messages: {},
                errorPlacement: function(error, element) {},
                submitHandler: function(form) {
                    var thisForm = $(form);
                    console.log(thisForm.serialize());
                    $.ajax({
                        type: "POST",
                        url: thisForm.attr('action'),
                        data: th.serialize()
                    }).done(function() {
                        // Done Functions
                        $.fancybox.close();
                        $.fancybox.open({
                            src: '#modal-thanks',
                        });

                        setTimeout(function() {
                            //submitForm = false
                            $.fancybox.close();
                        }, 3000);

                        th.trigger("reset");
                    });
                    return false;
                },

                success: function() {},
                highlight: function(element, errorClass) {
                    $(element).parent().addClass('error');
                },
                unhighlight: function(element, errorClass, validClass) {
                    $(element).parent().removeClass('error');
                }
            })
        });
    };

    static detectBrowser() {
        document.body.setAttribute('data-browser', detectBrowser());
    }

    static init() {
        this.detectBrowser();
        this.initializePlugins();
        this.initializeModules();
    }
};

const App = new Application();