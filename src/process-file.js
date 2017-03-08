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
  const format = options.format === 'json' ? 'json' : 'js'
  const parsed = parser(code, { config:  options.config })
  const finalName = `${name}.${format}`
  if (options.outDir) {
    source.shift()
    source.unshift(options.outDir)
  }
  source.push(finalName)
  const finalPath = source.join(path.sep)
  let output = JSON.stringify(parsed, null, options.pretty ? 2 : 0)
  switch (options.format) {
    case 'commonjs':
      output = 'module.exports = ' + output + ';'
      break
    case 'es6':
      output = 'export default ' + output
      break
  }
  outputFileSync(finalPath, output)
  console.log('Process: ' + name + ' -> ' + finalPath)
}
