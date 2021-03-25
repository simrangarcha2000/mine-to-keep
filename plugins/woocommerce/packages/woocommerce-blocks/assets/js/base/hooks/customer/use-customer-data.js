/**
 * External dependencies
 */
import { useDispatch } from '@wordpress/data';
import { useEffect, useState, useCallback, useRef } from '@wordpress/element';
<<<<<<< HEAD
import { useStoreNotices, useStoreCart } from '@woocommerce/base-hooks';
import { CART_STORE_KEY as storeKey } from '@woocommerce/block-data';
import { useDebounce } from 'use-debounce';
import isShallowEqual from '@wordpress/is-shallow-equal';
=======
import { CART_STORE_KEY as storeKey } from '@woocommerce/block-data';
import { useDebounce } from 'use-debounce';
import isShallowEqual from '@wordpress/is-shallow-equal';
import { formatStoreApiErrorMessage } from '@woocommerce/base-utils';
>>>>>>> staging

/**
 * Internal dependencies
 */
import { shouldUpdateAddressStore } from './utils';
<<<<<<< HEAD
=======
import { useStoreNotices } from '../use-store-notices';
import { useStoreCart } from '../cart';
>>>>>>> staging

/**
 * This is a custom hook for syncing customer address data (billing and shipping) with the server.
 */
export const useCustomerData = () => {
	const { updateCustomerData } = useDispatch( storeKey );
	const { addErrorNotice, removeNotice } = useStoreNotices();
<<<<<<< HEAD
	const {
		billingAddress: cartBillingData,
		shippingAddress: cartShippingAddress,
	} = useStoreCart();

	const [ customerData, setCustomerData ] = useState( {
		billingData: cartBillingData,
		shippingAddress: cartShippingAddress,
	} );
	const currentCustomerData = useRef( customerData );
	const [ debouncedCustomerData ] = useDebounce( customerData, 400, {
		equalityFn: ( prevData, newData ) => {
			return ! (
				isShallowEqual( prevData.billingData, newData.billingData ) ||
=======

	// Grab the initial values from the store cart hook.
	const {
		billingAddress: initialBillingAddress,
		shippingAddress: initialShippingAddress,
	} = useStoreCart();

	// State of customer data is tracked here from this point, using the initial values from the useStoreCart hook.
	const [ customerData, setCustomerData ] = useState( {
		billingData: initialBillingAddress,
		shippingAddress: initialShippingAddress,
	} );

	// Store values last sent to the server in a ref to avoid requests unless important fields are changed.
	const previousCustomerData = useRef( customerData );

	// Debounce updates to the customerData state so it's not triggered excessively.
	const [ debouncedCustomerData ] = useDebounce( customerData, 1000, {
		// Default equalityFn is prevData === newData.
		equalityFn: ( prevData, newData ) => {
			return (
				isShallowEqual( prevData.billingData, newData.billingData ) &&
>>>>>>> staging
				isShallowEqual(
					prevData.shippingAddress,
					newData.shippingAddress
				)
			);
		},
	} );

	/**
	 * Set billing data.
	 *
	 * Contains special handling for email and phone so those fields are not overwritten if simply updating address.
	 */
	const setBillingData = useCallback( ( newData ) => {
		setCustomerData( ( prevState ) => {
			return {
				...prevState,
				billingData: {
					...prevState.billingData,
					...newData,
				},
			};
		} );
	}, [] );

<<<<<<< HEAD
=======
	/**
	 * Set shipping data.
	 */
>>>>>>> staging
	const setShippingAddress = useCallback( ( newData ) => {
		setCustomerData( ( prevState ) => ( {
			...prevState,
			shippingAddress: newData,
		} ) );
	}, [] );

<<<<<<< HEAD
	useEffect( () => {
		if (
			! isShallowEqual(
				currentCustomerData.current.billingData,
				cartBillingData
			)
		) {
			currentCustomerData.current.billingData = cartBillingData;
		}
		if (
			! isShallowEqual(
				currentCustomerData.current.shippingAddress,
				cartShippingAddress
			)
		) {
			currentCustomerData.current.shippingAddress = cartShippingAddress;
		}
	}, [ cartBillingData, cartShippingAddress ] );

	useEffect( () => {
		if (
			! (
				shouldUpdateAddressStore(
					currentCustomerData.current.billingData,
					debouncedCustomerData.billingData
				) ||
				shouldUpdateAddressStore(
					currentCustomerData.current.shippingAddress,
					debouncedCustomerData.shippingAddress
				)
=======
	/**
	 * This pushes changes to the API when the local state differs from the address in the cart.
	 */
	useEffect( () => {
		// Only push updates when enough fields are populated.
		if (
			! shouldUpdateAddressStore(
				previousCustomerData.current.billingData,
				debouncedCustomerData.billingData
			) &&
			! shouldUpdateAddressStore(
				previousCustomerData.current.shippingAddress,
				debouncedCustomerData.shippingAddress
>>>>>>> staging
			)
		) {
			return;
		}
<<<<<<< HEAD
		removeNotice( 'address' );
		updateCustomerData( {
			billing_address: debouncedCustomerData.billingData,
			shipping_address: debouncedCustomerData.shippingAddress,
		} ).catch( ( error ) => {
			addErrorNotice( error.message, {
				id: 'address',
			} );
		} );
=======
		previousCustomerData.current = debouncedCustomerData;
		updateCustomerData( {
			billing_address: debouncedCustomerData.billingData,
			shipping_address: debouncedCustomerData.shippingAddress,
		} )
			.then( () => {
				removeNotice( 'checkout' );
			} )
			.catch( ( response ) => {
				addErrorNotice( formatStoreApiErrorMessage( response ), {
					id: 'checkout',
				} );
			} );
>>>>>>> staging
	}, [
		debouncedCustomerData,
		addErrorNotice,
		removeNotice,
		updateCustomerData,
	] );

	return {
		billingData: customerData.billingData,
		shippingAddress: customerData.shippingAddress,
		setBillingData,
		setShippingAddress,
	};
};
