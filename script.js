let myLibrary = [];

const newBookForm = document.querySelector('.new-book-form');

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createNewBook() {
  let newTitle = document.getElementById('newTitle');
  let newAuthor = document.getElementById('newAuthor');
  let newPages = document.getElementById('newPages');
  let newRead = document.getElementById('newRead').checked;

  let newBook = new Book(newTitle, newAuthor, newPages, newRead);
  addBookToLibrary(newBook);
}

function displayBooks() {

}

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createNewBook();
  console.log(myLibrary);
});

// Manually add books to library
book1 = new Book('The Great Believers', 'Rebecca Marakai', '421', true);
addBookToLibrary(book1);
book2 = new Book('Educated', 'Tara Westover', '352', true);
addBookToLibrary(book2);
book3 = new Book('Black Cake', 'Charmaine Wilkerson', '385', true);
addBookToLibrary(book3);

console.log('Test');
console.log(myLibrary);
