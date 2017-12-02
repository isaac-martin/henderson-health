<?php get_header(); ?>
<main class="site-main">
  <?php include 'inc/imgheader.php'; ?>
  <div class="container">
    <div class="grid-middle">
      <div class="col-6" data-push-left="off-1_sm-0">
        <?php get_template_part( 'loop' ); ?>
        <?php get_template_part( 'pagination' ); ?>
      </div>
      <div class="col-3">
        <?php get_sidebar(); ?>
      </div>
    </div>
</div>
<?php get_footer(); ?>
