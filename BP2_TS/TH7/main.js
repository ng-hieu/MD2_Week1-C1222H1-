"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var bookManager_1 = require("./bookManager");
var book1 = new book_1.book('H1', 'Harry Potter');
var book2 = new book_1.book('H2', 'Hoa Hong');
var book3 = new book_1.book('A3', 'America');
var BookManager;
// @ts-ignore
BookManager = new bookManager_1.bookManager();
BookManager.add(book1);
BookManager.add(book2);
BookManager.add(book3);
console.log(BookManager);
// BookManager.update('A3', 'Nguoi trong muon nghe');
// BookManager.delete('H1');
// console.log(BookManager)
