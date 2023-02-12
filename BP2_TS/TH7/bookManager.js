"use strict";
exports.__esModule = true;
exports.bookManager = void 0;
var bookManager = /** @class */ (function () {
    function bookManager(books) {
        this.books = books;
    }
    bookManager.prototype.add = function (Book) {
        this.books.push(Book);
    };
    bookManager.prototype.getList = function () {
        return this.books;
    };
    bookManager.prototype.findIdOfBook = function (Id) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.ID === Id) {
                i = index;
            }
        });
        return i;
    };
    bookManager.prototype["delete"] = function (Id) {
        var indexUpdateBook = this.findIdOfBook(Id);
        if (indexUpdateBook != -1) {
            this.books.splice(indexUpdateBook, 1);
        }
        else {
            throw new Error('delete eror');
        }
    };
    bookManager.prototype.update = function (Id, name) {
        var indexUpdateBook = this.findIdOfBook(Id);
        if (indexUpdateBook != -1) {
            this.books[indexUpdateBook].setName(name);
        }
        else {
            throw new Error('update eror');
        }
    };
    return bookManager;
}());
exports.bookManager = bookManager;
