const myLibrary = [];
const books = document.querySelector('.books')
const removeButton = document.createElement("button");
const bookCard = document.createElement("div");
    


class Book{
  constructor(title, author, numberOfPages, status) {
   this.title = title,
   this.author = author,
   this.numberOfPages = numberOfPages,
   this.status = status;
  }
info(){
  return (`${this.title} by ${this.author}, ${this.numberOfPages} pages`)
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
  

   let checkStatus = document.createElement("button");
   checkStatus.id = 'checkStatus';
   checkStatus.innerHTML= checkValue();
   bookCard.appendChild(checkStatus);
  checkStatus.addEventListener('click', () => {
    if (checkStatus.innerHTML === "read") {
        checkStatus.innerHTML = "not read";
      } else {checkStatus.innerHTML = "read"};
  ;
  });
    

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
    return 'Read';
  }
    else{
       return 'Not read';
    }
  }

 


 
 
 


