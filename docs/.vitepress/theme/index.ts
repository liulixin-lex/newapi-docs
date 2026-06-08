import DefaultTheme from 'vitepress/theme'
import { defineComponent, h, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'
import './style.css'

const calloutLeadPattern = /^(?:❗️?|!|🔔|⚠️?|注意|重要|推荐配置|必须先完成|Note|Important|Recommended setup|Recommended configuration|Must complete first)/
const uiTerms = [
  '图像生成（OpenAI）',
  '获取模型列表',
  '添加供应商',
  'API 请求地址',
  'API 密钥',
  'API 地址',
  '端点类型',
  '模型服务',
  '请求地址',
  'API Key',
  '使用中',
  '提供商',
  '添加',
  '启用',
  '保存',
  '绘画',
  'Image generation (OpenAI)',
  'Get model list',
  'Add provider',
  'API request address',
  'API key',
  'API address',
  'Endpoint type',
  'Model Services',
  'Request address',
  'In use',
  'Provider',
  'Add',
  'Enable',
  'Save',
  'Painting'
]

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const uiTermPattern = new RegExp(
  `(^|[^\\u4e00-\\u9fffA-Za-z0-9_-])(${uiTerms.map(escapeRegExp).join('|')})(?=$|[^\\u4e00-\\u9fffA-Za-z0-9_-])`,
  'g'
)

function isCalloutLead(element: Element) {
  if (element.tagName !== 'P') return false
  const text = element.textContent?.trim() ?? ''
  return calloutLeadPattern.test(text)
}

function calloutVariant(element: Element) {
  const text = element.textContent?.trim() ?? ''
  if (/^(?:❗️?|!|⚠️?|注意|重要|必须先完成)/.test(text)) return 'warning'
  return 'tip'
}

function isCalloutBoundary(element: Element) {
  return element.matches('h1, h2, h3, h4, h5, h6, img, table, ol, ul')
}

function enhanceCallouts(doc: HTMLElement) {
  const elements = Array.from(doc.children)

  for (let index = 0; index < elements.length; index += 1) {
    const current = elements[index]
    if (!current.isConnected || current.closest('.doc-callout') || !isCalloutLead(current)) continue

    const group: Element[] = []
    for (let cursor = index; cursor < elements.length; cursor += 1) {
      const candidate = elements[cursor]
      if (!candidate.isConnected || candidate.closest('.doc-callout')) continue
      if (cursor > index && (isCalloutLead(candidate) || isCalloutBoundary(candidate))) break

      group.push(candidate)
    }

    if (!group.length) continue

    const wrapper = document.createElement('div')
    wrapper.className = `doc-callout doc-callout--${calloutVariant(current)}`
    group[0].before(wrapper)
    group.forEach((element) => wrapper.append(element))
    index += group.length - 1
  }
}

function enhanceInlineTokens(doc: HTMLElement) {
  const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (!parent || parent.closest('code, pre, a, script, style, .doc-ui-token')) {
        return NodeFilter.FILTER_REJECT
      }
      uiTermPattern.lastIndex = 0
      return uiTermPattern.test(node.textContent ?? '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    }
  })

  const nodes: Text[] = []
  while (walker.nextNode()) nodes.push(walker.currentNode as Text)

  nodes.forEach((node) => {
    const source = node.textContent ?? ''
    uiTermPattern.lastIndex = 0
    if (!uiTermPattern.test(source)) return

    uiTermPattern.lastIndex = 0
    const fragment = document.createDocumentFragment()
    let cursor = 0
    let match: RegExpExecArray | null

    while ((match = uiTermPattern.exec(source))) {
      const prefix = match[1]
      const term = match[2]
      const termStart = match.index + prefix.length

      fragment.append(source.slice(cursor, termStart))

      const token = document.createElement('span')
      token.className = 'doc-ui-token'
      token.textContent = term
      fragment.append(token)

      cursor = termStart + term.length
    }

    fragment.append(source.slice(cursor))
    node.replaceWith(fragment)
  })
}

function isPolicyPath(path: string) {
  return path.startsWith('/policies/') || path.startsWith('/en/policies/')
}

function isEnglishPath(path: string) {
  return path === '/en' || path === '/en/' || path === '/en/index.html' || path.startsWith('/en/')
}

function stripEnglishPrefix(path: string) {
  if (path === '/en' || path === '/en/' || path === '/en/index.html') return '/'
  return path.replace(/^\/en(?=\/)/, '') || '/'
}

function addEnglishPrefix(path: string) {
  if (path === '/' || path === '/index.html') return '/en/index.html'
  if (isEnglishPath(path)) return path
  return `/en${path.startsWith('/') ? path : `/${path}`}`
}

function routeSuffix() {
  if (typeof window === 'undefined') return ''
  return `${window.location.search}${window.location.hash}`
}

const LanguageSwitcher = defineComponent({
  name: 'LanguageSwitcher',
  props: {
    screen: Boolean
  },
  setup(props) {
    const route = useRoute()
    const switcher = ref<HTMLDetailsElement | null>(null)
    const open = ref(false)

    const close = () => {
      open.value = false
    }

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target
      if (target instanceof Node && switcher.value?.contains(target)) return
      close()
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    onMounted(() => {
      document.addEventListener('click', handleDocumentClick)
      document.addEventListener('keydown', handleKeydown)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleDocumentClick)
      document.removeEventListener('keydown', handleKeydown)
    })

    watch(() => route.path, close)

    return () => {
      const currentPath = route.path || '/'
      const isEnglish = isEnglishPath(currentPath)
      const chinesePath = stripEnglishPrefix(currentPath)
      const englishPath = addEnglishPrefix(currentPath)
      const suffix = routeSuffix()
      const handleSelect = (event: MouseEvent, active: boolean) => {
        if (active) event.preventDefault()
        close()
      }

      return h(
        'details',
        {
          ref: switcher,
          class: ['doc-language-switcher', props.screen && 'doc-language-switcher--screen'],
          open: open.value,
          onToggle: (event: Event) => {
            open.value = (event.currentTarget as HTMLDetailsElement).open
          }
        },
        [
          h('summary', { class: 'doc-language-trigger' }, isEnglish ? 'Language' : '语言'),
          h('div', { class: 'doc-language-menu', role: 'menu' }, [
            h(
              'a',
              {
                class: ['doc-language-option', !isEnglish && 'active'],
                href: withBase(chinesePath) + suffix,
                role: 'menuitem',
                'aria-current': !isEnglish ? 'page' : undefined,
                onClick: (event: MouseEvent) => handleSelect(event, !isEnglish)
              },
              '简体中文'
            ),
            h(
              'a',
              {
                class: ['doc-language-option', isEnglish && 'active'],
                href: withBase(englishPath) + suffix,
                role: 'menuitem',
                'aria-current': isEnglish ? 'page' : undefined,
                onClick: (event: MouseEvent) => handleSelect(event, isEnglish)
              },
              'English'
            )
          ])
        ]
      )
    }
  }
})

function enhanceDocs(path = window.location.pathname) {
  if (isPolicyPath(path)) return

  document.querySelectorAll<HTMLElement>('.vp-doc').forEach((doc) => {
    const contentRoot = doc.querySelector<HTMLElement>(':scope > div') ?? doc
    if (contentRoot.dataset.sourceStyleEnhanced === 'true') return
    contentRoot.dataset.sourceStyleEnhanced = 'true'
    enhanceCallouts(contentRoot)
    enhanceInlineTokens(contentRoot)
  })
}

const EnhancedLayout = defineComponent({
  name: 'EnhancedLayout',
  setup() {
    const route = useRoute()
    const scheduleEnhance = () => nextTick(() => window.requestAnimationFrame(() => enhanceDocs(route.path)))

    onMounted(scheduleEnhance)
    watch(() => route.path, scheduleEnhance)

    return () =>
      h(DefaultTheme.Layout, null, {
        'nav-bar-content-after': () => h(LanguageSwitcher),
        'nav-screen-content-after': () => h(LanguageSwitcher, { screen: true })
      })
  }
})

export default {
  extends: DefaultTheme,
  Layout: EnhancedLayout
}
