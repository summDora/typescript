function getName(animal) {
    console.log(animal);
    animal.cat();
    // (animal as Fish).fish();
    // error
    // 传入的是cat类型 没有fish方法
    return animal.name;
}
var baby = {
    name: 'tom',
    cat: function () {
        console.log("hello ! " + this);
        console.log(this.name);
    }
};
getName(baby);
