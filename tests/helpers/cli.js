import path from 'path'
import { execFile } from 'child_process'

export default function (args, cwd) {
  return new Promise((resolve, reject) => {
    execFile(
      path.resolve('lib/cli.js'),
      args, { cwd },
      (err, stdout, stderr) => {
        if (err) {
          return reject({ err, stderr })
        }
        return resolve(stdout)
      })
  })
}