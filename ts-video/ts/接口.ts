/*
-------------------------
接口的作用：在面向对象的编程中，接口是一种规范的定义
它定义了行为和动作的规范，
在程序设计里面，接口起到了一种限制和规范的作用

接口定义了某一批类所需遵守的规范，
接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，
它只规定这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要

ts中的接口类似于java，同时增加了更灵活的接口类型
包括 属性、函数、可索引、类类型
-------------------------
*/

// 1.属性接口 -----------对json的约束

// ts自定义方法

// 对传入的json参数进行约束

function print(labelform: { label: string }) :void{ }

print('hhh') //错误写法

print({ name: 'hhhh' })  //错误写法

print({ label: 123 })  //错误写法

print({label:'123'})  //正确写法

// 对批量方法传入参数进行约束

// 接口：行为和动作的规范 对批量方法 进行约束

/* function printName() {
    // 必须传入对象 firstName secondName
} */

interface FullName{
    firstName: string;  //分号结束
    secondName: string;
}

function printName(name:FullName) {
    // 必须传入对象 firstName secondName
    console.log(`${name.firstName}---${name.secondName}`)
}

printName({ firstName: '任', secondName: '嘉伦', age: 20 })
// 对象文字可以只指定已知属性，并且“age”不在类型“FullName”中

let obj = {
    firstName: '任', secondName: '嘉伦', age: 20
}
printName(obj)
// 将参数单拎出去 可增加 接口规定以外的 参数
// 但是传入的参数必须 包括 接口规定的 参数
// 参数必须有，类型必须对应，顺序可以不一致

function printAnimal(info: FullName) {
    console.log(`${info.firstName}~~~~${info.secondName}`)
}
printAnimal({ firstName: 'big', secondName: 'cat' })

// 同个接口 约束多个方法


// 接口：可选属性

interface Config{
    type: string;
    url: string;
    data?: any;  //可选属性 data可传可不传
    dataType: string;
}
// 原生js封装的ajax
function ajax(config: Config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('success')
            if (config.dataType == 'json') {
                let str = JSON.parse(xhr.responseText)
                console.log(str)
            } else {
                console.log(xhr.responseText)
            }

        }
    }
}
// ajax({
//     type: 'get',
//     url: 'https://www.baidu.com',
//     dataType: 'json',
//     data: {
//         name:'renjialun'
//     }
// })



// 2.函数接口   -----对方法传入的参数 以及返回值进行约束

// 加密的函数类型接口

interface encrypt{
    (key: string, value: string): string;
    // 传入两个 string 类型的参数 返回一个string类型的值
}

var md5: encrypt = function (key: string, value: string): string{
    return key+value
}
console.log(md5('namestring', 'valuestring'))

var hanshu: encrypt = function (one: string, sec: string): string{
    return `${one}-----${sec}`
}
console.log(hanshu('namestring', 'valuestring'))




// 3.可索引接口  ------对数组和对象的约束 （不常用）
// [index:number] 为数组  [index:string] 为对象

var arr = [12, '34', true]

var arr1: number[] = [1, 2, 3, 4]

var arr2: Array<string> = ['1', '2', '3', '4']

// 数组的约束
interface UserArr{
    [index: number]: string;
}

var arr3: UserArr = ['1', '2', '3', '4']
console.log(arr3[2])     //3
// 正确写法

var arr4:UserArr=[1,2,3,4]
// 错误写法  所需类型来自此索引签名


// 对象的约束
interface UserObj{
    [index: string]: string;
}
var userobj: UserObj = { name: 'ren', nickname: 'guochao' }
console.log(userobj)
// { name: 'ren', nickname: 'guochao' }



// 4.类类型接口   -------对 类的约束  和 抽象类 相似

interface Animals{
    name: string;
    eat(str: string): void;
}

class Dogs implements Animals{
    // 类型 "Dogs" 中缺少属性 "eat"，但类型 "Animals" 中需要该属性
    // 错误写法
    name: string;
    constructor(name: string) {
        this.name=name
    }
}
class Cats implements Animals{
    // 类型 "Cats" 中缺少属性 "name"，但类型 "Animals" 中需要该属性
    // 错误写法
    eat() { }
    // 可以不传参 但是方法得有
}
class Fishes implements Animals{
    // 正确写法 name 和 eat 都存在
    name: string;
    constructor(name: string) {
        this.name=name
    }
    eat(food: string) {
        console.log(`${this.name} 吃 ${food}`)
    }
}
let f = new Fishes('小鱼儿')
f.eat('虾米')
// 小鱼儿 吃 虾米
