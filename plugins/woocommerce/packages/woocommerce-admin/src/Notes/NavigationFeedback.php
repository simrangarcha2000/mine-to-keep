<?php
/**
 * WooCommerce Admin Navigation Feature Feedback
 */

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\WooCommerce\Admin\Loader;
<<<<<<< HEAD
=======
use Automattic\WooCommerce\Admin\Survey;
>>>>>>> staging

defined( 'ABSPATH' ) || exit;

/**
 * NavigationFeedback
 */
class NavigationFeedback {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-navigation-feedback';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		if ( ! Loader::is_feature_enabled( 'navigation' ) ) {
			return;
		}

		$content = __( "We're introducing the new navigation for a more intuitive and improved user experience. We'd like to hear your thoughts and first impressions.", 'woocommerce' );

		$note = new Note();
		$note->set_title( __( 'You now have access to the new WooCommerce navigation', 'woocommerce' ) );
		$note->set_content( $content );
		$note->set_content_data( (object) array() );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
<<<<<<< HEAD
		$note->add_action( 'share-feedback', __( 'Share feedback', 'woocommerce' ), 'https://automattic.survey.fm/new-navigation' );
=======
		$note->add_action( 'share-feedback', __( 'Share feedback', 'woocommerce' ), Survey::get_url( '/new-navigation' ) );
>>>>>>> staging
		return $note;
	}
}
