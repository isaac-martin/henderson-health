<?php get_header(); ?>
<main class="site-main">
  <div class="container">
    <div class="grid-middle">
      <div class="col-6" data-push-left="off-1_sm-0">
				<?php if ( have_posts() ) : while (have_posts() ) : the_post(); ?>

					<!-- article -->
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

						<!-- post thumbnail -->
						<?php if ( has_post_thumbnail() ) : // Check if Thumbnail exists. ?>
							<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
								<?php the_post_thumbnail(); // Fullsize image for the single post. ?>
							</a>
						<?php endif; ?>
						<!-- /post thumbnail -->

						<!-- post title -->
						<h2 class="post-title">
							<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
						</h2>
						<!-- /post title -->



						<?php the_content(); // Dynamic Content. ?>
					</article>
					<!-- /article -->

				<?php endwhile; ?>

				<?php endif; ?>

      </div>
      <div class="col-3" data-push-left="off-1_sm-0">
        <?php get_sidebar(); ?>
      </div>
    </div>
</div>
<?php get_footer(); ?>




<?php get_header(); ?>

	<main role="main" aria-label="Content">
	<!-- section -->
	<section>


	</section>
	<!-- /section -->
	</main>


<?php get_footer(); ?>
