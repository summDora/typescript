/*
    重载构造函数：

        类装饰器表达式会在运行时被当做函数被调用，类的构造函数作为其位移的参数
        如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
*/

// function logClass(params: any) {
//     console.log(params)
//     return class extends params{
//         apiUrl: any = '我是类修饰器更改后的url'
//     }
// }


/*
    不写 geturl() 方法 报错 =>
    类型 "(Anonymous class)" 中缺少属性 "getUrl"=>
    类型 "name_one" 中需要该属性
*/

function logClass(params: any) {
    console.log(params)
    return class extends params{
        apiUrl: any = '我是类修饰器更改后的url'
        getUrl() {
            this.apiUrl=`-----${this.apiUrl}------`
            console.log(this.apiUrl)
        }
    }
}

@logClass
class name_one {
    public apiUrl:string | undefined
    constructor() {
        this.apiUrl='我是构造函数内的url'
    }
    getUrl() {
        console.log(this.apiUrl)
    }
}

let one = new name_one();
one.getUrl()
/*
    我是构造函数内的url

        [Function: name_one]
    -----我是类修饰器更改后的url------
*/

/*
    疑问：
    1.
    Q:   类装饰器 在 重载 类构造函数时 需要将类所有已存在的构造函数全部写进去么
    A:  是的 需要重载所有的属性和方法

*/