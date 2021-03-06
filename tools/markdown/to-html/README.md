# toHTML

> Convert Markdown to HTML.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toHTML = require( '/path/to/@stdlib/tools/markdown/to-html' );
```

#### toHTML( markdown, done )

Converts a Markdown `string` or [`Buffer`][node-buffer] to HTML.

```javascript
toHtml( '# Beep\n\n> Boop!', done );

function done( error, html ) {
    if ( error ) {
        throw error;
    }
    console.log( html );
    // => '<h1 id="beep">Beep</h1>\n\n<blockquote>\n<p>Boop!</p>\n</blockquote>'
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var toHTML = require( '/path/to/@stdlib/tools/markdown/to-html' );

var file = join( __dirname, 'examples', 'fixtures', 'fixture.md' );

file = readFileSync( file, {
    'encoding': 'utf8'
});
if ( file instanceof Error ) {
    throw file;
}

toHTML( file, done );

function done( error, html ) {
    if ( error ) {
        throw error;
    }
    console.log( html );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```bash
Usage: markdown-to-html [options] [markdown]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ markdown-to-html '# Beep\n\n> Boop!'
<h1 id="beep">Beep</h1>
<blockquote>
<p>Boop!</p>
</blockquote>
```

To use as a standard stream,

```bash
$ echo $'# Beep\n\n> Boop!' | markdown-to-html
<h1 id="beep">Beep</h1>
<blockquote>
<p>Boop!</p>
</blockquote>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-buffer]: https://nodejs.org/api/buffer.html

</section>

<!-- /.links -->
