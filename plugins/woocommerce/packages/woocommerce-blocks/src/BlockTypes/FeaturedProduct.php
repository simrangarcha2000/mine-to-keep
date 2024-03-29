<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * FeaturedProduct class.
 */
class FeaturedProduct extends AbstractDynamicBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'featured-product';

	/**
	 * Default attribute values, should match what's set in JS `registerBlockType`.
	 *
	 * @var array
	 */
	protected $defaults = array(
		'align'        => 'none',
		'contentAlign' => 'center',
		'dimRatio'     => 50,
		'focalPoint'   => false,
		'height'       => false,
		'mediaId'      => 0,
		'mediaSrc'     => '',
		'showDesc'     => true,
		'showPrice'    => true,
	);

	/**
	 * Render the Featured Product block.
	 *
	 * @param array  $attributes Block attributes. Default empty array.
	 * @param string $content    Block content. Default empty string.
	 * @return string Rendered block type output.
	 */
	public function render( $attributes = array(), $content = '' ) {
		$id      = isset( $attributes['productId'] ) ? (int) $attributes['productId'] : 0;
		$product = wc_get_product( $id );
		if ( ! $product ) {
			return '';
		}
		$attributes = wp_parse_args( $attributes, $this->defaults );
		if ( ! $attributes['height'] ) {
			$attributes['height'] = wc_get_theme_support( 'featured_block::default_height', 500 );
		}

		$title = sprintf(
			'<h2 class="wc-block-featured-product__title">%s</h2>',
			wp_kses_post( $product->get_title() )
		);

		if ( $product->is_type( 'variation' ) ) {
			$title .= sprintf(
				'<h3 class="wc-block-featured-product__variation">%s</h3>',
				wc_get_formatted_variation( $product, true, true, false )
			);
		}

		$desc_str = sprintf(
			'<div class="wc-block-featured-product__description">%s</div>',
			apply_filters( 'woocommerce_short_description', $product->get_short_description() ? $product->get_short_description() : wc_trim_string( $product->get_description(), 400 ) )
		);

		$price_str = sprintf(
			'<div class="wc-block-featured-product__price">%s</div>',
			$product->get_price_html()
		);

<<<<<<< HEAD
		$output = sprintf( '<div class="%1$s" style="%2$s">', esc_attr( $this->get_classes( $attributes ) ), esc_attr( $this->get_styles( $attributes, $product ) ) );

=======
		$output  = sprintf( '<div class="%1$s" style="%2$s">', esc_attr( $this->get_classes( $attributes ) ), esc_attr( $this->get_styles( $attributes, $product ) ) );
		$output .= '<div class="wc-block-featured-product__wrapper">';
>>>>>>> staging
		$output .= $title;
		if ( $attributes['showDesc'] ) {
			$output .= $desc_str;
		}
		if ( $attributes['showPrice'] ) {
			$output .= $price_str;
		}
		$output .= '<div class="wc-block-featured-product__link">' . $content . '</div>';
		$output .= '</div>';
<<<<<<< HEAD
=======
		$output .= '</div>';
>>>>>>> staging

		return $output;
	}

	/**
	 * Get the styles for the wrapper element (background image, color).
	 *
	 * @param array       $attributes Block attributes. Default empty array.
	 * @param \WC_Product $product Product object.
	 * @return string
	 */
	public function get_styles( $attributes, $product ) {
		$style      = '';
		$image_size = 'large';
		if ( 'none' !== $attributes['align'] || $attributes['height'] > 800 ) {
			$image_size = 'full';
		}

		if ( $attributes['mediaId'] ) {
			$image = wp_get_attachment_image_url( $attributes['mediaId'], $image_size );
		} else {
			$image = $this->get_image( $product, $image_size );
		}

		if ( ! empty( $image ) ) {
			$style .= sprintf( 'background-image:url(%s);', esc_url( $image ) );
		}

		if ( isset( $attributes['customOverlayColor'] ) ) {
			$style .= sprintf( 'background-color:%s;', esc_attr( $attributes['customOverlayColor'] ) );
		}

		if ( isset( $attributes['height'] ) ) {
			$style .= sprintf( 'min-height:%dpx;', intval( $attributes['height'] ) );
		}

		if ( is_array( $attributes['focalPoint'] ) && 2 === count( $attributes['focalPoint'] ) ) {
			$style .= sprintf(
				'background-position: %s%% %s%%',
				$attributes['focalPoint']['x'] * 100,
				$attributes['focalPoint']['y'] * 100
			);
		}

		return $style;
	}

	/**
	 * Get class names for the block container.
	 *
	 * @param array $attributes Block attributes. Default empty array.
	 * @return string
	 */
	public function get_classes( $attributes ) {
		$classes = array( 'wc-block-' . $this->block_name );

		if ( isset( $attributes['align'] ) ) {
			$classes[] = "align{$attributes['align']}";
		}

		if ( isset( $attributes['dimRatio'] ) && ( 0 !== $attributes['dimRatio'] ) ) {
			$classes[] = 'has-background-dim';

			if ( 50 !== $attributes['dimRatio'] ) {
				$classes[] = 'has-background-dim-' . 10 * round( $attributes['dimRatio'] / 10 );
			}
		}

		if ( isset( $attributes['contentAlign'] ) && 'center' !== $attributes['contentAlign'] ) {
			$classes[] = "has-{$attributes['contentAlign']}-content";
		}

		if ( isset( $attributes['overlayColor'] ) ) {
			$classes[] = "has-{$attributes['overlayColor']}-background-color";
		}

		if ( isset( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		return implode( ' ', $classes );
	}

	/**
	 * Returns the main product image URL.
	 *
	 * @param \WC_Product $product Product object.
	 * @param string      $size    Image size, defaults to 'full'.
	 * @return string
	 */
	public function get_image( $product, $size = 'full' ) {
		$image = '';
		if ( $product->get_image_id() ) {
			$image = wp_get_attachment_image_url( $product->get_image_id(), $size );
		} elseif ( $product->get_parent_id() ) {
			$parent_product = wc_get_product( $product->get_parent_id() );
			if ( $parent_product ) {
				$image = wp_get_attachment_image_url( $parent_product->get_image_id(), $size );
			}
		}

		return $image;
	}
}
