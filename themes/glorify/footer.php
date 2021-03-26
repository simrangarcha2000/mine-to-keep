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
				</div>


            </div>
        </div>
		<div class="grid-container final-footer">
            <div class="grid-x grid-margin-x">
                <div class="cell small-12 large-4 large-offset-2">
				<!-- Copyright for the site -->
				<div class="copyright">
				&copy; Mine to Keep &nbsp; &nbsp; 2021
				</div>
				</div>
            </div>
        </div>

	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>