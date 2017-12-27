<?php if( get_field('header_image') ): ?>
<style>
  .image-header {
    background-image: url('<?php the_field('header_image');?>');
  }

@media screen and (max-width: 48em) {
  .image-header{
    background-image: url('<?php the_field('header_image_mobile');?>');
  }
}
</style>

<?php endif; ?>
<div class="inner-container">
    <section class="image-header">
        <div class="grid-middle h100">
          <div class="col">
            <h1><?php single_post_title(); ?></h1>
          </div>
        </div>
    </section>
</div>
