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
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    // autoplaySpeed: 100,

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
  
  $(window).scroll(function(){
    $(".slide-wrap").css("opacity", 1 - $(window).scrollTop() / 100);
      // $(".hero-img").css("transform","translate3d(0px, " +  + "px, 0px);
    $(".hero-img").css({"transform": "translate3d(0px, " + $(this).scrollTop() / 1.7 + "px, 0px)"});
  });
  })(jQuery, this);
