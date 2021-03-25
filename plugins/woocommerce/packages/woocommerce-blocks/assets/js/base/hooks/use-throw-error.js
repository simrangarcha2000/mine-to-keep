/**
 * External dependencies
 */
<<<<<<< HEAD
import { useState } from '@wordpress/element';
=======
import { useState, useCallback } from '@wordpress/element';
>>>>>>> staging

/**
 * Helper method for throwing an error in a React Hook.
 *
 * @see https://github.com/facebook/react/issues/14981
 *
 * @return {function(Object)} A function receiving the error that will be thrown.
 */
export const useThrowError = () => {
	const [ , setState ] = useState();
<<<<<<< HEAD
	return ( error ) =>
		setState( () => {
			throw error;
		} );
=======

	const throwError = useCallback(
		( error ) =>
			setState( () => {
				throw error;
			} ),
		[]
	);

	return throwError;
>>>>>>> staging
};
