// Build step: render the app with the server bundle (dist-ssr/) and write the
// markup into the client build's dist/index.html, then remove dist-ssr/.
// Run after `vite build` and `vite build --ssr src/entry-server.ts --outDir dist-ssr`.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Use Vue's production build for rendering, like the client bundle.
process.env.NODE_ENV = 'production'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(root, 'dist', 'index.html')
const ssrDir = path.join(root, 'dist-ssr')
const mountPoint = '<div id="app"></div>'

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const appHtml = await render()

const template = await fs.readFile(indexPath, 'utf8')
if (!template.includes(mountPoint)) {
  throw new Error(`prerender: ${mountPoint} not found in dist/index.html`)
}
// A replacer function, so "$" sequences in the markup are inserted literally.
await fs.writeFile(indexPath, template.replace(mountPoint, () => `<div id="app">${appHtml}</div>`))
await fs.rm(ssrDir, { recursive: true, force: true })

console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} kB of markup into dist/index.html`)
