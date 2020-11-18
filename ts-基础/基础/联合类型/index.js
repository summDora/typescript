// 联合类型使用 | 分隔每个类型
var unionTypes;
unionTypes = 123;
unionTypes = 'rjl';
console.log(unionTypes);
// rjl
// 允许 unionTypes 的类型是 string 或者 number，但是不能是其他类型
unionTypes = true;
console.log(unionTypes);
// Type 'boolean' is not assignable to type 'string | number'.
function getLength(something) {
    return something.length;
}
// Property 'length' does not exist on type 'string | number'.
// Property 'length' does not exist on type 'number'.
function getString(something) {
    return something.toString();
}
// TypeScript 不确定一个联合类型的变量到底是哪个类型的时候
// 我们只能访问此联合类型的所有类型里共有的属性或方法
// length 不是 string 和 number 的共有属性，所以会报错
// 访问 string 和 number 的共有属性是没问题的
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
var numString;
numString = 'renjialun';
console.log(numString.length);
// 9
numString = 1;
console.log(numString.length);
// undefined
// numstring在被赋值 renjialun 的时候 被推论成 string
// 所以访问 length属性 不会报错
// numString在被赋值成 1 的时候 被推论成number
// 访问 length 属性 会报错
