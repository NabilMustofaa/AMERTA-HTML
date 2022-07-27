
jQuery(window).on("load", function () {
    /* ===================================
     Loading Timeout
     ====================================== */

    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 3000);

});

jQuery(function ($) {

    "use strict";
//check for browser os
    var isMobile = false;
    var isiPhoneiPad = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }

    /* ===================================
     Animated Counter
     ====================================== */


    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    /* ===================================
     Animated Progress Bar
     ====================================== */

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000)
        });
    });


    /* ===================================
     Header Appear On Scroll
     ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) { // Set position from top to add class
            $('header').addClass('sticky header-appear');
            $('.left-logo .navbar-brand').addClass("display_none");
        }
        else {
            $('header').removeClass('sticky header-appear');
            $('.left-logo .navbar-brand').removeClass("display_none");
        }
    });

    // fixing bottom nav to top on scrolliing
    var $fixednav = $(".bottom-nav .navbar-fixed-top");
    $(window).on("scroll", function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
        } else {
            $fixednav.removeClass("navbar-bottom-top");
        }
    });



    /* =====================================
            Scroll
     ====================================== */

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //scroll sections
    $(".scroll").on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 750);
    });


    
    /*==============================================================
                equal Hieght
      ==============================================================*/
    var $window = $(window);
    var windowsize = $(window).width();
    checheight();
    $window.on("resize", function () {
        checheight();
    });

    function checheight() {
        var $smae_height = $(".equalheight");
        if ($smae_height.length) {
            if (windowsize > 767) {
                $smae_height.matchHeight({
                    property: "height",
                });
            }
        }
    }

    /* =====================================
             Side Nav Absolute
      ====================================== */

    if ($("body").hasClass("side-nav")) {
        var $menuLeft = $(".pushmenu-left");
        var $menuRight = $(".pushmenu-right");
        var $toggleleft = $(".menu_bars.left");
        var $toggleright = $(".menu_bars.right");
        $toggleright.on("click", function () {
            $('.menu_bars').toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return false;
        });

        $('.push_nav li a').on('click', function () {
            $toggleright.toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return true;
        });
    }




   

});