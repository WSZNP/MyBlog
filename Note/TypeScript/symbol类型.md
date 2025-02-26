# symbol 类型

## 自 ECMAScript 2015 起，symbol 成为了一种新的原生类型，就像 number 和 string 一样。

> symbol 类型的值是通过 Symbol 构造函数创建的。

> 可以传递参做为唯一标识 只支持 string 和 number 类型的参数

```ts
let sym1 = Symbol();
let sym2 = Symbol('key'); // 可选的字符串key
```

## Symbol的值是唯一的