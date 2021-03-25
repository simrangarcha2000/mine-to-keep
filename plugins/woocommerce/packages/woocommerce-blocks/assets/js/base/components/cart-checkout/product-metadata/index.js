/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
<<<<<<< HEAD
import ProductVariationData from '../product-variation-data';
=======
import ProductDetails from '../product-details';
>>>>>>> staging
import ProductSummary from '../product-summary';
import './style.scss';

const ProductMetadata = ( {
	shortDescription = '',
	fullDescription = '',
<<<<<<< HEAD
=======
	itemData = [],
>>>>>>> staging
	variation = [],
} ) => {
	return (
		<div className="wc-block-components-product-metadata">
			<ProductSummary
				className="wc-block-components-product-metadata__description"
				shortDescription={ shortDescription }
				fullDescription={ fullDescription }
			/>
<<<<<<< HEAD
			<ProductVariationData
				className="wc-block-components-product-metadata__variation-data"
				variation={ variation }
=======
			<ProductDetails details={ itemData } />
			<ProductDetails
				details={ variation.map( ( { attribute = '', value } ) => ( {
					name: attribute,
					value,
				} ) ) }
>>>>>>> staging
			/>
		</div>
	);
};

ProductMetadata.propTypes = {
	shortDescription: PropTypes.string,
	fullDescription: PropTypes.string,
<<<<<<< HEAD
	variation: PropTypes.array,
=======
	itemData: PropTypes.array,
	variation: PropTypes.arrayOf(
		PropTypes.shape( {
			attribute: PropTypes.string,
			value: PropTypes.string.isRequired,
		} )
	),
>>>>>>> staging
};

export default ProductMetadata;
