import { baseurl } from "./baseurl.js";


const logindata = JSON.parse(localStorage.getItem("logindata"))
if(logindata.email !=="admin@empher.com"){
    alert("Admin not Logged")
    window.location.href="index.html";
}
const addBookForm = document.getElementById("admin-form");
const addGrid = document.getElementById("add-grid");


async function addbook(){
    event.preventDefault()
    const title = document.getElementById("title")
    const author = document.getElementById("author")
    const category = document.getElementById("category")
   const res = await fetch(`${baseurl}/logindata`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({title,category,isVerified:false,availability:true}),
   });
   alert(" NEW Book Added")
   addBookForm.reset()
   fetchBooks()
}

async function fetchBooks(){
    const res = await fetch(`${baseurl}/logindata`);
    const books = await res.json();
    addGrid.innerHTML="";
    books.forEach((book)=>{
        const bookcard = document.createElement("div")
        bookcard.classList.add("class","book-card")
        const titleItm = document.createElement("h3")
        titleItm.textContent = `TITLE: ${book.title}`

        const authorItm = document.createElement("h3")
        authorItm.textContent = `Author: ${book.author}`

        const categoryItm = document.createElement("h3")
        categoryItm.textContent = `Category: ${book.category}`

        const availabilityItm = document.createElement("h3")
        availabilityItm.textContent = `Availability: ${book.availability ? "Yes":"No"}`

        const verifyButton =document.createElement("button")
        verifyButton.classList.add("class","verify")
        verifyButton.textContent = "Verify Book"

        const deleteButton =document.createElement("button")
        deleteButton.classList.add("class","delete")
        deleteButton.textContent = "Delete Book"


        verifyButton.addEventListener("click",async()=>{
            
        })
    })
}
