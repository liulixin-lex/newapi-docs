import { mkdirSync, rmSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { loadSiteConfig, normalizeDocsPath } from './site-config.mjs'
import { copyDirectory, renderHome } from './render-home.mjs'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const rootDir = join(scriptDir, '..')
const outDir = join(rootDir, 'dist-site')
const docsDistDir = join(rootDir, 'docs', '.vitepress', 'dist')
const config = loadSiteConfig(join(rootDir, 'site.config.json'))
const docsPath = normalizeDocsPath(config.site.docsPath)

if (docsPath === '/') {
  throw new Error('site.docsPath cannot be "/" because the homepage uses the root path.')
}

const docsOutName = docsPath.replace(/^\/|\/$/g, '')

function runNpmScript(scriptName, env) {
  const command = process.platform === 'win32'
    ? (process.env.ComSpec || 'cmd.exe')
    : 'npm'
  const args = process.platform === 'win32'
    ? ['/d', '/s', '/c', `npm run ${scriptName}`]
    : ['run', scriptName]

  return spawnSync(command, args, {
    cwd: rootDir,
    env,
    stdio: 'inherit'
  })
}

rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

renderHome({ rootDir, outDir })

const result = runNpmScript('docs:build', { ...process.env, BASE_PATH: docsPath })

if (result.status !== 0) {
  process.exit(result.status || 1)
}

copyDirectory(docsDistDir, join(outDir, docsOutName))
copyDirectory(docsDistDir, join(docsDistDir, docsOutName))
