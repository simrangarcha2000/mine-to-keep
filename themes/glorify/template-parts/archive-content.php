<?php
/**
 * Template part for displaying posts - Custom
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Glorify
 */
?>
<?php if( have_posts()): while(have_posts() ): the_post(); ?>

<!--Looping through each post and updating the title , excerpt and permalink-->
<div class="card">

<!--Post Title -->
<h1 class="archiveTitle"><?php the_title();?></h1>

<!--Post Excerpt and Permalink -->
	<section class = " grid-container grid-x archiveBox">
		<div class="large-6 archiveLeft">
			<?php the_excerpt();?>
			<a href="<?php the_permalink();?>" class="button button success">Read More</a>
		</div>

		<!--Post Featured Image -->
		<div class="large-6 archiveImage">
				<?php the_post_thumbnail();?>
	</section>
</div>

<?php endwhile; else: endif;?>
