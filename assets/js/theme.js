/*------------------------------
For Mega menu and Mobile menu
--------------------------------*/
(function($){
	"use strict";
	var LawBlocks = {};

    /* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */
    LawBlocks.preloader = function(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
				
				//setTimeout(LawBlocks.getStats , 1000)

            })   
        }
    }
	
	
    /* ---------------------------------------------- /*
	 * Wow Animation
	/* ---------------------------------------------- */
	LawBlocks.WowAnimation = function(){
	var wow = new WOW({
    	offset:30,        // distance to the element when triggering the animation (default is 0)
    	//mobile:false       // trigger animations on mobile devices (default is true)
  	});
	wow.init();
	}
	

	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	LawBlocks.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');		   
		   $(".top-header-area").css("display", "none");
	    }
	    else {
	       $('header').removeClass('fixed-header');
		   $(".top-header-area").css("display", "block");
	    }
	}


	/* ---------------------------------------------- /*
	 * Menu Close
	/* ---------------------------------------------- */
    LawBlocks.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }	
	
	
	/* ---------------------------------------------- /*
	 * Menu Color change
	/* ---------------------------------------------- */
	LawBlocks.MenuColorChange = function() {
		$(".navbar-toggler").click(function(){
    		$(".header-nav").toggleClass("menuColorChange");
		});
	}
	
	/* ---------------------------------------------- /*
	 * Mega Menu
	/* ---------------------------------------------- */
	LawBlocks.MegaMenu = function() {
		var mDropdown = $(".m-dropdown-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}
	
	
	/* ---------------------------------------------- /*
	 * One Page
	/* ---------------------------------------------- */
    LawBlocks.OnePage = function(){
        $('header a[href*="#"]:not([href="#"]), footer a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 85,
                      }, 1000);
                      return false;
                  }
            }
        });
    }
	

	/* ---------------------------------------------- /*
	 * Magnificpopup
	/* ---------------------------------------------- */
    LawBlocks.magnificPopup = function() {
        if ($('.popup-youtube, .open-popup-form, .partner_img').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                //disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
				 
				callbacks: {
					beforeOpen: function() {
						$('body').addClass('mfp-active');
					},
					beforeClose: function() {
						$('body').removeClass('mfp-active');
					}
				}
				 
            });
        };
    };
	
	
	/* ---------------------------------------------- /*
	 * Slider
	/* ---------------------------------------------- */
	LawBlocks.testimonialSlider = function(){ 
	$('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 1,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 1
		              },
		              1170: {
		                items: 1
		              }
		            }
		        });
	};
	
	
	/* ---------------------------------------------- /*
	 * Slider
	/* ---------------------------------------------- */
	LawBlocks.blogSlider = function(){ 
	$('#recent-blogpost').owlCarousel({
		loop: true,
		items: 3,
		margin: 50,
		autoplay: true,
		nav:false,
		dots:true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		responsive: {
			0: {
		    	items: 1
		    },
		    768: {
		    	items: 2
		    },
			991: {
		    	items: 3
		    },
		    1170: {
		    	items: 3
		    }
		}
		});
	};
	
	
	
	/* ---------------------------------------------- /*
	 * Add More Field
	/* ---------------------------------------------- */
	LawBlocks.addMoreField = function() {
		$(document).ready(function() {
			$("#addmore").click(function() {
				$("#req_input").append('<div class="required_inp"><input name="compulsoryfname" placeholder="Compulsory Field Name" type="text">' + '<input type="button" class="inputRemove" value="-"/></div>');
			});
			$('body').on('click', '.inputRemove', function() {
				$(this).parent('div.required_inp').remove()
			});
		});
	}
	
	
	
	/* ---------------------------------------------- /*
	 * Scroll to top
	/* ---------------------------------------------- */
    LawBlocks.scrollToTop = function(){
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                //if ($(this).scrollTop() > 400) {
                    //$('.scroll-top').fadeIn();
                //} else {
                    //$('.scroll-top').fadeOut();
                //}
				if ($(this).scrollTop() > 400) {
				  $('.scroll-top').addClass('show');
				} else {
				  $('.scroll-top').removeClass('show');
				}
				
            }); 
            //Click event to scroll to top
            $('.scroll-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }
	
	
	// Document on Ready
	$(document).on("ready", function(){		
		LawBlocks.preloader(),
		LawBlocks.WowAnimation(),
		LawBlocks.HeaderFixd(),
		LawBlocks.MenuClose(),
		LawBlocks.MegaMenu(),
		LawBlocks.MenuColorChange(),
		LawBlocks.OnePage(),
		LawBlocks.magnificPopup(),
		LawBlocks.testimonialSlider(),
		LawBlocks.blogSlider(),
		LawBlocks.addMoreField(),
		LawBlocks.scrollToTop()
	});

	// Document on Scroll
	$(window).on("scroll", function(){
		LawBlocks.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
	});

})(jQuery);