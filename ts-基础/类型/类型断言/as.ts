// 类型断言的用途
// 1.将一个联合类型断言成为其中一个类型
// 2.将一个父类断言为更加具体的子类
interface Cat {
    name: string,
    cat(): void
}
interface Fish {
    name: string,
    fish(): void
}
function getName(animal: Cat | Fish) {
    console.log(animal);
    (animal as Cat).cat();
    // (animal as Fish).fish();
    // error
    // 传入的是cat类型 没有fish方法
    return animal.name
}
const baby: Cat = {
    name: 'tom',
    cat() {
        console.log(`hello ! ${this}`);
        console.log(this.name)
        // tom
    }
}
getName(baby)