/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
<<<<<<< HEAD
import { Toolbar } from '@wordpress/components';
=======
import { ToolbarGroup } from '@wordpress/components';
>>>>>>> staging

/**
 * Adds controls to the editor toolbar.
 *
 * @param {Object} props Incoming props for the component.
 * @param {boolean} props.isEditing
 * @param {function(boolean):any} props.setIsEditing
 */
const EditorBlockControls = ( { isEditing, setIsEditing } ) => {
	return (
		<BlockControls>
<<<<<<< HEAD
			<Toolbar
=======
			<ToolbarGroup
>>>>>>> staging
				controls={ [
					{
						icon: 'edit',
						title: __( 'Edit', 'woocommerce' ),
						onClick: () => setIsEditing( ! isEditing ),
						isActive: isEditing,
					},
				] }
			/>
		</BlockControls>
	);
};

export default EditorBlockControls;
