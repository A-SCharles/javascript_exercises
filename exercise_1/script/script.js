function myFunction(){
    alert('Hello! My Name is Abdus-Samad Charles');
}

function call() {
    document.getElementById("demo").innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi architecto, doloremque blanditiis ratione id nihil dignissimos cumque ea? Enim, aut.";
}


function hide() {
    document.getElementById("demo").innerHTML = "";
}

// Connect variable to html button
//const btndisplay = document.getElementById('btndisplay');

// Approach 1
// btndisplay.addEventListener('click',()=>{
  //  alert('Hello World')
// })
// Approach 2
// Function used
// function display() {
//     alert('Hello World')
// }

// Add event Listener, with function
// btndisplay.addEventListener('click',display)





// Connect variable to html button


// const show = document.getElementById('show');


let btnshow = document.getElementById('btnshow');

btnshow.addEventListener('click',()=>{
    let fname = document.getElementById('fname').value;
    let surname = document.getElementById('surname').value;
    document.getElementById('show').innerHTML = fname + " " + surname;
});


