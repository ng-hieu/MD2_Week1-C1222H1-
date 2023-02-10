import {Book} from "./bookList";
let booklist:Book[] = [];
booklist.push( new Book("Những thằng khốn nạn", "Thằng khốn khổ", true));
booklist.push(new Book("Assassin Creed", "Unisoft", false));
booklist.push(new Book("Nanana", "Lalala", true));
booklist.forEach((a)=>{
    if (a.alreadyRead){
        console.log('M đang đọc: ' + a.title);
    } else {
        console.log('M đọc xong: ' + a.title);
    }
})