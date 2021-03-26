<?php
/**
 * The template for displaying archive pages for Custom Post - Salon 
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Glorify
 */

get_header();
?>

	<main id="primary" class="site-main">
		<div class="grid-container grid-x grid-margin-x">
			
			<!-- Creating a Loop for Archieve page to print the content-->
			<?php get_template_part('template-parts/archive-content', 'archive-content');?>

            <!--Creating Next and Previous button-->
            <?php previous_posts_link();?>
            <php next_posts_link();?>
		</div>

		

	</main><!-- #main -->

<?php
get_footer();