const popUpForm = document.getElementById('popUp');

const newBook = document.querySelector('#new-book-button');
newBook.addEventListener('click', () => {
    popUpForm.style.display = "block";
})

const closeForm = document.getElementsByClassName('close')[0];
closeForm.addEventListener('click', () => {
    popUpForm.style.display = "none";
})

const addBook = document.querySelector('#submit');
addBook.addEventListener('click', addBookToLibrary);

// Storing new books into an array

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(e) {
    e.preventDefault();
    popUpForm.style.display = none;

    let currentBook = new Book();
    myLibrary.push(currentBook);
}

function storeBook() {
    const display = document.getElementById('library-container');
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        display.removeChild(book);
    })

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

// Create and append a new book to the library
function createBook(item) {
    const library = document.querySelector('#library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBookBtn = document.createElement('button');
    const readBtn = document.createElement('button');

}


// Showing and storing each book

function storeData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

//pulls books from local storage when page is refreshed
function restore() {
    if (!localStorage.myLibrary) {
        storeBook();
    } else {
        let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        storeBook();
    }
}
