class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this.state * 1.5;
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

/*Task 2*/

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      if (book.name === bookName) {
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

/* Task 3 */

class StudentLog {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    this.addSubject(subject);
    if (grade >= 1 && grade <= 5) {
      this.marks[subject].push(grade);
      return this.marks[subject].length;
    } else {
      return (`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n ${this.marks[subject].length}`);
    }
  }

  addSubject(subject) {
    for (let arr in this.marks) {
      if (arr === subject) {
        return;
      }
    }
    this.marks[subject] = [];
  }

  getAverageBySubject(subject) {
    for (let arr in this.marks) {
      if (arr === subject) {
        let summ = 0;
        for (let mark of this.marks[subject]) {
          summ += mark;
        }
        return summ / this.marks[subject].length;
      }
    }
    return 0;
  }

  getTotalAverage() {
    let summ = 0;
    let i = 0;
    for (let obj in this.marks) {
      for (let mark of this.marks[obj]) {
        summ += mark;
      }
      i += this.marks[obj].length;
    }
    return summ / i;
  }
}
