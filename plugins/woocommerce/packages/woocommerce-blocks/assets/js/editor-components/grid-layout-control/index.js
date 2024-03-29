/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
<<<<<<< HEAD
import { clamp, isNaN } from 'lodash';
import { Fragment } from '@wordpress/element';
=======
import { clamp } from 'lodash';
>>>>>>> staging
import PropTypes from 'prop-types';
import { RangeControl, ToggleControl } from '@wordpress/components';
import {
	MAX_COLUMNS,
	MIN_COLUMNS,
	MAX_ROWS,
	MIN_ROWS,
} from '@woocommerce/block-settings';

/**
 * A combination of range controls for product grid layout settings.
 *
 * @param {Object} props Incoming props for the component.
 * @param {number} props.columns
 * @param {number} props.rows
 * @param {function(any):any} props.setAttributes Setter for block attributes.
 * @param {string} props.alignButtons
 */
const GridLayoutControl = ( {
	columns,
	rows,
	setAttributes,
	alignButtons,
} ) => {
	return (
<<<<<<< HEAD
		<Fragment>
=======
		<>
>>>>>>> staging
			<RangeControl
				label={ __( 'Columns', 'woocommerce' ) }
				value={ columns }
				onChange={ ( value ) => {
					const newValue = clamp( value, MIN_COLUMNS, MAX_COLUMNS );
					setAttributes( {
<<<<<<< HEAD
						columns: isNaN( newValue ) ? '' : newValue,
=======
						columns: Number.isNaN( newValue ) ? '' : newValue,
>>>>>>> staging
					} );
				} }
				min={ MIN_COLUMNS }
				max={ MAX_COLUMNS }
			/>
			<RangeControl
				label={ __( 'Rows', 'woocommerce' ) }
				value={ rows }
				onChange={ ( value ) => {
					const newValue = clamp( value, MIN_ROWS, MAX_ROWS );
					setAttributes( {
<<<<<<< HEAD
						rows: isNaN( newValue ) ? '' : newValue,
=======
						rows: Number.isNaN( newValue ) ? '' : newValue,
>>>>>>> staging
					} );
				} }
				min={ MIN_ROWS }
				max={ MAX_ROWS }
			/>
			<ToggleControl
				label={ __(
					'Align Last Block',
					'woocommerce'
				) }
				help={
					alignButtons
						? __(
								'The last inner block will be aligned vertically.',
								'woocommerce'
						  )
						: __(
								'The last inner block will follow other content.',
								'woocommerce'
						  )
				}
				checked={ alignButtons }
				onChange={ () =>
					setAttributes( { alignButtons: ! alignButtons } )
				}
			/>
<<<<<<< HEAD
		</Fragment>
=======
		</>
>>>>>>> staging
	);
};

GridLayoutControl.propTypes = {
	/**
	 * The current columns count.
	 */
	columns: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] )
		.isRequired,
	/**
	 * The current rows count.
	 */
	rows: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] )
		.isRequired,
	/**
	 * Whether or not buttons are aligned horizontally across items.
	 */
	alignButtons: PropTypes.bool.isRequired,
	/**
	 * Callback to update the layout settings.
	 */
	setAttributes: PropTypes.func.isRequired,
};

export default GridLayoutControl;
