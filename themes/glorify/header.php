<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Glorify
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Tangerine:wght@700&display=swap" rel="stylesheet"> 
	<link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> 
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&family=Montserrat:wght@300;400&display=swap" rel="stylesheet"> 
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
	
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/style.css" type="text/css" media="screen" />


	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'glorify' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="grid-container" id="top-header">
			<div class="grid-x grid-margin-x">
			<div class="cell small-2 large-9">
			
			</div>
			<div class="cell small-10 large-3">
			<?php wp_nav_menu( array
	( 'theme_location' => 'header-menu-top', 'container_class' => 'header_menu_class' )) ?>
			</div>
			</div>
			</div>
			<div class="grid-container" id="bottom-header">
            <div class="grid-x grid-margin-x">
                <div class="cell small-9 large-5">
					<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"></a></p>
				<?php
			endif;
			if ( $glorify_description || is_customize_preview() ) :
				?>
				<p class="site-description"> </p>
			<?php endif; ?>
			</div><!-- .site-branding -->
				</div>
                <div class="cell small-3 large-7">
				<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'glorify' ); ?></button>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-primary',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
		</nav><!-- #site-navigation -->
				</div>
            </div>
		</div>




	</header><!-- #masthead -->
