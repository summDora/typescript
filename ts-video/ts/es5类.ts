// es5中的类
// 1.最简单的类
function Person() {
    this.name = 'zhangsan'
    this.age=20
}
var p = new Person()
console.log(p)
// Person { name: 'zhangsan', age: 20 }

// 2.构造函数和原型链里面增加方法
function Person() {
    this.name = 'zhangsan'
    this.age = 20
    this.run = function () { // 实例方法
        console.log(this.name+'在运动')
    }
}
var p = new Person()
console.log(p)
p.run()
// zhangsan在运动

// 原型链上面的属性会被多个实例共享 构造函数不会
Person.prototype.sex = '男'
Person.prototype.work = function () {
    console.log(this.name+'在工作')
}
p.work()
// zhangsan在工作

// 3.类里面的静态方法
function Person() {
    this.name = 'zhangsan'
    this.age = 20
    this.run = function () { // 实例方法
        console.log(this.name+'在运动')
    }
}
Person.getInfo = function () {
    console.log('我就是静态方法!')
}
// 调用静态方法
Person.getInfo() // 我就是静态方法!
// p.getInfo()  // error



// es5中的继承
// 1.对象冒充继承
function Web() {
    Person.call(this)
}
var w = new Web()
console.log(w)
// Web { name: 'zhangsan', age: 20, run: [Fun   eo\js>ction] }
w.run()
// zhangsan在运动
// w.work()
// error 报错 work is not a function

// 对象冒充可以继承构造函数内的属性和方法
// 对象冒充不可以继承原型链上的属性和方法

// 原型链继承
function Line() {}
Line.prototype = new Person() //原型链实现继承
let l=new Line()
l.run() //zhangsan在运动
l.work() //zhangsan在工作
// 原型链继承可以继承构造函数内的属性和方法
// 原型链继承也可以继承原型链上的属性和方法

// 2.原型链继承的问题
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(this.name+'在运动,带参数')
    }
}
// var p=new Person('任嘉伦',20)
// console.log(p)

function Line2() { }
Line2.prototype = new Person()
var l2 = new Line2('任嘉伦',20)
console.log(l2)
// Person {}
l2.run()
// undefined在运动,带参数
// 实例化子类 无法 给父类 传参

// 3.原型链 + 对象冒充 的组合继承模式
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(this.name+'在运动,组合继承模式')
    }
}
Person.prototype.work = function () {
    console.log(this.name+'在工作,组合继承模式')
}
function Group(name,age) {
    Person.call(this,name,age)
}
Group.prototype=new Person()
var g = new Group('任嘉伦',20)
console.log(g, '组合继承模式')
// Person { name: '任嘉伦', age: 20, run: [Function] } 组合继承模式
g.run()
// 任嘉伦在运动,组合继承模式
g.work()
// 任嘉伦在工作,组合继承模式
