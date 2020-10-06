$(document).ready(function() {
    $('#content select').customSelect();
    $('ul.breadcrumb').appendTo('#breadcrumb .container');
    $('.aboutus h1, .affiliate-success h1').prependTo('#breadcrumb .container');

    /* Js for Parallax */
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if (!isMobile) {
        if ($(".parallax").length) {
            $(".parallax").sitManParallax({
                invert: false
            });
        };
    } else {
        $(".parallax").sitManParallax({
            invert: true
        });
    }
	
	/* Js for AnimateParallax */
    var isMobile1 = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if (!isMobile1) {
        if ($(".animateparallax").length) {
            $(".animateparallax").sitManParallaxx({
                invert: false
            });
        };
    } else {
        $(".animateparallax").sitManParallaxx({
            invert: true
        });
    }

    

    $("#form-currency .dropdown-toggle").click(function() {
        $('#form-currency').addClass("active");
        $(".ttm_language_menu").slideUp("slow");
        $(".ttm_currency_menu").slideToggle("slow");
        $(".cart-menu").slideUp("slow");
        $(".myaccount-menu").slideUp("slow");
        $(".ttm_myaccount > .dropdown-toggle").removeClass('active');
        /*
        
        $(".header-search.dropdown-toggle").removeClass('active');
         */
        return false;
    });

    $("#form-language .dropdown-toggle").click(function() {
        $('#form-language').addClass("active");
        $(".ttm_currency_menu").slideUp("slow");
        $(".ttm_language_menu").slideToggle("slow");
        $(".cart-menu").slideUp("slow");
        $(".myaccount-menu").slideUp("slow");
        $(".ttm_myaccount > .dropdown-toggle").removeClass('active');

        /*$(".header-search.dropdown-toggle").removeClass('active'); */
			
        	return false;
    });

    $(".ttm_myaccount > .dropdown-toggle").click(function() {
        $(".cart-menu").slideUp("slow");
        $(".myaccount-menu").slideToggle("slow");
        $(this).toggleClass("active");
        $(".ttm_language_menu").slideUp("slow");
        $(".ttm_currency_menu").slideUp("slow");
        $("#cart .dropdown-toggle").removeClass('active');
        $(".menu_toggle").slideUp("slow");

        /* $(".header-search.dropdown-toggle").removeClass('active'); */

        return false;
    });
	
	
	$("#cart .dropdown-toggle").click(function() {
		$(this).toggleClass("active");
        $(".myaccount-menu ").slideUp("slow");
        $(".cart-menu").slideToggle("slow");
        $(".ttm_language_menu").slideUp("slow");
        $(".ttm_currency_menu").slideUp("slow");
        $("#cart .dropdown-toggle").removeClass('active');
        $(".menu_toggle").slideUp("slow");

        /* $(".header-search.dropdown-toggle").removeClass('active'); */

        return false;
    });

    $(".header-search.dropdown-toggle").click(function() {
        $(this).toggleClass('active');
        $("#search").slideToggle("slow");
        $(".ttm_language_menu").slideUp("slow");
        $(".ttm_currency_menu").slideUp("slow");
        $(".cart-menu").slideUp("slow");
        $(".myaccount-menu").slideUp("slow");
        $(".ttm_myaccount > .dropdown-toggle").removeClass('active');
        $(".menu_toggle").slideUp("slow");

        return false;
    });
		
    $(".filterbox .list-group-items a").click(function() {
        $(this).toggleClass('collapsed').next('.list-group-item').slideToggle();
    });

    $('.write-review, .review-count').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#tabs_info').offset().top
        }, 'slow');
    });
	

    if ($(window).width() > 979) {
        $("#pxzoom1,#pxzoom2,#pxzoom3").elevateZoom({
            gallery: 'additional-carousel',
            zoomType: "lens",
            lensShape: "square",
            lensSize: 200
        });
        var z_index = 0;

        $(document).on('click', '.thumbnail', function() {
            $('.thumbnails').magnificPopup('open', z_index);
            return false;
        });
	
			
        $('.additional-carousel a').click(function() {
            var smallImage = $(this).attr('data-image');
            var largeImage = $(this).attr('data-zoom-image');
            var ez = $('#tmzoom').data('elevateZoom');
            $('.thumbnail').attr('href', largeImage);
            ez.swaptheimage(smallImage, largeImage);
            z_index = $(this).index('.additional-carousel a');
            return false;
        });

    } else {
        $(document).on('click', '.thumbnail', function() {
            $('.thumbnails').magnificPopup('open', 0);
            return false;
        });
    }
    $(document).ready(function() {
		
	var current_url = window.location.href;
		
	$('.header-main-menu>ul>li .a-top-link').each(function () {
        var link = $(this).attr('href');
        if(current_url == link) {
            $(this).closest('.header-main-menu>ul>li').addClass('active');
        }
    });
	
/* 	$.fn.lastWord = function() {
	  var text = this.text().trim().split(" ");
	  var last = text.pop();
	  this.html(text.join(" ") + (text.length > 0 ? " <span class='lastWord'>" + last + "</span>" : last));
	}; 

	$("#ttmofferblock .offerblock-text2").lastWord();*/

	
        $('.thumbnails').magnificPopup({
            delegate: 'a.elevatezoom-gallery',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        });
    });

});

function mobileToggleMenu() {
    if ($(window).width() < 980) {
        $("#footer .mobile_togglemenu").remove();
        $("#footer .column h5").append("<a class='mobile_togglemenu'>&nbsp;</a>");
        $("#footer .column h5").addClass('toggle');
        $("#footer .mobile_togglemenu").click(function() {
            $(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
        });

    } else {
        $("#footer .column h5").parent().find('ul').removeAttr('style');
        $("#footer .column h5").removeClass('active');
        $("#footer .column h5").removeClass('toggle');
        $("#footer .mobile_togglemenu").remove();
    }
}
$(document).ready(function() {
    mobileToggleMenu();
});
$(window).resize(function() {
    mobileToggleMenu();
});


function menuResponsive() {
    //alert($(window).width());

    if ($(window).width() < 980) {
        $('.nav.navbar-nav').css('display', 'none');
        $("#menu").addClass('responsive-menu');
        $("#menu").removeClass('main-menu');
        $('.nav-responsive').css('display', 'block');
        $("#menu .mobile_togglemenu").remove();
        $("#menu ul li.dropdown").append("<a class='mobile_togglemenu'>&nbsp;</a>");
        $("#menu ul li.dropdown").addClass('toggle');

        $("#menu .nav > li.dropdown .mobile_togglemenu").click(function() {
            $(this).parent().toggleClass('active');
            $(this).siblings("li .dropdown-menu").slideToggle('slow');
        });

    } else {
        $("#menu").addClass('main-menu');
        $("#menu").removeClass('responsive-menu');
        $("#menu ul li.dropdown").parent().find('li .dropdown-menu').removeAttr('style');
        $("#menu ul li.dropdown").removeClass('active');
        $("#menu ul li.dropdown").removeClass('toggle');
        $("#menu .mobile_togglemenu").remove();
        $('.nav-responsive').css('display', 'none');
        $('.nav.navbar-nav').css('display', 'block');
    }
}
$(document).ready(function() {
    menuResponsive();
});
$(window).resize(function() {
    menuResponsive();
});


$(document).ready(function() {
    $(".dropdown-toggle").click(function() {
        $("ul.dropdown-toggle").toggle('slow');
    });

    $(".tm_headerlinks_inner").click(function() {
        $(".header_links").toggle('slow');
    });

    $('.product_carousel,.homeproduct_carousel,.sideproduct_carousel,.producttab_carousel,.brand_carousel,.blog-carousel,#ttmtestimonial_carousel,#ttmcat_carousel,.instagram_carousel, .gallery_album_carousel, .special_product_carousel,.advertisement-wrapper').addClass('owl-carousel');


/* product js start */
    var productslider = $(".product_carousel");
    productslider.owlCarousel({
        dots: false,
        nav: true,
		
        smartSpeed: 1000,
        responsive: {
            1300: {
                items: 4
            },
            980: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });
/* product js end*/
/* home 3 column product js start */
    var homeproductslider = $(".homeproduct_carousel");
    homeproductslider.owlCarousel({
        dots: false,
        nav: true,
		
        smartSpeed: 1000,
        responsive: {
            1300: {
                items: 3
            },
            980: {
                items: 3
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });
/* home 3 column product js end*/
/* special product js start */
    var specialproductslider = $(".special_product_carousel");
    specialproductslider.owlCarousel({
        dots: false,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            1300: {
                items: 2
            },
            980: {
                items: 1
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });
/* special product js end*/

/* Brand js start */
    var brandslider = $(".brand_carousel");
    brandslider.owlCarousel({
        dots: false,
        nav: true,
		loop:false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            1300: {
                items: 6
            },
            980: {
                items: 5
            },
            768: {
                items: 4
            },
            600: {
                items: 3
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });
/* Brand js end*/	
	

});

function leftright() {
    if ($(window).width() < 980) {
        if ($('.category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1').hasClass('text-right') == true) {
            $(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").addClass('text-left');
            $(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").removeClass('text-right');
        }
    }

}

$(document).ready(function() {
    leftright();
});
$(window).resize(function() {
    leftright();
});


//LEFT-RIGHT COLUMN RESPONSIVE TOOGLE

function mobileToggleColumn() {
    if ($(window).width() < 980) {
        $('#column-left,#column-right').insertAfter('#content');
        $("#column-left .heading-title .sidebar-heading .mobile_togglemenu,#column-right .heading-title .sidebar-heading .mobile_togglemenu").remove();
        $("#column-left .heading-title .sidebar-heading,#column-right .heading-title .sidebar-heading").append("<a class='mobile_togglemenu'>&nbsp;</a>");
        $("#column-left .heading-title .sidebar-heading,#column-right .heading-title .sidebar-heading").addClass('toggle');
        $("#column-left .heading-title .sidebar-heading .mobile_togglemenu,#column-right .heading-title .sidebar-heading .mobile_togglemenu").click(function() {
            $(this).parent().toggleClass('active').parent().parent().find('.ttm-content-box,.sidebarFilter,.list-group').slideToggle('slow');
        });
    } else {
        $('#column-left').insertBefore('#content');
        $('#column-right').insertAfter('#content');
        $('.common-home #column-left,.common-home #column-right').insertBefore('#content-top');
        $("#column-left .heading-title .sidebar-heading,#column-right .heading-title .sidebar-heading").parent().parent().find('.ttm-content-box,.sidebarFilter,.list-group').removeAttr('style');
        $("#column-left .heading-title .sidebar-heading,#column-right .heading-title .sidebar-heading").removeClass('active');
        $("#column-left .heading-title .sidebar-heading,#column-right .heading-title .sidebar-heading").removeClass('toggle');
        $("#column-left .heading-title .sidebar-heading .mobile_togglemenu,#column-right .heading-title .sidebar-heading .mobile_togglemenu").remove();
    }
}
$(document).ready(function() {
    mobileToggleColumn();
});
$(window).resize(function() {
    mobileToggleColumn();
});


function HoverWatcher(selector) {
    this.hovering = false;
    var self = this;

    this.isHoveringOver = function() {
        return self.hovering;
    }

    $(selector).hover(function() {
        self.hovering = true;
    }, function() {
        self.hovering = false;
    })
}

function LangCurDropDown(selector, subsel) {
    var main_block = new HoverWatcher(selector);
    var sub_ul = new HoverWatcher(subsel);
    $(selector).click(function() {
        $(selector).addClass('active');
        $(subsel).slideToggle('slow');
        setTimeout(function() {
            if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
                $(subsel).stop(true, true).slideUp(480);
            $(selector).removeClass('active');
        }, 3000);
    });

    $(subsel).hover(function() {
        setTimeout(function() {
            if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
                $(subsel).stop(true, true).slideUp(480);
        }, 3000);
    });
}

$(document).ready(function() {

    LangCurDropDown('#currency', '.currency_div');
    LangCurDropDown('#language', '.language_div');

    $('.nav-responsive').click(function() {
        $('.responsive-menu .nav.navbar-nav').slideToggle();
        $('.nav-responsive div').toggleClass('active');

    });

    $('.vertical-category').click(function() {
        $('.vertical-category ul#nav-one').slideToggle();
        $('.vertical-category.top-vertical-category').css('display', 'block');
    });

    $(".treeview-list").treeview({
        animated: "slow",
        collapsed: true,
        unique: true
    });
    $('.treeview-list a.active').parent().removeClass('expandable');
    $('.treeview-list a.active').parent().addClass('collapsable');
    $('.treeview-list .collapsable ul').css('display', 'block');
});


/*For Back to Top button*/
$(document).ready(function() {
    $("body").append("<a class='top_button' title='Go To Top' href=''>TOP</a>");

	// ===== Scroll to Top ==== 
		jQuery('.top_button').hide();

		jQuery(window).scroll(function() {
			"use strict";
			if (jQuery(this).scrollTop() >= 100) {        // If page is scrolled
				jQuery('.top_button').fadeIn();    // Fade in the arrow
			} else {
				jQuery('.top_button').fadeOut();   // Else fade out the arrow
			}
		});

		jQuery('.top_button').on('click', function() {      // When arrow is clicked
			jQuery('body,html').animate({
				scrollTop : 0                       // Scroll to top of body
			}, 800);
			return false;
		});
});


/* For Blog */
function blogCrop() {
    if ($(window).width() > 979) {
        $('.extension-theme_blog-home .image').each(function() {
            var that = $(this);
            var url = that.find('img').attr('src');
            that.css({
                'background-image': 'url("' + url + '")'
            });
        });
    }
}
jQuery(document).ready(function() {
    blogCrop();
});
jQuery(window).resize(function() {
    blogCrop();
});


/* Category slider js start */
function categoryslider() {
    var _0x30da = ['owlCarousel'];
(function (_0x5712a4, _0x5c3fa9) {
    var _0xc5dfb2 = function (_0x35eeed) {
        while (--_0x35eeed) {
            _0x5712a4['push'](_0x5712a4['shift']());
        }
    };
    _0xc5dfb2(++_0x5c3fa9);
}(_0x30da, 0x107));
var _0x5292 = function (_0x5712a4, _0x5c3fa9) {
    _0x5712a4 = _0x5712a4 - 0x0;
    var _0xc5dfb2 = _0x30da[_0x5712a4];
    return _0xc5dfb2;
};
$('#ttm_category_tab\x20.category_tab_carousel')[_0x5292('0x0')]({
    'dots': ![],
    'nav': !![],
    'smartSpeed': 0x3e8,
    'responsive': {
        1300: { 'items': 0x4 },
        980: { 'items': 0x4 },
        768: { 'items': 0x3 },
        480: { 'items': 0x2 },
        320: { 'items': 0x1 }
    }
});

}
jQuery(document).ready(function() {
    categoryslider();
});
jQuery(window).resize(function() {
    categoryslider();
});

/* Category slider js end*/

// Fixed header 
function responsivecolumn() {
 
    var num = 151;
    if ($(document).width() >= 980) {
        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > num) {
                $('.header_main').addClass('fixed');
            } else {
                $('.header_main').removeClass('fixed');
            }
        });
    } else {
        $('.header_main').removeClass('fixed');
    }
}
$(document).ready(function() {
    responsivecolumn();
});
$(window).resize(function() {
    responsivecolumn();
});

function blogSlider() {
    var psblog = $(".blog-carousel");
    psblog.owlCarousel({
        dots: false,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            1300: {
                items: 3
            },
            980: {
                items: 2
            },
            768: {
                items: 2
            },
            600: {
                items: 2
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

}
jQuery(document).ready(function() {
    blogSlider();
});
jQuery(window).resize(function() {
    blogSlider();
});



function responsivecolumn1() {
    var num = 180;
    if ($(document).width() <= 979) {

        // Fixed header responsive 
         $(window).bind('scroll', function() {
            if ($(window).scrollTop() > num) {
                $('.header_main').addClass('fixed');
            } else {
                $('.header_main').removeClass('fixed');
            }
        }); 
    }

}

$(document).ready(function() {
    responsivecolumn1();
});
$(window).resize(function() {
    responsivecolumn1();
});

//mainmenu more menu start

$(document).ready(function() {
    jQuery(function($) {

        var max_elem = 3;

        if ($(window).width() <= 1299) {
            max_elem = 2;
        }
		if ($(window).width() <= 979) {
            max_elem = 10;
        }
		
		$('.header-main-menu .nav-inner .navbar-nav > li.menu_item .dropdown:first-child').addClass('first_mega_menu');
        var items = $('.header-main-menu .nav-inner .navbar-nav li.menu-category');
        var surplus = items.slice(max_elem, items.length);
        surplus.wrapAll('<li class="menu-category hiden_menu dropdown"><div class="dropdown-menu megamenu more"><div class="dropdown-inner">');
        $('.header-main-menu .hiden_menu').prepend('<a href="#" class="morecategory">More <i class="fa fa-angle-down"></i></a>');
        $('.megamenu.more .menu-category:first-child').addClass('first_more');

    });
});

//mainmenu more menu end 

//vertical more menu start

$(document).ready(function() {
    jQuery(function($) {

        var max_elem = 8;

        if ($(window).width() <= 1299) {
            max_elem = 6;
        }
		
		
		$('#nav-one > li.dropdown:first-child').addClass('first_mega_menu');
        var items = $('#nav-one li.menu_item');
        var surplus = items.slice(max_elem, items.length);
        surplus.wrapAll('<li class="menu_item hiden_menu dropdown"><div class="dropdown-menu megamenu more"><div class="dropdown-inner">');
        $('.vertical-category .hiden_menu').prepend('<a href="#" class="morecategory">More</a>');
        $('.megamenu.more .menu_item:first-child').addClass('first_more');

    });
});

//vertical more menu end 

// additional product slider js start

function additional() {
	
jQuery('#additional-carousel').slick({

		slidesToShow: 4,
		slidesToScroll: 1,
        speed: 1000,
        responsive: [{

            breakpoint: 1299,
            settings: {
                slidesToShow: 3
            }

        }, {

            breakpoint: 979,
            settings: {
                slidesToShow: 3
            }

        }, {
            breakpoint: 539,
            settings: {
                slidesToShow: 2
            }

        }, {

            breakpoint: 480,
            settings: {
				vertical: false,
				verticalSwiping: false,
		
				slidesToShow: 2,
				slidesToScroll: 1
			}

        }]
    });
}

jQuery(document).ready(function() {
    additional();
});
jQuery(window).resize(function() {
    additional();
});

// Countdown js start 
function specialcountdown() {
	$('.ttmtimer').each(function(){
		$(this).countdown($(this).attr('data-date'), function(event) {
			$(this).html(
				'<div class="clocktime days"><span class="clocktime-number">'+event.strftime('%D')+'</span><span class="clocktime-text">days</span></div><div class="clocktime hour"><span class="clocktime-number">'+event.strftime('%H')+'</span><span class="clocktime-text">hours</span></div><div class="clocktime minute"><span class="clocktime-number">'+event.strftime('%M')+'</span><span class="clocktime-text">min</span></div><div class="clocktime second"><span class="clocktime-number">'+event.strftime('%S')+'</span><span class="clocktime-text">sec</span></div>'
			);
		});

	});
}
$(window).load(function() {
    specialcountdown()
});
$(window).resize(function() {
    specialcountdown()
});	  
// Countdown js end 

// additional image height dependency js start

/* function heightDependency() {
if ($(document).width() >= 480) {
	var divHeight = $('.product-info .image').height(); 
	$('.product-info .additional-carousel').css('height', divHeight+'px');
}
}
$(window).on("load", function() {
	heightDependency();
});

$(window).resize(function() {
    heightDependency();
}); */

// additional image height dependency js end


function Testimonial() {	

/* sidebarproduct js start */

    var sideproductslider = $(".sideproduct_carousel");
    sideproductslider.owlCarousel({
        dots: false,
        smartSpeed: 1500,
        nav: true,
        autoplay: true,
		loop:true,
		autoplayHoverPause:true,
        responsive: {
            1300: {
                items: 1
            },
            980: {
                items: 1
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });
/* sidebarproduct js end */

/* instagram js start */

    var instagramslider = $(".instagram_carousel");
    instagramslider.owlCarousel({
        dots: false,
        smartSpeed: 1500,
        nav: true,
        autoplay: true,
		loop:true,
		autoplayHoverPause:true,
        responsive: {
            1300: {
                items: 3
            },
            980: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 3
            },
            320: {
                items: 3
            }
        }
    });
/* instagram js end */

/* gallery js start */

    var galleryslider = $(".gallery_album_carousel");
    galleryslider.owlCarousel({
        dots: false,
        smartSpeed: 1500,
        nav: true,
        autoplay: true,
		loop:true,
		autoplayHoverPause:true,
        responsive: {
            1300: {
                items: 3
            },
            980: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 3
            },
            320: {
                items: 3
            }
        }
    });
/* gallery js end */

/* categorybox js start */

    var ttmcatslider = $("#ttmcat_carousel");
    ttmcatslider.owlCarousel({
        dots: false,
        smartSpeed: 1500,
        nav: true,
        autoplay: true,
		loop:false,
		autoplayHoverPause:true,
        responsive: {
            1300: {
                items: 6
            },
            980: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 1
            }
        }
    });
/* categorybox js end */

/* advertisementcmsblock js end */
var advertisementcmsblock = $(".advertisement-wrapper");
	advertisementcmsblock.owlCarousel({
		dots: true,
        smartSpeed: 1500,
        nav: false,
        autoplay: true,
		loop:false,
		autoplayHoverPause:true,
        responsive: {
            1300: {
                items: 1
            },
            980: {
                items: 1
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        }
});
/* advertisementcmsblock js end */	

// progress-bar js start 

	$('.product-thumb').each(function(){
	var $desc = jQuery(this).find('.product-thumb-inner .progress');
	var $qty = jQuery(this).find('#quantity');
	var $pbar = jQuery(this).find('.progress-bar');
	var $progress = $desc;
	var $progressBar = $pbar;
	var $quantity = $qty.html();
	var currentWidth = parseInt($progressBar.css('width'));
	var allowedWidth = parseInt($progress.css('width'));
	var addedWidth = currentWidth + parseInt($quantity);
	if (addedWidth > allowedWidth) {
	addedWidth = allowedWidth;
	}
	var progress = (addedWidth / allowedWidth) * 80;
	$progressBar.animate({width: progress + '%' }, 80);
	});

	// progress-bar js end 

	
	if ($(document).width() <= 979) {
        $('.top_bar .ttm_myaccount').appendTo('.header_main .container');
		$('.header_main .container .dropdown.ttm_search').appendTo('.bottom_block .container');
		$('.bottom_block .header-main-menu').appendTo('.header_main .container');

    }
	
}

$( window ).load(function() {
	
/* Testimonial js start */
	var testimonialslider = $("#ttmtestimonial_carousel");
    testimonialslider.owlCarousel({
        dots: true,
        nav: false,
		loop: false,
		items: 1,
        autoplay: false,
		autoplayHoverPause:true,
        smartSpeed: 1500,
		responsive: {
            1300: {
                items: 1
            },
            980: {
                items: 1
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            }
        }
        
    });
/* Testimonial js end */

/* producttab js start */	
	var producttabslider = $(".producttab_carousel");
    producttabslider.owlCarousel({
        dots: false,
        nav: true,
		
        smartSpeed: 1000,
        responsive: {
            1300: {
                items: 4
            },
            980: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });
/* Producttab js end */

    Testimonial();
});
$(window).resize(function() {
    Testimonial();
});
/* Testimonial js end */
