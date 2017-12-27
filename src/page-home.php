<?php get_header(); ?>
<main class="site-main">
    <section class="slider-wrapper inner-container">
      <section class="slider">
        <?php if( have_rows('hero_slider') ):$i = 0;
        while( have_rows('hero_slider') ): the_row();
        $img = get_sub_field('bg_image');
        $img_mob = get_sub_field('bg_image_mob');
        $title = get_sub_field('text');
        $subtext = get_sub_field('subtext');
        $btnlink = get_sub_field('button_link');
        $btntext = get_sub_field('button_text');
        $i++;
        ?>
        <div class="slide" <?php if (!$i) { ?> id="logotype"<?php } ?>>
          <div class="hero-img img-<?php echo $i; ?>">
              <div class="grid-middle h100">
                <div class="col-6_sm-12 slide-wrap" data-push-left="off-3_sm-0">
                    <div class="slide-wrap">
                  <h2 class="slide-cta"><?php echo $title ?></h2>
                  <img src="<?php bloginfo('template_directory'); ?>/imgs/logotype.png" class="slider-logotype" />
                  <div class="slide-contet">
                      <p><?php echo $subtext ?></p>
                      <a class="btn" href="<?php echo $btnlink ?>"><?php echo $btntext ?></a>
                  </div>
              </div>  
          </div>
              </div>
              <style>
              .img-<?php echo $i; ?> {
                  background-image: url('<?php echo $img; ?>');
              }
              
              @media screen and (max-width: 48em) {
            .img-<?php echo $i; ?> {
                  background-image: url('<?php echo $img_mob; ?>');
              }
          }
              
              </style>
          </div>
        </div>
      <?php endwhile;
        
        endif; ?>
      </section>
    </section>
    <section class="icons-wrapper">
      <section class="icons">
        <div class="inner-container">
          <div class="grid-middle">
            <?php if( have_rows('icon_group') ):
            while( have_rows('icon_group') ): the_row();
            $icon = get_sub_field('icon');
            $text = get_sub_field('text');
            $link = get_sub_field('link');
            ?>
            <div class="col-3_sm-6">
              <a class="center" href="<?php echo $link ?>">
                <img class="icon" src="<?php echo $icon ?>">
                <p class="icon-text center">
                  <?php echo $text ?>
                </p>
              </a>
            </div>
          <?php endwhile; ?>
        <?php endif; ?>
          </div>
        </div>
      </section>
    </section>
    <section class="professions-wrapper">
      <section class="professions">
        <div class="inner-container">
          <div class="grid-middle">
            <?php if( have_rows('speciality_links') ):
            while( have_rows('speciality_links') ): the_row();
              $bgimg = get_sub_field('image');
              $text = get_sub_field('text');
              $link = get_sub_field('link');
            ?>
              <div class="col-4_sm-12">
                  <div class="specImg bgimg" style="background-image:url(<?php echo $bgimg ?>)">
                    <a class="specLink" href="<?php echo $link ?>">
                      <?php echo $text ?>
                    </a>
                  </div>
              </div>
          <?php endwhile; ?>
        <?php endif; ?>
          </div>
        </div>
      </section>
    </section>
    <section class="testWrapper">
      <section class="testimonials">
        <div class="inner-container">
          <div class="grid-middle">
            <div class="col-8_sm-12 testSlider" data-push-left="off-2_sm-0">
              <?php if( have_rows('testimonials') ):
              while( have_rows('testimonials') ): the_row();
                $test = get_sub_field('testimonial');
                $author = get_sub_field('author');?>
                <div class="testimonial">
                    <span class="test"><?php echo $test ?></span>
                    <span class="author"><?php echo $author ?></span>
                </div>
              <?php endwhile; ?>
            <?php endif; ?>
            </div>
          </div>
        </div>
      </section>
    </section>
</main>
<?php get_footer(); ?>
