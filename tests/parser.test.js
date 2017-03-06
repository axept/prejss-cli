import processFile from '../src/process-file'
import fs from 'fs'

const targetPath = 'examples/basic.css'
const resultPath = 'dist/basic.json'
const config = {
  outDir: './dist',
  format: 'json',
  parser: 'prejss-postcss-parser',
  pretty: true,
}

it(`read from css file and write to json file`, () => {
  processFile(targetPath, config)
  const result = fs.readFileSync(resultPath, 'utf8')
  expect(JSON.parse(result)).toEqual({
    '.button': {
      width: '100px',
      height: '70px',
      color: '#ffffff'
    }
  })
})