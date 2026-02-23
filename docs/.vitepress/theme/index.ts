// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import RotatingIcons from './components/RotatingIcons.vue'
import FullWidthFeatures from './components/FullWidthFeatures.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h(RotatingIcons)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Регистрируем глобальные компоненты
    app.component('RotatingIcons', RotatingIcons)
    app.component('FullWidthFeatures', FullWidthFeatures)
  }
} satisfies Theme
