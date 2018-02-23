<?php /* Template Name: Speciality Page */ get_header(); ?>
<main class="site-main">
  <?php include 'inc/imgheader.php'; ?>
  <div class="container">
    <div class="grid">
      <div class="col-8_sm-12" data-push-left="off-2_sm-0">
        <div class="inner-container">
            <?php the_field('page_intro'); ?>
        </div>
      </div>
    </div>
</div>

<section class="grey-bg fullW">
  <div class="container">
    <div class="grid">
      <div class="col-12">

        <h2 class="center">We Focus On</h2>
      </div>
      <div class="col-8_sm-12" data-push-left="off-2_sm-0">
      <div class="inner-container">
        <ul class="content-list halfs">
        <?php if( have_rows('focus_points') ):
        while( have_rows('focus_points') ): the_row();
        $point = get_sub_field('point');
        ?>
        <li>
              <?php echo $point ?>
        </li>
      <?php endwhile; ?>
    <?php endif; ?>
  </ul>
      </div>
    </div>
    </div>
  </div>
</section>

</main>
<?php get_footer(); ?>
