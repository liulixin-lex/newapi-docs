import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

import { copyDirectory } from '../scripts/render-home.mjs'

test('copies a directory into its own child without recursive nesting', () => {
  const root = mkdtempSync(join(tmpdir(), 'gguu-copy-'))

  try {
    const source = join(root, 'source')
    const child = join(source, 'docs')
    mkdirSync(join(source, 'assets'), { recursive: true })
    writeFileSync(join(source, 'index.html'), '<link href="/docs/assets/app.css">')
    writeFileSync(join(source, 'assets', 'app.css'), 'body{}')

    copyDirectory(source, child)

    assert.equal(readFileSync(join(child, 'index.html'), 'utf8'), '<link href="/docs/assets/app.css">')
    assert.equal(readFileSync(join(child, 'assets', 'app.css'), 'utf8'), 'body{}')
    assert.equal(existsSync(join(child, 'docs', 'docs', 'docs')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
