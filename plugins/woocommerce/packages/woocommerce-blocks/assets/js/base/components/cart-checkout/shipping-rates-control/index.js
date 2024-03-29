/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
<<<<<<< HEAD
import { useEffect } from 'react';
=======
import { useEffect } from '@wordpress/element';
>>>>>>> staging
import PropTypes from 'prop-types';
import { speak } from '@wordpress/a11y';
import LoadingMask from '@woocommerce/base-components/loading-mask';
import {
<<<<<<< HEAD
=======
	ShippingRatesControlPackage,
	ExperimentalOrderShippingPackages,
} from '@woocommerce/blocks-checkout';
import {
>>>>>>> staging
	getShippingRatesPackageCount,
	getShippingRatesRateCount,
} from '@woocommerce/base-utils';

/**
<<<<<<< HEAD
 * Internal dependencies
 */
import Packages from './packages';
import './style.scss';

=======
 * @typedef {import('react')} React
 */

/**
 * Renders the shipping rates control element.
 *
 * @param {Object} props Incoming props.
 * @param {Array} props.shippingRates Array of packages containing shipping rates.
 * @param {boolean} props.shippingRatesLoading True when rates are being loaded.
 * @param {string} props.className Class name for package rates.
 * @param {boolean} props.collapsible If true, when multiple packages are rendered they can be toggled open and closed.
 * @param {React.ReactElement} props.noResultsMessage Rendered when there are no packages.
 * @param {Function} props.renderOption Function to render a shipping rate.
 */
>>>>>>> staging
const ShippingRatesControl = ( {
	shippingRates,
	shippingRatesLoading,
	className,
<<<<<<< HEAD
	collapsibleWhenMultiple = false,
=======
	collapsible = false,
>>>>>>> staging
	noResultsMessage,
	renderOption,
} ) => {
	useEffect( () => {
		if ( shippingRatesLoading ) {
			return;
		}
<<<<<<< HEAD
		const packages = getShippingRatesPackageCount( shippingRates );
		const shippingOptions = getShippingRatesRateCount( shippingRates );
		if ( shippingOptions === 0 ) {
			speak(
				__(
					'No shipping options were found.',
					'woocommerce'
				)
			);
		} else if ( packages === 1 ) {
=======
		const packageCount = getShippingRatesPackageCount( shippingRates );
		const shippingOptions = getShippingRatesRateCount( shippingRates );
		if ( packageCount === 1 ) {
>>>>>>> staging
			speak(
				sprintf(
					// translators: %d number of shipping options found.
					_n(
						'%d shipping option was found.',
						'%d shipping options were found.',
						shippingOptions,
						'woocommerce'
					),
					shippingOptions
				)
			);
		} else {
			speak(
				sprintf(
					// translators: %d number of shipping packages packages.
					_n(
						'Shipping option searched for %d package.',
						'Shipping options searched for %d packages.',
<<<<<<< HEAD
						packages,
						'woocommerce'
					),
					packages
=======
						packageCount,
						'woocommerce'
					),
					packageCount
>>>>>>> staging
				) +
					' ' +
					sprintf(
						// translators: %d number of shipping options available.
						_n(
							'%d shipping option was found',
							'%d shipping options were found',
							shippingOptions,
							'woocommerce'
						),
						shippingOptions
					)
			);
		}
	}, [ shippingRatesLoading, shippingRates ] );

	return (
		<LoadingMask
			isLoading={ shippingRatesLoading }
			screenReaderLabel={ __(
				'Loading shipping rates…',
				'woocommerce'
			) }
			showSpinner={ true }
		>
<<<<<<< HEAD
			<Packages
				className={ className }
				collapsible={
					shippingRates.length > 1 && collapsibleWhenMultiple
				}
				noResultsMessage={ noResultsMessage }
				renderOption={ renderOption }
				shippingRates={ shippingRates }
			/>
=======
			<ExperimentalOrderShippingPackages.Slot
				className={ className }
				collapsible={ collapsible }
				noResultsMessage={ noResultsMessage }
				renderOption={ renderOption }
			/>
			<ExperimentalOrderShippingPackages>
				<Packages
					packages={ shippingRates }
					noResultsMessage={ noResultsMessage }
				/>
			</ExperimentalOrderShippingPackages>
>>>>>>> staging
		</LoadingMask>
	);
};

<<<<<<< HEAD
ShippingRatesControl.propTypes = {
	noResultsMessage: PropTypes.node.isRequired,
	renderOption: PropTypes.func.isRequired,
	className: PropTypes.string,
	collapsibleWhenMultiple: PropTypes.bool,
	shippingRates: PropTypes.array,
	shippingRatesLoading: PropTypes.bool,
};

export default ShippingRatesControl;
export { Packages };
=======
/**
 * Renders multiple packages within the slotfill.
 *
 * @param {Object} props Incoming props.
 * @param {Array} props.packages Array of packages.
 * @param {React.ReactElement} props.noResultsMessage Rendered when there are no rates in a package.
 * @param {boolean} props.collapsible If the package should be rendered as a
 * collapsible panel.
 * @param {boolean} props.collapse If the panel should be collapsed by default,
 * only works if collapsible is true.
 * @param {boolean} props.showItems If we should items below the package name.
 * @return {React.ReactElement|Array|null} Rendered components.
 */
const Packages = ( {
	packages,
	collapse,
	showItems,
	collapsible,
	noResultsMessage,
} ) => {
	// If there are no packages, return nothing.
	if ( ! packages.length ) {
		return null;
	}

	return packages.map( ( { package_id: packageId, ...packageData } ) => (
		<ShippingRatesControlPackage
			key={ packageId }
			packageId={ packageId }
			packageData={ packageData }
			collapsible={ collapsible }
			collapse={ collapse }
			showItems={ showItems }
			noResultsMessage={ noResultsMessage }
		/>
	) );
};

ShippingRatesControl.propTypes = {
	noResultsMessage: PropTypes.node.isRequired,
	renderOption: PropTypes.func,
	className: PropTypes.string,
	collapsible: PropTypes.bool,
	shippingRates: PropTypes.array,
	shippingRatesLoading: PropTypes.bool,
};
export default ShippingRatesControl;
>>>>>>> staging
