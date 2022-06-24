const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const [name ] = process.argv.slice(2)

const filename = path.join(__dirname, '..', 'src', name)

const spawned = spawn('node', [ filename, ], { shell: 'cmd' })

spawned.stdout.pipe(process.stdout)
spawned.stderr.pipe(process.stderr)

const stream = fs.createReadStream(`${filename}_.txt`, 'utf-8')
stream.pipe(spawned.stdin)