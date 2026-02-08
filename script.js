let books = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {
    const list = document.getElementById("bookList");
    list.innerHTML = "";

    books.forEach((book, index) => {
        list.innerHTML += `
            <div class="book-card">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Genre: ${book.genre}</p>
                <p>Year: ${book.year}</p>
                <button onclick="editBook(${index})">Edit</button>
                <button class="delete" onclick="deleteBook(${index})">Delete</button>
            </div>
        `;
    });
}

function saveBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    const index = document.getElementById("bookIndex").value;

    const book = { title, author, genre, year };

    if (index === "") {
        books.push(book);
    } else {
        books[index] = book;
    }

    localStorage.setItem("books", JSON.stringify(books));
    clearForm();
    displayBooks();
}

function editBook(index) {
    const book = books[index];
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("genre").value = book.genre;
    document.getElementById("year").value = book.year;
    document.getElementById("bookIndex").value = index;
}

function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("year").value = "";
    document.getElementById("bookIndex").value = "";
}

displayBooks(); 
