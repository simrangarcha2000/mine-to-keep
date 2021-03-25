/**
 * External dependencies
 */
<<<<<<< HEAD
import { useEffect, useState, useRef, useCallback } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	useEditorContext,
	usePaymentMethodDataContext,
} from '@woocommerce/base-context';
import RadioControl from '@woocommerce/base-components/radio-control';
import { getPaymentMethods } from '@woocommerce/blocks-registry';
import PropTypes from 'prop-types';
=======
import { useEffect, useRef, useCallback } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { usePaymentMethodDataContext } from '@woocommerce/base-context';
import RadioControl from '@woocommerce/base-components/radio-control';
import { getPaymentMethods } from '@woocommerce/blocks-registry';
>>>>>>> staging

/**
 * @typedef {import('@woocommerce/type-defs/contexts').CustomerPaymentMethod} CustomerPaymentMethod
 * @typedef {import('@woocommerce/type-defs/contexts').PaymentStatusDispatch} PaymentStatusDispatch
 */

/**
 * Returns the option object for a cc or echeck saved payment method token.
 *
 * @param {CustomerPaymentMethod} savedPaymentMethod
 * @param {function(string):void} setActivePaymentMethod
 * @param {PaymentStatusDispatch} setPaymentStatus
 * @return {Object} An option objects to use for RadioControl.
 */
const getCcOrEcheckPaymentMethodOption = (
	{ method, expires, tokenId },
	setActivePaymentMethod,
	setPaymentStatus
) => {
	return {
		value: tokenId + '',
		label: sprintf(
			/* Translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
			__(
				'%1$s ending in %2$s (expires %3$s)',
				'woo-gutenberg-product-blocks'
			),
			method.brand,
			method.last4,
			expires
		),
		name: `wc-saved-payment-method-token-${ tokenId }`,
		onChange: ( token ) => {
			const savedTokenKey = `wc-${ method.gateway }-payment-token`;
			setActivePaymentMethod( method.gateway );
			setPaymentStatus().success( {
				payment_method: method.gateway,
<<<<<<< HEAD
				[ savedTokenKey ]: token,
=======
				[ savedTokenKey ]: token + '',
>>>>>>> staging
				isSavedToken: true,
			} );
		},
	};
};

/**
 * Returns the option object for any non specific saved payment method.
 *
 * @param {CustomerPaymentMethod} savedPaymentMethod
 * @param {function(string):void} setActivePaymentMethod
 * @param {PaymentStatusDispatch} setPaymentStatus
 *
 * @return {Object} An option objects to use for RadioControl.
 */
const getDefaultPaymentMethodOptions = (
	{ method, tokenId },
	setActivePaymentMethod,
	setPaymentStatus
) => {
	return {
		value: tokenId + '',
		label: sprintf(
			// Translators: %s is the name of the payment method gateway.
			__( 'Saved token for %s', 'woocommerce' ),
			method.gateway
		),
		name: `wc-saved-payment-method-token-${ tokenId }`,
		onChange: ( token ) => {
			const savedTokenKey = `wc-${ method.gateway }-payment-token`;
			setActivePaymentMethod( method.gateway );
			setPaymentStatus().success( {
				payment_method: method.gateway,
<<<<<<< HEAD
				[ savedTokenKey ]: token,
=======
				[ savedTokenKey ]: token + '',
>>>>>>> staging
				isSavedToken: true,
			} );
		},
	};
};

<<<<<<< HEAD
const SavedPaymentMethodOptions = ( { onChange } ) => {
	const { isEditor } = useEditorContext();
	const {
		setPaymentStatus,
		customerPaymentMethods,
		setActivePaymentMethod,
	} = usePaymentMethodDataContext();
	const [ selectedToken, setSelectedToken ] = useState( '' );
=======
const SavedPaymentMethodOptions = () => {
	const {
		setPaymentStatus,
		customerPaymentMethods,
		activePaymentMethod,
		setActivePaymentMethod,
		activeSavedToken,
		setActiveSavedToken,
	} = usePaymentMethodDataContext();
>>>>>>> staging
	const standardMethods = getPaymentMethods();

	/**
	 * @type      {Object} Options
	 * @property  {Array}  current  The current options on the type.
	 */
	const currentOptions = useRef( [] );

	const updateToken = useCallback(
		( token ) => {
			if ( token === '0' ) {
				setPaymentStatus().started();
			}
<<<<<<< HEAD
			setSelectedToken( token );
			onChange( token );
		},
		[ onChange, setSelectedToken, setPaymentStatus ]
=======
			setActiveSavedToken( token );
		},
		[ setActiveSavedToken, setPaymentStatus ]
>>>>>>> staging
	);

	useEffect( () => {
		const types = Object.keys( customerPaymentMethods );
		const options = types
			.flatMap( ( type ) => {
				const typeMethods = customerPaymentMethods[ type ];
				return typeMethods.map( ( paymentMethod ) => {
<<<<<<< HEAD
					const method =
						standardMethods[ paymentMethod.method.gateway ];
					if ( ! method?.supports?.savePaymentInfo ) {
						return null;
					}
=======
>>>>>>> staging
					const option =
						type === 'cc' || type === 'echeck'
							? getCcOrEcheckPaymentMethodOption(
									paymentMethod,
									setActivePaymentMethod,
									setPaymentStatus
							  )
							: getDefaultPaymentMethodOptions(
									paymentMethod,
									setActivePaymentMethod,
									setPaymentStatus
							  );
<<<<<<< HEAD
					if ( paymentMethod.is_default && selectedToken === '' ) {
=======
					if (
						! activePaymentMethod &&
						paymentMethod.is_default &&
						activeSavedToken === ''
					) {
>>>>>>> staging
						updateToken( paymentMethod.tokenId + '' );
						option.onChange( paymentMethod.tokenId );
					}
					return option;
				} );
			} )
			.filter( Boolean );
		currentOptions.current = options;
	}, [
		customerPaymentMethods,
		updateToken,
<<<<<<< HEAD
		selectedToken,
=======
		activeSavedToken,
		activePaymentMethod,
>>>>>>> staging
		setActivePaymentMethod,
		setPaymentStatus,
		standardMethods,
	] );

<<<<<<< HEAD
	// In the editor, show `Use a new payment method` option as selected.
	const selectedOption = isEditor ? '0' : selectedToken + '';
	const newPaymentMethodOption = {
		value: '0',
		label: __( 'Use a new payment method', 'woo-gutenberg-product-blocks' ),
		name: `wc-saved-payment-method-token-new`,
	};
	return currentOptions.current.length > 0 ? (
		<RadioControl
			id={ 'wc-payment-method-saved-tokens' }
			selected={ selectedOption }
			onChange={ updateToken }
			options={ [ ...currentOptions.current, newPaymentMethodOption ] }
=======
	return currentOptions.current.length > 0 ? (
		<RadioControl
			id={ 'wc-payment-method-saved-tokens' }
			selected={ activeSavedToken }
			onChange={ updateToken }
			options={ currentOptions.current }
>>>>>>> staging
		/>
	) : null;
};

<<<<<<< HEAD
SavedPaymentMethodOptions.propTypes = {
	onChange: PropTypes.func.isRequired,
};

=======
>>>>>>> staging
export default SavedPaymentMethodOptions;
