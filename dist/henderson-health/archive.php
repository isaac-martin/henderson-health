<?php get_header(); ?>
<main class="site-main">
  <?php include 'inc/imgheader.php'; ?>
  <div class="container">
          <div class="inner-container">
    <div class="grid">
      
      <div class="col-6_sm-12" data-push-left="off-1_sm-0">
        <?php get_template_part( 'loop' ); ?>

        <?php get_template_part( 'pagination' ); ?>
      </div>
      <div class="col-3_sm-12" data-push-left="off-1">
          <?php get_sidebar(); ?>
      </div>
    </div>
</div>
      </div>



<?php  get_footer(); ?>
