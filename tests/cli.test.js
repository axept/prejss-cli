import path from 'path'
import cli from './helpers/cli'
import { readJSON } from './helpers/read'

const args = [
  '--out-dir', 'tests/.tmp',
  '-f', 'json',
  '--pretty',
  'examples/src/basic.css',
]
const json = {
  '.button': {
    width: '100px',
    height: '70px',
    color: '#ffffff'
  }
}

it(`read from css file and write to json file`, async () => {
  try {
    await cli(args)
  } catch ({ err, stderr }) {
    throw new Error(err, stderr)
  }
  const resultPath = path.resolve(__dirname, '.tmp/basic.json')
  const result = await readJSON(resultPath)
  expect(result).toEqual(json)
})