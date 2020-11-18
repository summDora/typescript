// 1.类型别名
// 2.字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');
//  success
handleEvent(document.getElementById('world'), 'dblclick');
//  报错，类型 dblclick 的参数不能赋给类型 EventNames 的参数