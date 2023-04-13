let myLibrary = [];

const newBookForm = document.querySelector('.new-book-form');
const bookTable = document.querySelector('.book-table');

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

function displayBooks(myLibrary) {
  myLibrary.forEach((book) => {
    const row = document.createElement('tr');
    row.classList.add('book-row');
    bookTable.appendChild(row);

    const title = document.createElement('td');
    row.appendChild(title);
    title.textContent = book.title;

    const author = document.createElement('td');
    row.appendChild(author);
    author.textContent = book.author;

    const pages = document.createElement('td');
    row.appendChild(pages);
    pages.textContent = book.pages;

    const read = document.createElement('td');
    row.appendChild(read);
    read.textContent = book.read === true ? 'Yes' : 'No';
  });
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
book4 = new Book('Crying in H Mart', 'Michelle Zauner', '256', false);
addBookToLibrary(book4);

displayBooks(myLibrary);

console.log('Test');
console.log(myLibrary);
