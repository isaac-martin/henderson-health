<?php /* Template Name: Register Page */ get_header(); ?>
<main class="site-main">
    <?php include 'inc/imgheader.php'; ?>
    <div class="container">
      <div class="grid">
        <div class="col-8" data-push-left="off-2_sm-0">
          <?php echo do_shortcode( '[gravityform id="2" title=""]' ); ?>
        </div>
      </div>
  </div>
</main>
<?php get_footer(); ?>
