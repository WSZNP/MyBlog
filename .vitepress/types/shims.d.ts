declare module 'vue' {
  export const h: (...args: any[]) => any;
}

declare module '*.vue' {
  const component: any;
  export default component;
}
