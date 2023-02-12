"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var bookManager_1 = require("./bookManager");
var book1 = new book_1.Book('H1', 'Harry Potter');
var book2 = new book_1.Book('H2', 'Hoa Hong');
var book3 = new book_1.Book('A3', 'America');
var bookManager = new bookManager_1.BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
console.log(bookManager_1.BookManager);
// BookManager.update('A3', 'Nguoi trong muon nghe');
// BookManager.delete('H1');
// console.log(BookManager)
