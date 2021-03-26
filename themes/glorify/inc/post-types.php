<?php
/**
 *  Custom Post type
 */


 //Creating a post type for --> Salons near me
function salon_init() {
    $labels = array(
        'name'                  => _x( 'Salons', 'Post type general name', 'salon' ),
        'singular_name'         => _x( 'Salon', 'Post type singular name', 'salon' ),
        'menu_name'             => _x( 'Salons', 'Admin Menu text', 'salon' ),
        'name_admin_bar'        => _x( 'Salon', 'Add New on Toolbar', 'salon' ),
        'add_new'               => __( 'Add New', 'salon' ),
        'add_new_item'          => __( 'Add New salon', 'salon' ),
        'new_item'              => __( 'New salon', 'salon' ),
        'edit_item'             => __( 'Edit salon', 'salon' ),
        'view_item'             => __( 'View salon', 'salon' ),
        'all_items'             => __( 'All salons', 'salon' ),
        'search_items'          => __( 'Search salons', 'salon' ),
        'parent_item_colon'     => __( 'Parent salons:', 'salon' ),
        'not_found'             => __( 'No salons found.', 'salon' ),
        'not_found_in_trash'    => __( 'No salons found in Trash.', 'salon' ),
        'featured_image'        => _x( 'Salon Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'salon' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'salon' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'salon' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'salon' ),
        'archives'              => _x( 'salon archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'salon' ),
        'insert_into_item'      => _x( 'Insert into salon', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'salon' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this salon', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'salon' ),
        'filter_items_list'     => _x( 'Filter salons list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'salon' ),
        'items_list_navigation' => _x( 'salons list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'salon' ),
        'items_list'            => _x( 'salons list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'salon' ),
    );     
    $args = array(
        'labels'             => $labels,
        'description'        => 'salon custom post type.',
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'salon' ), //Writing the permalink for the post type
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail' ),
        'taxonomies'         => array( 'category', 'post_tag' ),
        'menu_icon'          => 'dashicons-format-quote',
        'show_in_rest'       => true
    );
    //Registered the post type by a unique name and then give permalink on top accordingly
    register_post_type( 'glorify_salon_name', $args ); 
}
//Init is the function being used 
add_action( 'init', 'salon_init' );