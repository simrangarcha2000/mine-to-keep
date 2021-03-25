console.log("Functioning correctly");

//Prefer method js as we can unregister default style in js which cannot be done in php

/* BLock to Create a Pink Quote*/
wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'pink-quote',
    label: 'Pink Quote'
} );



//Registering another Text block style ------------------------ PARAGRAPH

/* Paragraph Style -- 
- Pink Text with black Background and Padding */
wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'paragraph-glorify',
    label: 'Glorify Paragraph'
} );

/**
 * No Margins to a Paragraph 
 */
wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'no-margin-para',
    label: 'No Margin Para'
} );

//No Margins only on the Left to the paragraph
wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'no-marginleft-para',
    label: 'No Margin Left Para'
} );


//Registering another Text block style  ------------------------ IMAGE

/**
 * 
 */
wp.blocks.registerBlockStyle( 'core/image', {
    name: 'image-glorify',
    label: 'Glorify Image'
} );

//Registering another Text block style  ------------------------ HEADING
//Pink heading 
wp.blocks.registerBlockStyle( 'core/heading', {
    name: 'pink-heading',
    label: 'Pink Heading'
} );

wp.blocks.registerBlockStyle( 'core/heading', {
    name: 'main-heading',
    label: 'Main Heading'
} );




//Registering a  block ---------------------------------------- COLUMN
wp.blocks.registerBlockStyle('core/column',{
    name: 'pink-column',
    label: 'Pink Column'
});

wp.blocks.registerBlockStyle('core/column',{
    name: 'no-margin-column',
    label: 'No Margin Column'
});

//Registering a  block ---------------------------------------- GALLERY
wp.blocks.registerBlockStyle('core/gallery',{
    name: 'gallery-select',
    label: 'Gallery Select'
});

//Registering a  block ---------------------------------------- TABLE
wp.blocks.registerBlockStyle('core/table',{
    name: 'glorify-table',
    label: 'Glorify Table'
});

//Registering a  block ---------------------------------------- LIST
wp.blocks.registerBlockStyle('core/list',{
    name: 'glorify-list',
    label: 'Glorify List'
});


/*Unregister a block **************************************  LARGE SIZE */

wp.domReady(function(){
    wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
    //If there is no other option left i.e just the default
    wp.blocks.unregisterBlockStyle( 'core/quote', 'default' );
    wp.blocks.unregisterBlockStyle( 'core/paragraph', 'default' );
});

