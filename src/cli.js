#!/usr/bin/env node

import commander from 'commander'
import glob from 'glob'
import fs from 'fs'
import uniq from 'lodash.uniq'
import readDir from 'fs-readdir-recursive'
import processFile from './process-file'
import packageInfo from '../package.json'

commander.option('-d, --out-dir [out]', 'Convert styles in an input directory into an output directory')
commander.option('-f, --format [format]', 'Format of compiled modules (es6, commonjs, json)')
commander.option('-p, --parser [name]', 'Parser name which is already installed as prejss-NAME-parser package')

commander.version(packageInfo['name'] + ' ' + packageInfo['version'])
commander.usage('[options] <src>')

commander.parse(process.argv)

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

const parser = commander['parser'] || 'postcss'

if (errors.length > 0) {
  errors.forEach(message => console.error(message))
  process.exit(2)
}

const outDir = (typeof commander['outDir'] === 'string' && commander['outDir']) || ''

const options = {
  outDir,
  format,
  parser,
}

console.log('DEBUG: ', { options })

sourceFiles.forEach(name => {
  const stat = fs.statSync(name)
  if (stat.isDirectory()) {
    readDir(name).forEach(fileInDir => {
      processFile(fileInDir, options)
    })
  } else {
    processFile(name, options)
  }
})   
