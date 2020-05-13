$(document).ready(function() {
	$('a#page-top').click(function() {
		$('body,html').animate({scrollTop: 0}, 500);
  			 return false;
		});
	 var topBtn = $('a#page-top');
	 topBtn.hide();
	 $(window).scroll(function () {
	  if ($(this).scrollTop() > 150) {
	   topBtn.fadeIn();
	  } else {
	   topBtn.fadeOut();
	  }
	 });
	 
	 $('.owl-carousel').owlCarousel({
		loop:true, // loop all item
		center : true, // Center item. Works well with even an odd number of items.
		autoplay : true,
		slideSpeed : 100,
		autoplaySpeed : 500, //
		navSpeed : 500, // Navigation speed when click button.
		autoplayHoverPause : true, //Pause on mouse hover.
		nav:false, // Show next/prev buttons.
		dots : true, // Show dots navigation.
		pagination : false,
		paginationNumbers : true,
		items : 3, // single item
		margin : 28,
	})

	$('.icon-menu').click(function()
	{
		$('.wrap-nav').stop().slideToggle();
	});
		

	
});

