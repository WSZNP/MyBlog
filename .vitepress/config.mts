import { defineConfig } from 'vitepress';
import mdItCustomAttrs from 'markdown-it-custom-attrs';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '个人学习-文档站',
  lang: 'zh-CN',
  description: '一个文档站',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  base: '/MyBlog/',
  markdown: {
    config(md) {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      });
    },
    lineNumbers: true,
  },
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
            text: '前端语言',
            items: [
              { text: 'HTML', link: '/Note/HTML/HTML5-drag-API' },
              { text: 'CSS', link: '/Note/CSS/渐变文字' },
              { text: 'JavaScript', link: '/Note/JavaScript/传递参数' },
              { text: 'TypeScript', link: '/Note/TypeScript/基础类型' },
              { text: 'DEMO合集', link: '/Note/前端DEMO/图片压缩' },
            ],
          },
          {
            text: '框架',
            items: [
              { text: 'Vue', link: '/Note/Vue/Vue2与Vue3的区别' },
              { text: 'React', link: '/Note/React/React开发环境搭建' },
            ],
          },
        ],
      },
      {
        text: '后端开发',
        items: [
          {
            text: '后端',
            items: [
              { text: 'Node', link: '/Note/Node/Packagejson' },
              { text: 'Java', link: '/Note/Java/简介' },
            ],
          },
        ],
      },
      { text: '计算机网络', link: '/Note/Network/OSI七层网络参考模型' },
    ],

    sidebar: {
      '/Note/JavaScript/': [
        {
          text: 'JavaScript基础',
          collapsed: false,
          items: [
            { text: '传递参数', link: '/Note/JavaScript/传递参数' },
            {
              text: '与或操作符的返回值',
              link: '/Note/JavaScript/与或操作符的返回值',
            },
            {
              text: '事件捕获&事件冒泡',
              link: '/Note/JavaScript/事件捕获&事件冒泡',
            },
          ],
        },
        {
          text: 'JavaScript进阶',
          collapsed: false,
          items: [
            { text: '原型&原型链', link: '/Note/JavaScript/原型&原型链' },
            { text: '重写数组方法', link: '/Note/JavaScript/重写数组方法' },
            { text: '事件循环', link: '/Note/JavaScript/事件循环' },
            { text: '继承', link: '/Note/JavaScript/继承' },
          ],
        },
        {
          text: 'JavaScript应用',
          collapsed: false,
          items: [{ text: '深拷贝', link: '/Note/JavaScript/深拷贝' }],
        },
        {
          text: 'JavaScript小技巧',
          collapsed: false,
          items: [{ text: '开发小技巧', link: '/Note/JavaScript/开发小技巧' }],
        },
      ],
      '/Note/CSS/': [
        {
          text: 'CSS学习',
          collapsed: false,
          items: [
            { text: '渐变文字', link: '/Note/CSS/渐变文字' },
            { text: '三栏布局', link: '/Note/CSS/三栏布局' },
            {
              text: 'conic-gradient画圆环',
              link: '/Note/CSS/conic-gradient画圆环',
            },
          ],
        },
      ],
      '/Note/HTML/': [
        {
          text: 'HTML学习',
          items: [
            { text: 'HTML5-drag-API', link: '/Note/HTML/HTML5-drag-API' },
          ],
        },
      ],
      '/Note/Vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'Vue2与Vue3的区别', link: '/Note/Vue/Vue2与Vue3的区别' },
          ],
        },
      ],
      '/Note/React/': [
        {
          text: '入门',
          items: [
            {
              text: 'React开发环境搭建',
              link: '/Note/React/React开发环境搭建',
            },
            {
              text: 'tsx语法入门',
              link: '/Note/React/tsx语法入门',
            },
          ],
        },
        {
          text: '工具',
          items: [
            { text: 'Babel', link: '/Note/React/Babel' },
            { text: 'SWC', link: '/Note/React/SWC' },
          ],
        },
        {
          text: '原理',
          items: [
            { text: 'vdom fiber diff', link: '/Note/React/虚拟DOM' },
            {
              text: 'requestidlecallback',
              link: '/Note/React/requestidlecallback',
            },
          ],
        },
        {
          text: '组件',
          items: [
            { text: '认识组件', link: '/Note/React/认识组件' },
            { text: '组件通信', link: '/Note/React/组件通信' },
            { text: '受控组件', link: '/Note/React/受控组件' },
            { text: '传送组件', link: '/Note/React/传送组件' },
            { text: '异步组件', link: '/Note/React/异步组件' },
            { text: '组件实战', link: '/Note/React/组件实战' },
          ],
        },
        {
          text: 'CSS方案',
          items: [
            { text: 'css modules ', link: '/Note/React/cssModules' },
            { text: 'css in js', link: '/Note/React/cssinJs' },
            { text: 'css 原子化', link: '/Note/React/css原子化' },
          ],
        },
        {
          text: 'Hooks',
          items: [
            {
              text: '数据驱动',
              items: [
                { text: 'useState', link: '/Note/React/useState' },
                { text: 'useReducer', link: '/Note/React/useReducer' },
                {
                  text: 'useSyncExternalStore',
                  link: '/Note/React/useSyncExternalStore',
                },
                { text: 'useTransition', link: '/Note/React/useTransition' },
                {
                  text: 'useDeferredValue',
                  link: '/Note/React/useDeferredValue',
                },
              ],
            },
            {
              text: '副作用',
              items: [
                { text: 'useEffect', link: '/Note/React/useEffect' },
                {
                  text: 'useLayoutEffect',
                  link: '/Note/React/useLayoutEffect',
                },
              ],
            },
            {
              text: '状态传递',
              items: [
                { text: 'useRef', link: '/Note/React/useRef' },
                {
                  text: 'useImperativeHandle',
                  link: '/Note/React/useImperativeHandle',
                },
                { text: 'useContext', link: '/Note/React/useContext' },
              ],
            },
            {
              text: '状态派生',
              items: [
                { text: 'useMemo', link: '/Note/React/useMemo' },
                { text: 'useCallback', link: '/Note/React/useCallback' },
              ],
            },
            {
              text: '工具Hooks',
              items: [
                { text: 'useDebugValue', link: '/Note/React/useDebugValue' },
                { text: 'useId', link: '/Note/React/useId' },
              ],
            },
          ],
        },
        {
          text:'Router',
          items:[
            {
              text:'基本使用',
              items:[
                { text:'路由安装', link:'/Note/React/路由安装' },
                { text:'路由模式', link:'/Note/React/路由模式' },
                { text:'路由', link:'/Note/React/路由' },
              ]
            }
          ]
        }
      ],
      '/Note/Network/': [
        {
          text: '计算机网络',
          items: [
            {
              text: 'OSI七层网络参考模型',
              link: '/Note/Network/OSI七层网络参考模型',
            },
            {
              text: 'TCP三次握手和四次挥手',
              link: '/Note/Network/TCP三次握手和四次挥手',
            },
            { text: '跨域', link: '/Note/Network/跨域' },
            { text: '重学Ajax', link: '/Note/Network/重学Ajax' },
            { text: '重学fetch', link: '/Note/Network/重学fetch' },
            { text: '重学SSE', link: '/Note/Network/重学SSE' },
            { text: 'webSocket学习', link: '/Note/Network/webSocket学习' },
            { text: 'sendBeacon', link: '/Note/Network/sendBeacon' },
            { text: 'TLS&SSL', link: '/Note/Network/TLS&SSL' },
            { text: 'JWT', link: '/Note/Network/JWT' },
            { text: '前端的网络状态', link: '/Note/Network/前端的网络状态' },
            { text: 'TCP实现HTTP服务', link: '/Note/Network/TCP实现HTTP服务' },
            { text: 'HTTPS', link: '/Note/Network/HTTPS' },
            { text: 'DNS查询流程', link: '/Note/Network/DNS查询流程' },
          ],
        },
      ],
      '/Note/前端DEMO/': [
        {
          text: 'DEMO',
          items: [{ text: '图片压缩', link: '/Note/前端DEMO/图片压缩' }],
        },
      ],
      '/Note/TypeScript/': [
        {
          text: 'TS基础',
          items: [
            { text: '基础类型', link: '/Note/TypeScript/基础类型' },
            { text: '任意类型', link: '/Note/TypeScript/任意类型' },
            { text: '接口和对象类型', link: '/Note/TypeScript/接口和对象类型' },
            { text: '数组类型', link: '/Note/TypeScript/数组类型' },
            { text: '函数扩展', link: '/Note/TypeScript/函数扩展' },
            {
              text: '类型断言&联合类型&交叉类型',
              link: '/Note/TypeScript/类型断言&联合类型&交叉类型',
            },
            { text: '内置对象', link: '/Note/TypeScript/内置对象' },
            { text: 'Class类', link: '/Note/TypeScript/Class类' },
            { text: '元组类型', link: '/Note/TypeScript/元组类型' },
            { text: '枚举类型', link: '/Note/TypeScript/枚举类型' },
            {
              text: '类型推论-类型别名',
              link: '/Note/TypeScript/类型推论-类型别名',
            },
            { text: 'never类型', link: '/Note/TypeScript/never类型' },
            { text: 'symbol类型', link: '/Note/TypeScript/symbol类型' },
            { text: '泛型', link: '/Note/TypeScript/泛型' },
            {
              text: 'tsconfig.json配置文件',
              link: '/Note/TypeScript/tsconfig.json配置文件',
            },
            {
              text: 'namespace命名空间',
              link: '/Note/TypeScript/namespace命名空间',
            },
            {
              text: '声明文件d.ts',
              link: '/Note/TypeScript/声明文件',
            },
            { text: 'Mixins混入', link: '/Note/TypeScript/Mixins混入' },
            {
              text: '装饰器Decorator',
              link: '/Note/TypeScript/装饰器Decorator',
            },
            { text: 'Map&Set', link: '/Note/TypeScript/Map&Set' },
            {
              text: '小写vs大写类型的正确使用',
              link: '/Note/TypeScript/小写vs大写类型的正确使用',
            },
          ],
        },
        {
          text: 'TS进阶',
          items: [
            {
              text: 'TS进阶用法Proxy&Reflect',
              link: '/Note/TypeScript/TS进阶用法Proxy&Reflect',
            },
            {
              text: 'TypeScript类型守卫',
              link: '/Note/TypeScript/TypeScript类型守卫',
            },
            {
              text: 'TypeScript进阶类型兼容',
              link: '/Note/TypeScript/TypeScript进阶类型兼容',
            },
            {
              text: 'TS进阶用法-泛型工具',
              link: '/Note/TypeScript/TS进阶用法-泛型工具',
            },
            {
              text: 'TS进阶用法infer',
              link: '/Note/TypeScript/TS进阶用法infer',
            },
          ],
        },
      ],
      '/Note/Java/': [
        {
          text: 'Java基础',
          items: [
            { text: '简介', link: '/Note/Java/简介' },
            { text: '常量与变量', link: '/Note/Java/常量与变量' },
            { text: '运算符', link: '/Note/Java/运算符' },
            { text: '流程控制', link: '/Note/Java/流程控制' },
            { text: '数组', link: '/Note/Java/数组' },
            { text: '方法', link: '/Note/Java/方法' },
            { text: '初识面向对象', link: '/Note/Java/初识面向对象' },
            { text: 'String和ArrayList', link: '/Note/Java/String和ArrayList' },
            { text: '封装和继承', link: '/Note/Java/封装和继承' },
            { text: 'static关键字和方法重写', link: '/Note/Java/static关键字和方法重写' },
            { text: '抽象类和接口', link: '/Note/Java/抽象类和接口' },
            { text: '异常', link: '/Note/Java/异常' },
            { text: '常用类', link: '/Note/Java/常用类' },
            { text: '集合', link: '/Note/Java/集合' },
            { text: 'IO流', link: '/Note/Java/IO流' },
            { text: '多线程', link: '/Note/Java/多线程' },
            { text: '注解和反射', link: '/Note/Java/注解和反射' },
            { text: '网络编程', link: '/Note/Java/网络编程' },
            { text: 'JDK8新特性', link: '/Note/Java/JDK8新特性' },
            { text: 'MySQL', link: '/Note/Java/MySQL' },
            { text: 'Java9-17新特性', link: '/Note/Java/Java9-17新特性' },
          ],
        },
      ],
      'Note/Node/': [
        {
          text: 'Node基础',
          items: [
            { text: 'Package.json', link: '/Note/Node/Packagejson' },
            { text: 'npm install原理', link: '/Note/Node/install原理' },
            { text: 'npm run原理', link: '/Note/Node/run原理' },
            { text: 'npx', link: '/Note/Node/npx' },
            { text: 'npm搭建私服', link: '/Note/Node/npm搭建私服' },
            { text: '模块化', link: '/Note/Node/模块化' },
            { text: '全局变量', link: '/Note/Node/全局变量' },
            { text: 'CSR SSR SEO', link: '/Note/Node/CSR,SSR,SEO' },
            { text: 'path', link: '/Note/Node/path' },
            { text: 'os', link: '/Note/Node/os' },
            { text: 'process', link: '/Note/Node/process' },
            { text: 'child_process', link: '/Note/Node/child_process' },
            { text: 'ffmpeg', link: '/Note/Node/ffmpeg' },
            { text: 'events', link: '/Note/Node/events' },
            { text: 'util', link: '/Note/Node/util' },
            { text: 'pngquant', link: '/Note/Node/pngquant' },
            { text: 'fs', link: '/Note/Node/fs' },
            { text: 'crypto', link: '/Note/Node/crypto' },
          ],
        },
      ],
    },

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
