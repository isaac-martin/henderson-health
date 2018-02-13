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

  $( ".menu-item-has-children" ).append( $( '<i class="fa fa-plus"></i>' ) );


  $('.menu-item-has-children .fa-plus').click(function() {
    $('i').removeClass('fa-minus');
    $(this).addClass('fa-minus');
    $(".menu-item-has-children").removeClass('sub-menu-active');
    $(this).closest(".menu-item-has-children").addClass('sub-menu-active');
  });

  $('.sub-menu-active .fa-minus').click(function() {
    $(this).removeClass('fa-minus');
    $('.menu-item-has-children').removeClass('sub-menu-active');
  });


  $('.menu-item-has-children').hover(function() {
    $('.wrap-header').toggleClass('sub-active');
    console.log('test');
  });



  $('.testSlider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: true,
autoplaySpeed: 10000,
  });
  })(jQuery, this);
