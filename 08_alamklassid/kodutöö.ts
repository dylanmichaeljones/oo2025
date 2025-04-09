abstract class AbstractBook {
    constructor(public title: string, public wordCount: number) {}

    abstract getReadingTime(): number; //Aeg tundides
}

class FictionBook extends AbstractBook {
    getReadingTime(): number {
        return (this.wordCount / 260) / 60; //260 sõna minutis
    }
}

class NonFictionBook extends AbstractBook {
    getReadingTime(): number {
        return (this.wordCount / 238) / 60; //238 sõna minutis
    }
}

let books: AbstractBook[] = [];

function addBook(type, title: string, wordCount: number) {
    let newBook: AbstractBook;
    if(type == FictionBook) {
        newBook = new FictionBook(title, wordCount);
    } else {
        newBook = new NonFictionBook(title, wordCount);
    }
    books.push(newBook);
}

function removeBook(title:string) {
    let index = books.findIndex(book => book.title == title)
    books.splice(index, 1);
}

addBook(FictionBook, "The Hobbit", 95356);
addBook(NonFictionBook, "The Art of War", 58164);
addBook(FictionBook, "Animal Farm", 29966);
removeBook("The Art of War");


function getTotalReadingTime(books: AbstractBook[]): number {
    let totalReadingTime = 0;
    for (const book of books) {
        totalReadingTime += book.getReadingTime();
    }
    return totalReadingTime;
}

console.log(`Selle raamatu (${books[0].title}) lugemiseks kulub ${books[0].getReadingTime().toFixed(1)} tundi.`);
console.log("Iga raamatu lugemiseks kulub", getTotalReadingTime(books).toFixed(1), "tundi.")