/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useCheckoutContext,
	usePaymentMethodDataContext,
} from '@woocommerce/base-context';
<<<<<<< HEAD
import { usePaymentMethods } from '@woocommerce/base-hooks';
=======

/**
 * Internal dependencies
 */
import { usePaymentMethods } from '../payment-methods';
>>>>>>> staging

/**
 * Returns the submitButtonText, onSubmit interface from the checkout context,
 * and an indication of submission status.
 */
export const useCheckoutSubmit = () => {
	const {
		onSubmit,
		isCalculating,
		isBeforeProcessing,
		isProcessing,
		isAfterProcessing,
		isComplete,
		hasError,
	} = useCheckoutContext();
<<<<<<< HEAD
	const { paymentMethods } = usePaymentMethods();
=======
	const { paymentMethods = {} } = usePaymentMethods();
>>>>>>> staging
	const { activePaymentMethod } = usePaymentMethodDataContext();
	const paymentMethod = paymentMethods[ activePaymentMethod ] || {};

	return {
		submitButtonText:
			paymentMethod?.placeOrderButtonLabel ||
			__( 'Place Order', 'woocommerce' ),
		onSubmit,
		isCalculating,
		waitingForProcessing:
			isProcessing || isAfterProcessing || isBeforeProcessing,
		waitingForRedirect: isComplete && ! hasError,
	};
};
