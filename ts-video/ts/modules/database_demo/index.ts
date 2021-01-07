
import { UserClass, UserModel } from './model/user'

UserModel.connect();

let newUser = new UserClass()
newUser.username = '任宝宝'
newUser.password = 'rrrrrrrrr'

UserModel.add(newUser)

/*
    连接mysql数据库成功
    UserClass { username: '任宝宝', password: 'rrrrrrrrr' }
*/

let getData = UserModel.get(1)
console.log(getData)

/*
    [ { id: 1, name: 'name_one', age: 18 } ]
*/

import { ArticleClass, ArticleModel } from './model/article'

ArticleModel.connect();

let newAtc = new ArticleClass();
newAtc.title='烈火战马'
newAtc.desc='若卒魂要归故里 思念明月落水底'
newAtc.country = 'GAI'

ArticleModel.add(newAtc)

let getarc = ArticleModel.get(4)
console.log(getarc)

/*
    连接mysql数据库成功
    ArticleClass { title: '烈火战马', desc: '若卒魂要归故里 思念明月落水底', country: 'GAI' }
    [ { id: 4, name: 'name_four', age: 21 } ]
*/