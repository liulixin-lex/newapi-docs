import { readFileSync } from 'node:fs'

function stripTrailingSlash(value) {
  return String(value).replace(/\/+$/, '')
}

function requireUrl(value, name) {
  try {
    return new URL(value)
  } catch {
    throw new Error(`${name} must be a valid absolute URL: ${value}`)
  }
}

export function normalizeDocsPath(value) {
  const raw = String(value || '/docs/').trim()
  if (raw === '/') return '/'

  let normalized = raw
  if (!normalized.startsWith('/')) normalized = `/${normalized}`
  if (!normalized.endsWith('/')) normalized = `${normalized}/`

  return normalized.replace(/\/{2,}/g, '/')
}

export function loadSiteConfig(filePath) {
  const config = JSON.parse(readFileSync(filePath, 'utf8'))

  if (!config.site?.origin) throw new Error('site.origin is required')
  if (!config.api?.baseUrl) throw new Error('api.baseUrl is required')
  if (!config.api?.v1BaseUrl) throw new Error('api.v1BaseUrl is required')

  requireUrl(config.site.origin, 'site.origin')
  requireUrl(config.api.baseUrl, 'api.baseUrl')
  requireUrl(config.api.v1BaseUrl, 'api.v1BaseUrl')

  return config
}

export function createTokenMap(config) {
  const siteOrigin = stripTrailingSlash(config.site.origin)
  const docsPath = normalizeDocsPath(config.site.docsPath)
  const apiBaseUrl = stripTrailingSlash(config.api.baseUrl)
  const apiV1BaseUrl = stripTrailingSlash(config.api.v1BaseUrl)
  const optimizedApiBaseUrl = stripTrailingSlash(config.api.optimizedBaseUrl || '')
  const optimizedApiV1BaseUrl = stripTrailingSlash(config.api.optimizedV1BaseUrl || '')

  return {
    SITE_ORIGIN: siteOrigin,
    CANONICAL_URL: `${siteOrigin}/`,
    DOCS_PATH: docsPath,
    DOCS_URL: config.links?.docs || docsPath,
    DOCS_INTEGRATION_URL: config.links?.docsIntegration || `${docsPath}integration/endpoint.html`,
    PRICING_URL: config.links?.pricing || `${docsPath}models/pricing.html`,
    HELP_URL: config.links?.help || docsPath,
    FAQ_URL: config.links?.faq || `${docsPath}troubleshooting/faq.html`,
    CONTACT_URL: config.links?.contact || `${docsPath}policies/contact.html`,
    SIGN_IN_URL: config.links?.signIn || `${apiBaseUrl}/sign-in`,
    SIGN_UP_URL: config.links?.signUp || `${apiBaseUrl}/sign-up`,
    API_BASE_URL: apiBaseUrl,
    API_V1_BASE_URL: apiV1BaseUrl,
    API_HOST: new URL(apiBaseUrl).host,
    API_V1_HOST: new URL(apiV1BaseUrl).host,
    OPTIMIZED_API_BASE_URL: optimizedApiBaseUrl,
    OPTIMIZED_API_V1_BASE_URL: optimizedApiV1BaseUrl,
    SUPPORT_EMAIL: config.support?.email || ''
  }
}

export function renderTemplate(template, tokens) {
  return template.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_match, key) => {
    if (!(key in tokens)) throw new Error(`Unknown site config token: ${key}`)
    return tokens[key]
  })
}
