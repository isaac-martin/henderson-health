<?php get_header(); ?>
<main class="site-main">
  <?php if( get_field('header_image','36') ): ?>
  <style>
    .image-header {
      background-image: url('<?php the_field('header_image','36');?>');
    }

  @media screen and (max-width: 48em) {
    .image-header{
      background-image: url('<?php the_field('header_image_mobile','36');?>');
    }
  }
  </style>

  <?php endif; ?>
  
  <div class="inner-container img-wrap">
    <section class="image-header">
        <div class="grid-middle h100">
          <div class="col">
            <h1><?php single_post_title(); ?></h1>
          </div>
        </div>
    </section>
</div>


  <div class="container">
    <div class="grid">
      <div class="col-6_sm-12" data-push-left="off-1_sm-0">
        <div class="inner-container">
          <?php get_template_part( 'loop' ); ?>
          <?php get_template_part( 'pagination' ); ?>
        </div>

      </div>
        <div class="col-3_sm-12" data-push-left="off-1_sm-0">
                <div class="inner-container">
        <?php get_sidebar(); ?>
      </div>
      </div>
    </div>
</div>
<?php get_footer(); ?>
