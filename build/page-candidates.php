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

  <section>
    <div class="inner-container">
      <div class="grid background-grid" style="background-image:url(<?php the_field('hero_image_background');?>">
        <div class="col-4_sm-12 hero-text-wrap reveal">
          <h2><?php the_field('text_title_copy');?></h2>
          <p><?php the_field('text_content');?></p>
        </div>
        </div>
      </div>
  </section>

  <section class="icon-group">
    <div class="container">
      <div class="inner-container">

      <div class="grid">
        <div class="col-12">
            <h3 class="center"><?php the_field('icon_title');?></h3>
        </div>
        <?php if( have_rows('our_approach') ):
        while( have_rows('our_approach') ): the_row();
        $icon = get_sub_field('icon');
        $title = get_sub_field('title');
        $desc = get_sub_field('description');
        ?>
        <div class="col-3_sm-12">
          <div class="circle-icon">
              <img class="icon" src="<?php echo $icon ?>">
          </div>
            <h4 class="center icon-intro-blue"><?php echo $title ?></h4>
            <p class="icon-text center">
              <?php echo $desc ?>
            </p>
          </a>
        </div>
      <?php endwhile; ?>
    <?php endif; ?>
    <div class="col-12 center" style="margin-top:30px;">
      <a href="/register" class="btn btn-secondary">Register</a>
    </div>
      </div>
    </div>        
          </div>

        </div>
  </section>


</main>
<?php get_footer(); ?>
