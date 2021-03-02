
/*
    属性装饰器：

        属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
        1.对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
        2.成员的名字
*/

namespace shuxing{
    // 类装饰器
    function logClassB(params: string) {
        return function (target: any) {
            target.prototype.apiUrl = params
        }
    }
    // 属性装饰器
    function logProperty(params:any) {
        return function (target: any, attr: any) {
            console.log(target);
            console.log(attr);
            /*
                name_one { getUrl: [Function] }
                url
            */
            target[attr]=params
        }
    }

    @logClassB('xxxx')
    export class name_one {
        public apiUrl: string | undefined
        @logProperty('http://www.logClass.com')
        public url: any | undefined;
        constructor() {}
        getUrl() {
            console.log(this.url)
        }
    }

}
// 注意  命名空间暴露出来的 变量 在使用的时候 需要加上 空间名称
console.log(shuxing.name_one)
let name_one_eg = new shuxing.name_one();
console.log(name_one_eg.url)
name_one_eg.getUrl()
/*
    name_one { getUrl: [Function] }
    url
    [Function: name_one]
    http://www.logClass.com
    http://www.logClass.com
*/
