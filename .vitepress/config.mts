import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '沐码编程学习-文档站',
  description: '一个文档站',
  base: '/MyBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      {
        text: '前端学习',
        items: [{ text: 'JavaScript', link: '/Note/JavaScript/Object' }],
      },
    ],

    sidebar: {
      '/Note/JavaScript/': [
        {
          text: 'JavaScript学习',
          collapsed: false,
          items: [{ text: 'Object', link: '/Note/JavaScript/Object' }],
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
