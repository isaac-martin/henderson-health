<?php /* Template Name: Register Page */ get_header(); ?>
<main class="site-main">
    <?php include 'inc/imgheader.php'; ?>
    <div class="container">
      <div class="grid">
        <div class="col-8_sm-12" data-push-left="off-2_sm-0">
          <div class="inner-container">
              <?php echo do_shortcode( '[gravityform id="3" title=""]' ); ?>
          </div>
        </div>
      </div>
  </div>
</main>
<?php get_footer(); ?>
