/**
 * External dependencies
 */
import {
	usePaymentMethods,
	usePaymentMethodInterface,
	useStoreNotices,
	useEmitResponse,
} from '@woocommerce/base-hooks';
import { cloneElement } from '@wordpress/element';
<<<<<<< HEAD
import { __ } from '@wordpress/i18n';
=======
>>>>>>> staging
import {
	useEditorContext,
	usePaymentMethodDataContext,
} from '@woocommerce/base-context';
<<<<<<< HEAD
=======
import classNames from 'classnames';
>>>>>>> staging

/**
 * Internal dependencies
 */
<<<<<<< HEAD
import Tabs from '../tabs';
import PaymentMethodTab from './payment-method-tab';
=======
import PaymentMethodCard from './payment-method-card';
import RadioControlAccordion from '../radio-control-accordion';
>>>>>>> staging

/**
 * Component used to render all non-saved payment method options.
 *
 * @return {*} The rendered component.
 */
const PaymentMethodOptions = () => {
	const {
		setActivePaymentMethod,
<<<<<<< HEAD
		expressPaymentMethods,
=======
		activeSavedToken,
		setActiveSavedToken,
		expressPaymentMethods,
		customerPaymentMethods,
>>>>>>> staging
	} = usePaymentMethodDataContext();
	const { paymentMethods } = usePaymentMethods();
	const {
		activePaymentMethod,
		...paymentMethodInterface
	} = usePaymentMethodInterface();
	const expressPaymentMethodActive = Object.keys(
		expressPaymentMethods
	).includes( activePaymentMethod );
	const { noticeContexts } = useEmitResponse();
	const { removeNotice } = useStoreNotices();
	const { isEditor } = useEditorContext();

<<<<<<< HEAD
	return expressPaymentMethodActive ? null : (
		<Tabs
			className="wc-block-components-checkout-payment-methods"
			onSelect={ ( tabName ) => {
				setActivePaymentMethod( tabName );
				removeNotice( 'wc-payment-error', noticeContexts.PAYMENTS );
			} }
			tabs={ Object.keys( paymentMethods ).map( ( name ) => {
				const {
					ariaLabel,
					edit,
					content,
					label,
					supports,
				} = paymentMethods[ name ];
				const component = isEditor ? edit : content;
				return {
					name,
					title:
						typeof label === 'string'
							? label
							: cloneElement( label, {
									components:
										paymentMethodInterface.components,
							  } ),
					ariaLabel,
					content: (
						<PaymentMethodTab
							allowsSaving={ supports.savePaymentInfo }
						>
							{ cloneElement( component, {
								activePaymentMethod,
								...paymentMethodInterface,
							} ) }
						</PaymentMethodTab>
					),
				};
			} ) }
			initialTabName={ activePaymentMethod }
			ariaLabel={ __(
				'Payment Methods',
				'woocommerce'
			) }
			id="wc-block-payment-methods"
=======
	const options = Object.keys( paymentMethods ).map( ( name ) => {
		const { edit, content, label, supports } = paymentMethods[ name ];
		const component = isEditor ? edit : content;
		return {
			value: name,
			label:
				typeof label === 'string'
					? label
					: cloneElement( label, {
							components: paymentMethodInterface.components,
					  } ),
			name: `wc-saved-payment-method-token-${ name }`,
			content: (
				<PaymentMethodCard allowsSaving={ supports.savePaymentInfo }>
					{ cloneElement( component, {
						activePaymentMethod,
						...paymentMethodInterface,
					} ) }
				</PaymentMethodCard>
			),
		};
	} );

	const updateToken = ( value ) => {
		setActivePaymentMethod( value );
		setActiveSavedToken( '' );
		removeNotice( 'wc-payment-error', noticeContexts.PAYMENTS );
	};

	const isSinglePaymentMethod =
		Object.keys( customerPaymentMethods ).length === 0 &&
		Object.keys( paymentMethods ).length === 1;

	const singleOptionClass = classNames( {
		'disable-radio-control': isSinglePaymentMethod,
	} );

	return expressPaymentMethodActive ? null : (
		<RadioControlAccordion
			id={ 'wc-payment-method-options' }
			className={ singleOptionClass }
			selected={ activeSavedToken ? null : activePaymentMethod }
			onChange={ updateToken }
			options={ options }
>>>>>>> staging
		/>
	);
};

export default PaymentMethodOptions;
