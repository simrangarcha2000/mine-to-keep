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
                <div class="cell small-12 large-6 large-offset-1">
					<h1>Recent Posts :</h1>
<<<<<<< HEAD
					<ul>
						<li>Tips and Tricks to the perfect natural makeup</li>
                    </ul>
				</div>
				<div class="cell small-6 small-offset-2  large-offset-2 large-4">
				<h1 class="cat">Categories</h1>
					<ul>
						<li class="small-offset-3 large-offset-0">Cosmetics</li>
						<li class="small-offset-3 large-offset-0">Makeup</li>
=======

					<!--Creating a WP_Query to get the posts of the custom post type and print its information in the footer-->
						<?php
						//Creating the argument
						$salon_args = array(
							'post_type' => 'glorify_salon_name', //Refering to the Custom post type name
							'posts_per_page' => 1, //The info of 4 recent posts will be printed in the footer
						);

						//A loop which will print info of the post if it exists the post if it 
						$salon_query = new WP_Query ($salon_args);
						if ($salon_query -> have_posts()) {
							$salon_query -> the_post();
						}
						?>
<<<<<<< HEAD
						<!-- Displaying the title of the post  -->
						<li><?php the_title(); ?></li>
						<!-- Displaying the  featured image of the post  -->
						<li><?php the_title(); ?></li>
						<!-- Displaying the image of the post  -->
>>>>>>> staging
                    </ul>
=======
						<div class = "leftFooterSide small-offset-1 large-offset-0">
							<!-- Displaying the title of the post  -->
							<h3><?php the_title(); ?></h3>
							<!-- Displaying the  excerpt of the post  -->
							<p><?php the_excerpt(); ?></p>
							<!-- Displaying the link of the post  -->
							<li><a href="<?php the_permalink();?>" class="button button success">Read More</a></li>
						</div>

                    
				</div>
				<div class = "rightFooterSide small-10 small-offset-1 large-offset-0 large-3">
					<img <?php the_post_thumbnail(); ?> >

>>>>>>> staging
				</div>
            </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> staging
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
<<<<<<< HEAD
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
=======
		
		<!--Creating Menu for the Footer-->
		<div class="grid-container footerNav">
            <div class="grid-x grid-margin-x large-offset-1">
				
				<!--Menu Under the About Heading-->
                <div class="cell small-6 medium-6 large-2 large-offset-0 menuPlaceOne">
					<h2>ABOUT</h2>
					<?php wp_nav_menu( array
						( 'theme_location' => 'footer-menu-about', 'container_class' => 'footer_menu_class' ) //Defining the location of a already created menu
					); ?>
				</div>

				<!--Menu Under the Help Heading-->
				<div class="cell small-6 large-2 medium-6 large-offset-1 menuPlaceOne">
					<h2>HELP</h2>
					<?php wp_nav_menu( array
						( 'theme_location' => 'footer-menu-help', 'container_class' => 'footer_menu_class' ) //Defining the location of a already created menu
					); ?>
				</div>

				<!--Menu Under the Shop Heading-->
				<div class="cell small-6 large-2 medium-6 large-offset-1 menuPlaceOne">
					<h2>SHOP</h2>
					<?php wp_nav_menu( array
						( 'theme_location' => 'footer-menu-shop', 'container_class' => 'footer_menu_class' ) //Defining the location of a already created menu
					); ?>
				</div>

				<!--Menu Under the Contact Heading-->
				<div class="cell small-6 large-2  large-offset-1 menuPlaceOne">
					<h2>CONTACT</h2>
					<?php wp_nav_menu( array
						( 'theme_location' => 'footer-menu-contact', 'container_class' => 'footer_menu_class' ) //Defining the location of a already created menu
					); ?>
>>>>>>> staging
				</div>


            </div>
        </div>
		<div class="grid-container final-footer">
            <div class="grid-x grid-margin-x">
                <div class="cell small-12 large-4 large-offset-2">
<<<<<<< HEAD
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
=======
				<!-- Copyright for the site -->
				<div class="copyright">
				&copy; Mine to Keep &nbsp; &nbsp; 2021
				</div>
>>>>>>> staging
				</div>
            </div>
        </div>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>