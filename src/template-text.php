<?php /* Template Name: Text Page */ get_header(); ?>
<main class="site-main">
  <?php include 'inc/imgheader.php'; ?>
  <!-- <div class="container">
    <div class="grid">
      <div class="col-8_sm-12" data-push-left="off-2_sm-0">
                <div class="inner-container">
        <?php the_field('page_intro'); ?>
      </div>
      </div>
    </div>
</div> -->

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<section>
  <div class="container">
    <div class="grid">
      <div class="col-8_sm-12" data-push-left="off-2_sm-0">
                <div class="inner-container">
        <?php the_content(); ?>
      </div>
      </div>
    </div>
  </div>
</section>
<?php endwhile; endif; ?>

</main>
<?php get_footer(); ?>
