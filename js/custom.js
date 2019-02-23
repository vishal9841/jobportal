$(function(){
	$mobileNav = jQuery('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content ');
	$mobileNav.append(jQuery('.header  .mynav ul').clone());
	jQuery('.toggle a').click(function(e) {
		jQuery('.offcanvas').addClass('show-offcanvas');
		jQuery('body').addClass('pushed');
		jQuery('.body-inactive').fadeIn(350);
		e.preventDefault();
	});
	jQuery('.body-inactive, .coff a').click(function(e) {
		jQuery('.offcanvas').removeClass('show-offcanvas');
		jQuery('.body-inactive').fadeOut(350);
		e.preventDefault();
	});
	$('.offcanvas ul li.menu-item-has-children > a').click(function(e){
		e.preventDefault();
		findIfAlreadyOpen = $(this).parent().children('ul').css('display');
		if(findIfAlreadyOpen == "block"){
			window.location = $(this).attr('href');

		}
		else{
			$('.mynav ul li ul').slideDown(300);
			$(this).parent().children('ul').slideDown(300);
		}
	})



	// scrollbar js initialization
	$(".nano").nanoScroller();


$('.owl-contains').owlCarousel({
		loop:false,
		margin:50,
		nav:false,
		autoWidth:true,
		dots: false,
		responsive:{
			0:{
				items:2,
				margin:20,
				autoplay:1,
                navSpeed:3000
							},
			600:{
				items:4,
				margin:50,
				autoplay:1,
                navSpeed:3000
			},
			1000:{
				items:6,
				margin:100,
				autoplay:1,
                navSpeed:3000
			},
			1200:{
				items:7,
				margin:80,
				autoplay:0
			}
		}
	})

$('.owl-testimonial').owlCarousel({
		loop:false,
		margin:30,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

});







