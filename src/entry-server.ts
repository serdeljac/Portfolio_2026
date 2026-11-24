// Server entry used only at build time: renders the app to an HTML string,
// which scripts/prerender.mjs writes into dist/index.html. That way crawlers
// and link previews get the full page without running JavaScript.
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export function render(): Promise<string> {
  return renderToString(createSSRApp(App))
}
