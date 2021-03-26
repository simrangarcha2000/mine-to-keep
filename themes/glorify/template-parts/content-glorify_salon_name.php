<?php
/**
 * Template part for displaying Custom Posts Types 
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Glorify
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php


		if ( 'post' === get_post_type() ) :
			?>

						<?php endif; ?>
	</header><!-- .entry-header -->

	
	<section class="grid-x grid-margin-x">
				<div class="large-6 ">
	<div class="entry-content">
		<?php
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'glorify' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'glorify' ),
				'after'  => '</div>',
			)
		);
		?>
		</div>
	</div><!-- .entry-content -->
	</section>

	<footer class="entry-footer">
		<?php glorify_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->