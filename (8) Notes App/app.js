const notescontent=document.querySelectorAll('.notes-input');
const notesBtn=document.querySelector('.notes-btn');
const notesContainer=document.querySelector('.notes-container');


function showNotes(){
   notesContainer.innerHTML=localStorage.getItem("notes");
   // notescontent.innerText=localStorage.getItem("text");
}
showNotes();

function updateStorage(){
   localStorage.setItem("notes",notesContainer.innerHTML);
   // localStorage.setItem("text", notescontent.innerText);
}

   notesBtn.addEventListener('click',()=>{
      let notesInput=document.createElement('p');
      let img=document.createElement('img');
      notesInput.className = 'notes-input scroll';
      notesInput.setAttribute("contenteditable", "true");
      notesInput.innerText="Your Input";
      img.src='images/delete-3.png';
      img.setAttribute("contenteditable", "false");
      notesContainer.appendChild(notesInput).appendChild(img);
      updateStorage();
   })

notesContainer.addEventListener('click',function(e){
   if(e.target.tagName === "IMG"){
      e.target.parentElement.remove();
      console.log('removed');
      updateStorage();
   }
   else if(e.target.tagName="P"){
      notes=document.querySelectorAll('.notes-input');
      notes.forEach(nt=>{ //=> this is concise way to write functions
         nt.onkeyup = function(){
            updateStorage();
            console.log("okay");
         }
      })
   }
})


document.addEventListener("keydown",event=>{
   if(event.key === "Enter"){
      document.execCommand("insertLineBreak");
      event.preventDefault();
   }
})
