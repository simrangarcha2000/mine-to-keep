/**
 * Internal dependencies
 */
<<<<<<< HEAD
import { compareWithWpVersion, setSetting } from '..';

describe( 'compareWithWpVersion', () => {
	let initial = true;
	it.each`
		version               | operator | result
		${ '5.3-beta1' }      | ${ '>' } | ${ true }
		${ '5.3' }            | ${ '=' } | ${ true }
		${ '5.3-beta12-235' } | ${ '>' } | ${ true }
		${ '5.3-rc1' }        | ${ '<' } | ${ false }
		${ '5.3-rc12-235' }   | ${ '>' } | ${ true }
		${ '5.3.1' }          | ${ '<' } | ${ true }
		${ '5.4-beta1' }      | ${ '<' } | ${ true }
=======
import { isWpVersion } from '..';
import { allSettings } from '../settings-init';

describe( 'isWpVersion', () => {
	it.each`
		version               | operator | result
		${ '5.3-beta1' }      | ${ '<' } | ${ true }
		${ '5.3' }            | ${ '=' } | ${ true }
		${ '5.3-beta12-235' } | ${ '<' } | ${ true }
		${ '5.3-rc1' }        | ${ '>' } | ${ false }
		${ '5.3-rc12-235' }   | ${ '<' } | ${ true }
		${ '5.3.1' }          | ${ '>' } | ${ true }
		${ '5.4-beta1' }      | ${ '>' } | ${ true }
>>>>>>> staging
	`(
		'should return $result when $version is the current wpVersion ' +
			'and `5.3` is the version compared using `$operator`',
		( { version, operator, result } ) => {
<<<<<<< HEAD
			setSetting( 'wpVersion', version );
			// deprecated caches messages once per session, so we only check
			// console warn on initial call.
			if ( initial ) {
				expect( console ).toHaveWarned();
			}
			initial = false;
			expect( compareWithWpVersion( '5.3', operator ) ).toBe( result );
=======
			// eslint-disable-next-line
			allSettings[ 'wpVersion' ] = version;
			expect( isWpVersion( '5.3', operator ) ).toBe( result );
>>>>>>> staging
		}
	);
} );
