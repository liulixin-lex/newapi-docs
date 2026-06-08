import { existsSync, readFileSync } from 'node:fs'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { createTokenMap, loadSiteConfig } from '../../scripts/site-config.mjs'

const base = process.env.BASE_PATH || '/'
const configDir = dirname(fileURLToPath(import.meta.url))
const rootDir = join(configDir, '..', '..')
const publicDir = join(configDir, '..', 'public')
const siteTokens = createTokenMap(loadSiteConfig(join(rootDir, 'site.config.json')))
const publicImageSizeCache = new Map<string, { width: number; height: number } | null>()

function readPngSize(filePath: string) {
  const file = readFileSync(filePath)
  const isPng = file.length >= 24 && file.toString('hex', 0, 8) === '89504e470d0a1a0a'
  if (!isPng || file.toString('ascii', 12, 16) !== 'IHDR') return null

  return {
    width: file.readUInt32BE(16),
    height: file.readUInt32BE(20)
  }
}

function readWebpSize(filePath: string) {
  const file = readFileSync(filePath)
  const isWebp = file.length >= 30 && file.toString('ascii', 0, 4) === 'RIFF' && file.toString('ascii', 8, 12) === 'WEBP'
  if (!isWebp) return null

  let offset = 12
  while (offset + 8 <= file.length) {
    const chunkType = file.toString('ascii', offset, offset + 4)
    const chunkSize = file.readUInt32LE(offset + 4)
    const dataOffset = offset + 8

    if (chunkType === 'VP8X' && dataOffset + 10 <= file.length) {
      return {
        width: file.readUIntLE(dataOffset + 4, 3) + 1,
        height: file.readUIntLE(dataOffset + 7, 3) + 1
      }
    }

    if (chunkType === 'VP8L' && dataOffset + 5 <= file.length) {
      const b1 = file[dataOffset + 1]
      const b2 = file[dataOffset + 2]
      const b3 = file[dataOffset + 3]
      const b4 = file[dataOffset + 4]

      return {
        width: 1 + b1 + ((b2 & 0x3f) << 8),
        height: 1 + ((b2 & 0xc0) >> 6) + (b3 << 2) + ((b4 & 0x0f) << 10)
      }
    }

    if (chunkType === 'VP8 ' && dataOffset + 10 <= file.length) {
      return {
        width: file.readUInt16LE(dataOffset + 6) & 0x3fff,
        height: file.readUInt16LE(dataOffset + 8) & 0x3fff
      }
    }

    offset = dataOffset + chunkSize + (chunkSize % 2)
  }

  return null
}

function getPublicImageSize(src: string) {
  const cleanSrc = src.split(/[?#]/)[0]
  if (!cleanSrc.startsWith('/images/')) return null

  if (publicImageSizeCache.has(cleanSrc)) {
    return publicImageSizeCache.get(cleanSrc)
  }

  const filePath = join(publicDir, cleanSrc.replace(/^\/+/, ''))
  if (!existsSync(filePath)) {
    publicImageSizeCache.set(cleanSrc, null)
    return null
  }

  const extension = extname(cleanSrc).toLowerCase()
  const size =
    extension === '.png' || extension === '.webp'
      ? readPngSize(filePath) ?? readWebpSize(filePath)
      : null
  publicImageSizeCache.set(cleanSrc, size)
  return size
}

function enhanceMarkdownImages(md: any) {
  const defaultRender =
    md.renderer.rules.image ??
    ((tokens: any[], index: number, options: any, env: any, self: any) => self.renderToken(tokens, index, options))

  md.renderer.rules.image = (tokens: any[], index: number, options: any, env: any, self: any) => {
    const token = tokens[index]
    const src = token.attrGet('src')

    token.attrSet('loading', token.attrGet('loading') ?? 'lazy')
    token.attrSet('decoding', token.attrGet('decoding') ?? 'async')

    if (src) {
      const size = getPublicImageSize(src)
      if (size) {
        token.attrSet('width', token.attrGet('width') ?? String(size.width))
        token.attrSet('height', token.attrGet('height') ?? String(size.height))
      }
    }

    return defaultRender(tokens, index, options, env, self)
  }
}

function wrapMarkdownTables(md: any) {
  const defaultRender = (tokens: any[], index: number, options: any, _env: any, self: any) => self.renderToken(tokens, index, options)
  const defaultTableOpen = md.renderer.rules.table_open ?? defaultRender
  const defaultTableClose = md.renderer.rules.table_close ?? defaultRender

  md.renderer.rules.table_open = (tokens: any[], index: number, options: any, env: any, self: any) =>
    `<div class="doc-table-scroll">${defaultTableOpen(tokens, index, options, env, self)}`

  md.renderer.rules.table_close = (tokens: any[], index: number, options: any, env: any, self: any) =>
    `${defaultTableClose(tokens, index, options, env, self)}</div>`
}

function replaceSiteTokens(md: any) {
  md.core.ruler.before('normalize', 'site_config_tokens', (state: any) => {
    state.src = state.src.replace(/\{\{([A-Z0-9_]+)\}\}/g, (match: string, key: string) => {
      if (!(key in siteTokens)) throw new Error(`Unknown site config token in markdown: ${key}`)
      return siteTokens[key] || match
    })
  })
}

const guideSidebar = [
  {
    text: '快速开始',
    items: [
      { text: '注册账号', link: '/getting-started/register.html' },
      { text: '登录与重置密码', link: '/getting-started/login.html' },
      { text: '购买额度', link: '/getting-started/billing.html' },
      { text: '创建 API 令牌', link: '/getting-started/api-token.html' },
      { text: '环境检查', link: '/getting-started/environment.html' },
      { text: '配置 CLI 工具', link: '/integration/endpoint.html' }
    ]
  },
  {
    text: '接入配置',
    items: [
      {
        text: 'CC-Switch 使用教程',
        collapsed: false,
        items: [
          { text: 'CC-Switch 介绍', link: '/integration/cc-switch/index.html' },
          { text: '软件下载', link: '/integration/cc-switch/download.html' },
          { text: 'Claude Code 配置', link: '/integration/cc-switch/claude-code.html' },
          { text: 'Codex 配置', link: '/integration/cc-switch/codex.html' },
          { text: 'Gemini 配置', link: '/integration/cc-switch/gemini.html' }
        ]
      },
      {
        text: '手动 CLI 配置',
        collapsed: false,
        items: [
          { text: '环境检查', link: '/integration/manual-cli/environment.html' },
          { text: 'Claude Code', link: '/integration/manual-cli/claude-code.html' },
          { text: 'Codex', link: '/integration/manual-cli/codex.html' },
          { text: 'Gemini', link: '/integration/manual-cli/gemini.html' }
        ]
      },
      {
        text: '第三方客户端',
        collapsed: false,
        items: [
          { text: 'Cherry Studio', link: '/clients/cherry-studio.html' },
          { text: 'OpenCode', link: '/clients/opencode.html' }
        ]
      },
      { text: 'GPT-Image-2 配置', link: '/integration/gpt-image-2.html' }
    ]
  },
  {
    text: '分组与费用',
    items: [
      { text: '计费规则', link: '/models/pricing.html' },
      { text: '模型分组介绍', link: '/models/groups.html' }
    ]
  },
  {
    text: '常见问题',
    collapsed: true,
    items: [
      { text: '余额充足但提示额度不足？', link: '/troubleshooting/faq.html#余额充足但提示额度不足' },
      { text: '提示没有可用渠道？', link: '/troubleshooting/faq.html#提示没有可用渠道' },
      { text: '常见报错码', link: '/troubleshooting/faq.html#常见报错码' }
    ]
  },
  {
    text: '条款与政策',
    collapsed: true,
    items: [
      { text: '条款与政策总览', link: '/policies/overview.html' },
      { text: '服务条款', link: '/policies/terms.html' },
      { text: '使用政策（AUP）', link: '/policies/aup.html' },
      { text: '隐私政策与数据处理说明', link: '/policies/privacy.html' },
      { text: '服务特定条款', link: '/policies/service-specific.html' },
      { text: '服务可用范围与地区政策', link: '/policies/regions.html' },
      { text: '投诉、申诉与联系我们', link: '/policies/contact.html' },
      { text: '条款更新', link: '/policies/updates.html' }
    ]
  }
]

const enSidebar = [
  {
    text: 'Quick Start',
    items: [
      { text: 'Create an Account', link: '/en/getting-started/register.html' },
      { text: 'Sign In and Reset Password', link: '/en/getting-started/login.html' },
      { text: 'Buy Credits', link: '/en/getting-started/billing.html' },
      { text: 'Create an API Token', link: '/en/getting-started/api-token.html' },
      { text: 'Environment Check', link: '/en/getting-started/environment.html' },
      { text: 'Configure CLI Tools', link: '/en/integration/endpoint.html' }
    ]
  },
  {
    text: 'Integration',
    items: [
      {
        text: 'CC-Switch Guide',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/en/integration/cc-switch/index.html' },
          { text: 'Download', link: '/en/integration/cc-switch/download.html' },
          { text: 'Claude Code', link: '/en/integration/cc-switch/claude-code.html' },
          { text: 'Codex', link: '/en/integration/cc-switch/codex.html' },
          { text: 'Gemini', link: '/en/integration/cc-switch/gemini.html' }
        ]
      },
      {
        text: 'Manual CLI Setup',
        collapsed: false,
        items: [
          { text: 'Environment', link: '/en/integration/manual-cli/environment.html' },
          { text: 'Claude Code', link: '/en/integration/manual-cli/claude-code.html' },
          { text: 'Codex', link: '/en/integration/manual-cli/codex.html' },
          { text: 'Gemini', link: '/en/integration/manual-cli/gemini.html' }
        ]
      },
      {
        text: 'Third-party Clients',
        collapsed: false,
        items: [
          { text: 'Cherry Studio', link: '/en/clients/cherry-studio.html' },
          { text: 'OpenCode', link: '/en/clients/opencode.html' }
        ]
      },
      { text: 'GPT-Image-2', link: '/en/integration/gpt-image-2.html' }
    ]
  },
  {
    text: 'Groups and Billing',
    items: [
      { text: 'Billing Rules', link: '/en/models/pricing.html' },
      { text: 'Model Groups', link: '/en/models/groups.html' }
    ]
  },
  {
    text: 'FAQ',
    collapsed: true,
    items: [
      { text: 'Enough balance but insufficient credits?', link: '/en/troubleshooting/faq.html#enough-account-balance-but-the-error-says-insufficient-credits' },
      { text: 'No available channel?', link: '/en/troubleshooting/faq.html#no-available-channel' },
      { text: 'Common error codes', link: '/en/troubleshooting/faq.html#common-error-codes' }
    ]
  },
  {
    text: 'Terms and Policies',
    collapsed: true,
    items: [
      { text: 'Policy Overview', link: '/en/policies/overview.html' },
      { text: 'Terms of Service', link: '/en/policies/terms.html' },
      { text: 'Acceptable Use Policy', link: '/en/policies/aup.html' },
      { text: 'Privacy and Data Processing', link: '/en/policies/privacy.html' },
      { text: 'Service-specific Terms', link: '/en/policies/service-specific.html' },
      { text: 'Availability and Regional Policy', link: '/en/policies/regions.html' },
      { text: 'Complaints and Contact', link: '/en/policies/contact.html' },
      { text: 'Policy Updates', link: '/en/policies/updates.html' }
    ]
  }
]

export default defineConfig({
  base,
  title: 'GGUU API 文档',
  description: 'GGUU API 中转站使用教程',
  lang: 'zh-CN',
  cleanUrls: false,
  lastUpdated: true,
  markdown: {
    config(md) {
      replaceSiteTokens(md)
      enhanceMarkdownImages(md)
      wrapMarkdownTables(md)
    }
  },
  themeConfig: {
    siteTitle: 'GGUU API',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started/register.html' },
      { text: 'CLI 配置', link: '/integration/cc-switch/index.html' },
      { text: '分组与费用', link: '/models/pricing.html' },
      { text: '常见问题', link: '/troubleshooting/faq.html' }
    ],
    sidebar: guideSidebar,
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除搜索',
            displayDetails: '显示详情',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '章节菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '选择语言',
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    socialLinks: []
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'GGUU API Docs',
      description: 'GGUU API relay service guide',
      themeConfig: {
        siteTitle: 'GGUU API',
        nav: [
          { text: 'Home', link: '/en/index.html' },
          { text: 'Quick Start', link: '/en/getting-started/register.html' },
          { text: 'CLI Setup', link: '/en/integration/cc-switch/index.html' },
          { text: 'Groups and Billing', link: '/en/models/pricing.html' },
          { text: 'FAQ', link: '/en/troubleshooting/faq.html' }
        ],
        sidebar: enSidebar,
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Search docs', buttonAriaLabel: 'Search docs' },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                displayDetails: 'Show details',
                footer: { selectText: 'Select', navigateText: 'Navigate' }
              }
            }
          }
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top',
        langMenuLabel: 'Change language',
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'short'
          }
        }
      }
    }
  }
})


