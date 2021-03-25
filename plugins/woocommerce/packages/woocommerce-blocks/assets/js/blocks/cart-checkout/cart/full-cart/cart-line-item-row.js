/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import QuantitySelector from '@woocommerce/base-components/quantity-selector';
import ProductPrice from '@woocommerce/base-components/product-price';
<<<<<<< HEAD
import { getCurrency } from '@woocommerce/base-utils';
import { useStoreCartItemQuantity } from '@woocommerce/base-hooks';
import { Icon, trash } from '@woocommerce/icons';
=======
import ProductName from '@woocommerce/base-components/product-name';
import { useStoreCartItemQuantity } from '@woocommerce/base-hooks';
>>>>>>> staging
import {
	ProductBackorderBadge,
	ProductImage,
	ProductLowStockBadge,
	ProductMetadata,
<<<<<<< HEAD
	ProductName,
	ProductSaleBadge,
} from '@woocommerce/base-components/cart-checkout';
=======
	ProductSaleBadge,
} from '@woocommerce/base-components/cart-checkout';
import { getCurrency } from '@woocommerce/price-format';
>>>>>>> staging
import Dinero from 'dinero.js';

/**
 * @typedef {import('@woocommerce/type-defs/cart').CartItem} CartItem
 */

/**
 * Convert a Dinero object with precision to store currency minor unit.
 *
 * @param {Dinero} priceObject Price object to convert.
 * @param {Object} currency    Currency data.
 * @return {number} Amount with new minor unit precision.
 */
const getAmountFromRawPrice = ( priceObject, currency ) => {
	return priceObject.convertPrecision( currency.minorUnit ).getAmount();
};

/**
 * Cart line item table row component.
 *
 * @param {Object} props
 * @param {CartItem|Object} props.lineItem
 */
const CartLineItemRow = ( { lineItem = {} } ) => {
	const {
		name = '',
		catalog_visibility: catalogVisibility = '',
		short_description: shortDescription = '',
		description: fullDescription = '',
		low_stock_remaining: lowStockRemaining = null,
		show_backorder_badge: showBackorderBadge = false,
		quantity_limit: quantityLimit = 99,
		permalink = '',
		images = [],
		variation = [],
<<<<<<< HEAD
=======
		item_data: itemData = [],
>>>>>>> staging
		prices = {
			currency_code: 'USD',
			currency_minor_unit: 2,
			currency_symbol: '$',
			currency_prefix: '$',
			currency_suffix: '',
			currency_decimal_separator: '.',
			currency_thousand_separator: ',',
			price: '0',
			regular_price: '0',
			sale_price: '0',
			price_range: null,
			raw_prices: {
				precision: 6,
				price: '0',
				regular_price: '0',
				sale_price: '0',
			},
		},
	} = lineItem;

	const {
		quantity,
		changeQuantity,
		removeItem,
		isPendingDelete,
	} = useStoreCartItemQuantity( lineItem );

	const currency = getCurrency( prices );
<<<<<<< HEAD
	const regularAmount = Dinero( {
		amount: parseInt( prices.raw_prices.regular_price, 10 ),
		precision: parseInt( prices.raw_prices.precision, 10 ),
	} ).multiply( quantity );
	const purchaseAmount = Dinero( {
		amount: parseInt( prices.raw_prices.price, 10 ),
		precision: parseInt( prices.raw_prices.precision, 10 ),
	} ).multiply( quantity );
=======
	const regularAmountSingle = Dinero( {
		amount: parseInt( prices.raw_prices.regular_price, 10 ),
		precision: parseInt( prices.raw_prices.precision, 10 ),
	} );
	const purchaseAmountSingle = Dinero( {
		amount: parseInt( prices.raw_prices.price, 10 ),
		precision: parseInt( prices.raw_prices.precision, 10 ),
	} );
	const regularAmount = regularAmountSingle.multiply( quantity );
	const purchaseAmount = purchaseAmountSingle.multiply( quantity );
	const saleAmountSingle = regularAmountSingle.subtract(
		purchaseAmountSingle
	);
>>>>>>> staging
	const saleAmount = regularAmount.subtract( purchaseAmount );
	const firstImage = images.length ? images[ 0 ] : {};
	const isProductHiddenFromCatalog =
		catalogVisibility === 'hidden' || catalogVisibility === 'search';

	return (
		<tr
			className={ classnames( 'wc-block-cart-items__row', {
				'is-disabled': isPendingDelete,
			} ) }
		>
			{ /* If the image has no alt text, this link is unnecessary and can be hidden. */ }
			<td
				className="wc-block-cart-item__image"
				aria-hidden={ ! firstImage.alt }
			>
				{ /* We don't need to make it focusable, because product name has the same link. */ }
				{ isProductHiddenFromCatalog ? (
					<ProductImage image={ firstImage } />
				) : (
					<a href={ permalink } tabIndex={ -1 }>
						<ProductImage image={ firstImage } />
					</a>
				) }
			</td>
			<td className="wc-block-cart-item__product">
				<ProductName
<<<<<<< HEAD
					permalink={ permalink }
					name={ name }
					disabled={ isPendingDelete || isProductHiddenFromCatalog }
=======
					disabled={ isPendingDelete || isProductHiddenFromCatalog }
					name={ name }
					permalink={ permalink }
>>>>>>> staging
				/>
				{ showBackorderBadge ? (
					<ProductBackorderBadge />
				) : (
					!! lowStockRemaining && (
						<ProductLowStockBadge
							lowStockRemaining={ lowStockRemaining }
						/>
					)
				) }
<<<<<<< HEAD
				<ProductMetadata
					shortDescription={ shortDescription }
					fullDescription={ fullDescription }
					variation={ variation }
				/>
			</td>
			<td className="wc-block-cart-item__quantity">
				<QuantitySelector
					disabled={ isPendingDelete }
					quantity={ quantity }
					maximum={ quantityLimit }
					onChange={ changeQuantity }
					itemName={ name }
				/>
				<button
					className="wc-block-cart-item__remove-link"
					onClick={ removeItem }
					disabled={ isPendingDelete }
				>
					{ __( 'Remove item', 'woocommerce' ) }
				</button>
				<button
					className="wc-block-cart-item__remove-icon"
					onClick={ removeItem }
				>
					<span className="screen-reader-text">
						{ __( 'Remove item', 'woocommerce' ) }
					</span>
					<Icon srcElement={ trash } />
				</button>
=======

				<div className="wc-block-cart-item__prices">
					<ProductPrice
						currency={ currency }
						regularPrice={ getAmountFromRawPrice(
							regularAmountSingle,
							currency
						) }
						price={ getAmountFromRawPrice(
							purchaseAmountSingle,
							currency
						) }
					/>
				</div>

				<ProductSaleBadge
					currency={ currency }
					saleAmount={ getAmountFromRawPrice(
						saleAmountSingle,
						currency
					) }
				/>

				<ProductMetadata
					shortDescription={ shortDescription }
					fullDescription={ fullDescription }
					itemData={ itemData }
					variation={ variation }
				/>

				<div className="wc-block-cart-item__quantity">
					<QuantitySelector
						disabled={ isPendingDelete }
						quantity={ quantity }
						maximum={ quantityLimit }
						onChange={ changeQuantity }
						itemName={ name }
					/>
					<button
						className="wc-block-cart-item__remove-link"
						onClick={ removeItem }
						disabled={ isPendingDelete }
					>
						{ __( 'Remove item', 'woocommerce' ) }
					</button>
				</div>
>>>>>>> staging
			</td>
			<td className="wc-block-cart-item__total">
				<ProductPrice
					currency={ currency }
<<<<<<< HEAD
					regularPrice={ getAmountFromRawPrice(
						regularAmount,
						currency
					) }
					price={ getAmountFromRawPrice( purchaseAmount, currency ) }
				/>
				<ProductSaleBadge
					currency={ currency }
					saleAmount={ getAmountFromRawPrice( saleAmount, currency ) }
				/>
=======
					price={ getAmountFromRawPrice( purchaseAmount, currency ) }
				/>

				{ quantity > 1 && (
					<ProductSaleBadge
						currency={ currency }
						saleAmount={ getAmountFromRawPrice(
							saleAmount,
							currency
						) }
					/>
				) }
>>>>>>> staging
			</td>
		</tr>
	);
};

CartLineItemRow.propTypes = {
	lineItem: PropTypes.object,
};

export default CartLineItemRow;
