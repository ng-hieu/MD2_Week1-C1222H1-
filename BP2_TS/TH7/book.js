"use strict";
exports.__esModule = true;
exports.book = void 0;
var book = /** @class */ (function () {
    function book(ID, name) {
        this.ID = ID;
        this.name = name;
    }
    book.prototype.getName = function () {
        return this.name;
    };
    book.prototype.setName = function (Name) {
        this.name = Name;
    };
    book.prototype.getID = function () {
        return this.ID;
    };
    return book;
}());
exports.book = book;
