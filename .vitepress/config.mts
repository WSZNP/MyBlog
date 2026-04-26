import { defineConfig } from 'vitepress';
import { ImagePreviewPlugin } from 'vitepress-plugin-image-preview'
import { nav } from './config/nav.mts';
import { sidebar } from './config/sidebar/index.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: [
    // 忽略所有 localhost 链接
    /^https?:\/\/localhost/,
  ],
  title: '个人学习-文档站',
  lang: 'zh-CN',
  description: '一个文档站',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  base: '/',
  markdown: {
    lineNumbers: true,
  },
  vite: {
    plugins: [
      ImagePreviewPlugin()
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com' }],
    outline: {
      level: 'deep',
      label: '章节导航',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: 'Keep Reading, Keep Writing, Keep Coding',
      copyright: 'Copyright © 2022-2025 沐码',
    },
    lastUpdated: {
      text: '上次更新时间',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },
  },
});
