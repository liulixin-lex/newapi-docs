import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

import { renderHome } from '../scripts/render-home.mjs'
import { createTokenMap, loadSiteConfig, renderTemplate } from '../scripts/site-config.mjs'

const rootDir = join(import.meta.dirname, '..')

test('renders the homepage from centralized site config', () => {
  const config = loadSiteConfig(join(rootDir, 'site.config.json'))
  const tokens = createTokenMap(config)
  const template = readFileSync(join(rootDir, 'home', 'index.template.html'), 'utf8')
  const html = renderTemplate(template, tokens)

  assert.doesNotMatch(html, /\{\{[A-Z0-9_]+\}\}/)
  assert.doesNotMatch(html, /docs-346\.pages\.dev/)
  assert.doesNotMatch(html, /minimax\.love/)
  assert.match(html, /<link rel="canonical" href="https:\/\/gguuai\.com\/">/)
  assert.match(html, /href="\/docs\/integration\/endpoint\.html"/)
  assert.match(html, /href="\/docs\/troubleshooting\/faq\.html"/)
  assert.match(html, /data-zh="常见问题"/)
  assert.doesNotMatch(html, /data-zh="服务状态"/)
  assert.match(html, /https:\/\/api\.gguuai\.com\/v1/)
})

test('copies homepage assets into the render output', () => {
  const outDir = mkdtempSync(join(tmpdir(), 'gguu-home-'))

  try {
    renderHome({ rootDir, outDir })

    assert.equal(existsSync(join(outDir, 'index.html')), true)
    assert.equal(existsSync(join(outDir, 'assets', 'openai_logo.png')), true)
    assert.equal(existsSync(join(outDir, 'assets', 'claude_logo.png')), true)
  } finally {
    rmSync(outDir, { recursive: true, force: true })
  }
})
