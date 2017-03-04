import path from 'path'
import outputFileSync from 'output-file-sync'
import getNameWithoutExt from './utils/get-name-without-ext'

export default (name, options) => {
  const destFile = path.join(options.outDir, getNameWithoutExt(name))
  console.log('Process: ' + name + ' -> ' + destFile)
}
