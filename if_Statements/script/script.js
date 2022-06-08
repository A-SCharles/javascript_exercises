let age = 18;
let salary = 5000;
let bonus = 500;

// Version 1 
/* if((age >= 18)  && (salary >= 5000)) {
    salary += bonus;
    console.log("Your Salary is: ".concat(salary))
} 
else {
    console.log('Please try again later')
} */

// Version 2
/* if (age >= 18){
    if(salary >= 5000){
        salary += bonus
        console.log("Your Salary is: R".concat(salary));
    } 
    else {
  console.log("Your Salary is less than R5000");
    }
}   
else {
  console.log("You are younger than 18");
}*/

// Simple IF statement
/* if (age>=18){
    console.log('Return True');
}
else
{
    console.log('Return false');
} */

// Collection
/* let items = ['Banana', 'Mango', 'Orange', 'Laptop', 'Mouse','Keyboard'];
// Linking
let ul = document.getElementById('items');
// Load items to an ul
items.forEach((item) => {
    ul.innerHTML += `
    <li>${item}</li>
    `;
    ul
});*/

// NONSENSE BASICALLY
/* items.forEach(display(items));

function display(x) {
    console.log(x);
} */

const bestFriends = ['James','Anthony','Tommy','Christopher','William','Jeanne','Hannah','John','James','Mary'];

console.log(bestFriends[5])


