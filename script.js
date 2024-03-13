const myLibrary = [];
const books = document.querySelector('.books')
const removeButton = document.createElement("button");
const bookCard = document.createElement("div");
    


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




  document.getElementById('addButton').onclick = function(){
    event.preventDefault();
   let title = document.getElementById("title");
   let author = document.getElementById("author");
   let numberOfPages = document.getElementById("number_of_pages");
   let status = checkValue();
   let book = new Book (title.value, author.value,numberOfPages.value,status)
   addBookToLibrary(book);
   displayTheBook(book);
   
   

  }


  function displayTheBook(book){

    
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.innerHTML=book.info(); 
   books.appendChild(bookCard);
   checkValue();
   /*const checkStatus = document.createElement('input')
    checkStatus.type = 'checkbox';
    checkStatus.name = "status";
let label = document.createElement('label');
label.appendChild(document.createTextNode('This is the label for checkbox.'));
    bookCard.appendChild(checkStatus);*/
   const removeButton = document.createElement("button");
   bookCard.appendChild(removeButton);
  removeButton.id = 'removeButton';
  removeButton.innerHTML='Remove'; 
  removeButton.addEventListener('click', () => {
    books.removeChild(bookCard);
    
  });
  
  }

function checkValue(){
   const checkBox=document.getElementById('status');
  if (checkBox.checked){
    return true;
  }
    else{
       return false;
    }
  }






 
 
 



  