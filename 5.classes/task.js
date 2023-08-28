class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state = this.state * 1.5;
        return this.state;
    }
    set state(newState) {
        if (newState <= 0) {
          this._state = 0;
        } else if (newState >= 100) {
          this._state = 100;
        } else {
          this._state = newState;
        }
      }
      get state() {
        return this._state;
      }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

  // Задание 2;

  class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
      if(book.state > 30){
          this.books.push(book);
      }
    }
    findBookBy(type, value){
      return this.books.find(book => book[type] === value) || null;
    }
    giveBookByName(bookName) {
      let delBook = this.findBookBy(`name`, bookName);
      if (delBook) {
        this.books.splice(delBook);
      }
      return delBook;
    }  
  }
  // Номер 3 будет отправлен позже
