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