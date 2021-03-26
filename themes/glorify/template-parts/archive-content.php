<?php
/**
 * Template part for displaying posts - In Built
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Glorify
 */
?>
<?php if( have_posts()): while(have_posts() ): the_post(); ?>

<!--Looping through each post and updating the title , excerpt and permalink-->
<div class="card">
<h1 class="archiveTitle"><?php the_title();?></h1>
	<section class = " grid-container grid-x">
		<div class="large-6 ">
				<?php the_excerpt();?>
	<a href="<?php the_permalink();?>" class="button button success">Read More</a>
</section>
</div>
</div>

<?php endwhile; else: endif;?>
