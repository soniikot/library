const myLibrary = [];

function Book(title, author, numberOfPages, status) {
   this.title = title,
   this.author = author,
   this.numberOfPages = numberOfPages,
   this.status = status,
this.info =function(){
  return (`${this.title} by ${this.author}, ${numberOfPages} pages, ${status==true ? 'read' : 'not read yet'}`)
  }
}
  
  function addBookToLibrary(book) {
   myLibrary.unshift(book);
  }
const button = document.getElementById('addButton')

inputArray=[]


  document.getElementById('addButton').onclick = function(){
    event.preventDefault();
   let title = document.getElementById("title");
   let author = document.getElementById("author");
   let numberOfPages = document.getElementById("number_of_pages");
   let status = document.getElementById("status") ;
   let book = new Book (title.value, author.value,numberOfPages.value,status.value)
   addBookToLibrary(book);
   displayTheBook(book);

  }


  function displayTheBook(book){

    const books = document.querySelector('.books')
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.innerHTML=book.info(); 
   books.appendChild(bookCard);
  
  }


  funcion addRemoveButton()
 




  