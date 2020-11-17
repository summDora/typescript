// 可使用 [] 来为 接口添加一个有任意的属性
interface Person {
    name: string,
    age?: number,
    [propName: string]: any
}
let A: Person = {
    name: 'A',
    age: 20,
    sex: '123',
    sex1: true,
    sex2: 123123
}
// propName 的 类型为any
// 所以 任意属性 任意类型都可
console.log(A);

interface Man {
    name: string,
    age?: number,
    [propName: string]: string
}
// 类型 “number” 的属性 “age” 不能赋给字符串索引类型 “string”
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
interface Femal {
    name: string,
    age?: number,
    [propName: string]: string | number;
}

