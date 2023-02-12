import {Book} from "./book";
import {BookManager} from "./bookManager";
let book1:Book = new Book('H1', 'Harry Potter');
let book2:Book = new Book('H2', 'Hoa Hong');
let book3:Book = new Book('A3', 'America');
let bookManager: BookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
console.log(bookManager);
// BookManager.update('A3', 'Nguoi trong muon nghe');
// BookManager.delete('H1');
// console.log(BookManager)