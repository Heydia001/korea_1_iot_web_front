// review03.js

//# 프로젝트 객체 예시
let exampleLibrary = {
  books: [],
}

let exampleBook = {
  id: 1, 
  title: 'SQLD 정복하기',
  author: '이도경',
  isAvailable: true 
}

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  rent (){
    if (this.isAvailable){
      this.isAvailable = flase;
      console.log('대여 됨');
    } else {
      console.log('no');
    }
  }

  return () {
    this.isAvailable = true;
    console.log('빌려졌습니다~');
  }
}


class Library {
  constructor() {
    this.books = []; 
  }

  addbook(title, author){
    const newBook = new Book(this.books.length + 1, title, author);
    this.books.push(newBook);
  }

  displayBooks() {
    console.log('=== Library ===');
    this.books.forEach(book => {
      console.log(
        `${book.id}: ${book.title} by ${book.author}
          - ${book.isAvailable ? '대여 가능' : '대여됨'}`
      );
    });
  }

  rentBook(id) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.rent();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  returnBook(id) {
    const book = this.books.find(book => book.id === id);
    
    if (book) {
      book.returnBook();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }
}

const busanLibrary = new Library();

busanLibrary.addBook('SQLD 공부', '이승아');
busanLibrary.addBook('JS 공부', '이도경');
busanLibrary.addBook('IoT 공부', '이지훈');
busanLibrary.addBook('Java 공부', '이지희');

busanLibrary.displayBooks();

busanLibrary.rentBook(1);

busanLibrary.returnBook(1);

const seoulLibrary = new Library;
seoulLibrary.addBook('D 도서', 'D저자')