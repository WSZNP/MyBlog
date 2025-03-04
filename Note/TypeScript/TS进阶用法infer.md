# TS 进阶用法 infer

## infer 就是推导泛型参数

> infer 声明只能出现在 extends 子语句中

> 简单的例子获取 Promise 的返回值

```ts
// 用户接口定义
interface User {
  name: string;
  age: number;
}

// 定义一个 Promise 包装的 User 类型
type Result = Promise<User>; // 此时 Result 的类型是 Promise<User>

// 核心推断工具类型
type PromiseRes<T> = T extends Promise<infer R> ? R : never;

// 应用推断
type r = PromiseRes<Result>; // 最终 r 的类型就是 User
```

![infer](/assets/images/TypeScript/TS进阶用法infer/1.png)

> 如果遇到了多层的情况可以使用递归

```ts
interface User {
  name: string;
  age: number;
}

type Result = Promise<Promise<Promise<User>>>;

type PromiseRes<T> = T extends Promise<infer R> ? PromiseRes<R> : T;

type r = PromiseRes<Result>;
```

![infer](/assets/images/TypeScript/TS进阶用法infer/2.png)

## infer 的协变

> 获取对象属性的类型并且返回元组类型

```ts
let obj = {
  name: '小满',
  age: 123,
};
type protyKey<T> = T extends { name: infer N; age: infer A } ? [N, A] : T;

type res = protyKey<typeof obj>;
```

![infer](/assets/images/TypeScript/TS进阶用法infer/3.png)

> 如果同一个对象使用一个变量就会产生协变，返回值就是联合类型

```ts
let obj = {
  name: '小满',
  age: 123,
};
type protyKey<T> = T extends { name: infer U; age: infer U } ? U : T;

type res = protyKey<typeof obj>;
```

![infer](/assets/images/TypeScript/TS进阶用法infer/4.png)

## infer 的逆变

```ts
type FnType<T> = T extends {
  a: (args: infer U) => void;
  b: (args: infer U) => void;
}
  ? U
  : never;

type T = FnType<{ a: (args: number) => void; b: (args: string) => void }>;
```

> 函数会产生逆变，此时返回的值是一个交叉类型 string & number 怎么可能一个类型同时是 string 又是 number 不可能所以是 never

## 总结

> 在协变位置上同一个类型变量的多个候选类型会被推断为联合类型；在逆变位置上，同一个类型变量的多个候选类型则会被推断为交叉类型
