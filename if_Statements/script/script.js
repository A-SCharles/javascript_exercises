// let age = 18;
// let salary = 5000;
// let bonus = 500;

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

/* const bestFriends = ['James','Anthony','Tommy','Christopher','William','Jeanne','Hannah','John','James','Mary'];

console.log(bestFriends[5])
*/

// if statement REVISION 08/06
/* let age = 125;

if (age >= 18) {
  console.log("Well Done");
} else {
  console.log("Shame");
}

console.log(age >= 18 ? "pass" : "fail");

if (age <= 18) {
    console.log("too young");
  } 
  else if (age >= 18) {
    console.log("goodt");
  }
  else {
    console.log("bruh");
  } */

// String examples REVISION 08/06
/* let sentence = 'i love programming';
let firstName = 'Abdus-Samad';
let lastName = 'Charles';

// console.log(sentence);
console.log(`My fullname is ${firstName} ${lastName}`);*/

// Switch Statements 08/06
let firstName = 'Abdus-Samad';
switch(firstName) {
    case 'Abdus-Samad':
        console.log(`Your name is ${firstName}`)
    break
    
    case 'Joel':
        console.log(`Your name is ${firstName}`)
    break
}
