
// 模块引入

import { getData, save } from './db'


// 外部调用

getData()
let data = getData()
console.log(data)
save()

/*
    获取数据
    获取数据
    [ { title: '标题' }, { desc: '描述' } ]
    保存数据成功
*/


// 暴露的第二种方式 + as的用法 重命名
import { a, b as bb, c } from './db'
a()
bb()
console.log(c)

/*
    暴露的数据a
    暴露的数据b
    xxxxx
*/

// 暴露的第三种方式

import export_default from './db'
export_default()

// 报错
// import export_default  ed from './db';
// ed()

// import export_default_as as eda from './export_defalut_as'
// eda()
/*
    export default
*/







// 浏览器默认不支持 export import require

// node运行