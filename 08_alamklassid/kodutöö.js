var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractBook = /** @class */ (function () {
    function AbstractBook(title, wordCount) {
        this.title = title;
        this.wordCount = wordCount;
    }
    return AbstractBook;
}());
var FictionBook = /** @class */ (function (_super) {
    __extends(FictionBook, _super);
    function FictionBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FictionBook.prototype.getReadingTime = function () {
        return (this.wordCount / 260) / 60; //260 sõna minutis
    };
    return FictionBook;
}(AbstractBook));
var NonFictionBook = /** @class */ (function (_super) {
    __extends(NonFictionBook, _super);
    function NonFictionBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonFictionBook.prototype.getReadingTime = function () {
        return (this.wordCount / 238) / 60; //238 sõna minutis
    };
    return NonFictionBook;
}(AbstractBook));
var books = [];
function addBook(type, title, wordCount) {
    var newBook;
    if (type == FictionBook) {
        newBook = new FictionBook(title, wordCount);
    }
    else {
        newBook = new NonFictionBook(title, wordCount);
    }
    books.push(newBook);
}
function removeBook(title) {
    var index = books.findIndex(function (book) { return book.title == title; });
    books.splice(index, 1);
}
addBook(FictionBook, "The Hobbit", 95356);
addBook(NonFictionBook, "The Art of War", 58164);
addBook(FictionBook, "Animal Farm", 29966);
removeBook("The Art of War");
function getTotalReadingTime(books) {
    var totalReadingTime = 0;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        totalReadingTime += book.getReadingTime();
    }
    return totalReadingTime;
}
console.log("Selle raamatu (".concat(books[0].title, ") lugemiseks kulub ").concat(books[0].getReadingTime().toFixed(1), " tundi."));
console.log("Iga raamatu lugemiseks kulub", getTotalReadingTime(books).toFixed(1), "tundi.");
