<?php
/**
 * WooCommerce Admin Navigation Feature Feedback Follow Up.
 */

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\WooCommerce\Admin\Loader;
<<<<<<< HEAD
=======
use Automattic\WooCommerce\Admin\Survey;
>>>>>>> staging

defined( 'ABSPATH' ) || exit;

/**
 * NavigationFeedbackFollowUp
 */
class NavigationFeedbackFollowUp {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-navigation-feedback-follow-up';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		if ( ! Loader::is_feature_enabled( 'navigation' ) ) {
			return;
		}

		// Check that the first note was created.
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( 'wc-admin-navigation-feedback' );
		if ( empty( $note_ids ) ) {
			return;
		}

		// Check that first note is at least 5 days old.
		$note      = Notes::get_note( $note_ids[0] );
		$timestamp = strtotime( $note->get_date_created() );
		if ( ( time() - $timestamp ) < DAY_IN_SECONDS * 5 ) {
			return;
		}

		$content = __( "We recently introduced the new navigation for a more intuitive and improved user experience. Now that you've had some time to give it a try, let us know how this will impact your store.", 'woocommerce' );

		$note = new Note();
		$note->set_title( __( 'Share your thoughts on the new WooCommerce navigation', 'woocommerce' ) );
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
