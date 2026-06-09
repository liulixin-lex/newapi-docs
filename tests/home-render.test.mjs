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
  assert.doesNotMatch(html, /href="\/docs\//)
  assert.match(html, /href="https:\/\/gguuai\.aiaimax\.cyou\/docs\/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer" data-zh="查看接入文档"/)
  assert.match(html, /href="https:\/\/gguuai\.aiaimax\.cyou\/docs\/models\/pricing\.html" target="_blank" rel="noopener noreferrer" data-zh="计费规则"/)
  assert.match(html, /href="https:\/\/gguuai\.aiaimax\.cyou\/docs\/troubleshooting\/faq\.html" target="_blank" rel="noopener noreferrer" data-zh="常见问题"/)
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

test('homepage does not render a custom cursor circle', () => {
  const template = readFileSync(join(rootDir, 'home', 'index.template.html'), 'utf8')

  assert.doesNotMatch(template, /id="cursor-(?:blob|glow)"/)
  assert.doesNotMatch(template, /\.cursor-(?:blob|glow)\b/)
  assert.doesNotMatch(template, /\bhas-custom-cursor\b/)
  assert.doesNotMatch(template, /\bhover-(?:card|btn|code|text)\b/)
  assert.doesNotMatch(template, /\bisMobile\b/)
})
