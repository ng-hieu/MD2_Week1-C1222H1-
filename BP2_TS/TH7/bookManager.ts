import {book} from "./book";

export class bookManager {
    books: book[];

    constructor(books: book[]) {
        this.books = books;
    }

    add(Book: book): void {
        this.books.push(Book)
    }

    getList(): book[] {
        return this.books;
    }

    findIdOfBook(Id: string) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.ID === Id) {
                i = index;
            }
        })
        return i;
    }
    delete(Id:string){
        let indexUpdateBook = this.findIdOfBook(Id);
        if(indexUpdateBook !=-1){
            this.books.splice(indexUpdateBook, 1);
        } else {
            throw new Error('delete eror')
        }
    }
    update(Id:string, name:string){
        let indexUpdateBook = this.findIdOfBook(Id);
        if(indexUpdateBook !=-1){
            this.books[indexUpdateBook].setName(name);
        } else {
            throw new Error('update eror')
        }
    }
}