  </div><!-- End Container -->
      <div id="wrap-footer" class="wrap-footer">
        <footer id="colophon" class="site-footer">
          <div class="grid-middle">
            <div class="col-3">
              <h2>Get In Touch</h2>
              <h3 class="footer-phone"><? php the_field('phone','15'); ?></h3>
              <a class="footer-email" href="mailto:<? php the_field('email','15'); ?>"><? php the_field('email','15'); ?></a>
              <p class="footer-linkedin"><a href="<? php the_field('linkedin','15'); ?>">Connect With Us <i class="fa fa-linkedin" aria-hidden="true"></i></a></p>
            </div>
          </div>
        </footer>
      </div>
  <?php wp_footer(); ?>
  </body>
</html>
