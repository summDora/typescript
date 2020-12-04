/*
    泛型：组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型

    使用泛型来创建可重用的组件

    一个组件可以支持多种类型的数据，用户可以 以自己的数据类型 来使用组件

    通俗理解：泛型就是解决 类 接口 方法 的复用性、以及对不特定数据类型的支持
*/

// 只能返回 string 类型的数据

function getData1(value: string): string {
    return value
}

// 同时返回 string 类型 和 number类型 的数据

// 1 分开返回······冗余
function getData2(value: string): string {
    return value
}
function getData3(value: number): number {
    return value
}

// 2 any返回······放弃了类型检查
function getData4(value: any): any {
    return value
}

// 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数类型一致

// T表示泛型，具体什么类型是调用这个方法的时候决定的

function getData5<T>(value: T): T {
    return value
}

getData5<number>(123) // 正确
getData5<string>(123) // 错误：类型“number”的参数不能赋给类型“string”的参数

function getData6<T>(value: T): any {
    return '随意返回 什么类型 数据'
}



// 泛型类：
// 比如有个最小堆算法，需要同时支持返回数字和字符串两种类型 => 通过类的泛型来实现

// 一般写法 传入number 返回number
/* class MinClass {
    public list: number[] = []
    add(num: number) {
        this.list.push(num)
    }
    min(): number{
        let minNum = this.list[0]
        this.list.map(item => {
            if (item < minNum) {
                minNum=item
            }
        })
        return minNum
    }
}
let listArr=new MinClass()
listArr.add(23)
listArr.add(30)
listArr.add(14)
listArr.add(5)
listArr.add(6)
listArr.add(7)
console.log(listArr.min()) */


// 类的泛型
class MinClass <T>{
    public list: T[] = []
    add(num: T) {
        this.list.push(num)
    }
    min(): T{
        let minNum = this.list[0]
        this.list.map(item => {
            if (item < minNum) {
                minNum=item
            }
        })
        return minNum
    }
}
// 实例化类 并且制定了 类的T 代表的类型是 number
let numList=new MinClass<number>()
numList.add(23)
numList.add(30)
numList.add(14)
numList.add(5)
numList.add(6)
numList.add(7)
console.log(numList.min()) //5

// 实例化类 并且制定了 类的T 代表的类型是 string
let stringList = new MinClass<string>()
stringList.add('d')
stringList.add('a')
stringList.add('c')
stringList.add('v')
console.log(stringList.min()); //a

// 泛型 在 做到了 类型校验 的同时 实现了功能
