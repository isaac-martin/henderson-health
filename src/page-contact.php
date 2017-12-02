<?php get_header(); ?>
<main class="site-main">
    <?php include 'inc/imgheader.php'; ?>
    <div class="container">
      <div class="grid">
        <div class="col-3" data-push-left="off-1_sm-0">
          <h2><?php the_field('contact_title'); ?></h2>
          <h3 class="contact-phone"><?php the_field('phone'); ?></h3>
          <a class="email" href="mailto:<?php the_field('email','15'); ?>"><?php the_field('email','15'); ?></a>
          <?php the_field('address'); ?>
          <p class="google-maps"><a href="<?php the_field('google_url'); ?>"><i class="fa fa-lg fa-map-marker text-icon" aria-hidden="true"></i>View In Google Maps</a></p>
          <p class="footer-linkedin"><a href="<?php the_field('linkedin','15'); ?>">Connect With Us <i class="fa fa-lg fa-linkedin-square text-icon" aria-hidden="true"></i></a></p>
        </div>
        <div class="col_4" data-push-left="off-2">
          <?php echo do_shortcode( '[gravityform id="1" title=""]' ); ?>
        </div>
      </div>
  </div>
</main>
<?php get_footer(); ?>
