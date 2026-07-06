import assert from 'node:assert/strict'
import { test } from 'node:test'

import {
  createTokenMap,
  normalizeDocsPath,
  renderTemplate
} from '../scripts/site-config.mjs'

const config = {
  site: {
    origin: 'https://gguuai.com',
    docsPath: 'docs'
  },
  links: {
    docs: 'https://gguuai.aiaimax.cyou/docs/',
    docsIntegration: 'https://gguuai.aiaimax.cyou/docs/integration/endpoint.html',
    pricing: 'https://gguuai.aiaimax.cyou/docs/models/pricing.html',
    help: 'https://gguuai.aiaimax.cyou/docs/',
    faq: 'https://gguuai.aiaimax.cyou/docs/troubleshooting/faq.html',
    contact: 'https://gguuai.aiaimax.cyou/docs/policies/contact.html',
    consoleHome: 'https://gguuai.com',
    signIn: 'https://gguuai.com/sign-in',
    signUp: 'https://gguuai.com/sign-up'
  },
  api: {
    baseUrl: 'https://gguuai.com',
    v1BaseUrl: 'https://gguuai.com/v1',
    optimizedBaseUrl: 'https://api.minimax.love',
    optimizedV1BaseUrl: 'https://api.minimax.love/v1'
  },
  support: {
    email: 'support@gguuai.com'
  }
}

test('normalizes the docs path for VitePress base output', () => {
  assert.equal(normalizeDocsPath('docs'), '/docs/')
  assert.equal(normalizeDocsPath('/docs'), '/docs/')
  assert.equal(normalizeDocsPath('/docs/'), '/docs/')
})

test('creates deployment tokens from one site config', () => {
  const tokens = createTokenMap(config)

  assert.equal(tokens.SITE_ORIGIN, 'https://gguuai.com')
  assert.equal(tokens.CANONICAL_URL, 'https://gguuai.com/')
  assert.equal(tokens.DOCS_URL, 'https://gguuai.aiaimax.cyou/docs/')
  assert.equal(tokens.DOCS_INTEGRATION_URL, 'https://gguuai.aiaimax.cyou/docs/integration/endpoint.html')
  assert.equal(tokens.CONSOLE_HOME_URL, 'https://gguuai.com')
  assert.equal(tokens.API_BASE_URL, 'https://gguuai.com')
  assert.equal(tokens.API_V1_BASE_URL, 'https://gguuai.com/v1')
  assert.equal(tokens.API_HOST, 'gguuai.com')
})

test('renders known tokens and rejects unknown tokens', () => {
  const tokens = createTokenMap(config)
  const rendered = renderTemplate('{{CANONICAL_URL}} {{API_V1_BASE_URL}}', tokens)

  assert.equal(rendered, 'https://gguuai.com/ https://gguuai.com/v1')
  assert.throws(() => renderTemplate('{{MISSING_TOKEN}}', tokens), /MISSING_TOKEN/)
})
