'use strict';

/**
* Build assets for running benchmarks in a web browser.
*
* @module @stdlib/tools/benchmarks/browser-build
*
* @example
* var build = require( '@stdlib/tools/benchmarks/browser-build' );
*
* var root = '/foo/bar/benchmark';
* var out = '/beep/boop';
*
* var opts = {
*     'pattern': '\*\*\/benchmark*.js',
*     'bundle': 'benchmark_bundle.js',
*     'html': 'benchmarks.html'
* };
*
* build( root, out, opts, clbk );
*
* function clbk( error, bool ) {
*     if ( error ) {
*         throw error;
*     }
*     if ( bool ) {
*         console.log( 'Success!' );
*     } else {
*         console.log( 'No generated assets.' );
*     }
* }
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;
