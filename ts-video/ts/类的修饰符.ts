// ts定义属性的时候 给我们提供了三种修饰符
/*
    public：公有         在类里面、子类、类外面 都可以访问
    protected：保护类型  在类里面、子类里面可以访问，在类外部无法访问
    private：私有        在类里面可以访问，子类、类外部 不可访问

    属性如果不加修饰符 默认就是 public
*/

/* ------------  public  ----------- */
class Father{
    public name: string;
    constructor(name: string) {
        this.name=name
    }
    run(): string{
        return `${this.name} 在运动 `
        // public 类 内部访问 √
    }
}
class Son extends Father{
    constructor(name: string) {
        super(name)
    }
    work(): string{
        return `${this.name} 在工作 `
        // public 子类访问 √
    }
}
let son = new Son('son')
console.log(son.work()) //son 在工作
let father = new Father('father')
console.log(father.run())
console.log(father.name) // fahter
// public 类 外部访问 √


/* ------------  protected  ----------- */
class Mather{
    protected name: string;
    constructor(name: string) {
        this.name=name
    }
    run(): string{
        return `${this.name} 在运动 ---- protected`
        // protected 类 内部访问 √
    }
}
class Daughter extends Mather{
    constructor(name: string) {
        super(name)
    }
    work(): string{
        return `${this.name} 在工作  ---- protected`
        // protected 子类访问 √
    }
}
let daughter = new Daughter('daughter')
console.log(daughter.work())
//daughter 在工作  ---- protected
let mather = new Mather('mather')
console.log(mather.run())
console.log(mather.name) // 属性“name”受保护，只能在类“Mather”及其子类中访问
// protected 类 外部访问 X

/* ------------  private  ----------- */
class Parent{
    private name: string;
    constructor(name: string) {
        this.name=name
    }
    run(): string{
        return `${this.name} 在运动 ---- private`
        // protected 类 内部访问 √
    }
}
class Child extends Parent{
    constructor(name: string) {
        super(name)
    }
    work(): string{
        return `${this.name} 在工作  ---- protected`
        // 属性“name”为私有属性，只能在类“Parent”中访问
        // private 子类访问 ×
    }
}
let pa = new Parent('parent')
console.log(pa.run())
console.log(pa.name) //属性“name”为私有属性，只能在类“Parent”中访问
// private 类 外部访问 X