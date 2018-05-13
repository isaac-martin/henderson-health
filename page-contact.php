<?php get_header(); ?>
<main class="site-main">
    <?php include 'inc/imgheader.php'; ?>
    <div class="container">
      <div class="grid">
        <div class="col-3_sm-12" data-push-left="off-1_sm-0">
          <div class="inner-container">
            <h2 class="contact-title"><?php the_field('contact_title'); ?></h2>
            <h3 class="contact-phone"><?php the_field('phone'); ?></h3>
            <a class="email" href="mailto:<?php the_field('email','15'); ?>"><?php the_field('email','15'); ?></a>
            <p class="address"><?php the_field('address'); ?></p>
            <p class="google-maps"><a href="<?php the_field('google_url'); ?>"><i class="fa fa-lg fa-map-marker text-icon" aria-hidden="true"></i>View In Google Maps</a></p>
            <p class="contact-social">
              Connect With Us <a href="<?php the_field('linkedin','15'); ?>"><i class="fa fa-lg fa-linkedin-square text-icon" aria-hidden="true"></i></a>
              <a href="<?php the_field('facebook','15'); ?>"><i class="fa fa-lg fa-facebook-square text-icon" aria-hidden="true"></i></a>
            </p>
          </div>
        </div>
        <div class="col_4_sm-12" data-push-left="off-2_sm-0">
          <div class="inner-container">
            <?php echo do_shortcode( '[gravityform id="1" title=""]' ); ?>
          </div>
        </div>
      </div>
  </div>
</main>
<?php get_footer(); ?>
