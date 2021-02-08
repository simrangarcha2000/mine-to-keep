console.log("Functioning correctly");

//Prefer method js as we can unregister default style in js which cannot be done in php
wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'pink-quote',
    label: 'Pink Quote'
} );


//Unregister Large Size
wp.domReady(function(){
    wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
    //If there is no other option left i.e just the default
    wp.blocks.unregisterBlockStyle( 'core/quote', 'default' );
});
