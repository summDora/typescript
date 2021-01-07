
// 类装饰器：就是在类声明之前被声明（紧靠着类声明）
// 类装饰器应用于类构造函数，可以用来监视，修改或者替换类定义
// 被装饰的声明信息做为参数传入

//      类装饰器 => 普通装饰器（不可传参）

function logClassA(params: any) {
    console.log(params)
    // 不可传参时 params 就是代表 当前类
    params.prototype.apiUrl = 'http://www.api.com'
    params.prototype.run = function () {
        console.log('装饰器的 run 方法')
    }
}

@logClassA
class classA {
    constructor() { }
    Done() { }
}

let A: any = new classA()
console.log(A)
console.log(A.apiUrl)

//      类装饰器 => 装饰器工厂（可传参）

function logClassB(params: string) {
    return function (target: any) {
        console.log(params)
        console.log(target)
        target.prototype.apiUrl = params
    }
    // 可传参时 target 就是代表 当前类
    // 可传参时 params 就是代表 传过来的参数
}

//      相当于把 http://www.classb.apiurl 给了params
//      下面的这个类 传给了 target
@logClassB('http://www.classb.apiurl')
class classB {
    constructor() { }
    done() { }
}

let B: any = new classB()
console.log(B.apiUrl)

/*
    [Function: classA]
    classA {}
    http://www.api.com
    http://www.classb.apiurl
    [Function: classB]
    http://www.classb.apiurl
*/


/*
    疑问：
    1.类装饰器 在 重载 类构造函数时 需要将类所有已存在的构造函数全部写进去么
*/