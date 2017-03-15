#!/usr/bin/env node

import commander from 'commander'
import glob from 'glob'
import fs from 'fs'
import path from 'path'
import uniq from 'lodash.uniq'
import readDir from 'fs-readdir-recursive'
import processFile from './process-file'
import packageInfo from '../package.json'

commander.option('-d, --out-dir [out]', 'Convert styles in an input directory into an output directory')
commander.option('-f, --format [format]', 'Format of compiled modules (es6, commonjs, json)')
commander.option('-p, --parser [name]', 'Parser name which is already installed as prejss-NAME-parser package')
commander.option('-c, --config [value]', 'Config values passed to specified or default parser', parseConfig)
commander.option('-v, --verbose', 'Enabled detailed debug output')
commander.option('--pretty', 'Prettify output result')

commander.version(packageInfo['name'] + ' ' + packageInfo['version'])
commander.usage('[options] <src>')

commander.parse(process.argv)

function parseConfig(val) {
  const [ key, params ] = val.split('=')
  return { [key]: params.split(',') }
}

const errors = []

const globbedFiles = commander.args.reduce((globbed, input) => {
  let files = glob.sync(input)
  if (!files.length) {
    files = [input]
  }
  return globbed.concat(files)
}, [])

const sourceFiles = uniq(globbedFiles)
sourceFiles.forEach(filename => {
  if (!fs.existsSync(filename)) {
    errors.push(filename + ' does not exist')
  }
})

let format = 'es6' // default output format
if (commander['format']) {
  const specFormat = (typeof commander['format'] === 'string') && commander['format'].toLowerCase()
  if (specFormat === 'commonjs' || specFormat === 'json') {
    format = specFormat
  }
}

const parser = commander['parser'] || 'prejss-postcss-parser'
const pretty = commander['pretty'] || false
const config = commander['config']
const verbose = commander['verbose'] || false

if (errors.length > 0) {
  errors.forEach(message => console.error(message))
  process.exit(2)
}

const outDir = (typeof commander['outDir'] === 'string' && commander['outDir']) || ''

const options = {
  outDir,
  format,
  parser,
  pretty,
  config,
  verbose,
}

if (options.verbose) {
  console.log('Calculated options: ', { options })
}

sourceFiles.forEach(name => {
  const stat = fs.statSync(name)
  if (stat.isDirectory()) {
    readDir(name).forEach(fileInDir => {
      const finalPath = path.join(name, fileInDir)
      processFile(finalPath, { ...options, sourceDir: name })
    })
  } else {
    processFile(name, options)
  }
})   
