import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RPF & RPT Docs",
  description: "Documentation for Resource Packs Fusion and Resource Packs Tools - Minecraft mods for advanced resource pack delegation and item model management",
  
  // Ignore dead links during build (useful while docs are still being written)
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/site_logo.png' }],
    ['meta', { name: 'theme-color', content: '#49C963' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        logo: '/site_logo.png',
        
        nav: [
          { text: 'Home', link: '/' },
          { 
            text: 'RPF', 
            items: [
              { text: 'Getting Started', link: '/rpf/getting-started' },
              { text: 'Pack Developers Guide', link: '/rpf/pack-developers' },
              { text: 'How It Works', link: '/rpf/how-it-works' }
            ]
          },
          { 
            text: 'RPT', 
            items: [
              { text: 'Getting Started', link: '/rpt/getting-started' },
              { text: 'Pack Developers Guide', link: '/rpt/pack-developers' },
              { text: 'Templates', link: '/rpt/templates' },
              { text: 'Variables', link: '/rpt/variables' }
            ]
          },
          { text: 'Examples', link: '/examples/' }
        ],

        sidebar: {
          '/rpf/': [
            {
              text: 'RPF - Resource Packs Fusion',
              items: [
                { text: 'Getting Started', link: '/rpf/getting-started' },
                { text: 'How It Works', link: '/rpf/how-it-works' },
                { text: 'Pack Developers Guide', link: '/rpf/pack-developers' },
                { text: 'Delegation System', link: '/rpf/delegation' },
                { text: 'Model Types', link: '/rpf/model-types' },
                { text: 'Debug & Logging', link: '/rpf/debug' }
              ]
            }
          ],
          '/rpt/': [
            {
              text: 'RPT - Resource Packs Tools',
              items: [
                { text: 'Getting Started', link: '/rpt/getting-started' },
                { text: 'Pack Developers Guide', link: '/rpt/pack-developers' },
                { text: 'Templates System', link: '/rpt/templates' },
                { text: 'Variables', link: '/rpt/variables' },
                { text: 'Regex Models', link: '/rpt/regex' },
                { text: 'Conditional Properties', link: '/rpt/conditional' }
              ]
            }
          ],
          '/examples/': [
            {
              text: 'Examples',
              items: [
                { text: 'Overview', link: '/examples/' },
                { text: 'Basic Delegation', link: '/examples/basic-delegation' },
                { text: 'Custom Models', link: '/examples/custom-models' },
                { text: 'Dynamic Weapons', link: '/examples/dynamic-weapons' }
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/danrus' }
        ],

        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026-present Danrus110'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        logo: '/site_logo.png',
        
        nav: [
          { text: 'Главная', link: '/ru/' },
          { 
            text: 'RPF', 
            items: [
              { text: 'Начало работы', link: '/ru/rpf/getting-started' },
              { text: 'Руководство для создателей паков', link: '/ru/rpf/pack-developers' },
              { text: 'Как это работает', link: '/ru/rpf/how-it-works' }
            ]
          },
          { 
            text: 'RPT', 
            items: [
              { text: 'Начало работы', link: '/ru/rpt/getting-started' },
              { text: 'Руководство для создателей паков', link: '/ru/rpt/pack-developers' },
              { text: 'Шаблоны', link: '/ru/rpt/templates' },
              { text: 'Переменные', link: '/ru/rpt/variables' }
            ]
          },
          { text: 'Примеры', link: '/ru/examples/' }
        ],

        sidebar: {
          '/ru/rpf/': [
            {
              text: 'RPF - Resource Packs Fusion',
              items: [
                { text: 'Начало работы', link: '/ru/rpf/getting-started' },
                { text: 'Как это работает', link: '/ru/rpf/how-it-works' },
                { text: 'Руководство для создателей паков', link: '/ru/rpf/pack-developers' },
                { text: 'Система делегирования', link: '/ru/rpf/delegation' },
                { text: 'Типы моделей', link: '/ru/rpf/model-types' },
                { text: 'Отладка и логирование', link: '/ru/rpf/debug' }
              ]
            }
          ],
          '/ru/rpt/': [
            {
              text: 'RPT - Resource Packs Tools',
              items: [
                { text: 'Начало работы', link: '/ru/rpt/getting-started' },
                { text: 'Руководство для создателей паков', link: '/ru/rpt/pack-developers' },
                { text: 'Система шаблонов', link: '/ru/rpt/templates' },
                { text: 'Переменные', link: '/ru/rpt/variables' },
                { text: 'Regex модели', link: '/ru/rpt/regex' },
                { text: 'Условные свойства', link: '/ru/rpt/conditional' }
              ]
            }
          ],
          '/ru/examples/': [
            {
              text: 'Примеры',
              items: [
                { text: 'Обзор', link: '/ru/examples/' },
                { text: 'Базовое делегирование', link: '/ru/examples/basic-delegation' },
                { text: 'Пользовательские модели', link: '/ru/examples/custom-models' },
                { text: 'Динамическое оружие', link: '/ru/examples/dynamic-weapons' }
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/danrus' }
        ],

        footer: {
          message: 'Выпущено под лицензией MIT.',
          copyright: 'Copyright © 2026-present Danrus110'
        },

        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        },

        outline: {
          label: 'На этой странице'
        },

        lastUpdated: {
          text: 'Обновлено'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык'
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Нет результатов для',
                resetButtonTitle: 'Сбросить поиск',
                footer: {
                  selectText: 'выбрать',
                  navigateText: 'перейти',
                  closeText: 'закрыть'
                }
              }
            }
          }
        }
      }
    }
  }
})
