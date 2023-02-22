/*
* ----------------------------------------------------------------------------------------
Author        : Rama Hardian Sidik
Template Name : Reypotret - Multipurpose Photographer Portfolio Bootstrap 5 Landing Page Template
Version       : 1.1
Filename      : main.js
* ----------------------------------------------------------------------------------------
*/
"use strict";
var w = $(window);
var header = $('#navigation-main');
var wido = $('#whatido');
var testi = $('#testimonial-slide');
var testidemo3 = $(".testimonials");
var portfolio = $('.portfolio-slide');
var wrapload = $('.loading');
var popupImage = $(".popup-image");
var imagezoom = $('.img-popup-btn');
var mobileMenu = $('.mobile-navwrap');
var videoPopup = $(".video-popup");
var accordions = $('.accordionwrap');
/* counter */
var visibilityIds = ['.counts'];
var counterClass = '.counter';
var defaultSpeed = 3000; //default value
// END CONFIG
// scroll spy

if ($('.nav-link').length) {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '*',
        offset: 1
    });
};

// window on scroll
w.on('scroll', function() {
    if (w.scrollTop() > 0) {
        header.addClass('fixi');
    } else {
        header.removeClass('fixi');
    };
});
// zoom magnificpopup init ------------------------
var magnific = function() {
    imagezoom.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    if (popupImage.length > 0) {
        popupImage.magnificPopup({
            type: 'image',
            fixedContentPos: true,
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }
    //Video Popup init
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 480,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
    //Video Popup
    if (videoPopup.length > 0) {
        videoPopup.magnificPopup({
            type: "iframe",
            removalDelay: 300,
            mainClass: "mfp-fade",
            overflowY: "hidden",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },
                srcAction: 'iframe_src'
            }
        });
    }
};
$('.lg').click(function() {
    /*  $("link[id='mainstyle']").toggleClass('open').attr('href', function(_, currHref) {
          return currHref === 'css/main.css' ? 'css/dark.css' : 'css/main.css';
      });
      var src = $('.logo').attr('src');
      var newsrc = (src == 'asset/image/pageasset/logo-w.png') ? 'asset/image/pageasset/logo.png' : 'asset/image/pageasset/logo-w.png';
      $('.logo').attr('src', newsrc);
      $('.navbar-toggler-icon i').toggleClass('colors');
      $('#navigation-main').toggleClass('transcolors');
      $('.hero-about').toggleClass('bglg')*/
});
//  menu mobile 
var menumobile = function(e) {
    //------------- open menu mobile 

    $('.toggle-nav').click(function() {

        $(this).addClass('open');
        mobileMenu.toggleClass("openmenu");
        if (mobileMenu.hasClass("openmenu")) {} else {
            $('.toggle-nav').removeClass('open');
        }
    });
    // mobile navigation init ----------------------
    $('#navmobile > .navigation-listmobile li a').on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 0);
        mobileMenu.removeClass('openmenu');
        $('.wrap-mobiltoggle').removeClass('open');
        e.preventDefault();
    });

};
// accoredion 
var accordionwraps = function(e) {
    if (accordions.length) {
        $(".accordions > .accordion-btn").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".content").hide();
                $(".accordions > .accordion-btn span")
                    .removeClass("minus")
                    .addClass("plus")
                    .html('add');
            } else {
                $(".accordions >.accordion-btn span")
                    .removeClass("minus")
                    .addClass("plus")
                    .html('add');
                $(this)
                    .find("span")
                    .removeClass("plus")
                    .addClass("minus")
                    .html('remove');
                $(".accordions > .accordion-btn").removeClass("active");
                $(this).addClass("active");
                $(".content").hide();
                $(this)
                    .siblings(".content").show();
            }
        });
    }
};
// owl carousel 
var owlcarouselslide = function(e) {
    // what ido slide
    if (wido.length) {
        wido.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 900,
            touchDrag: true,
            mouseDrag: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                960: {
                    items: 2
                },
                999: {
                    items: 3
                }
            }
        });
    };
    // testi demo 3
    if (testidemo3.length) {
        testidemo3.owlCarousel({
            center: true,
            items: 2,
            loop: true,
            dots: false,
            margin: 0,
            responsive: {
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                960: {
                    items: 2
                }
            }
        });
    };
    // testimonial slide
    if (testi.length) {
        testi.owlCarousel({
            autoplay: false,
            center: true,
            loop: true,
            dots: true,
            touchDrag: false,
            mouseDrag: false,
            smartSpeed: 900,
            items: 1,
            margin: 100,
            nav: true,
            navText: [
                '<i class="fa fa-long-arrow-left " aria-hidden="true"></i>',
                '<i class="fa fa-long-arrow-right " aria-hidden="true"></i>'
            ],
            navContainer: '.custom-nav',
        });
    };
    // slide portfolio 
    if (portfolio.length) {
        portfolio.owlCarousel({
            loop: false,
            margin: 30,
            items: 3,
            nav: true,
            center: true,
            rewind: false,
            navContainer: '.projectslide-nav',
            navText: [
                '<i class="fa fa-long-arrow-left pevbutton" aria-hidden="true"></i>',
                '<i class="fa fa-long-arrow-right nextbutton" aria-hidden="true"></i>'
            ],
            autoplay: false,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            },
        });
    };
};
// typed text
var texttype = function(e) {
    if ($('.typed').length) {
        var typed = new Typed('.typed', {
            strings: ["I'm Reyjian", "Whit a lens.", "I will do.", "Change your story.", "Capture it all."],
            typeSpeed: 50,
            showCursor: true,
            backSpeed: 50,
            backDelay: 4000,
            startDelay: 2000,
            loop: true,
        });
    };
};
// Shuffle grid
var picgrid = function(e) {
    if ($('#portfolio-warp').length) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(document.querySelector('#portfolio-warp'), {
            itemSelector: '.grid-item',
            buffer: 1,
        });
        // filter Shuffle grid
        $('.warp-filter .filter li').on('click', function() {
            var data = $(this).attr('data-group');
            myShuffle.filter(data);
            $(this).addClass('active').siblings().removeClass('active');
        });
    };
    if ($('.portfolio-grid').length) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(document.querySelector('.portfolio-grid'), {
            itemSelector: '.portfolio-item',
            buffer: 1,
        });
        $('.warp-filter .filter li').on('click', function() {
            var data = $(this).attr('data-group');
            myShuffle.filter(data);
            $(this).addClass('active').siblings().removeClass('active');
        });
    };
    if ($('#portfoliostyle-1').length) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(document.querySelector('#portfoliostyle-1'), {
            itemSelector: '.item-porto',
            buffer: 1,
        });
        $('.warp-filter .filter li').on('click', function() {
            var data = $(this).attr('data-group');
            myShuffle.filter(data);
            $(this).addClass('active').siblings().removeClass('active');
        });
    };
};
// form post 
var formpost = function(e) {
    $("#formcontact").on("submit", function() {
        $('.loader').html('');
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize(),
            beforeSend: function() {
                $('input, textarea').attr('readonly', "readonly");
                $('button').attr('disable', "true");
                $('.loader').html('<div class="d-flex align-items-center"><strong class="font-weight-normal">Please wait...</strong><div class="spinner-border spinner-border-sm ml-auto" role="status" aria-hidden="true"></div></div>');
            },
            success: function(msg) {
                if (msg == 'your message send') {
                    $("#formcontact").trigger("reset");
                    $('input, textarea').removeAttr('readonly');
                    $('input, textarea').val('');
                    $('button').removeAttr('disable');
                    $('.loader').html('<div class="alert alert-success" role="alert"><h4 class="alert-heading">Message send successful !</h4> <hr><p class="mb-0">I will reply to your message soon thank you</p></div>');
                } else {
                    $('input, textarea').removeAttr('readonly');
                    $('input, textarea').val('');
                    $('button').removeAttr('disable');
                    $("#formcontact").trigger("reset");
                    $('.loader').html('<div class="alert alert-danger" role="alert"><h4 class="alert-heading">There is something wrong !</h4> <hr><p class="mb-0">Sorry, your message failed to be sent due to an unknown error</p></div>');
                }
            }
        }).done(function() {
            $(this).find("input").val("");
            $("#formcontact").trigger("reset");
        });
        return false;
    });
};
// window on before load
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
// window on load
w.on('load', function() {
    wrapload.fadeOut(600);
});
// documennt ready
$(document).ready(function() {
    //detect mobile device
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    //init if not on mobile device
    if (!isMobile.any()) {
        if ($('#home-section').length) {
            $('#home-section').ripples({
                resolution: 512,
                dropRadius: 18,
                perturbance: 0.01,
                interactive: true,
            });
            // Automatic drops
            /* setInterval(function() {
                 var $el = $('#home-section');
                 var x = Math.random() * $el.outerWidth();
                 var y = Math.random() * $el.outerHeight();
                 var dropRadius = 20;
                 var strength = 0.04 + Math.random() * 0.04;
                 $el.ripples('drop', x, y, dropRadius, strength);
             }, 4000);*/
        };
    };
    if ($('.jarallax').length) {
        $(".jarallax").jarallax({
            speed: 0.5,
            disableParallax: function() {
                return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
            },
            disableVideo: function() {
                return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
            },
        });
    };
    texttype();
    picgrid();
    owlcarouselslide();
    formpost();
    menumobile();
    magnific();
    accordionwraps();
});