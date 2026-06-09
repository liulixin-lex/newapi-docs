import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'

const rootDir = join(import.meta.dirname, '..')

const docsHomeEntries = [
  {
    file: 'docs/index.md',
    label: '前往 GGUU AI'
  },
  {
    file: 'docs/en/index.md',
    label: 'Visit GGUU AI'
  }
]

test('docs home pages include a subtle entry to the main site', () => {
  for (const entry of docsHomeEntries) {
    const content = readFileSync(join(rootDir, entry.file), 'utf8')

    assert.match(
      content,
      new RegExp(`<a class="doc-action subtle" href="/" target="_self">${entry.label}</a>`)
    )
    assert.doesNotMatch(content, /href="\/docs\/"/)
  }
})
