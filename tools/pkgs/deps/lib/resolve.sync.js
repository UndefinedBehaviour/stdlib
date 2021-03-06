'use strict';

// MODULES //

var debug = require( 'debug' )( 'pkg-deps:sync:resolve' );
var pkgDeps = require( '@stdlib/_tools/modules/pkg-deps' ).sync;
var transform = require( './transform.js' );


// MAIN //

/**
* Synchronously resolves package dependencies.
*
* @private
* @param {(ObjectArray)} entries - package entry points
* @param {boolean} builtins - boolean indicating whether to include built-in package dependencies
* @returns {(ObjectArray|Error)} results or an error
*/
function resolve( entries, builtins ) {
	var results;
	var cache;
	var opts;
	var len;
	var pkg;
	var i;
	var k;

	len = entries.length;
	cache = new Array( len );

	opts = {
		'walk': true,
		'builtins': builtins
	};
	debug( 'Options: %s', JSON.stringify( opts ) );

	debug( 'Resolving %d packages...', len );
	for ( i = 0; i < len; i++ ) {
		pkg = entries[ i ].pkg;
		k = i + 1;

		cache[ i ] = {
			'pkg': entries[ i ].pkg,
			'dir': entries[ i ].dir
		};
		debug( 'Resolving package: %s (%d of %d)...', pkg, k, len );
		results = pkgDeps( entries[ i ].entries, opts );
		if ( results instanceof Error ) {
			debug( 'Encountered an error when resolving package dependencies: %s (%d of %d). Error: %s', pkg, k, len, results.message );
			return results;
		}
		debug( 'Successfully resolved package dependencies: %s (%d of %d).', pkg, k, len );
		results = transform( results );
		cache[ i ].files = results.files;
		cache[ i ].deps = results.deps;
	}
	debug( 'Resolved all packages.' );
	return cache;
} // end FUNCTION resolve()


// EXPORTS //

module.exports = resolve;
