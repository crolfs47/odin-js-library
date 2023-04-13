const myLibrary = [];
const newBookButton = document.querySelector('.new-book-button');
const newBookForm = document.querySelector('.new-book-form');
const bookTable = document.querySelector('.book-table-body');
const cancelNewBookButton = document.querySelector('.cancel-new-book-button');

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
  const newTitle = document.getElementById('newTitle').value;
  const newAuthor = document.getElementById('newAuthor').value;
  const newPages = document.getElementById('newPages').value;
  const newRead = document.getElementById('newRead').checked;

  const newBook = new Book(newTitle, newAuthor, newPages, newRead);
  addBookToLibrary(newBook);
}

function deleteBook(i) {
  myLibrary.splice(i, 1);
  const book = document.getElementById(`book-${i}`);
  book.remove();
}

function updateReadStatus(i) {
  myLibrary[i].read = myLibrary[i].read === false;
  const bookStatus = document.getElementById(`read-${i}`);
  bookStatus.textContent = myLibrary[i].read === true ? 'Yes' : 'No';
}

function displayBooks(library) {
  bookTable.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const row = document.createElement('tr');
    row.classList.add('book-row');
    row.setAttribute('id', `book-${i}`);
    bookTable.appendChild(row);

    const title = document.createElement('td');
    row.appendChild(title);
    title.textContent = library[i].title;

    const author = document.createElement('td');
    row.appendChild(author);
    author.textContent = library[i].author;

    const pages = document.createElement('td');
    row.appendChild(pages);
    pages.textContent = library[i].pages;

    const read = document.createElement('td');
    row.appendChild(read);
    read.setAttribute('id', `read-${i}`);
    read.textContent = library[i].read === true ? 'Yes' : 'No';

    const readButton = document.createElement('button');
    row.appendChild(readButton);
    readButton.textContent = 'Update Read Status';
    readButton.addEventListener('click', () => updateReadStatus(i));

    const deleteButton = document.createElement('button');
    row.appendChild(deleteButton);
    deleteButton.classList.add('delete-book-button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteBook(i));
  }
}

function toggleHiddenClass() {
  newBookForm.classList.toggle('hidden');
  newBookButton.classList.toggle('hidden');
}

// Event Listeners
newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createNewBook();
  newBookForm.reset();
  toggleHiddenClass();
  displayBooks(myLibrary);
});

newBookButton.addEventListener('click', () => {
  toggleHiddenClass();
});

cancelNewBookButton.addEventListener('click', () => {
  toggleHiddenClass();
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

