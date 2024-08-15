import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '沐码编程学习-文档站',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  description: '一个文档站',
  base: '/MyBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      {
        text: '前端学习',
        items: [
          { text: 'JavaScript', link: '/Note/JavaScript/原型&原型链' },
          { text: 'CSS', link: '/Note/CSS/mycss' },
          { text: 'HTML', link: '/Note/HTML/myhtml' },
        ],
      },
    ],

    sidebar: {
      '/Note/JavaScript/': [
        {
          text: 'JavaScript学习',
          collapsed: false,
          items: [{ text: '原型&原型链', link: '/Note/JavaScript/原型&原型链' }],
        },
      ],
      '/Note/CSS/': [
        {
          text: 'CSS学习',
          collapsed: false,
          items: [{ text: 'index', link: '/Note/CSS/mycss' }],
        },
      ],
      '/Note/HTML/': [
        {
          text: 'HTML学习',
          collapsed: false,
          items: [{ text: 'index', link: '/Note/HTML/myhtml' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: '是什么让你学习？',
      copyright: 'Copyright © 2022-2024 沐码',
    },
  },
});
