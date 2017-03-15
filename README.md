prejss-cli
====

[![Travis branch](https://img.shields.io/travis/axept/prejss-cli/master.svg?style=flat-square)](https://travis-ci.org/axept/prejss-cli)
[![npm version](https://img.shields.io/npm/v/prejss-cli.svg?style=flat-square)](https://www.npmjs.com/package/prejss-cli)
[![npm downloads](https://img.shields.io/npm/dt/prejss-cli.svg?style=flat-square)](https://www.npmjs.com/package/prejss-cli)
[![npm license](https://img.shields.io/npm/l/prejss-cli.svg?style=flat-square)](https://www.npmjs.com/package/prejss-cli)

Command-Line Interface (CLI) interface for converting CSS/SCSS/LESS/other files to ES6 modules with JSS objects or to JSON files using any [PreJSS](https://github.com/axept/prejss) parser and config.

## Examples

```bash
# Convert CSS file to JSON in current directory
prejss-cli -f json source.css --pretty

# Convert CSS file to ES6 in current directory
prejss-cli source.css

# Convert all CSS in specified directory to ES6 in ./examples/dist
prejss-cli examples/src --out-dir ./examples/dist

# Convert CSS in specified directory to ES6 in the same directory
# using specified parser (which should be installed as prejss-NAME-parser package)
prejss-cli examples/src --parser postcss

# Convert SCSS files only in specified directory to ES6 in ./dist
# using specified parser and config
prejss-cli src/**/*.scss --parser postcss --out-dir ./dist \
  --config plugins=postcss-import,postcss-simple-vars,postcss-sassy-mixins
```
