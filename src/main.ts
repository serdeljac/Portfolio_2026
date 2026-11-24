import { createApp, createSSRApp } from 'vue'
import './style/style.css'   // Tailwind
import './style/main.scss'   // Global base styles + design tokens
import App from './App.vue'

// The production build ships #app already filled in (scripts/prerender.mjs),
// so hydrate that markup. The dev server serves an empty #app: mount normally.
const prerendered = document.getElementById('app')?.hasChildNodes()
const app = prerendered ? createSSRApp(App) : createApp(App)
app.mount('#app')
