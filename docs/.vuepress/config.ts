import { type UserConfig, defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.mefrp.com/favicon.ico' }]
  ],
  lang: 'zh-CN',
  title: "ME Frp 5.0 使用文档",
  description: '幻缘映射 ME Frp 5.0 使用文档',
  locales: {
    '/': { lang: 'zh-CN' },
  },
  theme: plumeTheme({
    logo: 'https://www.mefrp.com/favicon.ico',
    hostname: "https://api.mefrp.com",
    autoFrontmatter: false,
    footer: { message: "", "copyright": "Copyright © ME Frp 项目组 2021-2025.<br><a target='_blank' href='https://beian.miit.gov.cn/'>蜀 ICP 备 2023020251 号</a><br><a href='https://内网穿透.中国/'>Frp 内网穿透联盟统一识别编码: AZWB66WB</a>" },
    navbar: [
      {
        text: '主页',
        link: '/',
        icon: 'heroicons:home',
      },
      {
        text: '文档',
        link: '/docs/',
        icon: 'heroicons:book-open',
      },
    ],
    notes: false,
    sidebar: {
      '/docs/': [
        // example:
        // '/page1',
        // '/page2',
        // '/page3',
      ]
    }
  }),
  bundler: viteBundler(),
}) as UserConfig