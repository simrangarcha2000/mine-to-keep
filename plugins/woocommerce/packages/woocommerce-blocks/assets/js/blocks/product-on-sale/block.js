/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
<<<<<<< HEAD
import { Component, Fragment } from '@wordpress/element';
import { Disabled, PanelBody, Placeholder } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { ServerSideRender } from '@wordpress/editor';
=======
import { Component } from '@wordpress/element';
import { Disabled, PanelBody, Placeholder } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
>>>>>>> staging
import PropTypes from 'prop-types';
import GridContentControl from '@woocommerce/editor-components/grid-content-control';
import GridLayoutControl from '@woocommerce/editor-components/grid-layout-control';
import ProductCategoryControl from '@woocommerce/editor-components/product-category-control';
import ProductOrderbyControl from '@woocommerce/editor-components/product-orderby-control';
import { gridBlockPreview } from '@woocommerce/resource-previews';
import { Icon, tag } from '@woocommerce/icons';

const EmptyPlaceholder = () => (
	<Placeholder
		icon={ <Icon srcElement={ tag } /> }
		label={ __( 'On Sale Products', 'woocommerce' ) }
		className="wc-block-product-on-sale"
	>
		{ __(
			'This block shows on-sale products. There are currently no discounted products in your store.',
			'woocommerce'
		) }
	</Placeholder>
);

/**
 * Component to handle edit mode of "On Sale Products".
 */
class ProductOnSaleBlock extends Component {
	getInspectorControls() {
		const { attributes, setAttributes } = this.props;
		const {
			categories,
			catOperator,
			columns,
			contentVisibility,
			rows,
			orderby,
			alignButtons,
		} = attributes;

		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={ __( 'Layout', 'woocommerce' ) }
					initialOpen
				>
					<GridLayoutControl
						columns={ columns }
						rows={ rows }
						alignButtons={ alignButtons }
						setAttributes={ setAttributes }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Content', 'woocommerce' ) }
					initialOpen
				>
					<GridContentControl
						settings={ contentVisibility }
						onChange={ ( value ) =>
							setAttributes( { contentVisibility: value } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Order By', 'woocommerce' ) }
					initialOpen={ false }
				>
					<ProductOrderbyControl
						setAttributes={ setAttributes }
						value={ orderby }
					/>
				</PanelBody>
				<PanelBody
					title={ __(
						'Filter by Product Category',
						'woocommerce'
					) }
					initialOpen={ false }
				>
					<ProductCategoryControl
						selected={ categories }
						onChange={ ( value = [] ) => {
							const ids = value.map( ( { id } ) => id );
							setAttributes( { categories: ids } );
						} }
						operator={ catOperator }
						onOperatorChange={ ( value = 'any' ) =>
							setAttributes( { catOperator: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}

	render() {
		const { attributes, name } = this.props;

		if ( attributes.isPreview ) {
			return gridBlockPreview;
		}

		return (
<<<<<<< HEAD
			<Fragment>
=======
			<>
>>>>>>> staging
				{ this.getInspectorControls() }
				<Disabled>
					<ServerSideRender
						block={ name }
						attributes={ attributes }
						EmptyResponsePlaceholder={ EmptyPlaceholder }
					/>
				</Disabled>
<<<<<<< HEAD
			</Fragment>
=======
			</>
>>>>>>> staging
		);
	}
}

ProductOnSaleBlock.propTypes = {
	/**
	 * The attributes for this block
	 */
	attributes: PropTypes.object.isRequired,
	/**
	 * The register block name.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * A callback to update attributes
	 */
	setAttributes: PropTypes.func.isRequired,
};

export default ProductOnSaleBlock;
