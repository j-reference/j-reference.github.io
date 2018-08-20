var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  $('.jumbotron') .css ({
  	"background": "url('Pic5.jpg') repeat-x",
	'-webkit-transform' : 'rotate(-90deg)',
     '-moz-transform' : 'rotate(-90deg)',
                     '-ms-transform' : 'rotate(-90deg)',
                     'transform' : 'rotate(-90deg)'
    });
  });

 }; 
$(document).ready(main);