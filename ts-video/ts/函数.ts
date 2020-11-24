// 函数的定义

// es5中函数的定义
//  函数声明法
function run() { }
//  匿名函数
let run2 = function () { }



// ts中函数的定义
// 函数声明法
function run3(): string {
    return 'string'
}
// 错误写法
function run4(): string {
    return 123
    // 不能将类型“number”分配给类型“string”
}
// 匿名函数
let run5 = function (): number {
    return 123
}

// ts中定义方法传参
function getCanshu(name: string, age: number): string {
    return `${name}----${age}`
}
// 没有返回值的方法
function noReurn(): void {
    console.log('no return');
}


// 方法的可选参数
// es5中的方法和实参可以不一样,但是ts中必须一样,如果不一样就需要配置可选参数

function getAge(name: string, age?: number): string{
    if (age) {
        return `${name}----${age}`
    } else {
        return `${name}----年龄保密`
    }
}
console.log(getAge('zhangsan',22));
console.log(getAge('zhangsan'));
// 注意:可选参数必须配置到参数的最后面
// 必选参数不能位于可选参数后
function getName(name?:string,age:number){}



// 默认参数
// es5中没有默认参数 es6和ts中都可以设置默认参数
// es6
function morencanshues6(name = 'renjialun', age = 31) { }
// ts
function morencanshuts(name: string = 'fanghongling', age: number = 22) {
    if (age) {
        return `${name}----${age}`
    } else {
        return `${name}----年龄保密`
    }
}


// 剩余参数
function sum(a: number, b: number, c: number, d: number): number{
    return a+b+c+d
}
sum(1, 2, 3, 4)
// 三点运算符 接受形参传过来的值
function sumts(...result: number[]): number{
    var sum = 0
    // sumts.map(item=>sum+=item)
    result.map(item => { sum += item })
    return sum
}
let tssum = sumts(1, 2, 3, 4, 5, 6, 7, 8);
console.log(`tssum的值为:${tssum}`)


// 函数的重载
// java中的重载：两个或两个以上的同名函数，但是他们的参数不一样，这时会出现函数重载的情况
// ts中的重载：通过为一个函数提供多个函数类型参数来实现多功能的目的
// ts为了兼容es5和es6，重载的写法与java有区别

// es5中 出现同名方法，下面的会把上面的顶替

// function css(config) { }
// function css(config, value) { }

// ts中的重载

function getInfo(name: string): string;

function getInfo(age: number): number;

function getInfo(str: any): any {
    if (typeof str === 'string') {
        return 'my name is : ' + str
    } else {
        return 'my age is : ' + str
    }
}

console.log(getInfo('张三'));
console.log(getInfo(20));
// my name is : 张三
// my age is : 20


// console.log(getInfo(true));
//   没有与此调用匹配的重载。
//   第 1 个重载(共 2 个)，“(name: string): string”，出现以下错误。
//   类型“boolean”的参数不能赋给类型“string”的参数。
//   第 2 个重载(共 2 个)，“(age: number): number”，出现以下错误。
//   类型“boolean”的参数不能赋给类型“number”的参数。



// 箭头函数
// this指向问题： 箭头函数里面的 this 指向上下文
