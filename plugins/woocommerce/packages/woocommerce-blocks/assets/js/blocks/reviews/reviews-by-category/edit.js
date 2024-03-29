/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	Placeholder,
	ToggleControl,
	withSpokenMessages,
} from '@wordpress/components';
import { SearchListItem } from '@woocommerce/components';
<<<<<<< HEAD
import { Fragment } from '@wordpress/element';
=======
>>>>>>> staging
import PropTypes from 'prop-types';
import ProductCategoryControl from '@woocommerce/editor-components/product-category-control';
import { Icon, review } from '@woocommerce/icons';

/**
 * Internal dependencies
 */
import EditorContainerBlock from '../editor-container-block.js';
import NoReviewsPlaceholder from './no-reviews-placeholder.js';
import {
	getBlockControls,
	getSharedReviewContentControls,
	getSharedReviewListControls,
} from '../edit-utils.js';

/**
 * Component to handle edit mode of "Reviews by Category".
 *
 * @param {Object} props Incoming props for the component.
 * @param {Object} props.attributes Incoming block attributes.
 * @param {function(any):any} props.debouncedSpeak
 * @param {function(any):any} props.setAttributes Setter for block attributes.
 */
const ReviewsByCategoryEditor = ( {
	attributes,
	debouncedSpeak,
	setAttributes,
} ) => {
	const { editMode, categoryIds } = attributes;

	const renderCategoryControlItem = ( args ) => {
		const { item, search, depth = 0 } = args;
		const classes = [ 'woocommerce-product-categories__item' ];
		if ( search.length ) {
			classes.push( 'is-searching' );
		}
		if ( depth === 0 && item.parent !== 0 ) {
			classes.push( 'is-skip-level' );
		}

		const accessibleName = ! item.breadcrumbs.length
			? item.name
			: `${ item.breadcrumbs.join( ', ' ) }, ${ item.name }`;

		return (
			<SearchListItem
				className={ classes.join( ' ' ) }
				{ ...args }
				showCount
				aria-label={ sprintf(
					// Translators: %1$s is the search term name, %2$d is the number of products returned for search query.
					_n(
						'%1$s, has %2$d product',
						'%1$s, has %2$d products',
						item.count,
						'woocommerce'
					),
					accessibleName,
					item.count
				) }
			/>
		);
	};

	const getInspectorControls = () => {
		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={ __( 'Category', 'woocommerce' ) }
					initialOpen={ false }
				>
					<ProductCategoryControl
						selected={ attributes.categoryIds }
						onChange={ ( value = [] ) => {
							const ids = value.map( ( { id } ) => id );
							setAttributes( { categoryIds: ids } );
						} }
						renderItem={ renderCategoryControlItem }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Content', 'woocommerce' ) }
				>
					<ToggleControl
						label={ __(
							'Product name',
							'woocommerce'
						) }
						checked={ attributes.showProductName }
						onChange={ () =>
							setAttributes( {
								showProductName: ! attributes.showProductName,
							} )
						}
					/>
					{ getSharedReviewContentControls(
						attributes,
						setAttributes
					) }
				</PanelBody>
				<PanelBody
					title={ __(
						'List Settings',
						'woocommerce'
					) }
				>
					{ getSharedReviewListControls( attributes, setAttributes ) }
				</PanelBody>
			</InspectorControls>
		);
	};

	const renderEditMode = () => {
		const onDone = () => {
			setAttributes( { editMode: false } );
			debouncedSpeak(
				__(
					'Showing Reviews by Category block preview.',
					'woocommerce'
				)
			);
		};

		return (
			<Placeholder
				icon={
					<Icon
						srcElement={ review }
						className="block-editor-block-icon"
					/>
				}
				label={ __(
					'Reviews by Category',
					'woocommerce'
				) }
				className="wc-block-reviews-by-category"
			>
				{ __(
					'Show product reviews from specific categories.',
					'woocommerce'
				) }
				<div className="wc-block-reviews__selection">
					<ProductCategoryControl
						selected={ attributes.categoryIds }
						onChange={ ( value = [] ) => {
							const ids = value.map( ( { id } ) => id );
							setAttributes( { categoryIds: ids } );
						} }
						showReviewCount={ true }
					/>
					<Button isPrimary onClick={ onDone }>
						{ __( 'Done', 'woocommerce' ) }
					</Button>
				</div>
			</Placeholder>
		);
	};

	if ( ! categoryIds || editMode ) {
		return renderEditMode();
	}

	return (
<<<<<<< HEAD
		<Fragment>
=======
		<>
>>>>>>> staging
			{ getBlockControls( editMode, setAttributes ) }
			{ getInspectorControls() }
			<EditorContainerBlock
				attributes={ attributes }
				icon={
					<Icon
						srcElement={ review }
						className="block-editor-block-icon"
					/>
				}
				name={ __(
					'Reviews by Category',
					'woocommerce'
				) }
				noReviewsPlaceholder={ NoReviewsPlaceholder }
			/>
<<<<<<< HEAD
		</Fragment>
=======
		</>
>>>>>>> staging
	);
};

ReviewsByCategoryEditor.propTypes = {
	/**
	 * The attributes for this block.
	 */
	attributes: PropTypes.object.isRequired,
	/**
	 * The register block name.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * A callback to update attributes.
	 */
	setAttributes: PropTypes.func.isRequired,
	// from withSpokenMessages
	debouncedSpeak: PropTypes.func.isRequired,
};

export default withSpokenMessages( ReviewsByCategoryEditor );
