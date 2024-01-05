
//manually color generator

const colors = ["green","red","blue"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click", function(){
    // console.log("button clicked");
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.style.color=colors[randomNumber];
    color.textContent= colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}


//ultimate color generator


let hex=["A","B","C","D","E","F","1","2","3","4","5","6","7","8","9",];
const btn2=document.getElementById("btn2");
const color2=document.querySelector(".color2")

btn2.addEventListener("click", function(){
    let hexColor="#";
    for(i=0; i<6; i++){
        hexColor += hex[getRandomNumber2()];
    }
    color2.textContent=hexColor;
    color2.style.color=hexColor;
    document.body.style.backgroundColor=hexColor;
})
function getRandomNumber2(){
    return Math.floor(Math.random()*hex.length)
}



//custom color generator


let btn3=document.querySelector("#btn3");


btn3.addEventListener("click", function(){
    let customColorBox=document.getElementById("customcolorbox").value;
    let opacityRange=document.getElementById("opacity-range");
    let opacityContainer=document.getElementById("opacity-container")
    if (customColorBox.includes('#')) {
        alert("don't use hashtags")
    }
    else{
        if (customColorBox.length == 3 || customColorBox.length == 6) {
            console.log(customColorBox);
            document.body.style.backgroundColor="#" + customColorBox;
            opacityRange.addEventListener("change", function(){
                opacityContainer.style.opacity = "0"+"."+opacityRange.value;
                console.log(opacityRange.value);

            })
        }
        else{
            alert("MUST HAVE 3 OR 6 DIGITS");
        }
        
    }
})





// color picker


let colorpicker=document.getElementById("colorpicker")

colorpicker.addEventListener("change",function(){
    document.body.style.backgroundColor=colorpicker.value;
    document.body.style.backgroundImage="none";
})
