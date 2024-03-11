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

  function displayTheBook(myLibrary){
for (i=0; i<myLibrary.length; i++){
    const books = document.querySelector('.books')
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.innerHTML=myLibrary[i].info(); 
   books.appendChild(bookCard);
  }
  }
  const theHobbit= new Book('The Hobbit','J.R.R. Tolkien','295',false)
const theRightStuff= new Book('The Right Stuff', 'Tom Wolfe','352',false)

  addBookToLibrary(theRightStuff);
addBookToLibrary(theHobbit);
console.log(myLibrary);
 displayTheBook(myLibrary);




  