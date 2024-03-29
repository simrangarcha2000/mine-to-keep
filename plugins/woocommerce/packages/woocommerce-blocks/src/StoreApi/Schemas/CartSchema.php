<?php
namespace Automattic\WooCommerce\Blocks\StoreApi\Schemas;

use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;
use Automattic\WooCommerce\Blocks\Domain\Services\ExtendRestApi;


/**
 * CartSchema class.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 * @since 2.5.0
 */
class CartSchema extends AbstractSchema {
	/**
	 * The schema item name.
	 *
	 * @var string
	 */
	protected $title = 'cart';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'cart';

	/**
	 * Item schema instance.
	 *
	 * @var CartItemSchema
	 */
	protected $item_schema;

	/**
	 * Coupon schema instance.
	 *
	 * @var CartCouponSchema
	 */
	protected $coupon_schema;

	/**
<<<<<<< HEAD
=======
	 * Fee schema instance.
	 *
	 * @var CartFeeSchema
	 */
	protected $fee_schema;

	/**
>>>>>>> staging
	 * Shipping rates schema instance.
	 *
	 * @var CartShippingRateSchema
	 */
	protected $shipping_rate_schema;

	/**
	 * Shipping address schema instance.
	 *
	 * @var ShippingAddressSchema
	 */
	protected $shipping_address_schema;

	/**
	 * Billing address schema instance.
	 *
	 * @var BillingAddressSchema
	 */
	protected $billing_address_schema;

	/**
	 * Error schema instance.
	 *
	 * @var ErrorSchema
	 */
	protected $error_schema;

	/**
	 * Constructor.
	 *
	 * @param ExtendRestApi          $extend Rest Extending instance.
	 * @param CartItemSchema         $item_schema Item schema instance.
	 * @param CartCouponSchema       $coupon_schema Coupon schema instance.
<<<<<<< HEAD
=======
	 * @param CartFeeSchema          $fee_schema Fee schema instance.
>>>>>>> staging
	 * @param CartShippingRateSchema $shipping_rate_schema Shipping rates schema instance.
	 * @param ShippingAddressSchema  $shipping_address_schema Shipping address schema instance.
	 * @param BillingAddressSchema   $billing_address_schema Billing address schema instance.
	 * @param ErrorSchema            $error_schema Error schema instance.
	 */
	public function __construct(
		ExtendRestApi $extend,
		CartItemSchema $item_schema,
		CartCouponSchema $coupon_schema,
<<<<<<< HEAD
=======
		CartFeeSchema $fee_schema,
>>>>>>> staging
		CartShippingRateSchema $shipping_rate_schema,
		ShippingAddressSchema $shipping_address_schema,
		BillingAddressSchema $billing_address_schema,
		ErrorSchema $error_schema
	) {
		$this->item_schema             = $item_schema;
		$this->coupon_schema           = $coupon_schema;
<<<<<<< HEAD
=======
		$this->fee_schema              = $fee_schema;
>>>>>>> staging
		$this->shipping_rate_schema    = $shipping_rate_schema;
		$this->shipping_address_schema = $shipping_address_schema;
		$this->billing_address_schema  = $billing_address_schema;
		$this->error_schema            = $error_schema;
		parent::__construct( $extend );
	}

	/**
	 * Cart schema properties.
	 *
	 * @return array
	 */
	public function get_properties() {
		return [
			'coupons'                 => [
				'description' => __( 'List of applied cart coupons.', 'woocommerce' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->coupon_schema->get_properties() ),
				],
			],
			'shipping_rates'          => [
				'description' => __( 'List of available shipping rates for the cart.', 'woocommerce' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->shipping_rate_schema->get_properties() ),
				],
			],
			'shipping_address'        => [
				'description' => __( 'Current set shipping address for the customer.', 'woocommerce' ),
				'type'        => 'object',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
<<<<<<< HEAD
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->shipping_address_schema->get_properties() ),
				],
=======
				'properties'  => $this->force_schema_readonly( $this->shipping_address_schema->get_properties() ),
>>>>>>> staging
			],
			'billing_address'         => [
				'description' => __( 'Current set billing address for the customer.', 'woocommerce' ),
				'type'        => 'object',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
<<<<<<< HEAD
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->billing_address_schema->get_properties() ),
				],
=======
				'properties'  => $this->force_schema_readonly( $this->billing_address_schema->get_properties() ),
>>>>>>> staging
			],
			'items'                   => [
				'description' => __( 'List of cart items.', 'woocommerce' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->item_schema->get_properties() ),
				],
			],
			'items_count'             => [
				'description' => __( 'Number of items in the cart.', 'woocommerce' ),
				'type'        => 'integer',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'items_weight'            => [
				'description' => __( 'Total weight (in grams) of all products in the cart.', 'woocommerce' ),
				'type'        => 'number',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'needs_payment'           => [
				'description' => __( 'True if the cart needs payment. False for carts with only free products and no shipping costs.', 'woocommerce' ),
				'type'        => 'boolean',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'needs_shipping'          => [
				'description' => __( 'True if the cart needs shipping. False for carts with only digital goods or stores with no shipping methods set-up.', 'woocommerce' ),
				'type'        => 'boolean',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'has_calculated_shipping' => [
				'description' => __( 'True if the cart meets the criteria for showing shipping costs, and rates have been calculated and included in the totals.', 'woocommerce' ),
				'type'        => 'boolean',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
<<<<<<< HEAD
=======
			'fees'                    => [
				'description' => __( 'List of cart fees.', 'woocommerce' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->fee_schema->get_properties() ),
				],
			],
>>>>>>> staging
			'totals'                  => [
				'description' => __( 'Cart total amounts provided using the smallest unit of the currency.', 'woocommerce' ),
				'type'        => 'object',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'properties'  => array_merge(
					$this->get_store_currency_properties(),
					[
						'total_items'        => [
							'description' => __( 'Total price of items in the cart.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_items_tax'    => [
							'description' => __( 'Total tax on items in the cart.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_fees'         => [
							'description' => __( 'Total price of any applied fees.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_fees_tax'     => [
							'description' => __( 'Total tax on fees.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_discount'     => [
							'description' => __( 'Total discount from applied coupons.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_discount_tax' => [
							'description' => __( 'Total tax removed due to discount from applied coupons.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_shipping'     => [
							'description' => __( 'Total price of shipping. If shipping has not been calculated, a null response will be sent.', 'woocommerce' ),
							'type'        => [ 'string', 'null' ],
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_shipping_tax' => [
							'description' => __( 'Total tax on shipping. If shipping has not been calculated, a null response will be sent.', 'woocommerce' ),
							'type'        => [ 'string', 'null' ],
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_price'        => [
							'description' => __( 'Total price the customer will pay.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_tax'          => [
							'description' => __( 'Total tax applied to items and shipping.', 'woocommerce' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'tax_lines'          => [
							'description' => __( 'Lines of taxes applied to items and shipping.', 'woocommerce' ),
							'type'        => 'array',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
							'items'       => [
								'type'       => 'object',
								'properties' => [
									'name'  => [
										'description' => __( 'The name of the tax.', 'woocommerce' ),
										'type'        => 'string',
										'context'     => [ 'view', 'edit' ],
										'readonly'    => true,
									],
									'price' => [
										'description' => __( 'The amount of tax charged.', 'woocommerce' ),
										'type'        => 'string',
										'context'     => [ 'view', 'edit' ],
										'readonly'    => true,
									],
								],
							],
						],
					]
				),
			],
			'errors'                  => [
				'description' => __( 'List of cart item errors, for example, items in the cart which are out of stock.', 'woocommerce' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->error_schema->get_properties() ),
				],
			],
<<<<<<< HEAD
=======
			'payment_requirements'    => [
				'description' => __( 'List of required payment gateway features to process the order.', 'woocommerce' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
>>>>>>> staging
			self::EXTENDING_KEY       => $this->get_extended_schema( self::IDENTIFIER ),
		];
	}

	/**
	 * Convert a woo cart into an object suitable for the response.
	 *
	 * @param \WC_Cart $cart Cart class instance.
	 * @return array
	 */
	public function get_item_response( $cart ) {
		$controller = new CartController();

		// Get cart errors first so if recalculations are performed, it's reflected in the response.
		$cart_errors = $this->get_cart_errors( $cart );

		// The core cart class will not include shipping in the cart totals if `show_shipping()` returns false. This can
		// happen if an address is required, or through the use of hooks. This tracks if shipping has actually been
		// calculated so we can avoid returning costs and rates prematurely.
		$has_calculated_shipping = $cart->show_shipping();

<<<<<<< HEAD
		return [
			'coupons'                 => array_values( array_map( [ $this->coupon_schema, 'get_item_response' ], array_filter( $cart->get_applied_coupons() ) ) ),
			'shipping_rates'          => $has_calculated_shipping ? array_values( array_map( [ $this->shipping_rate_schema, 'get_item_response' ], $controller->get_shipping_packages() ) ) : [],
			'shipping_address'        => $this->shipping_address_schema->get_item_response( wc()->customer ),
			'billing_address'         => $this->billing_address_schema->get_item_response( wc()->customer ),
			'items'                   => array_values( array_map( [ $this->item_schema, 'get_item_response' ], array_filter( $cart->get_cart() ) ) ),
=======
		// Get shipping packages to return in the response from the cart.
		$shipping_packages = $has_calculated_shipping ? $controller->get_shipping_packages() : [];

		return [
			'coupons'                 => $this->get_item_responses_from_schema( $this->coupon_schema, $cart->get_applied_coupons() ),
			'shipping_rates'          => $this->get_item_responses_from_schema( $this->shipping_rate_schema, $shipping_packages ),
			'shipping_address'        => $this->shipping_address_schema->get_item_response( wc()->customer ),
			'billing_address'         => $this->billing_address_schema->get_item_response( wc()->customer ),
			'items'                   => $this->get_item_responses_from_schema( $this->item_schema, $cart->get_cart() ),
>>>>>>> staging
			'items_count'             => $cart->get_cart_contents_count(),
			'items_weight'            => wc_get_weight( $cart->get_cart_contents_weight(), 'g' ),
			'needs_payment'           => $cart->needs_payment(),
			'needs_shipping'          => $cart->needs_shipping(),
			'has_calculated_shipping' => $has_calculated_shipping,
<<<<<<< HEAD
=======
			'fees'                    => $this->get_item_responses_from_schema( $this->fee_schema, $cart->get_fees() ),
>>>>>>> staging
			'totals'                  => (object) $this->prepare_currency_response(
				[
					'total_items'        => $this->prepare_money_response( $cart->get_subtotal(), wc_get_price_decimals() ),
					'total_items_tax'    => $this->prepare_money_response( $cart->get_subtotal_tax(), wc_get_price_decimals() ),
					'total_fees'         => $this->prepare_money_response( $cart->get_fee_total(), wc_get_price_decimals() ),
					'total_fees_tax'     => $this->prepare_money_response( $cart->get_fee_tax(), wc_get_price_decimals() ),
					'total_discount'     => $this->prepare_money_response( $cart->get_discount_total(), wc_get_price_decimals() ),
					'total_discount_tax' => $this->prepare_money_response( $cart->get_discount_tax(), wc_get_price_decimals() ),
					'total_shipping'     => $has_calculated_shipping ? $this->prepare_money_response( $cart->get_shipping_total(), wc_get_price_decimals() ) : null,
					'total_shipping_tax' => $has_calculated_shipping ? $this->prepare_money_response( $cart->get_shipping_tax(), wc_get_price_decimals() ) : null,

					// Explicitly request context='edit'; default ('view') will render total as markup.
					'total_price'        => $this->prepare_money_response( $cart->get_total( 'edit' ), wc_get_price_decimals() ),
					'total_tax'          => $this->prepare_money_response( $cart->get_total_tax(), wc_get_price_decimals() ),
					'tax_lines'          => $this->get_tax_lines( $cart ),
				]
			),
			'errors'                  => $cart_errors,
<<<<<<< HEAD
=======
			'payment_requirements'    => $this->extend->get_payment_requirements(),
>>>>>>> staging
			self::EXTENDING_KEY       => $this->get_extended_data( self::IDENTIFIER ),
		];
	}

	/**
	 * Get tax lines from the cart and format to match schema.
	 *
	 * @param \WC_Cart $cart Cart class instance.
	 * @return array
	 */
	protected function get_tax_lines( $cart ) {
		$cart_tax_totals = $cart->get_tax_totals();
		$tax_lines       = [];

		foreach ( $cart_tax_totals as $cart_tax_total ) {
			$tax_lines[] = array(
				'name'  => $cart_tax_total->label,
				'price' => $this->prepare_money_response( $cart_tax_total->amount, wc_get_price_decimals() ),
			);
		}

		return $tax_lines;
	}

	/**
	 * Get cart validation errors.
	 *
	 * @param \WC_Cart $cart Cart class instance.
	 * @return array
	 */
	protected function get_cart_errors( $cart ) {
		$controller    = new CartController();
		$item_errors   = $controller->get_cart_item_errors();
		$coupon_errors = $controller->get_cart_coupon_errors();

		return array_values( array_map( [ $this->error_schema, 'get_item_response' ], array_merge( $item_errors, $coupon_errors ) ) );
	}
}
