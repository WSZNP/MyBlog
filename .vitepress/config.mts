import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '沐码编程学习-文档站',
  lang: 'zh-CN',
  description: '一个文档站',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  base: '/MyBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端开发',
        items: [
          {
            text: '前端语言和框架',
            items: [
              { text: 'JavaScript', link: '/Note/JavaScript/原型&原型链' },
              { text: 'HTML', link: '/Note/HTML/HTML5-drag-API' },
              { text: 'CSS', link: '/Note/CSS/渐变文字' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/Note/JavaScript/': [
        {
          text: 'JavaScript基础',
          collapsed: true,
          items: [{ text: '传递参数', link: '/Note/JavaScript/传递参数' }],
        },
        {
          text: 'JavaScript进阶',
          collapsed: false,
          items: [
            { text: '原型&原型链', link: '/Note/JavaScript/原型&原型链' },
            { text: '重写数组方法', link: '/Note/JavaScript/重写数组方法' },
            { text: '事件循环', link: '/Note/JavaScript/事件循环' },
          ],
        },
        {
          text: 'JavaScript应用',
          collapsed: false,
          items: [{ text: '深拷贝', link: '/Note/JavaScript/深拷贝' }],
        },
      ],
      '/Note/CSS/': [
        {
          text: 'CSS学习',
          collapsed: false,
          items: [{ text: '渐变文字', link: '/Note/CSS/渐变文字' }],
        },
      ],
      '/Note/HTML/': [
        {
          text: 'HTML学习',
          items: [{ text: 'HTML5-drag-API', link: '/Note/HTML/HTML5-drag-API' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
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
      copyright: 'Copyright © 2022-2024 沐码',
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
