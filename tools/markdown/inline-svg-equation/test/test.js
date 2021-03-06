'use strict';

// MODULES //

var join = require( 'path' ).join;
var tape = require( 'tape' );
var noop = require( '@stdlib/utils/noop' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var createElement = require( './../lib' );


// FUNCTIONS //

function setup() {
	return {
		'className': 'equation',
		'align': 'center',
		'raw': 'y = mx + b',
		'label': 'eq:line'
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof createElement, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid `options` argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			createElement( value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = setup();
			opts.raw = value;
			createElement( opts, noop );
		};
	}
});

tape( 'the function throws an error if not provided a callback function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			createElement( value );
		};
	}
});

tape( 'the function throws an error if not provided a callback function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			createElement( {}, value );
		};
	}
});

tape( 'the function returns an HTML string for inlining an SVG equation in Markdown', function test( t ) {
	var expected = readFileSync( join( __dirname, 'fixtures', 'expected.txt' ) );

	createElement( setup(), done );

	function done( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.equal( actual+'\n', expected.toString(), 'returns expected value' );
		}
		t.end();
	}
});

tape( 'if not provided an option, the function will set a corresponding HTML attribute to either a default value (if one exists) or an empty string', function test( t ) {
	var expected = '<div class="equation" align="center" data-raw-text="" data-equation="">\n    <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0.343ex" style="vertical-align: -0.171ex;" viewBox="0 -73.8 0 147.5" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title"><title id="MathJax-SVG-1-Title"></title><defs aria-hidden="true"></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true"></g></svg>\n</div>';

	createElement( done );

	function done( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.equal( actual, expected.toString(), 'returns expected value' );
		}
		t.end();
	}
});

// TODO: add test for returning an error (e.g., when tex2svg fails (proxyquire))
