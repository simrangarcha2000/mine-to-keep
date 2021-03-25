/**
 * External dependencies
 */
import { number, select } from '@storybook/addon-knobs';
<<<<<<< HEAD
=======
import { currencyKnob } from '@woocommerce/knobs';
>>>>>>> staging

/**
 * Internal dependencies
 */
import ProductPrice from '../';

export default {
	title: 'WooCommerce Blocks/@base-components/ProductPrice',
	component: ProductPrice,
};

<<<<<<< HEAD
const getKnobs = () => {
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currencies = [
		{
			label: 'USD',
			code: 'USD',
			symbol: '$',
			thousandSeparator: ',',
			decimalSeparator: '.',
			minorUnit: 2,
			prefix: '$',
			suffix: '',
		},
		{
			label: 'EUR',
			code: 'EUR',
			symbol: '€',
			thousandSeparator: '.',
			decimalSeparator: ',',
			minorUnit: 2,
			prefix: '',
			suffix: '€',
		},
	];
	const currency = select( 'Currency', currencies, currencies[ 0 ] );

	return { align, currency };
};

export const standard = () => {
	const { align, currency } = getKnobs();
=======
export const standard = () => {
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currency = currencyKnob();
>>>>>>> staging
	const price = number( 'Price', 4000 );

	return (
		<ProductPrice align={ align } currency={ currency } price={ price } />
	);
};

export const sale = () => {
<<<<<<< HEAD
	const { align, currency } = getKnobs();
=======
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currency = currencyKnob();
>>>>>>> staging
	const price = number( 'Price', 3000 );
	const regularPrice = number( 'Regular price', 4000 );

	return (
		<ProductPrice
			align={ align }
			currency={ currency }
			price={ price }
			regularPrice={ regularPrice }
		/>
	);
};

export const range = () => {
<<<<<<< HEAD
	const { align, currency } = getKnobs();
=======
	const align = select( 'Align', [ 'left', 'center', 'right' ], 'left' );
	const currency = currencyKnob();
>>>>>>> staging
	const minPrice = number( 'Min price', 3000 );
	const maxPrice = number( 'Max price', 5000 );

	return (
		<ProductPrice
			align={ align }
			currency={ currency }
			minPrice={ minPrice }
			maxPrice={ maxPrice }
		/>
	);
};
