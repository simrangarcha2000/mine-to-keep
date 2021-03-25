/**
 * External dependencies
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {
	registerPaymentMethod,
	__experimentalDeRegisterPaymentMethod,
} from '@woocommerce/blocks-registry';
<<<<<<< HEAD
import { PaymentMethodDataProvider } from '@woocommerce/base-context';
=======
import {
	PaymentMethodDataProvider,
	usePaymentMethodDataContext,
} from '@woocommerce/base-context';
>>>>>>> staging

/**
 * Internal dependencies
 */
import PaymentMethods from '../payment-methods';

<<<<<<< HEAD
jest.mock( '../payment-method-options', () => () => (
	<span>Payment method options</span>
) );
jest.mock( '../saved-payment-method-options', () => ( { onChange } ) => (
	<>
		<span>Saved payment method options</span>
		<button onClick={ () => onChange( '1' ) }>Select saved</button>
		<button onClick={ () => onChange( '0' ) }>Select not saved</button>
=======
jest.mock( '../saved-payment-method-options', () => ( { onChange } ) => {
	return (
		<>
			<span>Saved payment method options</span>
			<button onClick={ () => onChange( '0' ) }>Select saved</button>
		</>
	);
} );

jest.mock( '../../radio-control-accordion', () => ( { onChange } ) => (
	<>
		<span>Payment method options</span>
		<button onClick={ () => onChange( 'stripe' ) }>
			Select new payment
		</button>
>>>>>>> staging
	</>
) );

const registerMockPaymentMethods = () => {
<<<<<<< HEAD
	[ 'cheque' ].forEach( ( name ) => {
=======
	[ 'stripe' ].forEach( ( name ) => {
>>>>>>> staging
		registerPaymentMethod( {
			name,
			label: name,
			content: <div>A payment method</div>,
			edit: <div>A payment method</div>,
			icons: null,
			canMakePayment: () => true,
<<<<<<< HEAD
=======
			supports: {
				showSavedCards: true,
				showSaveOption: true,
				features: [ 'products' ],
			},
>>>>>>> staging
			ariaLabel: name,
		} );
	} );
};

const resetMockPaymentMethods = () => {
<<<<<<< HEAD
	[ 'cheque' ].forEach( ( name ) => {
=======
	[ 'stripe' ].forEach( ( name ) => {
>>>>>>> staging
		__experimentalDeRegisterPaymentMethod( name );
	} );
};

describe( 'PaymentMethods', () => {
	test( 'should show no payment methods component when there are no payment methods', async () => {
		render(
			<PaymentMethodDataProvider>
				<PaymentMethods />
			</PaymentMethodDataProvider>
		);

		await waitFor( () => {
			const noPaymentMethods = screen.queryAllByText(
				/no payment methods available/
			);
			// We might get more than one match because the `speak()` function
			// creates an extra `div` with the notice contents used for a11y.
			expect( noPaymentMethods.length ).toBeGreaterThanOrEqual( 1 );
		} );
	} );

<<<<<<< HEAD
	test( 'should hide/show PaymentMethodOptions when a saved payment method is checked/unchecked', async () => {
=======
	test( 'selecting new payment method', async () => {
		const ShowActivePaymentMethod = () => {
			const {
				activePaymentMethod,
				activeSavedToken,
			} = usePaymentMethodDataContext();
			return (
				<>
					<div>
						{ 'Active Payment Method: ' + activePaymentMethod }
					</div>
					<div>{ 'Active Saved Token: ' + activeSavedToken }</div>
				</>
			);
		};

>>>>>>> staging
		registerMockPaymentMethods();
		render(
			<PaymentMethodDataProvider>
				<PaymentMethods />
<<<<<<< HEAD
=======
				<ShowActivePaymentMethod />
>>>>>>> staging
			</PaymentMethodDataProvider>
		);

		await waitFor( () => {
			const savedPaymentMethodOptions = screen.queryByText(
				/Saved payment method options/
			);
			const paymentMethodOptions = screen.queryByText(
				/Payment method options/
			);
			expect( savedPaymentMethodOptions ).not.toBeNull();
			expect( paymentMethodOptions ).not.toBeNull();
<<<<<<< HEAD
		} );

		fireEvent.click( screen.getByText( 'Select saved' ) );

		await waitFor( () => {
			const savedPaymentMethodOptions = screen.queryByText(
				/Saved payment method options/
			);
			const paymentMethodOptions = screen.queryByText(
				/Payment method options/
			);
			expect( savedPaymentMethodOptions ).not.toBeNull();
			expect( paymentMethodOptions ).toBeNull();
		} );

		fireEvent.click( screen.getByText( 'Select not saved' ) );

		await waitFor( () => {
			const savedPaymentMethodOptions = screen.queryByText(
				/Saved payment method options/
			);
			const paymentMethodOptions = screen.queryByText(
				/Payment method options/
			);
			expect( savedPaymentMethodOptions ).not.toBeNull();
			expect( paymentMethodOptions ).not.toBeNull();
		} );
=======
			const savedToken = screen.queryByText(
				/Active Payment Method: stripe/
			);
			expect( savedToken ).toBeNull();
		} );

		fireEvent.click( screen.getByText( 'Select new payment' ) );

		await waitFor( () => {
			const activePaymentMethod = screen.queryByText(
				/Active Payment Method: stripe/
			);
			expect( activePaymentMethod ).not.toBeNull();
		} );

>>>>>>> staging
		resetMockPaymentMethods();
	} );
} );
