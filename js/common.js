$(function() {

	var headerHeight;
	$(window).scroll(function() {

		headerHeight = $('.header').height();
		if($(this).scrollTop() > headerHeight){
			$('.header').addClass('header--fixed');
			$('body').css('margin-top', headerHeight);

		}else{
			$('.header').removeClass('header--fixed');
			$('body').css('margin-top', 0);
		}
	});

	$(document).ready(function() {
		/*--------MOBILE VERSION--------------*/
			// close mob-menu
				$('.menu-close').click(function() {
					$('html').removeClass('open');
					$('.toggle-mnu').removeClass('on');
					return false;
				});
			// END close mob-menu
			// Accordeon-----------------------------------
			$('.acordeon-link').click(function(e) {
				e.preventDefault();
				var $currentItem = $(this).closest('.acordeon-item');
				if($currentItem.hasClass('acordeon-item-with-sublist')){

					$currentItem.find('.acordeon-sublist')
					.stop(true, true)
					.slideToggle();
					$currentItem.siblings()
					.find('.acordeon-sublist')
					.stop(true, true)
					.slideUp();

					$currentItem
						.toggleClass('active')
						.siblings()
						.removeClass('active');

				}else{
					return;
				}
			});
			// end Accordeon-----------------------------------

			// dl-menu
				if($('#dl-menu').length > 0){
					$('#dl-menu').dlmenu({
						useActiveItemAsBackLabel: true,
						onLevelClick: function($menuItem, event){
							console.log('levelclick')
							console.log('event ' + event)
							console.log($menuItem.context)
							$('.mobmenu-top').css('display', 'none');

						},
						onLinkClick: function($menuItem, event){
							console.log('linkclick')
							console.log('event ' + event)
							console.log($menuItem.context)

						},
						animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
					});

					$('.dl-back').click(function() {
						$('.mobmenu-top').css('display', 'flex');
					});

				}

			// END dl-menu

			// top-slider
				var $topSlider = $('.top-slider__carousel').slick({
					// arrows: false,
					slidesToShow: 3,
					adaptiveHeight: true,
					centerMode: true,
        	// centerPadding: '36px',
        	arrows: false,
					responsive: [
		
						{
							// centerMode: true,
							breakpoint: 768,
							settings: {
								slidesToShow: 2
							}	
						},
						{
							// centerMode: true,
							breakpoint: 480,
							settings: {
								slidesToShow: 1

							}	
						}
					]
				});
		
			// END top-slider

			// malihu-scrollbar
				var $priceScroll = $('.price__scroll');
				
				if($priceScroll.length > 0){
					
					$priceScroll.mCustomScrollbar({
						axis:"x"
					});

				 $('.table-scroll-arrow.forw').click(function(){
				 	console.log('scroll button')
				 	var scroll = $priceScroll.scrollLeft();
					$priceScroll.mCustomScrollbar("scrollTo",'-=100',{});

				});

				 $('.table-scroll-arrow.back').click(function(){
				 	console.log('scroll button')
				 	var scroll = $priceScroll.scrollLeft();
						$priceScroll.mCustomScrollbar("scrollTo",'+=100',{});
					});
				}

					
			// END malihu-scrollbar

			// table-tooltipster
				 $('.price-table__info-icon').tooltipster({
					trigger: 'click',
					side: ['top'],
					maxWidth: 91,
					functionPosition: function(instance, helper, position){
				 		
				 		var posYHelper = helper.origin.getBoundingClientRect().top;
				 		
			 			position.coord.top = posYHelper - headerHeight - 70;
					 	return position;
					 },
				 	functionReady: function(instance, helper) {
						helper.tooltip.classList.add('table-tip');
					}
				 });
			// END table-tooltipster

			// how-to-order-slider
				$('.how-to-order__carousel').slick({
					slidesToScroll: 1,
					slidesToShow: 4,
					dots: false,
					arrows: false,
					responsive: [
						{
							breakpoint: 560,
							settings: {
								centerMode: true,
								centerPadding: '30px',
								slidesToShow: 1,
								arrows: true,
							}	
						}
					]
				});
			// END how-to-order-slider

			// guarantee-slider
				$('.guarantee-carousel').slick({
					slidesToScroll: 1,
					slidesToShow: 4,
					dots: false,
					arrows: false,
					responsive: [
						{
							breakpoint: 560,
							settings: {
								slidesToShow: 1,
								dots: true
							}	
						}
					]
				});
			// END guarantee-slider
		/*--------END MOBILE VERSION--------------*/
		
		// slick
			var $mainSlider = $('.main-slider__carousel').slick({
				arrows: false,
				fade: true,
				adaptiveHeight: true,
				dots: true
			});

			$('.main-slider__prev, .main-slider__next').click(function() {
				if($(this).hasClass('main-slider__prev')){
					$mainSlider.slick('slickPrev');
				}else{
					$mainSlider.slick('slickNext');
				}
			});

			$('.docs-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				// autoplay: true,
				responsive: [

			    {
			      breakpoint: 780,
			      settings: {
			        slidesToShow: 2
			      }
			    },

			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        centerMode: true,
			        centerPadding: '60px',
			      }
			    }
			    ]

			});

			var arrowSlidersOpt = {
				slidesToShow: 5,
				adaptiveHeight: true,
				dots: true,
				autoplay: true,
				responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 780,
		      settings: {
		        slidesToShow: 2
		      }
		    },

		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		    ]
			}

			var $pfolioSlider = $('.portfolio-slider').slick(arrowSlidersOpt);

			// $pfolioSlider.slick('slickSetOption', 'autoplay', true, true);
			

			var $ctmSlider = $('.air-ctm__slider').slick(arrowSlidersOpt);

			// $ctmSlider.slick('slickSetOption', 'dots', false, true);

			var $collSlider = $('.collective-slider').slick({
				slidesToShow: 4,
				arrows: false,
				autoplay: true,
				responsive: [
		    {
		      breakpoint: 960,
		      settings: {
		        slidesToShow: 3

		      }
		    },
		    {
		      breakpoint: 780,
		      settings: {
		        slidesToShow: 2
		         
		      }
		    },
		    {
		      breakpoint: 560,
		      settings: {
		        slidesToShow: 1,
		        // slidesToScroll: 1
		        adaptiveHeight: true
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        centerMode: true,
		        adaptiveHeight: true
		      }
		    }
		    ]
			});

			$('.collective .slider-prev, .collective .slider-next').click(function() {
				if($(this).hasClass('slider-prev')){
					$collSlider.slick('slickPrev');
				}else{
					$collSlider.slick('slickNext');
				}
			});

			var $fabrSlider = $('.fabrication-slider').slick({
				arrows: false,
				fade: true,
				dots: true,
				autoplay: true
				
			});

			var $formsSlider = $('.forms-slider').slick(arrowSlidersOpt);

			// $formsSlider.slick('slickSetOption', 'dots', false, true);
		// end slick

		// mag.popup
		$('.button-popup').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#name',
				mainClass: 'mag-callback',

			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});
		// end mag.popup

		// tabs
			var $tabs = $('.tabs__link');

			$tabs.on('click', function(e) {
				e.preventDefault();
				var $th = $(this),
				$href = $th.attr('href'),
				$parent = $th.parent();
				$parent.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');

				$($href).removeClass('hidden')
				.siblings()
				.addClass('hidden');
				tabsSliderToggle($($href));

				$('.forms-download a span').text($th.text());
			});

			function tabsSliderToggle(sliderParent) {
				sliderParent.slick('reinit');
				// $formsSlider.slick('reinit');
			}
		// end of tabs

		// Tooltipster

			$('.tooltip').tooltipster({
				// plugins: ['sideTip', 'scrollableTip'],
				interactive: true,
				 trigger: 'hover',
				repositionOnScroll: true,
				 // arrow: false,
				 side: 'bottom',
				 // theme: 'tooltipster-shadow',
				 // repositionOnScroll: true,
				 // viewportAware: false,
				 contentCloning: true,
				 debug: true,
				 functionPosition: function(instance, helper, position){
				 		
				 		var posYHelper = helper.origin.getBoundingClientRect().top;
				 		
			 			position.coord.top = posYHelper - headerHeight + 50;
				 	return position;
				 },
				 functionReady: function(instance, helper) {
					
					helper.tooltip.classList.add('map-tip');
				}
			});
			$('.map-info').tooltipster({
				trigger: 'hover',
				side: 'right',
				viewportAware: false,
				minWidth: 309,
				contentAsHTML: true,
				functionReady: function(instance, helper) {
					
					helper.tooltip.classList.add('info-tip');
				},
				functionPosition: function(instance, helper, position){
				 		
				 		var posYHelper = helper.origin.getBoundingClientRect().top;
				 		
			 			position.coord.top = posYHelper - headerHeight;

				 	return position;
				 }

			});

			var $locTip = $('.loc-tooltip').tooltipster({
				// plugins: ['sideTip', 'scrollableTip'],
				interactive: true,
				 trigger: 'click',
				 // content: $('.tooltip_sizes'),
				 // arrow: false,
				 side: 'bottom',
				 arrow: false,
				 repositionOnScroll: true,
				 // viewportAware: false,
				 contentCloning: true,
				 debug: true,
				 functionPosition: function(instance, helper, position){
			 		
			 		if($(helper.origin).closest('.header').hasClass('header--fixed') && screen.width < 480){
			 			helper.tooltip.classList.add('info-tip--mobile');
			 			var posYHelper = helper.origin.getBoundingClientRect().top;
			 			position.coord.top -= posYHelper + 25;
			 		}

				 	if(screen.width > 480){

				        position.side = 'bottom';
				        
				        var container = helper.origin,
				        	containerRight = container.getBoundingClientRect().right;
				        var summ = position.coord.left + position.size.width,
				        	difference = summ - containerRight;
				      
				        position.coord.top -= 5,
				        position.coord.left -= difference - 5;

				        
				     
				 	}
				        return position;
			    },

			    functionReady: function() {
			    	$('.close-icon').bind('click', locTooltipClose);
			    	$('.loc-list').find('span').addClass('opened');
			    },
			    functionAfter: function() {
			    	$('.close-icon').unbind('click', locTooltipClose);
			    	$('.loc-list').find('span').removeClass('opened');
			    }
			});

			function locTooltipClose() {
				$locTip.tooltipster('close');
				$('.loc-list').find('span').removeClass('opened');

			}

			// $('.loc-list').click(function(	) {
			// 	$(this).find('span').toggleClass('opened');
			// });

			// $('.close-icon').click(function() {
			// 	console.log('close click');
			// });
		// end Tooltipster
	});

	// language toggle
		$('.header-lang a').click(function(e) {
			e.preventDefault();
			$(this).addClass('header-lang__active')
						.siblings()
						.removeClass('header-lang__active');
		});
	// end language toggle
	
	$(".toggle-mnu, .body-cover").on('click', function() {
		$('.header-yellow .toggle-mnu').toggleClass("on");
		$('html').toggleClass('open');

		return false;
	});

	$('.sidebar-green .toggle-mnu').click(function() {
		$('.green-menu').slideToggle();
		$(this).toggleClass("on");
		return false;
	});

	$('.button--animated').each(function () {
        var $this = $(this);

        var ink, d, x, y;

        setInterval(function () {
            if ($this.find(".ink").length === 0) {
                $this.prepend("<span class='ink'></span>");
             }

            ink = $this.find(".ink");
            ink.removeClass("animate");

            if (!ink.height() && !ink.width()) {
                d = Math.max($this.outerWidth(), $this.outerHeight());
                ink.css({
                    height: d,
                    width: d
                });
            }

            x = Math.round(Math.random() * ink.width() - ink.width());
            y = Math.round(Math.random() * ink.height() - ink.height());
            // y = 0;
            // x = e.pageX - $this.offset().left - ink.width()/2;
            // y = e.pageY - $this.offset().top - ink.height()/2;

            ink.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("animate");
        }, 3000);
    });


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
