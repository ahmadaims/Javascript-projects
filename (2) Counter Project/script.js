//set initial count
let count=0;

//select value and buttons
const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
// console.log(btns);
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const classes=e.currentTarget.classList;
        if(classes.contains('decrease')){
            count--;
        }
        else if(classes.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        if (count>0) {
            value.style.color="green";
        }
        else if(count<0){
            value.style.color="red";
        }
        else{
            value.style.color="white";
        }
        value.textContent=count;
    })
})