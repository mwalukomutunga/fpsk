	
 $(document).ready(function(){
		$('.caler-slider').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			items:2
			},
			1000: {
				items:5
			}
		}
	})
  
});


$(document).ready(function(){
	$('.slider-testi').owlCarousel({
	loop: true,
	margin:30,
	autoplay:true,
	nav:false,
	dots:true,
	responsive: {
		0: {
			items:1
		},
		600: {
			items:1
		},
		667: {
		items:1
		},
		1000: {
			items:1
		}
	}
})

});



$(document).ready(function(){
	$('.team-home-01').owlCarousel({
	loop: true,
	margin:30,
	autoplay:true,
	nav:false,
	dots:true,
	responsive: {
		0: {
			items:1
		},
		600: {
			items:1
		},
		667: {
		items:1
		},
		1000: {
			items:4
		}
	}
})

});



// counting js

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

$(document).ready(function() {
    $( window ).scroll(function() {
          var height = $(window).scrollTop();
          if(height >= 100) {
              $('header').addClass('fixed-menu');
          } else {
              $('header').removeClass('fixed-menu');
          }
      });
  });