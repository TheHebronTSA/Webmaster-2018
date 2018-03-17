( function( $ ) {
"use strict";
    $( function() {

		var $time_ul = $('.years-list');
		var $time_li = $time_ul.children('li');
		var _val     = ( $( window ).width() > 800 ) ? 200 : 100;
		var li_width = ( $( window ).width() > 800 ) ? 200 : 60;
		$time_ul.css( 'width', $time_li.length * li_width );

		var slide1 = $( '.text-slide' );
		
		slide1.flexslider({ animation: "slide", controlNav: false, directionNav: false  });

		
		
		var _index = 2;

		$time_ul.on('click', '.span',
		function() {
			_index = $(this).parent('li').index();
			move(_index);
			slide1.flexslider(_index);
		});

		$('.time-line').on('click',
		function(event) {
			var target = event.target;
			
			if ( $( target ).hasClass('arrow-left')) {
				if (_index - 1 < 0) {
					return false;
				} else {
					_index--;
					move(_index);
					slide1.flexslider(_index);
				}
			}

			if ($(target).hasClass('arrow-right')) {
				if (_index + 1 > $time_li.length - 1) {
					return false;
				} else {
					_index++;
					move(_index);
					slide1.flexslider(_index);
				}
			}

			//Prevents further propagation of the current event in the capturing and bubbling phases.
			event.stopPropagation();
		});

		function move(index) {
			console.log(index);
			$time_li.eq(_index).addClass('on').siblings().removeClass('on');
			var left1 = -((index - 2) * li_width) + 'px';

			$time_ul.css({
				'transform': 'translateX(' + left1 + ')',
				'-webkit-transform': 'translateX(' + left1 + ')'
			});

		}

		$('span.last').trigger("click");


	} );
    
} ) ( jQuery );