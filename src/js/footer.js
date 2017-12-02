// ==== FOOTER ==== //

// A simple wrapper for all your custom jQuery that belongs in the footer
(function($){
  $(function(){
    // Example integration: JavaScript-based human-readable timestamps
    if ($.timeago) {
      $('time').timeago();
    }
  })

  $('.slider').slick({
    arrows: false,
    dots: true,
    infinite: false
  });

  $( "strong a" ).addClass( "btn btn-primary" );


  $('.testSlider').slick({
    arrows: false,
    dots: true,
    infinite: false
  });
  })(jQuery, this);
