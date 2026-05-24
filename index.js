let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b4=document.getElementById('b4');
let b5=document.getElementById('b5');

// The JS was crashing before reaching your book-search code because `document.getElementById('b1')` (or similar buttons) returned `null` on pages where those buttons didn’t exist.
// Then `.addEventListener()` was being called on `null`, causing the entire script to stop executing.
// Using `if(b1){...}` checks prevents JS from crashing when an element is missing.

//solution- add 'if' checks for button for checking their existance

if(b1){b1.addEventListener('click',()=>{location.href='index.html';});}
if(b2){b2.addEventListener('click',()=>{location.href='about.html';});}
if(b4){b4.addEventListener('click',()=>{location.href='borrow.html';});}
if(b5){b5.addEventListener('click',()=>{location.href='lend.html';});}


//borrow page logic - finding a book if it exists or not
let books = ["Atomic Habits","Harry Potter","Rich Dad Poor Dad","The Alchemist","Ikigai"];
let input = document.getElementById("input");
if(input){
input.addEventListener("input", ()=>{
    let value = input.value;
    let found = false;
    for(let i=0; i<books.length; i++){
        if(value.toLowerCase() === books[i].toLowerCase()){found = true;}
    }
    if(value===""){document.getElementById("result").innerHTML="";}
    else if(found){document.getElementById("result").innerHTML="Available";}
    else{document.getElementById("result").innerHTML="Not Available";}

});
}


//lending page logic- add a book
let lendInput=document.getElementById("lendInput");
if(lendInput){
let add=document.getElementById("add");

if(add){
add.addEventListener("click",()=>{

let value=lendInput.value;

if(value!==""){
books.push(value);
document.getElementById("msg").innerHTML="Book Added";
lendInput.value="";
}

});
}
}