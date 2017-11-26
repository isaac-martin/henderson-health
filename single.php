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
						<h1>
							<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
						</h1>
						<!-- /post title -->



						<?php the_content(); // Dynamic Content. ?>

						<?php the_tags( __( 'Tags: ', 'html5blank' ), ', ', '<br>' ); // Separated by commas with a line break at the end. ?>

						<p><?php esc_html_e( 'Categorised in: ', 'html5blank' ); the_category( ', ' ); // Separated by commas. ?></p>


						<?php edit_post_link(); // Always handy to have Edit Post Links available. ?>

					</article>
					<!-- /article -->

				<?php endwhile; ?>

				<?php endif; ?>

      </div>
      <div class="col-3">
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

<?php get_sidebar(); ?>

<?php get_footer(); ?>
