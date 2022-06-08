
function addchar(letter){
    document.querySelector("#output").innerHTML += letter;
  }
  
function delchar(){
    document.querySelector("#output").innerHTML = document.querySelector("#output").innerHTML.slice(0, -1);
  }