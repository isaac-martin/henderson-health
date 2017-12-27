  </div><!-- End Container -->
      <div id="wrap-footer" class="wrap-footer">
        <footer id="colophon" class="site-footer">
          <div class="grid">
            <div class="col-4_sm-12" data-push-left="off-1_sm-0">
              <h2>Get In Touch</h2>
              <h3 class="footer-phone"><?php the_field('phone','15'); ?></h3>
              <a class="footer-email" href="mailto:<?php the_field('email','15'); ?>"><?php the_field('email','15'); ?></a>
              <p class="footer-linkedin">Connect With Us <a href="<?php the_field('linkedin','15'); ?>"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a><a href="<?php the_field('facebook','15'); ?>"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></p>
              <p class="copyright">
                <a href="/privacy">Privacy Policy</a> &copy; Henderson Healthcare Pty Ltd <?php echo date('Y'); ?>
              </p>
            </div>
            <div class="col-4_sm-12" data-push-left="off-1_sm-0">
              
              <h3 class="footer-news">News</h3>
              <?php // WP_Query arguments
$args = array(
	'nopaging'               => false,
	'posts_per_page'         => '2',
);

// The Query
$query = new WP_Query( $args );

// The Loop
if ( $query->have_posts() ) {
	while ( $query->have_posts() ) {
		$query->the_post();
    ?>
    <div class="footer-post-wrap">
  		<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
      <span class="date"><?php the_date('F d');?></span>
    </div>
<?php     
	}
} else {
	// no posts found
}

// Restore original Post Data
wp_reset_postdata(); ?>
            </div>
            <div class="col-1_sm-12 footer-logo-wrap" data-push-left="off-1_sm-0">
              <img src="<?php bloginfo('template_directory'); ?>/imgs/icon.png" class="logo-icon">
            </div>
          </div>
        </footer>
      </div>
  <?php wp_footer(); ?>
  </body>
</html>
