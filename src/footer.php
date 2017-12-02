  </div><!-- End Container -->
      <div id="wrap-footer" class="wrap-footer">
        <footer id="colophon" class="site-footer">
          <div class="grid-middle">
            <div class="col-3" data-push-left="off-1_sm-0">
              <h2>Get In Touch</h2>
              <h3 class="footer-phone"><?php the_field('phone','15'); ?></h3>
              <a class="footer-email" href="mailto:<?php the_field('email','15'); ?>"><?php the_field('email','15'); ?></a>
              <p class="footer-linkedin"><a href="<?php the_field('linkedin','15'); ?>">Connect With Us <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></p>
              <p class="copyright">
                <a href="/privacy">Privacy Policy</a> &copy; Henderson Healthcare Pty Ltd <?php echo date('Y'); ?>
              </p>
            </div>
            <div class="col-4" data-push-left="off-2_sm-0">
              Blog Posts Here
            </div>
            <div class="col-1" data-push-left="off-1_sm-0">
              <img src="<?php bloginfo('url'); ?>/wp-content/themes/henderson/build/imgs/icon.png" class="logo-icon">
            </div>
          </div>
        </footer>
      </div>
  <?php wp_footer(); ?>
  </body>
</html>
