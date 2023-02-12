import {Book} from "./book";

export class BookManager {
    books: Book[];

    constructor() {
        this.books = [];
    }

    add(book: Book): void {
        this.books.push(book)
    }

    getList(): Book[] {
        return this.books;
    }

    findIdOfBook(id: string) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.id === id) {
                i = index;
            }
        })
        return i;
    }
    delete(id:string){
        let indexUpdateBook = this.findIdOfBook(id);
        if(indexUpdateBook !=-1){
            this.books.splice(indexUpdateBook, 1);
        } else {
            throw new Error('delete eror')
        }
    }
    update(id:string, name:string){
        let indexUpdateBook = this.findIdOfBook(id);
        if(indexUpdateBook !=-1){
            this.books[indexUpdateBook].setName(name);
        } else {
            throw new Error('update eror')
        }
    }
}