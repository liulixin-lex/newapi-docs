import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'

import { createTokenMap, loadSiteConfig } from '../scripts/site-config.mjs'

const rootDir = join(import.meta.dirname, '..')
const config = loadSiteConfig(join(rootDir, 'site.config.json'))
const tokens = createTokenMap(config)
const consoleHomeToken = '{{CONSOLE_HOME_URL}}'

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

test('docs home pages include a subtle entry to the API console', () => {
  assert.equal(tokens.CONSOLE_HOME_URL, 'https://gguuai.com')

  for (const entry of docsHomeEntries) {
    const content = readFileSync(join(rootDir, entry.file), 'utf8')

    assert.equal(
      content.includes(
        `<a class="doc-action subtle" href="${consoleHomeToken}" target="_self">${entry.label}</a>`
      ),
      true
    )
    assert.doesNotMatch(content, /<a class="doc-action subtle" href="\/" target="_self">/)
    assert.doesNotMatch(content, /href="\/docs\/"/)
  }
})
