import { readFile } from 'fs-promise'

export async function readJSON (path) {
  const output = await readFile(path, 'utf8')
  return JSON.parse(output)
}