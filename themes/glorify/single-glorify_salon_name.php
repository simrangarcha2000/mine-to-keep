<?php
/** 
*Page Template for Custom Post - Salon
*
 */


get_header();
?>

	<!--Setting a different main id and targets for a custom post  -->
	<main id="salon_page" class="site-custom-post">
		<div class = "container">

		
		<!------------------------MAIN HEADING AND FEATURED IMAGE --------------------------->


			<?php
			#Placing the title on top of the featured image and creating an if else statement n case the title does not exist
				if ( is_singular() ) :
					the_title( '<h1 class="custom-entry-salon-title">', '</h1>' );
				else :
					the_title( '<h2 class="custom-entry-salon-title><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
				endif;
			?>

			<?php if(has_post_thumbnail()): #This is how to refer a featured image ->> post_thumbnail ?>
				<!--Setting a featured Image for a Custom Post-->
				<img src ="<?php the_post_thumbnail_url('blog-large');?>" alt="<?php the_title();?>" class="img-fluid img-thumbnail">
			<?php endif;?>
			<?php wp_link_pages();?>

		

		<!------------------------CUSTOM PAGE CONTENT  --------------------------->
			<section class="row">
				<div class="large-4 offset-1">
					<?php
						while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content-glorify_salon_name', get_post_type() );
						the_post_navigation(
						array(
							'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'glorify' ) . '</span> <span class="nav-title">%title</span>',
							'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'glorify' ) . '</span> <span class="nav-title">%title</span>',
							)
						);
						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) :
						comments_template();
						endif;
						endwhile; // End of the loop.
					?>
				</div>
			</section>
		</div>
	</main><!-- #main -->

<?php
get_sidebar();
get_footer();