<?php
/**
 * WooCommerce Admin: Do you need some inspiration?
 *
 * Adds a note to ask the client if they need some inspiration.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Need_Some_Inspiration.
 */
class NeedSomeInspiration {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-need-some-inspiration';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
<<<<<<< HEAD
		// We want to show the note after five days.
		if ( ! self::wc_admin_active_for( 5 * DAY_IN_SECONDS ) ) {
=======
		// We want to show the note after 4 days.
		if ( ! self::wc_admin_active_for( 4 * DAY_IN_SECONDS ) ) {
>>>>>>> staging
			return;
		}

		// We don't want to show the note after 30 days.
		if ( self::wc_admin_active_for( 30 * DAY_IN_SECONDS ) ) {
			return;
		}

		$onboarding_profile = get_option( 'woocommerce_onboarding_profile', array() );

		// Confirm that $onboarding_profile is set.
		if ( empty( $onboarding_profile ) ) {
			return;
		}

		// Make sure that the person who filled out the OBW was not setting up
		// the store for their customer/client.
		if (
			! isset( $onboarding_profile['setup_client'] ) ||
			$onboarding_profile['setup_client']
		) {
			return;
		}

		$note = new Note();
<<<<<<< HEAD
		$note->set_title( __( 'Do you need some inspiration?', 'woocommerce' ) );
		$note->set_content( __( 'Check some of our favorite customer stories from entrepreneurs, agencies, and developers in our global community.', 'woocommerce' ) );
=======
		$note->set_title( __( 'Browse our success stories', 'woocommerce' ) );
		$note->set_content( __( 'Learn more about how other entrepreneurs used WooCommerce to build successful businesses.', 'woocommerce' ) );
>>>>>>> staging
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'need-some-inspiration',
			__( 'See success stories', 'woocommerce' ),
			'https://woocommerce.com/success-stories/?utm_source=inbox',
			Note::E_WC_ADMIN_NOTE_ACTIONED,
			true
		);
		return $note;
	}
}
