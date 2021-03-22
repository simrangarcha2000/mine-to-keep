<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Glorify
 */

?>

	<footer id="colophon" class="site-footer">


		<div class="grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell small-12 large-4 large-offset-2">
					<h1>Recent Posts :</h1>

					<!--Creating a WP_Query to get the posts of the custom post type and print its information in the footer-->
					<ul>
						<?php
						//Creating the argument
						$salon_args = array(
							'post_type' => 'glorify_salon_name', //Refering to the Custom post type name
							'posts_per_page' => 4, //The info of 4 recent posts will be printed in the footer
						);

						//A loop which will print info of the post if it exists the post if it 
						$salon_query = new WP_Query ($salon_args);
						if ($salon_query -> have_posts()) {
							$salon_query -> the_post();
						}
						?>
						<li><?php the_title(); ?></li>
                    </ul>
				</div>
				<div class="cell small-6 small-offset-2  large-offset-2 large-4">
				<h1 class="cat">Categories</h1>
					<ul>
						<li class="small-offset-3 large-offset-0">Cosmetics</li>
						<li class="small-offset-3 large-offset-0">Makeup</li>
                    </ul>
				</div>
            </div>
        </div>

		<div class="grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell small-12 large-offset-4 large-6">
					<h1 id="cosmo">Become A Cosmo Member !</h1>
				</div>
				<div class="cell small-offset-1 large-offset-4 large-4 large-offset-4">
					<div class="fillform"></div>
				</div>
            </div>
        </div>
		
		<!--Creating Menu for the Footer-->
		<div class="grid-container">
            <div class="grid-x grid-margin-x large-offset-1">
                <div class="cell small-6 large-2 large-offset-0 menuPlaceOne">
					<h2>ABOUT</h2>
					<?php wp_nav_menu( array
	( 'theme_location' => 'footer-menu-about', 'container_class' => 'footer_menu_class' )
	); ?>
				</div>
				<div class="cell small-6 large-2 large-offset-1 menuPlaceOne">
					<h2>HELP</h2>
					<?php wp_nav_menu( array
	( 'theme_location' => 'footer-menu-help', 'container_class' => 'footer_menu_class' )
	); ?>
				</div>
				<div class="cell small-6 large-2 large-offset-1 menuPlaceOne">
					<h2>SHOP</h2>
					<?php wp_nav_menu( array
	( 'theme_location' => 'footer-menu-shop', 'container_class' => 'footer_menu_class' )
	); ?>
				</div>
				<div class="cell small-6 large-2 large-offset-1 menuPlaceOne">
					<h2>CONTACT</h2>
					<?php wp_nav_menu( array
	( 'theme_location' => 'footer-menu-contact', 'container_class' => 'footer_menu_class' )
	); ?>
				</div>


            </div>
        </div>
		<div class="grid-container final-footer">
            <div class="grid-x grid-margin-x">
                <div class="cell small-12 large-4 large-offset-2">
				<div class="site-info">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'glorify' ) ); ?>">

			<!--Change according ly-->
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'glorify' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'glorify' ), 'glorify', '<a href="https://simrangarcha.com/">Simran Garcha</a>' );
				?>
		</div><!-- .site-info -->
				</div>
            </div>
        </div>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>