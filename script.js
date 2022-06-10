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

function Book() {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + 'pg';
    this.read = form.read.checked;
}

function addBookToLibrary(e) {
    e.preventDefault();
    popUpForm.style.display = none;

    let currentBook = new Book();
    myLibrary.push(currentBook);
}