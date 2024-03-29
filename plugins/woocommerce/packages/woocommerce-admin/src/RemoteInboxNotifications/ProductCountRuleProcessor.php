<?php
/**
 * Rule processor that performs a comparison operation against the number of
 * products.
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor that performs a comparison operation against the number of
 * products.
 */
class ProductCountRuleProcessor implements RuleProcessorInterface {
	/**
	 * Constructor.
	 *
	 * @param object $product_query The product query.
	 */
	public function __construct( $product_query = null ) {
		$this->product_query = null === $product_query
			? new \WC_Product_Query(
				array(
					'limit'    => 1,
					'paginate' => true,
					'return'   => 'ids',
					'status'   => array( 'publish' ),
				)
			)
			: $product_query;
	}

	/**
	 * Performs a comparison operation against the number of products.
	 *
	 * @param object $rule         The specific rule being processed by this rule processor.
	 * @param object $stored_state Stored state.
	 *
	 * @return bool The result of the operation.
	 */
	public function process( $rule, $stored_state ) {
<<<<<<< HEAD
		$products = $this->product_query->get_products();
		$count    = $products->total;
=======
		$products          = $this->product_query->get_products();
		$new_product_count = property_exists( $stored_state, 'new_product_count' )
			? $stored_state->new_product_count
			: 0;
		$count             = $products->total + $new_product_count;
>>>>>>> staging

		return ComparisonOperation::compare(
			$count,
			$rule->value,
			$rule->operation
		);
	}

	/**
	 * Validates the rule.
	 *
	 * @param object $rule The rule to validate.
	 *
	 * @return bool Pass/fail.
	 */
	public function validate( $rule ) {
		if ( ! isset( $rule->value ) ) {
			return false;
		}

		if ( ! isset( $rule->operation ) ) {
			return false;
		}

		return true;
	}
}
