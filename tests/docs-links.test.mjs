import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'

const rootDir = join(import.meta.dirname, '..')
const docsFiles = [
  'docs/getting-started/register.md',
  'docs/getting-started/login.md',
  'docs/integration/endpoint.md',
  'docs/integration/gpt-image-2.md',
  'docs/integration/manual-cli/claude-code.md',
  'docs/integration/manual-cli/codex.md',
  'docs/integration/manual-cli/gemini.md',
  'docs/troubleshooting/faq.md',
  'docs/clients/cherry-studio.md',
  'docs/en/getting-started/register.md',
  'docs/en/getting-started/login.md',
  'docs/en/integration/endpoint.md',
  'docs/en/integration/gpt-image-2.md',
  'docs/en/integration/manual-cli/claude-code.md',
  'docs/en/integration/manual-cli/codex.md',
  'docs/en/integration/manual-cli/gemini.md',
  'docs/en/troubleshooting/faq.md',
  'docs/en/clients/cherry-studio.md'
]

test('docs use centralized API link tokens and do not contain typo domains', () => {
  const contents = docsFiles
    .map((file) => readFileSync(join(rootDir, file), 'utf8'))
    .join('\n')

  assert.doesNotMatch(contents, /https:\/\/api\.gguuai\.com\.com/)
  assert.doesNotMatch(contents, /https:\/\/api\.gguuai\.com(?!\.com|[a-z])/)
  assert.doesNotMatch(contents, /https:\/\/api\.minimax\.love(?![a-z])/)
  assert.match(contents, /\{\{API_BASE_URL\}\}/)
  assert.match(contents, /\{\{API_V1_BASE_URL\}\}/)
  assert.match(contents, /\{\{SIGN_IN_URL\}\}/)
  assert.match(contents, /\{\{SIGN_UP_URL\}\}/)
})
