<div class="inner-container">
    <section class="image-header" <?php if( get_field('header_image') ): ?>style="background-image:url(<?php the_field('header_image');?>)" <?php endif; ?>>
        <div class="grid-middle h100">
          <div class="col">
            <h1><?php wp_title(''); ?></h1>
          </div>
        </div>
    </section>
</div>
