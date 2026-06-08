import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { createTokenMap, loadSiteConfig, renderTemplate } from './site-config.mjs'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const rootDir = join(scriptDir, '..')

export function copyDirectory(sourceDir, targetDir) {
  mkdirSync(targetDir, { recursive: true })

  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = join(sourceDir, entry.name)
    const targetPath = join(targetDir, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath)
    } else if (entry.isFile() || statSync(sourcePath).isFile()) {
      copyFileSync(sourcePath, targetPath)
    }
  }
}

export function renderHome(options = {}) {
  const projectRoot = options.rootDir || rootDir
  const outDir = options.outDir || join(projectRoot, 'dist-site')
  const config = loadSiteConfig(join(projectRoot, 'site.config.json'))
  const tokens = createTokenMap(config)
  const templatePath = join(projectRoot, 'home', 'index.template.html')
  const assetsDir = join(projectRoot, 'home', 'assets')

  const html = renderTemplate(readFileSync(templatePath, 'utf8'), tokens)

  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html)

  if (existsSync(assetsDir)) {
    copyDirectory(assetsDir, join(outDir, 'assets'))
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  renderHome()
}
