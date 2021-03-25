/**
 * External dependencies
 */
import { usePaymentMethods } from '@woocommerce/base-hooks';
<<<<<<< HEAD
import { useCallback, useState } from '@wordpress/element';
=======
import { __ } from '@wordpress/i18n';
import Label from '@woocommerce/base-components/label';
import { usePaymentMethodDataContext } from '@woocommerce/base-context';
>>>>>>> staging

/**
 * Internal dependencies
 */
import NoPaymentMethods from './no-payment-methods';
import PaymentMethodOptions from './payment-method-options';
import SavedPaymentMethodOptions from './saved-payment-method-options';

/**
 * PaymentMethods component.
 *
 * @return {*} The rendered component.
 */
const PaymentMethods = () => {
	const { isInitialized, paymentMethods } = usePaymentMethods();
<<<<<<< HEAD
	const [ showNewPaymentMethods, setShowNewPaymentMethods ] = useState(
		true
	);
	const onChange = useCallback(
		( token ) => {
			setShowNewPaymentMethods( token === '0' );
		},
		[ setShowNewPaymentMethods ]
	);
=======
	const { customerPaymentMethods } = usePaymentMethodDataContext();
>>>>>>> staging

	if ( isInitialized && Object.keys( paymentMethods ).length === 0 ) {
		return <NoPaymentMethods />;
	}

	return (
		<>
<<<<<<< HEAD
			<SavedPaymentMethodOptions onChange={ onChange } />
			{ showNewPaymentMethods && <PaymentMethodOptions /> }
=======
			<SavedPaymentMethodOptions />
			{ Object.keys( customerPaymentMethods ).length > 0 && (
				<Label
					label={ __(
						'Use another payment method.',
						'woocommerce'
					) }
					screenReaderLabel={ __(
						'Other available payment methods',
						'woocommerce'
					) }
					wrapperElement="p"
					wrapperProps={ {
						className: [
							'wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned',
						],
					} }
				/>
			) }
			<PaymentMethodOptions />
>>>>>>> staging
		</>
	);
};

export default PaymentMethods;
