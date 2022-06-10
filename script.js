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
    constructor() {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + 'pages';
        this.read = form.read.checked;
    };
};


// populate library with books with local storage from form data inputted
function addBookToLibrary(e) {
    e.preventDefault();
    popUpForm.style.display = 'none';

    let currentBook = new Book();
    myLibrary.push(currentBook);
    showBookMade();
    storeData();
    form.reset();
};


// wrapper function to show books
function showBookMade() {
    const display = document.getElementById('library-container');
    const books = document.querySelectorAll('.book');

    // prevents duplication when interacting with an already made book
    books.forEach(book => {
        display.removeChild(book);
    });

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    };
};

// Add the book DOM to the library container to be displayed by the 
// showBookMade function
function createBook(item) {
    const library = document.querySelector('#library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBookBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);

    if (item.read === false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    } else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63';
    };

    removeBookBtn.textContent = 'Remove';
    removeBookBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBookBtn);

    library.appendChild(bookDiv);

    removeBookBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        showBookMade();
        storeData();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        showBookMade();
        storeData();
    });
};

// Storing each book

function storeData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

//pulls books from local storage when page is refreshed
function restore() {
    if (!localStorage.myLibrary) {
        showBookMade();
    } else {
        let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        showBookMade();
    };
};

restore();
