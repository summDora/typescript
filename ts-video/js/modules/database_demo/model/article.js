"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = exports.ArticleClass = void 0;
var db_1 = require("./../modules/db");
var ArticleClass = /** @class */ (function () {
    function ArticleClass() {
    }
    return ArticleClass;
}());
exports.ArticleClass = ArticleClass;
var ArticleModel = new db_1.MysqlDb();
exports.ArticleModel = ArticleModel;
