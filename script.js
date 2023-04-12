let myLibrary = [];
let readStatus = null;

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    if (read == true) {
      readStatus = "read"
    }
    else {
      readStatus = "not read yet"
    }
  }
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}