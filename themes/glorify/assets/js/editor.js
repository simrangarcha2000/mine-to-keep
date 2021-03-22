console.log("Functioning correctly");

//Prefer method js as we can unregister default style in js which cannot be done in php
wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'pink-quote',
    label: 'Pink Quote'
} );






//Registering another Text block style - Paragraph
wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'paragraph-glorify',
    label: 'Glorify Paragraph'
} );

//Registering another Text block style - Paragraph
wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'no-margin-para',
    label: 'No Margin Para'
} );


wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'no-marginleft-para',
    label: 'No Margin Left Para'
} );


//Registering another Text block style - Paragraph
wp.blocks.registerBlockStyle( 'core/image', {
    name: 'image-glorify',
    label: 'Glorify Image'
} );


wp.blocks.registerBlockStyle( 'core/heading', {
    name: 'pink-heading',
    label: 'Pink Heading'
} );

wp.blocks.registerBlockStyle( 'core/heading', {
    name: 'main-heading',
    label: 'Main Heading'
} );




//Registering a column 
wp.blocks.registerBlockStyle('core/column',{
    name: 'pink-column',
    label: 'Pink Column'
});

wp.blocks.registerBlockStyle('core/column',{
    name: 'no-margin-column',
    label: 'No Margin Column'
});

//REgISTERING Gallery
wp.blocks.registerBlockStyle('core/gallery',{
    name: 'gallery-select',
    label: 'Gallery Select'
});

//Registering Table
wp.blocks.registerBlockStyle('core/table',{
    name: 'glorify-table',
    label: 'Glorify Table'
});

//Registering List 
wp.blocks.registerBlockStyle('core/list',{
    name: 'glorify-list',
    label: 'Glorify List'
});








//Unregister Large Size
wp.domReady(function(){
    wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
    //If there is no other option left i.e just the default
    wp.blocks.unregisterBlockStyle( 'core/quote', 'default' );
    wp.blocks.unregisterBlockStyle( 'core/paragraph', 'default' );
});

