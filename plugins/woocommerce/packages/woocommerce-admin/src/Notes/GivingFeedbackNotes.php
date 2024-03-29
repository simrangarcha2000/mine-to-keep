<?php
/**
 * WooCommerce Admin (Dashboard) Giving feedback notes provider
 *
 * Adds notes to the merchant's inbox about giving feedback.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

<<<<<<< HEAD
=======
use Automattic\WooCommerce\Admin\Survey;

>>>>>>> staging
/**
 * Giving_Feedback_Notes
 */
class GivingFeedbackNotes {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-store-notice-giving-feedback-2';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	protected static function get_note() {
		// We need to show Admin Giving feeback notification after 8 days of install.
		$eight_days_in_seconds = 8 * DAY_IN_SECONDS;
		if ( ! self::wc_admin_active_for( $eight_days_in_seconds ) ) {
			return;
		}

		// Otherwise, create our new note.
		$note = new Note();
		$note->set_title( __( 'You\'re invited to share your experience', 'woocommerce' ) );
		$note->set_content( __( 'Now that you’ve chosen us as a partner, our goal is to make sure we\'re providing the right tools to meet your needs. We\'re looking forward to having your feedback on the store setup experience so we can improve it in the future.', 'woocommerce' ) );
		$note->set_content_data( (object) array() );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'share-feedback',
			__( 'Share feedback', 'woocommerce' ),
<<<<<<< HEAD
			'https://automattic.survey.fm/store-setup-survey'
=======
			Survey::get_url( '/store-setup-survey' )
>>>>>>> staging
		);
		return $note;
	}
}
