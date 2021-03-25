/**
 * External dependencies
 */
import {
	createContext,
	useContext,
	useReducer,
	useEffect,
	useMemo,
	useRef,
} from '@wordpress/element';
<<<<<<< HEAD
import { useStoreCart, useSelectShippingRate } from '@woocommerce/base-hooks';
import {
	useCheckoutContext,
	useCustomerDataContext,
} from '@woocommerce/base-context';
=======
import { useStoreCart, useSelectShippingRates } from '@woocommerce/base-hooks';
import isShallowEqual from '@wordpress/is-shallow-equal';
import { deriveSelectedShippingRates } from '@woocommerce/base-utils';
>>>>>>> staging

/**
 * Internal dependencies
 */
<<<<<<< HEAD
import {
	ERROR_TYPES,
	DEFAULT_SHIPPING_CONTEXT_DATA,
	shippingErrorCodes,
} from './constants';
=======
import { ERROR_TYPES, DEFAULT_SHIPPING_CONTEXT_DATA } from './constants';
import { hasInvalidShippingAddress } from './utils';
import { errorStatusReducer } from './reducers';
>>>>>>> staging
import {
	EMIT_TYPES,
	emitterSubscribers,
	reducer as emitReducer,
	emitEvent,
} from './event-emit';
<<<<<<< HEAD
=======
import { useCheckoutContext } from '../checkout-state';
import { useCustomerDataContext } from '../customer';
>>>>>>> staging

/**
 * @typedef {import('@woocommerce/type-defs/contexts').ShippingDataContext} ShippingDataContext
 * @typedef {import('react')} React
 */

const { NONE, INVALID_ADDRESS, UNKNOWN } = ERROR_TYPES;
<<<<<<< HEAD

/**
 * Reducer for shipping status state
 *
 * @param {string} state  The current status.
 * @param {Object} action The incoming action.
 * @param {string} action.type The type of action.
 */
const errorStatusReducer = ( state, { type } ) => {
	if ( Object.values( ERROR_TYPES ).includes( type ) ) {
		return type;
	}
	return state;
};

const ShippingDataContext = createContext( DEFAULT_SHIPPING_CONTEXT_DATA );

/**
 * @return {ShippingDataContext} Returns data and functions related to
 *                               shipping methods.
=======
const ShippingDataContext = createContext( DEFAULT_SHIPPING_CONTEXT_DATA );

/**
 * @return {ShippingDataContext} Returns data and functions related to shipping methods.
>>>>>>> staging
 */
export const useShippingDataContext = () => {
	return useContext( ShippingDataContext );
};

<<<<<<< HEAD
const hasInvalidShippingAddress = ( errors ) => {
	return errors.some( ( error ) => {
		if (
			error.code &&
			Object.values( shippingErrorCodes ).includes( error.code )
		) {
			return true;
		}
		return false;
	} );
};

/**
 * The shipping data provider exposes the interface for shipping in the
 * checkout/cart.
=======
/**
 * The shipping data provider exposes the interface for shipping in the checkout/cart.
>>>>>>> staging
 *
 * @param {Object} props Incoming props for provider
 * @param {React.ReactElement} props.children
 */
export const ShippingDataProvider = ( { children } ) => {
	const { dispatchActions } = useCheckoutContext();
	const { shippingAddress, setShippingAddress } = useCustomerDataContext();
	const {
		cartNeedsShipping: needsShipping,
		cartHasCalculatedShipping: hasCalculatedShipping,
		shippingRates,
		shippingRatesLoading,
		cartErrors,
	} = useStoreCart();
<<<<<<< HEAD
=======
	const { selectShippingRate, isSelectingRate } = useSelectShippingRates();
>>>>>>> staging
	const [ shippingErrorStatus, dispatchErrorStatus ] = useReducer(
		errorStatusReducer,
		NONE
	);
	const [ observers, subscriber ] = useReducer( emitReducer, {} );
	const currentObservers = useRef( observers );
<<<<<<< HEAD
	const {
		selectShippingRate: setSelectedRates,
		selectedShippingRates: selectedRates,
		isSelectingRate,
	} = useSelectShippingRate( shippingRates );
=======
>>>>>>> staging
	const eventSubscribers = useMemo(
		() => ( {
			onShippingRateSuccess: emitterSubscribers( subscriber ).onSuccess,
			onShippingRateFail: emitterSubscribers( subscriber ).onFail,
			onShippingRateSelectSuccess: emitterSubscribers( subscriber )
				.onSelectSuccess,
			onShippingRateSelectFail: emitterSubscribers( subscriber )
				.onSelectFail,
		} ),
		[ subscriber ]
	);

	// set observers on ref so it's always current.
	useEffect( () => {
		currentObservers.current = observers;
	}, [ observers ] );

<<<<<<< HEAD
=======
	// set selected rates on ref so it's always current.
	const selectedRates = useRef( () =>
		deriveSelectedShippingRates( shippingRates )
	);
	useEffect( () => {
		const derivedSelectedRates = deriveSelectedShippingRates(
			shippingRates
		);
		if ( ! isShallowEqual( selectedRates.current, derivedSelectedRates ) ) {
			selectedRates.current = derivedSelectedRates;
		}
	}, [ shippingRates ] );

>>>>>>> staging
	// increment/decrement checkout calculating counts when shipping is loading.
	useEffect( () => {
		if ( shippingRatesLoading ) {
			dispatchActions.incrementCalculating();
		} else {
			dispatchActions.decrementCalculating();
		}
	}, [ shippingRatesLoading, dispatchActions ] );

<<<<<<< HEAD
	// increment/decrement checkout calculating counts when shipping rates are
	// being selected.
=======
	// increment/decrement checkout calculating counts when shipping rates are being selected.
>>>>>>> staging
	useEffect( () => {
		if ( isSelectingRate ) {
			dispatchActions.incrementCalculating();
		} else {
			dispatchActions.decrementCalculating();
		}
	}, [ isSelectingRate, dispatchActions ] );

	// set shipping error status if there are shipping error codes
	useEffect( () => {
		if (
			cartErrors.length > 0 &&
			hasInvalidShippingAddress( cartErrors )
		) {
			dispatchErrorStatus( { type: INVALID_ADDRESS } );
		} else {
			dispatchErrorStatus( { type: NONE } );
		}
	}, [ cartErrors ] );

	const currentErrorStatus = useMemo(
		() => ( {
			isPristine: shippingErrorStatus === NONE,
			isValid: shippingErrorStatus === NONE,
			hasInvalidAddress: shippingErrorStatus === INVALID_ADDRESS,
			hasError:
				shippingErrorStatus === UNKNOWN ||
				shippingErrorStatus === INVALID_ADDRESS,
		} ),
		[ shippingErrorStatus ]
	);

	// emit events.
	useEffect( () => {
		if (
			! shippingRatesLoading &&
			( shippingRates.length === 0 || currentErrorStatus.hasError )
		) {
			emitEvent(
				currentObservers.current,
				EMIT_TYPES.SHIPPING_RATES_FAIL,
				{
					hasInvalidAddress: currentErrorStatus.hasInvalidAddress,
					hasError: currentErrorStatus.hasError,
				}
			);
		}
	}, [
		shippingRates,
		shippingRatesLoading,
		currentErrorStatus.hasError,
		currentErrorStatus.hasInvalidAddress,
	] );

	useEffect( () => {
		if (
			! shippingRatesLoading &&
			shippingRates.length > 0 &&
			! currentErrorStatus.hasError
		) {
			emitEvent(
				currentObservers.current,
				EMIT_TYPES.SHIPPING_RATES_SUCCESS,
				shippingRates
			);
		}
	}, [ shippingRates, shippingRatesLoading, currentErrorStatus.hasError ] );

	// emit shipping rate selection events.
	useEffect( () => {
<<<<<<< HEAD
		if ( ! isSelectingRate && currentErrorStatus.hasError ) {
=======
		if ( isSelectingRate ) {
			return;
		}
		if ( currentErrorStatus.hasError ) {
>>>>>>> staging
			emitEvent(
				currentObservers.current,
				EMIT_TYPES.SHIPPING_RATE_SELECT_FAIL,
				{
					hasError: currentErrorStatus.hasError,
					hasInvalidAddress: currentErrorStatus.hasInvalidAddress,
				}
			);
<<<<<<< HEAD
		}
	}, [
		selectedRates,
=======
		} else {
			emitEvent(
				currentObservers.current,
				EMIT_TYPES.SHIPPING_RATE_SELECT_SUCCESS,
				selectedRates.current
			);
		}
	}, [
>>>>>>> staging
		isSelectingRate,
		currentErrorStatus.hasError,
		currentErrorStatus.hasInvalidAddress,
	] );

<<<<<<< HEAD
	useEffect( () => {
		if (
			! isSelectingRate &&
			selectedRates &&
			! currentErrorStatus.hasError
		) {
			emitEvent(
				currentObservers.current,
				EMIT_TYPES.SHIPPING_RATE_SELECT_SUCCESS,
				selectedRates
			);
		}
	}, [ selectedRates, isSelectingRate, currentErrorStatus.hasError ] );

=======
>>>>>>> staging
	/**
	 * @type {ShippingDataContext}
	 */
	const ShippingData = {
		shippingErrorStatus: currentErrorStatus,
		dispatchErrorStatus,
		shippingErrorTypes: ERROR_TYPES,
		shippingRates,
<<<<<<< HEAD
		setShippingRates: setSelectedRates,
		shippingRatesLoading,
		selectedRates,
		setSelectedRates,
		isSelectingRate,
		shippingAddress,
		setShippingAddress,
		onShippingRateSuccess: eventSubscribers.onShippingRateSuccess,
		onShippingRateFail: eventSubscribers.onShippingRateFail,
		onShippingRateSelectSuccess:
			eventSubscribers.onShippingRateSelectSuccess,
		onShippingRateSelectFail: eventSubscribers.onShippingRateSelectFail,
		needsShipping,
		hasCalculatedShipping,
	};
=======
		shippingRatesLoading,
		selectedRates: selectedRates.current,
		setSelectedRates: selectShippingRate,
		isSelectingRate,
		shippingAddress,
		setShippingAddress,
		needsShipping,
		hasCalculatedShipping,
		...eventSubscribers,
	};

>>>>>>> staging
	return (
		<>
			<ShippingDataContext.Provider value={ ShippingData }>
				{ children }
			</ShippingDataContext.Provider>
		</>
	);
};
