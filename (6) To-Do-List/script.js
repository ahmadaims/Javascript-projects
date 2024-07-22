let todoInput=document.getElementById("todo-input");
let listContainer=document.querySelector(".list-container");

function taskadd(){
   if (todoInput.value == "") {
      alert("write some task to add")
   }
   else{
      const li=document.createElement('li');
      li.innerHTML=todoInput.value;
      listContainer.appendChild(li);
      li.addEventListener("click",function checked(){
         li.classList.toggle("checked");
         li.addEventListener("click",function(){
            li.remove();
         })
         console.log('checked');
      })
   }
   todoInput.value='';
}
