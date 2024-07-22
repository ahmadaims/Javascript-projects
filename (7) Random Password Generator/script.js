const randomPassBox=document.getElementById("pass-input");
const customLength=12;


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="123456789";
const symbols="!@#$%^&*(){}+_";

const allchars=upperCase+lowerCase+numbers+symbols;

function createpassword(){
   let password="";
   console.log(password += upperCase[Math.floor(Math.random()* upperCase.length)]);
   password += upperCase[Math.floor(Math.random()* upperCase.length)];
   password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
   password += numbers[Math.floor(Math.random()* numbers.length)];
   password += symbols[Math.floor(Math.random()* symbols.length)];
   while(customLength > password.length){
      password+=allchars[Math.floor(Math.random()*allchars.length)];
   }
   randomPassBox.value=password;
}

function copypass(){
   randomPassBox.select();
   document.execCommand("copy")
}

