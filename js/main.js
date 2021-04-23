(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });
        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });
        // team slider
        var swiper = new Swiper('.team_slider', {
            spaceBetween: 15,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
            }
        });
        // gallery slider
         var swiper = new Swiper('.gallery_slider', {
            spaceBetween: 25,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                576: {
                  slidesPerView: 2,
                },
            }
        });
    });

})(jQuery);