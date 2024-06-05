(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		$(".menuIcon").click(function(){
			$(".clickMenu").toggleClass("showMenu")
		})


		$("#wrapper").click( function() {
			$(".icon").toggleClass("close");
		});

		

		$(".searchIcon").click(function(){
			$(".searchBar").addClass("showSearch")
		})

		$(".remove").click(function(){
			$(".searchBar").removeClass("showSearch")
		})



       
 /*---------- menu js start---------*/  
     $('.stellarnav').stellarNav({
				theme: 'dark',
				breakpoint: 660,
				position: 'left',
				phoneBtn: false,
				locationBtn: false,
				sticky:false,
				showArrows:true,
				openingSpeed: 500,
				closingDelay: 500,
               
         });
        
        window.onscroll = function() {myFunction()};

			var header = document.getElementById("myHeader");
			var sticky = header.offsetTop;

			function myFunction() {
			  if (window.pageYOffset > sticky) {
			    header.classList.add("sticky");
			  } else {
			    header.classList.remove("sticky");
			  }
			}
        
/*---------- menu js End---------*/  


	
      
$(".sectionNews-active").owlCarousel({
	loop:false,
	dots:true,
	nav:true,
	autoplay:true,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	navText:["<i Class='las la-angle-left'></i>", 
			  "<i Class='las la-angle-right'></i>"],
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1,
	  },
	  480: {
		items: 1,
	  },
	  768: {
		items: 1,
	  },
	  1000: {
		items:1,
	  }
	}

});	
      
      
$(".darkNews-active").owlCarousel({
	loop:false,
	dots:true,
	nav:true,
	margin:10,
	autoplay:true,
	autoHeight: true,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	navText:["<i Class='las la-angle-left'></i>", 
			  "<i Class='las la-angle-right'></i>"],
	responsiveClass: true,
	responsive: {
	  0: {
		items: 1,
	  },
	  480: {
		items: 2,
	  },
	  768: {
		items: 3,
	  },
	  1000: {
		items:3,
	  }
	}

});	
      

     
$('.homeGallery').owlCarousel({
	loop:false,
	margin:10,
	items:1,
	nav:true,
	dots:false,
	autoplay:false,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	navText:["<i Class='las la-angle-left'></i>", 
			"<i Class='las la-angle-right'></i>"],

  });


  $('.homeGallery1').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	items:6,
	dots:true,
	center: true,
	autoplay:true,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 3,
	  },
	  480: {
		items: 3,
	  },
	  768: {
		items: 4,
	  },
	  1000: {
		items:6,
	  }
	}
	
  });

		$('.popup').magnificPopup({
			type: 'iframe'
		});


		$('.themeGallery').magnificPopup({
			type: 'image',
		mainClass: 'mfp-with-zoom', 
		gallery:{
					enabled:true
				},

		zoom: {
			enabled: true, 

			duration: 500, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			opener: function(openerElement) {

			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
		}

		});






/*****==================================
 * PhotoGallery Active Start
=====================================*****/     
     		  
$('.themesBazar_gallery').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.themesBazar_gallery2'
  });
  
  $('.themesBazar_gallery2').slick({
	slidesToShow: 7,
	slidesToScroll: 1,
	asNavFor: '.themesBazar_gallery',
	dots: false,
	arrows: true,
	centerMode: true,
	focusOnSelect: true,
	autoplay: true,
	smartSpeed:1200,
	prevArrow: "<i Class='las la-angle-left'></i>",
    nextArrow: "<i class='las la-angle-right'></i>",
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
		
		  }
		},

		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},

		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		}
	]
  });


/*****==================================
 * PhotoGallery Active End
=====================================*****/  
      
       

       $("img.lazyload").lazyload();
        
       $( "#wordpress" ).datepicker();		
     
        
    
			  // Modal js start *******
			  $('.modal-live').magnificPopup({
				type:'inline',
				closeBtnInside:true,
				autoFocusLast: true,
				focus:".modal-titles",
			  });
					
		
        $(window).scroll(function(){
		        if ($(this).scrollTop() > 100) {
		            $('.scrollToTop').fadeIn();
		        } else {
		            $('.scrollToTop').fadeOut();
		        }
		    });

		    //Click event to scroll to top
		    $('.scrollToTop').on('click', function(){
		        $('html, body').animate({scrollTop : 0},800);
		        return false;
		    });
        
//        

    });



  




}(jQuery));	