"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findIdOfBook = function (id) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.id === id) {
                i = index;
            }
        });
        return i;
    };
    BookManager.prototype["delete"] = function (id) {
        var indexUpdateBook = this.findIdOfBook(id);
        if (indexUpdateBook != -1) {
            this.books.splice(indexUpdateBook, 1);
        }
        else {
            throw new Error('delete eror');
        }
    };
    BookManager.prototype.update = function (id, name) {
        var indexUpdateBook = this.findIdOfBook(id);
        if (indexUpdateBook != -1) {
            this.books[indexUpdateBook].setName(name);
        }
        else {
            throw new Error('update eror');
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
