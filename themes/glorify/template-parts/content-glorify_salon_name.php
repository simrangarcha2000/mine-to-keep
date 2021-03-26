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
				
	<div class="entry-content grid-x">

	<!--Content Left of Custom Post-->
	<div class="large-6 contentLeft">

	<!-- The Content will be posted here -->
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
		?>

		<!-- Registering a author -->
        <?php if ( is_author() ) { ?>
            <li class="glorify-item active" aria-current="page"> here <?php echo get_the_author(); ?></li>
        <?php } ?>
		
		
		<?php
		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'glorify' ),
				'after'  => '</div>',
			)
		);
		?>
		</div> <!--End of large 6 -->

		<!--Content Right  of Custom Post  which includes a widget-->
		<div class="large-5 contentRight">
			<?php get_sidebar(); ?>
		
		</div> <!--End of large 5 -->
		
	</div><!-- .entry-content -->

	</section>

	<footer class="entry-footer">
		<?php glorify_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->