<?php get_header(); ?>
<main class="site-main">
    <?php include 'inc/imgheader.php'; ?>
    <div class="container">
      <div class="grid-middle">
        <div class="col-8" data-push-left="off-2_sm-0">
          <?php the_field('page_intro'); ?>
        </div>
      </div>
  </div>

  <section class="grey-bg fullW">
    <div class="container">
      <div class="grid-middle">
        <div class="col-12">
          <h2 class="center">Why Work With Us?</h2>
        </div>
          <?php if( have_rows('why_work_with_us') ):
          while( have_rows('why_work_with_us') ): the_row();
          $icon = get_sub_field('icon');
          $title = get_sub_field('title');
          $desc = get_sub_field('description');
          ?>
          <div class="col-4_sm-12">
              <img class="icon" src="<?php echo $icon ?>">
              <h4 class="center icon-intro"><?php echo $title ?></h4>
              <p class="icon-text center">
                <?php echo $desc ?>
              </p>
            </a>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
        </div>
      </div>
    </div>
  </section>
  
  <?php if( have_rows('team') ):?>
  <section class="melInfo">
    <div class="container">
          <?php while ( have_rows('team') ) : the_row();?>
      <div class="grid-middle">
        <div class="col-2" data-push-left="off-2_sm-0">
          <img class="headshot" src="<?php the_field('headhshot'); ?>">
        </div>
        <div class="col-7" data-push-left="off-1_sm-0">
          <h3 class="name"><?php the_sub_field('name'); ?></h3>
          <h5><?php the_sub_field('title'); ?></h5>
          <p>
            <?php the_sub_field('description'); ?>
          </p>
        </div>
      </div>
      <?php endwhile; ?>
    </div>
  </section>

<?php endif; ?>
</main>
<?php get_footer(); ?>
