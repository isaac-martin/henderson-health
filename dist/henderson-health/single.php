<?php get_header(); ?>
<main class="site-main">
  <div class="container">
    <div class="grid reverse">
      <div class="col-6_sm-12" data-push-left="off-1_sm-0">
				<div class="inner-container">
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
				
				<a class="btn news-btn" href="/news">Back To News</a>
				
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

