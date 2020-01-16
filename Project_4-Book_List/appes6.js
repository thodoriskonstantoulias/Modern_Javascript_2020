class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');

        //Create the table row 
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ='#' class="delete">X<a></td>
        `;
    
        list.appendChild(row);
    }

    showAlert(msg,className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));
    
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
    
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    deleteBook(target){
        if (target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
}

//Event listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title,author,isbn);
    const ui = new UI();

    //Validation
    if ( title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book added', 'success');

        //Clear fields 
        ui.clearFields();
    }

    e.preventDefault();
});

//Event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book removed', 'success');

    e.preventDefault();
});