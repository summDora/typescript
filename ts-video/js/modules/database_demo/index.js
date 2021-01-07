"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./model/user");
user_1.UserModel.connect();
var newUser = new user_1.UserClass();
newUser.username = '任宝宝';
newUser.password = 'rrrrrrrrr';
user_1.UserModel.add(newUser);
/*
    连接mysql数据库成功
    UserClass { username: '任宝宝', password: 'rrrrrrrrr' }
*/
var getData = user_1.UserModel.get(1);
console.log(getData);
/*
    [ { id: 1, name: 'name_one', age: 18 } ]
*/
var article_1 = require("./model/article");
article_1.ArticleModel.connect();
var newAtc = new article_1.ArticleClass();
newAtc.title = '烈火战马';
newAtc.desc = '若卒魂要归故里 思念明月落水底';
newAtc.country = 'GAI';
article_1.ArticleModel.add(newAtc);
var getarc = article_1.ArticleModel.get(4);
console.log(getarc);
/*
    连接mysql数据库成功
    ArticleClass { title: '烈火战马', desc: '若卒魂要归故里 思念明月落水底', country: 'GAI' }
    [ { id: 4, name: 'name_four', age: 21 } ]
*/ 
