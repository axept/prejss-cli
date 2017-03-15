import fs from 'fs'
import path from 'path'
import outputFileSync from 'output-file-sync'
import getNameWithoutExt from './utils/get-name-without-ext'

export default (file, options) => {

  const code = fs.readFileSync(file, 'utf-8')
  let parser = require(options.parser)
  // Change to default method if parser is ES6 module
  if (typeof parser !== 'function') {
    parser = parser.default
  }
  const source = file.split(path.sep)
  const name = getNameWithoutExt(source.pop())
  const parsed = parser(code, { config:  options.config })
  const outExt = (options.format === 'json') ? 'json' : 'js'
  const outName = `${name}.${outExt}`
  
  let outDir
  if (options.sourceDir) {

    // When we have a basic directory, e.g: ./examples/src

    const subDir = path.relative(options.sourceDir, source.join(path.sep))

    if (options.verbose) {
      console.log('Found source directory', {
        subDir,
        outDir: path.join(options.outDir || options.sourceDir, subDir),
      })
    }
    outDir = path.join(options.outDir || options.sourceDir, subDir)

  } else if (options.outDir) {

    // When we have a output directory only, e.g. ./examples/dist

    if (options.verbose) {
      console.log('Found output directory only', {
        outDir: options.outDir,
      })
    }
    outDir = options.outDir

  } else {

    // When we have to place output file in the same directory, e.g. ./examples/src

    if (options.verbose) {
      console.log('No source and output directory found', {
        outDir: source.join(path.sep),
      })
    }
    outDir = source.join(path.sep)
  }

  // source.push(finalName)

  // const finalPath = source.join(path.sep)
  let output = JSON.stringify(parsed, null, options.pretty ? 2 : 0)
  switch (options.format) {
    case 'commonjs':
      output = 'module.exports = ' + output + ';'
      break
    case 'es6':
      output = 'export default ' + output
      break
  }

  const finalFile = path.join(outDir, outName)
  console.log('Process: ' + name + ' -> ' + finalFile)
  outputFileSync(finalFile, output)
}
