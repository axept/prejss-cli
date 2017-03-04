prejss-cli
====

[![Travis branch](https://img.shields.io/travis/axept/prejss-cli/master.svg?style=flat-square)](https://travis-ci.org/axept/prejss-cli)
[![npm version](https://img.shields.io/npm/v/prejss-cli.svg?style=flat-square)](https://www.npmjs.com/package/prejss-cli)
[![npm downloads](https://img.shields.io/npm/dt/prejss-cli.svg?style=flat-square)](https://www.npmjs.com/package/prejss-cli)
[![npm license](https://img.shields.io/npm/l/prejss-cli.svg?style=flat-square)](https://www.npmjs.com/package/prejss-cli)

Command-Line Interface (CLI) interface for converting CSS/SCSS/LESS/other files into plain ES6 or CommonJS modules.

## Examples

```bash
# Convert CSS file to JSON in current directory
prejss-cli -f json source.css

# Convert CSS file to CommonJS in current directory
prejss-cli  -f commonjs source.css

# Convert CSS file to ES6 in current directory
prejss-cli -f es6 source.css

# Convert CSS file to ES6 in current directory
prejss-cli source.css

# Convert all CSS in specified directory to ES6 in ./dist
prejss-cli --out-dir ./dist my-styles-directory

# Convert CSS in specified directory to ES6 in the same directory
# using specified adapter
prejss-cli --parser postcss ./src

# Convert SCSS files only in specified directory to ES6 in ./jss
# using specified adapter
prejss-cli --parser postcss --out-dir ./jss src/**/*.scss 
```
