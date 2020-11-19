"use strict";
function hello(person) {
    return "Hello, " + person + "!";
}
var user = 'JiaLun Ren';
var userlist = [1, 2, 3];
console.log(hello(user));
console.log(hello(userlist));
//  Argument of type 'number[]' is not assignable to parameter of type 'string'.
// 但是还是生成了 js 文件
// 这是因为 TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
