/**
 * External dependencies
 */
<<<<<<< HEAD
import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { CART_STORE_KEY as storeKey } from '@woocommerce/block-data';
import { useThrowError } from '@woocommerce/base-hooks';

/**
 * This is a custom hook for loading the selected shipping rate from the cart store and actions for selecting a rate.
See also: https://github.com/woocommerce/woocommerce-gutenberg-products-block/tree/trunk/src/RestApi/StoreApi
 *
 * @param {Array} shippingRates an array of packages with shipping rates.
 * @return {Object} This hook will return an object with two properties:
 * - selectShippingRate    A function that immediately returns the selected
 * rate and dispatches an action generator.
 * - selectedShippingRates An object of selected shipping rates and package id as key, maintained
 * locally by a state and updated optimistically, this will only return packages that has selected
 * shipping rates.
 *
 */
export const useSelectShippingRate = ( shippingRates ) => {
	const throwError = useThrowError();
	const derivedSelectedRates = useMemo(
		() =>
			shippingRates
				.map(
					// the API responds with those keys.
					/* eslint-disable camelcase */
					( p ) => [
						p.package_id,
						p.shipping_rates.find( ( rate ) => rate.selected )
							?.rate_id,
					]
					/* eslint-enable */
				)
				// A fromEntries ponyfill, creates an object from an array of arrays.
				.reduce( ( obj, [ key, val ] ) => {
					if ( val ) {
						obj[ key ] = val;
					}
					return obj;
				}, {} ),
		[ shippingRates ]
	);

	const [ selectedShippingRates, setSelectedShipping ] = useState(
		derivedSelectedRates
	);

	// useState initial state is always remembered, so even if that value changes,
	// useState won't update, we're forcing it to update if the initial value changes,
	// useMemo helps us not running this function when we don't need to.
	useEffect( () => {
		setSelectedShipping( derivedSelectedRates );
	}, [ derivedSelectedRates ] );
	const { selectShippingRate } = useDispatch( storeKey );
	const isSelectingRate = useSelect( ( select ) => {
		return select( storeKey ).isShippingRateBeingSelected();
	}, [] );
	const setRate = ( newShippingRate, packageId ) => {
		setSelectedShipping( {
			...selectedShippingRates,
			[ packageId ]: newShippingRate,
		} );
		selectShippingRate( newShippingRate, packageId ).catch( ( error ) => {
			// we throw this error because an error on selecting a rate
			// is problematic.
			throwError( error );
		} );
	};
	return {
		selectShippingRate: setRate,
		selectedShippingRates,
=======
import { useState, useEffect, useRef, useCallback } from '@wordpress/element';
import isShallowEqual from '@wordpress/is-shallow-equal';

/**
 * Internal dependencies
 */
import { useSelectShippingRates } from './use-select-shipping-rates';

/**
 * Selected rates are derived by looping over the shipping rates.
 *
 * @param {Array} shippingRates Array of shipping rates.
 * @return {string} Selected rate id.
 */
// This will find the selected rate ID in an array of shipping rates.
const deriveSelectedRateId = ( shippingRates ) =>
	shippingRates.find( ( rate ) => rate.selected )?.rate_id;

/**
 * This is a custom hook for tracking selected shipping rates for a package and selecting a rate. State is used so
 * changes are reflected in the UI instantly.
 *
 * @param {string} packageId Package ID to select rates for.
 * @param {Array} shippingRates an array of packages with shipping rates.
 * @return {Object} This hook will return an object with these properties:
 * 		- selectShippingRate: A function that immediately returns the selected rate and dispatches an action generator.
 * 		- selectedShippingRate: The selected rate id.
 *		- isSelectingRate: True when rates are being resolved to the API.
 */
export const useSelectShippingRate = ( packageId, shippingRates ) => {
	// Rates are selected via the shipping data context provider.
	const { selectShippingRate, isSelectingRate } = useSelectShippingRates();

	// Selected rates are stored in state. This allows shipping rates changes to be shown in the UI instantly.
	// Defaults to the currently selected rate_id.
	const [ selectedShippingRate, setSelectedShippingRate ] = useState( () =>
		deriveSelectedRateId( shippingRates )
	);

	// This ref is used to track when changes come in via the props. When the incoming shipping rates change, update our local state if there are changes to selected methods.
	const currentShippingRates = useRef( shippingRates );
	useEffect( () => {
		if ( ! isShallowEqual( currentShippingRates.current, shippingRates ) ) {
			currentShippingRates.current = shippingRates;
			setSelectedShippingRate( deriveSelectedRateId( shippingRates ) );
		}
	}, [ shippingRates ] );

	// Sets a rate for a package in state (so changes are shown right away to consumers of the hook) and in the stores.
	const setPackageRateId = useCallback(
		( newShippingRate ) => {
			setSelectedShippingRate( newShippingRate );
			selectShippingRate( newShippingRate, packageId );
		},
		[ packageId, selectShippingRate ]
	);

	return {
		selectShippingRate: setPackageRateId,
		selectedShippingRate,
>>>>>>> staging
		isSelectingRate,
	};
};
