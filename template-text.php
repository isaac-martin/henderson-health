<?php /* Template Name: Text Page */ get_header(); ?>
<main class="site-main">
  <?php include 'inc/imgheader.php'; ?>
  <div class="container">
    <div class="grid-middle">
      <div class="col-8" data-push-left="off-2_sm-0">
        <?php the_field('page_intro'); ?>
      </div>
    </div>
</div>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<section>
  <div class="container">
    <div class="grid-middle">
      <div class="col-8" data-push-left="off-2_sm-0">
        <?php the_content(); ?>
      </div>
    </div>
  </div>
</section>
<?php endwhile; endif; ?>

</main>
<?php get_footer(); ?>
