<?php get_header(); ?>
<main class="site-main">
  <section class="slider-wrapper">
    <section class="slider">
      <?php if( have_rows('hero_slider') ):
      while( have_rows('hero_slider') ): the_row();
      $img = get_sub_field('bg_image');
      $title = get_sub_field('title');
      $subtext = get_sub_field('subtext');
      $btnlink = get_sub_field('button_link');
      $btntext = get_sub_field('button_text');
      ?>
      <div class="slide">
        <div class="hero-img" style="background-image:url(<?php echo $img ?>)">
          <div class="inner-container">
            <div class="grid-middle">
              <div class="col">
                <h2 class="slide-cta"><?php echo $title ?></h2>
                <p class="slide-contet"><?php echo $subtext ?></p>
                <a class="slide-btn" href="<?php echo $btnlink ?>"><?php echo $btntext ?></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    <?php endwhile; ?>
  <?php endif; ?>
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
            <div class="col-8_sm-12" data-push-left="off-2_sm-0">
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
  </section>
</main>
<?php get_footer(); ?>
