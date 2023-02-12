import {book} from "./book";
import {bookManager} from "./bookManager";
let book1:book = new book('H1', 'Harry Potter');
let book2:book = new book('H2', 'Hoa Hong');
let book3:book = new book('A3', 'America');
let BookManager: bookManager;
// @ts-ignore
BookManager = new bookManager();
BookManager.add(book1)
BookManager.add(book2)
BookManager.add(book3)
console.log(BookManager);
// BookManager.update('A3', 'Nguoi trong muon nghe');
// BookManager.delete('H1');
// console.log(BookManager)