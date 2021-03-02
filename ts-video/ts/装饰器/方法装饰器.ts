
// 方法装饰器：被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义
// 方法装饰会在运行时传入三个参数，如下：

/*
    1.对于静态成员来说，是类的构造函数；对于实例成员是类的原型对象
    2.成员的名字
    3.成员的属性描述符
*/

namespace fangfa {

    function get(params: any) {
        return function (target: any, methodName: any, desc: any) {
            console.log(target);
            console.log(methodName);
            console.log(desc.value);
            // desc.value 就是 装饰的方法的 函数体

            target.apiUrl = '方法装饰器内的 url'
            target.run = function () {
                console.log('方法装饰器内的 method')
            }

            // 修改装饰器的方法：把装饰器方法里面传入的所有参数改为string类型

            // 1.保存当前的方法

            var oMethod=desc.value
            // 2.
        }
    }

    export class name_two {
        public url: any | undefined;
        constructor() { }
        @get('http://www.get.com')
        getUrl() {
            console.log(this.url)
        }
    }
}

let name_two_eg: any = new fangfa.name_two()
console.log(name_two_eg)
/*
    name_two { getUrl: [Function] }
    getUrl
    {
    value: [Function],
    writable: true,
    enumerable: true,
    configurable: true
    }
    name_two {}
*/
console.log(name_two_eg.apiUrl)
name_two_eg.run()
/*
    方法装饰器内的 url
    方法装饰器内的 method
*/