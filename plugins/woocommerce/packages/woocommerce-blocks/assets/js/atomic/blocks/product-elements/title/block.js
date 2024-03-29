/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
<<<<<<< HEAD
import { decodeEntities } from '@wordpress/html-entities';
=======
>>>>>>> staging
import {
	useInnerBlockLayoutContext,
	useProductDataContext,
} from '@woocommerce/shared-context';
import { getColorClassName, getFontSizeClass } from '@wordpress/block-editor';
import { isFeaturePluginBuild } from '@woocommerce/block-settings';
import { gatedStyledText } from '@woocommerce/atomic-utils';
import { withProductDataContext } from '@woocommerce/shared-hocs';
<<<<<<< HEAD
=======
import ProductName from '@woocommerce/base-components/product-name';
>>>>>>> staging

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * Product Title Block Component.
 *
 * @param {Object}  props                  Incoming props.
 * @param {string}  [props.className]      CSS Class name for the component.
 * @param {number}  [props.headingLevel]   Heading level (h1, h2 etc)
 * @param {boolean} [props.productLink]    Whether or not to display a link to the product page.
 * @param {string}  [props.align]          Title alignment.
 * @param {string}  [props.color]          Title color name.
 * @param {string}  [props.customColor]    Custom title color value.
 * @param {string}  [props.fontSize]       Title font size name.
 * @param {number } [props.customFontSize] Custom font size value.
 * will be used if this is not provided.
 * @return {*} The component.
 */
export const Block = ( {
	className,
	headingLevel = 2,
	productLink = true,
	align,
	color,
	customColor,
	fontSize,
	customFontSize,
} ) => {
	const { parentClassName } = useInnerBlockLayoutContext();
	const { product } = useProductDataContext();
	const TagName = `h${ headingLevel }`;

	const colorClass = getColorClassName( 'color', color );
	const fontSizeClass = getFontSizeClass( fontSize );

	const titleClasses = classnames( {
		'has-text-color': color || customColor,
		'has-font-size': fontSize || customFontSize,
		[ colorClass ]: colorClass,
		[ fontSizeClass ]: fontSizeClass,
	} );

	if ( ! product.id ) {
		return (
			<TagName
				// @ts-ignore
				className={ classnames(
					className,
					'wc-block-components-product-title',
					{
						[ `${ parentClassName }__product-title` ]: parentClassName,
						[ `wc-block-components-product-title--align-${ align }` ]:
							align && isFeaturePluginBuild(),
						[ titleClasses ]: isFeaturePluginBuild(),
					}
				) }
				style={ gatedStyledText( {
					color: customColor,
					fontSize: customFontSize,
				} ) }
			/>
		);
	}

<<<<<<< HEAD
	const productName = decodeEntities( product.name );

=======
>>>>>>> staging
	return (
		// @ts-ignore
		<TagName
			className={ classnames(
				className,
				'wc-block-components-product-title',
				{
					[ `${ parentClassName }__product-title` ]: parentClassName,
					[ `wc-block-components-product-title--align-${ align }` ]:
						align && isFeaturePluginBuild(),
				}
			) }
		>
<<<<<<< HEAD
			{ productLink ? (
				<a
					href={ product.permalink }
					rel="nofollow"
					className={ classnames( {
						[ titleClasses ]: isFeaturePluginBuild(),
					} ) }
					style={ gatedStyledText( {
						color: customColor,
						fontSize: customFontSize,
					} ) }
				>
					{ productName }
				</a>
			) : (
				<span
					className={ classnames( {
						[ titleClasses ]: isFeaturePluginBuild(),
					} ) }
					style={ gatedStyledText( {
						color: customColor,
						fontSize: customFontSize,
					} ) }
				>
					{ productName }
				</span>
			) }
=======
			<ProductName
				className={ classnames( {
					[ titleClasses ]: isFeaturePluginBuild(),
				} ) }
				disabled={ ! productLink }
				name={ product.name }
				permalink={ product.permalink }
				rel={ productLink ? 'nofollow' : null }
				style={ gatedStyledText( {
					color: customColor,
					fontSize: customFontSize,
				} ) }
			/>
>>>>>>> staging
		</TagName>
	);
};

Block.propTypes = {
	className: PropTypes.string,
	headingLevel: PropTypes.number,
	productLink: PropTypes.bool,
	align: PropTypes.string,
	color: PropTypes.string,
	customColor: PropTypes.string,
	fontSize: PropTypes.string,
	customFontSize: PropTypes.number,
};

export default withProductDataContext( Block );
