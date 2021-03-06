<?php get_header(); ?>
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
  <div class="col-11_sm-12" data-push-left="off-1_sm-0">
    <h2 style="text-align:center;">We Work With</h2>
    <ul class="content-list thirds">
    <?php if( have_rows('we_work_with') ):
    while( have_rows('we_work_with') ): the_row();
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
</section>

<section class="icon-group">
  <div class="container">
    <div class="grid">
      <div class="col-12">
        <h3 class="center"><?php the_field('icon_title'); ?></h3>
      </div>
      <?php if( have_rows('icon_group') ):
      while( have_rows('icon_group') ): the_row();
      $icon = get_sub_field('icon');
      $title = get_sub_field('title');
      $desc = get_sub_field('description');
      ?>
      <div class="col-4_sm-12">
        <div class="inner-container">
        <div class="icon-wrap reveal">
            <img class="icon" src="<?php echo $icon ?>">
        </div>
          <h4 class="center icon-intro"><?php echo $title ?></h4>
          <p class="icon-text center">
            <?php echo $desc ?>
          </p>
        </a>
      </div>
    </div>
    <?php endwhile; ?>
  <?php endif; ?>

    </div>
  </div>
</section>


  <section>
    <div class="inner-container">
      <div class="grid background-grid" style="background-image:url(<?php the_field('hero_image_background');?>">
        <div class="col-4_sm-12 hero-text-wrap reveal">
          <h2><?php the_field('text_title');?></h2>
          <p><?php the_field('text_content');?></p>
        </div>
        </div>
        <div class="col-12 center btn-wrap">
          <a href="/submit-a-job" class="btn btn-secondary">Submit A Job</a>
        </div>
      </div>
  </section>




</main>
<?php get_footer(); ?>
