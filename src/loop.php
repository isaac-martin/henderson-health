<?php if (have_posts()): while (have_posts()) : the_post(); ?>

	<!-- article -->
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


		<!-- post title -->
		<h2 class="post-title">
			<a  href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
		</h2>
		<!-- /post title -->

		<p class="post-excerpt">
			<?php the_excerpt(); ?>
		</p>
		<a class="btn news-btn" href="<?php the_permalink(); ?>">Continue Reading</a>


		<!-- <?php edit_post_link(); ?> -->

	</article>
	<!-- /article -->

<?php endwhile; ?>

<?php else : ?>

	<!-- article -->
	<article>
		<h2><?php esc_html_e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
	</article>
	<!-- /article -->

<?php endif; ?>
