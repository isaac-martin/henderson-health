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
      <div class="col-12">
        <div class="inner-container">
          <h2>Sorry Page Not Found</h2>
        </div>

      </div>
    </div>
</div>
<?php get_footer(); ?>
