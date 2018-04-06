</div><!-- End Container -->
    <div id="wrap-footer" class="wrap-footer">
      <footer id="colophon" class="site-footer">
        <div class="grid">
          <div class="col-4_sm-12" data-push-left="off-1_sm-0">
            <h2>Get In touch</h2>
            <h3 class="footer-phone"><?php the_field('phone','15'); ?></h3>
            <a class="footer-email" href="mailto:<?php the_field('email','15'); ?>"><?php the_field('email','15'); ?></a>
            <p class="footer-linkedin">Connect With Us <a href="<?php the_field('linkedin','15'); ?>"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a><a href="<?php the_field('facebook','15'); ?>"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></p>
            <p class="copyright">
              <a href="/privacy-policy">Privacy Policy</a> &copy; Henderson Recruitment Pty Ltd <?php echo date('Y'); ?>
            </p>
          </div>
          <div class="col-4_sm-12 hide-small" data-push-left="off-1_sm-0">

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
            <div class="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 191 35.89"><defs>
                <style>.cls-1{fill:#fff}</style>
                <linearGradient id="linear-gradient" x1="26.05" y1="19.62" x2="26.05" y2="30.99" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#00b6f0"/>
                  <stop offset=".38" stop-color="#2fd5f7"/>
                  <stop offset=".83" stop-color="#62f6ff"/>
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="26.05" y1="2.69" x2="26.05" y2="32.06" xlink:href="#linear-gradient"/></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path class="cls-1 words" d="M60.15 20.48v-9c0-2.06-1.07-2.7-2.73-2.7A4.29 4.29 0 0 0 54 10.47v10h-3.89V0H54v7.55a6.88 6.88 0 0 1 5.19-2.27c3.29 0 4.81 1.78 4.81 4.67v10.53zM66.35 13A7.57 7.57 0 0 1 74 5.28c4.45 0 7.43 3.32 7.43 8.14v.92h-11a4 4 0 0 0 4.27 3.32 6.2 6.2 0 0 0 3.93-1.44l1.75 2.58a9.24 9.24 0 0 1-6.11 2.06c-4.52-.01-7.92-3.05-7.92-7.86zM74 8.47a3.42 3.42 0 0 0-3.62 3.16h7.31A3.4 3.4 0 0 0 74 8.47zM93.7 20.48v-9c0-2.06-1.07-2.76-2.73-2.76a4.34 4.34 0 0 0-3.38 1.72v10h-3.9V5.65h3.9v1.9a6.93 6.93 0 0 1 5.19-2.27c3.29 0 4.85 1.84 4.85 4.73v10.47zM111.07 20.48v-1.9a5.71 5.71 0 0 1-4.57 2.27c-3.71 0-6.57-2.82-6.57-7.8 0-4.82 2.79-7.77 6.57-7.77a5.63 5.63 0 0 1 4.57 2.27V0H115v20.48zm0-4.79v-5.25a4.23 4.23 0 0 0-3.35-1.69c-2.24 0-3.78 1.75-3.78 4.3s1.53 4.33 3.78 4.33a4.23 4.23 0 0 0 3.35-1.69zM117.3 13a7.56 7.56 0 0 1 7.7-7.72c4.45 0 7.43 3.32 7.43 8.14v.92h-11a4 4 0 0 0 4.27 3.32 6.2 6.2 0 0 0 3.93-1.44l1.75 2.58a9.24 9.24 0 0 1-6.11 2.06c-4.57-.01-7.97-3.05-7.97-7.86zm7.7-4.53a3.42 3.42 0 0 0-3.62 3.16h7.31A3.4 3.4 0 0 0 125 8.47zM134.82 20.48V5.65h3.9v2a6.5 6.5 0 0 1 4.73-2.36v3.8a5 5 0 0 0-4.73 1.6v9.79zM144.77 18.54l1.69-2.82a8.41 8.41 0 0 0 5.13 2.06c1.69 0 2.49-.64 2.49-1.57 0-2.42-8.78-.43-8.78-6.26 0-2.49 2.15-4.67 6.08-4.67a9.45 9.45 0 0 1 6 2l-1.57 2.76a6.39 6.39 0 0 0-4.39-1.72C150 8.35 149 9 149 9.79c0 2.18 8.81.34 8.81 6.32 0 2.73-2.33 4.73-6.45 4.73a10 10 0 0 1-6.59-2.3zM159.31 13A7.84 7.84 0 0 1 175 13a7.84 7.84 0 0 1-15.69 0zM171 13c0-2.3-1.35-4.3-3.81-4.3s-3.78 2-3.78 4.3 1.35 4.33 3.78 4.33S171 15.38 171 13zM187.07 20.48v-9c0-2.06-1.07-2.76-2.73-2.76a4.34 4.34 0 0 0-3.34 1.75v10h-3.9V5.65h3.9v1.9a6.93 6.93 0 0 1 5.19-2.27c3.29 0 4.85 1.84 4.85 4.73v10.47zM55.5 35.76v-3.47h-4.36v3.46h-.93V28.2h.93v3.25h4.36V28.2h.93v7.55zM66.38 35.76V28.2h4.88v.8h-4v2.43h3.88v.84H67.3v2.6h4v.84zM86.36 35.76l-.66-1.69H82l-.66 1.69h-1.07l3-7.55h1.15l3 7.55zm-2.51-6.59l-1.58 4.08h3.16zM96.52 35.76V28.2h.93v6.71h3.46v.84zM111.14 35.76V29h-2.36v-.8h5.65v.8h-2.37v6.71zM129 35.76v-3.47h-4.36v3.46h-.93V28.2h.93v3.25H129V28.2h.93v7.55zM139.53 32a3.75 3.75 0 0 1 3.83-3.91 3.3 3.3 0 0 1 2.83 1.49l-.77.44a2.5 2.5 0 0 0-2.06-1.1 2.88 2.88 0 0 0-2.87 3.08 2.89 2.89 0 0 0 2.87 3.07 2.53 2.53 0 0 0 2.06-1.1l.78.43a3.34 3.34 0 0 1-2.84 1.5 3.75 3.75 0 0 1-3.83-3.9zM160.94 35.76l-.66-1.69h-3.71l-.66 1.69h-1.06l3-7.55H159l3 7.55zm-2.51-6.59l-1.58 4.08H160zM175.47 35.76l-1.89-3h-1.5v3h-.93V28.2h3a2.19 2.19 0 0 1 2.35 2.28 2.09 2.09 0 0 1-1.95 2.2l2 3.08zm.07-5.28A1.4 1.4 0 0 0 174 29h-2v2.89h2a1.41 1.41 0 0 0 1.54-1.41zM186.12 35.76V28.2H191v.8h-4v2.43h3.88v.84H187v2.6h4v.84z"/>
                    <path d="M27.76 17v3.55h-3.58V17h-3.29c0 9.1 0 18.5-.08 18.61h10.47V17z" fill="url(#linear-gradient)"/>
                    <path d="M24.18 13.44V9.89h3.59v3.55h3.52V.12H20.81s0 6.15.06 13.32z" fill="url(#linear-gradient-2)"/>
                    <path d="M27.76 17v3.55h-3.58V17h-3.55v-3.56h3.55v-1a15 15 0 0 0-3.76-.44 12.5 12.5 0 0 0-9.93 4.42V.12H0v35.51h10.49V23.34c1.12-1.34 2.51-2.92 5.33-2.92 3 0 5 1.18 5 4.85v10.36h10.47V21.35a9.45 9.45 0 0 0-1-4.32z" fill="#006bff"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
<?php wp_footer(); ?>
<script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
<script>
window.sr = ScrollReveal();
sr.reveal('.reveal', { duration: 1000 });

</script>
</body>
</html>
