/**
 * External dependencies
 */
import {
	OrderSummary,
<<<<<<< HEAD
	SubtotalsItem,
	TotalsFeesItem,
	TotalsCouponCodeInput,
	TotalsDiscountItem,
	TotalsFooterItem,
	TotalsShippingItem,
	TotalsTaxesItem,
} from '@woocommerce/base-components/cart-checkout';
import { useShippingDataContext } from '@woocommerce/base-context';
import { getCurrencyFromPriceResponse } from '@woocommerce/base-utils';
=======
	TotalsCoupon,
	TotalsDiscount,
	TotalsFooterItem,
	TotalsShipping,
} from '@woocommerce/base-components/cart-checkout';
import {
	Subtotal,
	TotalsFees,
	TotalsTaxes,
	ExperimentalOrderMeta,
} from '@woocommerce/blocks-checkout';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import { useShippingDataContext } from '@woocommerce/base-context';
>>>>>>> staging
import {
	COUPONS_ENABLED,
	DISPLAY_CART_PRICES_INCLUDING_TAX,
} from '@woocommerce/block-settings';
import { useStoreCartCoupons } from '@woocommerce/base-hooks';

const CheckoutSidebar = ( {
	cartCoupons = [],
	cartItems = [],
<<<<<<< HEAD
=======
	cartFees = [],
>>>>>>> staging
	cartTotals = {},
} ) => {
	const {
		applyCoupon,
		removeCoupon,
		isApplyingCoupon,
		isRemovingCoupon,
	} = useStoreCartCoupons();

	const { needsShipping } = useShippingDataContext();
	const totalsCurrency = getCurrencyFromPriceResponse( cartTotals );

	return (
		<>
			<OrderSummary cartItems={ cartItems } />
<<<<<<< HEAD
			<SubtotalsItem currency={ totalsCurrency } values={ cartTotals } />
			<TotalsFeesItem currency={ totalsCurrency } values={ cartTotals } />
			<TotalsDiscountItem
=======
			<Subtotal currency={ totalsCurrency } values={ cartTotals } />
			<TotalsFees currency={ totalsCurrency } cartFees={ cartFees } />
			<TotalsDiscount
>>>>>>> staging
				cartCoupons={ cartCoupons }
				currency={ totalsCurrency }
				isRemovingCoupon={ isRemovingCoupon }
				removeCoupon={ removeCoupon }
				values={ cartTotals }
			/>
			{ needsShipping && (
<<<<<<< HEAD
				<TotalsShippingItem
=======
				<TotalsShipping
>>>>>>> staging
					showCalculator={ false }
					showRateSelector={ false }
					values={ cartTotals }
					currency={ totalsCurrency }
				/>
			) }
			{ ! DISPLAY_CART_PRICES_INCLUDING_TAX && (
<<<<<<< HEAD
				<TotalsTaxesItem
=======
				<TotalsTaxes
>>>>>>> staging
					currency={ totalsCurrency }
					values={ cartTotals }
				/>
			) }
			{ COUPONS_ENABLED && (
<<<<<<< HEAD
				<TotalsCouponCodeInput
=======
				<TotalsCoupon
>>>>>>> staging
					onSubmit={ applyCoupon }
					initialOpen={ false }
					isLoading={ isApplyingCoupon }
				/>
			) }
			<TotalsFooterItem
				currency={ totalsCurrency }
				values={ cartTotals }
			/>
<<<<<<< HEAD
=======
			<ExperimentalOrderMeta.Slot />
>>>>>>> staging
		</>
	);
};

export default CheckoutSidebar;
