$(function () {
    'use strict';
	
	//Trigger Nice Scroll
	 $("html").niceScroll({
		 cursorcolor:'#ff8b38',
		 cursorborder:'1px solid #f7600e',
		 cursorwidth:'10px'
		 
	 });
	
	// Transparent navbar while scrolling
   $(window).scroll(function() {
	   
        var navbar = $('.navbar');
        if( navbar.height() <= $(window).scrollTop()) {
		   
            if (!navbar.hasClass('scrolled')) {
				navbar.addClass('scrolled');
			}

	   }//End If
	   else {
		    navbar.removeClass('scrolled');
	   } //End Else
	   
   }); //End Scroll	
    
    //Deal with tabs section 
    $('.tab-switch li').click(function () {
        // Add active class to active link
        $(this).addClass('active').siblings().removeClass('active');
		
		// hide all div
		$('.tabs .tabs-content > div').hide();
		
		// show only the active one
		$('.'+$(this).data('class')).show();
		
    }); // End Click
	
	//smooth scroll to Div
	$('.links li a').click(function(){
		$('html,body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top
		},1000);
	});
	
	//chnage contact from border
	$('.header .myform input,.contact form input,.contact form textarea').focus(function(){
		$(this).css('border-bottom','1px solid #ff8b38');
		$(this).css('box-shadow', 'none');
	}); //End Foucs
	
	$('.header .myform input,.contact form input,.contact form textarea').blur(function(){
		$(this).css('border','none');
		$(this).css('border-bottom','1px solid #DDD');
		$(this).css('box-shadow', 'none');
	}); //End Foucs
	
});