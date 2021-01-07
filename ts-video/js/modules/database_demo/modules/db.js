"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDb = void 0;
var list = [
    { id: 1, name: 'name_one', age: 18 },
    { id: 2, name: 'name_two', age: 19 },
    { id: 3, name: 'name_three', age: 20 },
    { id: 4, name: 'name_four', age: 21 },
    { id: 5, name: 'name_five', age: 22 },
    { id: 6, name: 'name_six', age: 23 }
];
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.connect = function () {
        console.log('连接mysql数据库成功');
        return true;
    };
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        var result = [];
        list.map(function (item) {
            if (id == item.id) {
                result.push(item);
            }
        });
        return result;
    };
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
