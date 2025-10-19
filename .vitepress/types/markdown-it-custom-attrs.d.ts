declare module 'markdown-it-custom-attrs' {
  import type { PluginWithOptions } from 'markdown-it';
  
  interface CustomAttrsOptions {
    [key: string]: string;
  }
  
  const markdownItCustomAttrs: PluginWithOptions<CustomAttrsOptions>;
  
  export default markdownItCustomAttrs;
}
