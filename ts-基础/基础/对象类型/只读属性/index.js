var tom = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
tom.id = 9527;
// 无法分配到 "id" ，因为它是只读属性
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// 对象属性只能在对象刚刚创建的时候修改其值
console.log(tom);
// { id: 9527, name: 'Tom', gender: 'male' }
