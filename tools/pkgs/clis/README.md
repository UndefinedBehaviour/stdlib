# Find Package CLIs

> Find package command-line interfaces (CLIs).

<section class="usage">

## Usage

```javascript
var findCLIs = require( '@stdlib/tools/pkgs/clis' );
```

#### findCLIs( \[options,] clbk )

Asynchronously search for package command-line interfaces.

```javascript
findCLIs( onCLIs );

function onCLIs( error, files ) {
    if ( error ) {
        throw error;
    }
    console.log( files.join( '\n' ) );
}
```

The function accepts the following `options`:

-   **dir**: root directory from which to search for packages. May be either an absolute file path or a path relative to the current working directory. Default: current working directory.
-   **pattern**: glob pattern used to find packages. Default: `'**/package.json'` (note: pattern **must** end with `package.json`).
-   **ignore**: list of glob patterns used to exclude matches.

To search from an alternative directory, set the `dir` option.

```javascript
var opts = {
    'dir': '/foo/bar/baz'
};

findCLIs( opts, onCLIs );

function onCLIs( error, files ) {
    if ( error ) {
        throw error;
    }
    console.log( files.join( '\n' ) );
}
```

To provide an alternative include filter, set the `pattern` option.

```javascript
var opts = {
    'pattern': '**/foo/**/package.json'
};

findCLIs( opts, onCLIs );

function onCLIs( error, files ) {
    if ( error ) {
        throw error;
    }
    console.log( files.join( '\n' ) );
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

findCLIs( opts, onCLIs );

function onCLIs( error, files ) {
    if ( error ) {
        throw error;
    }
    console.log( files.join( '\n' ) );
}
```

#### findCLIs.sync( \[options] )

Synchronously searches for package command-line interfaces.

```javascript
var files = findCLIs.sync();
// returns [...]
```

The function accepts the same `options` as `findCLIs()` above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The implementation resolves command-line interfaces by reading `package.json` files and resolving paths found in the `bin` field. 
-   **No** attempt is made to ensure that a command-line interface file exists.
-   The implementation **assumes** that a `bin` field is valid; i.e., either a `string` or an `object`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var findCLIs = require( '@stdlib/tools/pkgs/clis' );

findCLIs( onCLIs );

function onCLIs( error, files ) {
    if ( error ) {
        throw error;
    }
    console.log( files.join( '\n' ) );
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
Usage: find-pkg-clis [options] [dir]

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
    $ find-pkg-clis --ignore=node_modules/** --ignore=build/** --ignore=reports/**
    ```

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ find-pkg-clis
<filepath>
<filepath>
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

</section>

<!-- /.links -->
