# Find Add-ons

> Find [add-ons][node-add-ons].

<section class="usage">

## Usage

```javascript
var findAddons = require( '@stdlib/tools/pkgs/addons' );
```

#### findAddons( \[options,] clbk )

Asynchronously search for [add-ons][node-add-ons].

```javascript
findAddons( onAddons );

function onAddons( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

The function accepts the following `options`:

-   **dir**: root directory from which to search for [add-ons][node-add-ons]. May be either an absolute file path or a path relative to the current working directory. Default: current working directory.
-   **pattern**: glob pattern used to find [add-ons][node-add-ons]. Default: `'**/package.json'` (note: pattern **must** end with `package.json`).
-   **ignore**: list of glob patterns used to exclude matches.

To search from an alternative directory, set the `dir` option.

```javascript
var opts = {
    'dir': '/foo/bar/baz'
};

findAddons( opts, onAddons );

function onAddons( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

To provide an alternative include filter, set the `pattern` option.

```javascript
var opts = {
    'pattern': '**/foo/**/package.json'
};

findAddons( opts, onAddons );

function onAddons( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

To exclude matches, set the `ignore` option.

```javascript
var opts = {
    'ignore': [
        'node_modules/**',
        'build/**',
        'reports/**'
    ]
};

findAddons( opts, onAddons );

function onAddons( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

#### findAddons.sync( \[options] )

Synchronously searches for [add-ons][node-add-ons].

```javascript
var pkgs = findAddons.sync();
// returns [...]
```

The function accepts the same `options` as `findAddons()` above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The implementation resolves [add-ons][node-add-ons] by resolving package `src` directories and `make` files. 
-   **No** attempt is made to ensure that a native implementation actually exists.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var findAddons = require( '@stdlib/tools/pkgs/addons' );

findAddons( onAddons );

function onAddons( error, pkgs ) {
    if ( error ) {
        throw error;
    }
    console.log( pkgs.join( '\n' ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```bash
Usage: find-pkg-addons [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --pattern pattern     Inclusion glob pattern.
         --ignore pattern      Exclusion glob pattern.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   If not provided a `dir` argument, the current working directory is the search directory.

-   To provide multiple exclusion glob patterns, set multiple `--ignore` option arguments.

    ```bash
    $ find-pkg-addons --ignore=node_modules/** --ignore=build/** --ignore=reports/**
    ```

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ find-pkg-addons
<pkg>
<pkg>
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-add-ons]: https://nodejs.org/api/addons.html

</section>

<!-- /.links -->
