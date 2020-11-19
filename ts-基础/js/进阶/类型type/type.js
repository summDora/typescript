"use strict";
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll');
//  success
handleEvent(document.getElementById('world'), 'dblclick');
//  报错，类型 dblclick 的参数不能赋给类型 EventNames 的参数
