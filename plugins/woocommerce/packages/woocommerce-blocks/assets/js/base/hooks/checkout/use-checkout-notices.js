/**
 * External dependencies
 */
<<<<<<< HEAD
import { useEmitResponse } from '@woocommerce/base-hooks';
import { useSelect } from '@wordpress/data';

/**
=======
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { useEmitResponse } from './use-emit-response';

/**
>>>>>>> staging
 * @typedef {import('@woocommerce/type-defs/contexts').StoreNoticeObject} StoreNoticeObject
 * @typedef {import('@woocommerce/type-defs/hooks').CheckoutNotices} CheckoutNotices
 */

/**
 * A hook that returns all notices visible in the Checkout block.
 *
 * @return {CheckoutNotices} Notices from the checkout form or payment methods.
 */
export const useCheckoutNotices = () => {
	const { noticeContexts } = useEmitResponse();

	/**
	 * @type {StoreNoticeObject[]}
	 */
	const checkoutNotices = useSelect(
		( select ) => select( 'core/notices' ).getNotices( 'wc/checkout' ),
		[]
	);

	/**
	 * @type {StoreNoticeObject[]}
	 */
	const expressPaymentNotices = useSelect(
		( select ) =>
			select( 'core/notices' ).getNotices(
				noticeContexts.EXPRESS_PAYMENTS
			),
		[ noticeContexts.EXPRESS_PAYMENTS ]
	);

	/**
	 * @type {StoreNoticeObject[]}
	 */
	const paymentNotices = useSelect(
		( select ) =>
			select( 'core/notices' ).getNotices( noticeContexts.PAYMENTS ),
		[ noticeContexts.PAYMENTS ]
	);

	return {
		checkoutNotices,
		expressPaymentNotices,
		paymentNotices,
	};
};
