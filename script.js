(function ($) {
  $(document).ready(function(){
    
	// hide .navbarHidden first
	$(".navbarHidden").hide();
	
	// fade in .navbarHidden
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbarHidden').fadeIn();
			} else {
				$('.navbarHidden').fadeOut();
			}
		});

	
	});

});
  }(jQuery));