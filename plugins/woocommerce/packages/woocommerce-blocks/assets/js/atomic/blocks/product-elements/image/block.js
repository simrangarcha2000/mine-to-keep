/**
 * External dependencies
 */
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { useState } from '@wordpress/element';
=======
import { useState, Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
>>>>>>> staging
import classnames from 'classnames';
import { PLACEHOLDER_IMG_SRC } from '@woocommerce/block-settings';
import {
	useInnerBlockLayoutContext,
	useProductDataContext,
} from '@woocommerce/shared-context';
import { withProductDataContext } from '@woocommerce/shared-hocs';
<<<<<<< HEAD
import { isEmpty } from 'lodash';
=======
>>>>>>> staging

/**
 * Internal dependencies
 */
import ProductSaleBadge from './../sale-badge/block';
import './style.scss';

/**
 * Product Image Block Component.
 *
 * @param {Object} props                  Incoming props.
 * @param {string} [props.className]      CSS Class name for the component.
 * @param {string} [props.imageSizing]    Size of image to use.
 * @param {boolean} [props.productLink]   Whether or not to display a link to the product page.
 * @param {boolean} [props.showSaleBadge] Whether or not to display the on sale badge.
 * @param {string} [props.saleBadgeAlign] How should the sale badge be aligned if displayed.
 * @return {*} The component.
 */
<<<<<<< HEAD
const Block = ( {
	className,
	imageSizing = 'full-size',
	productLink = true,
=======
export const Block = ( {
	className,
	imageSizing = 'full-size',
	productLink: showProductLink = true,
>>>>>>> staging
	showSaleBadge,
	saleBadgeAlign = 'right',
} ) => {
	const { parentClassName } = useInnerBlockLayoutContext();
	const { product } = useProductDataContext();
	const [ imageLoaded, setImageLoaded ] = useState( false );

	if ( ! product.id ) {
		return (
			<div
				className={ classnames(
					className,
					'wc-block-components-product-image',
					'wc-block-components-product-image--placeholder',
					{
						[ `${ parentClassName }__product-image` ]: parentClassName,
					}
				) }
			>
				<ImagePlaceholder />
			</div>
		);
	}
<<<<<<< HEAD

	const image = ! isEmpty( product.images ) ? product.images[ 0 ] : null;
=======
	const hasProductImages = !! product.images.length;
	const image = hasProductImages ? product.images[ 0 ] : null;
	const ParentComponent = showProductLink ? 'a' : Fragment;
	const anchorLabel = sprintf(
		/* Translators: %s is referring to the product name */
		__( 'Link to %s', 'woocommerce' ),
		product.name
	);
	const anchorProps = {
		href: product.permalink,
		rel: 'nofollow',
		...( ! hasProductImages && { 'aria-label': anchorLabel } ),
	};
>>>>>>> staging

	return (
		<div
			className={ classnames(
				className,
				'wc-block-components-product-image',
				{
					[ `${ parentClassName }__product-image` ]: parentClassName,
				}
			) }
		>
<<<<<<< HEAD
			{ productLink ? (
				<a href={ product.permalink } rel="nofollow">
					{ !! showSaleBadge && (
						<ProductSaleBadge
							align={ saleBadgeAlign }
							product={ product }
						/>
					) }
					<Image
						image={ image }
						onLoad={ () => setImageLoaded( true ) }
						loaded={ imageLoaded }
						showFullSize={ imageSizing !== 'cropped' }
					/>
				</a>
			) : (
				<>
					{ !! showSaleBadge && (
						<ProductSaleBadge
							align={ saleBadgeAlign }
							product={ product }
						/>
					) }
					<Image
						image={ image }
						onLoad={ () => setImageLoaded( true ) }
						loaded={ imageLoaded }
						showFullSize={ imageSizing !== 'cropped' }
					/>
				</>
			) }
=======
			<ParentComponent { ...( showProductLink && anchorProps ) }>
				{ !! showSaleBadge && (
					<ProductSaleBadge
						align={ saleBadgeAlign }
						product={ product }
					/>
				) }
				<Image
					fallbackAlt={ product.name }
					image={ image }
					onLoad={ () => setImageLoaded( true ) }
					loaded={ imageLoaded }
					showFullSize={ imageSizing !== 'cropped' }
				/>
			</ParentComponent>
>>>>>>> staging
		</div>
	);
};

const ImagePlaceholder = () => {
	return (
		<img src={ PLACEHOLDER_IMG_SRC } alt="" width={ 500 } height={ 500 } />
	);
};

<<<<<<< HEAD
const Image = ( { image, onLoad, loaded, showFullSize } ) => {
	const { thumbnail, src, srcset, sizes, alt } = image || {};

	let imageProps = {
		alt,
		onLoad,
		hidden: ! loaded,
		src: thumbnail,
	};
	if ( showFullSize ) {
		imageProps = {
			...imageProps,
			src,
			srcSet: srcset,
			sizes,
		};
	}

	return (
		<>
			{ /* eslint-disable-next-line jsx-a11y/alt-text */ }
			<img { ...imageProps } />
=======
const Image = ( { image, onLoad, loaded, showFullSize, fallbackAlt } ) => {
	const { thumbnail, src, srcset, sizes, alt } = image || {};
	const imageProps = {
		alt: alt || fallbackAlt,
		onLoad,
		hidden: ! loaded,
		src: thumbnail,
		...( showFullSize && { src, srcSet: srcset, sizes } ),
	};

	return (
		<>
			{ imageProps.src && (
				/* eslint-disable-next-line jsx-a11y/alt-text */
				<img data-testid="product-image" { ...imageProps } />
			) }
>>>>>>> staging
			{ ! loaded && <ImagePlaceholder /> }
		</>
	);
};

Block.propTypes = {
	className: PropTypes.string,
<<<<<<< HEAD
=======
	fallbackAlt: PropTypes.string,
>>>>>>> staging
	productLink: PropTypes.bool,
	showSaleBadge: PropTypes.bool,
	saleBadgeAlign: PropTypes.string,
};

export default withProductDataContext( Block );
