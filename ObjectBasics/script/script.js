// Object basics
/* const person = {
    firstName: 'Anaal',
    lastName: 'Beeds',
    age: 30,

    calcSalary: (hours, rate) => {
        return hours * rate;
    }
}
*/
/*
console.log(`
My Name is: ${person.firstName}    
My Surname is: ${person.lastName}
I am ${person.age} years old
I make R${person.calcSalary(50, 650)} per month
`)
*/

// Checks if a key is found in an object
/*
if (person.hasOwnProperty('salary')) {
    console.log(person['salary'])
}
else {
    console.warn('Key Not Found')
}
*/

// Factory Function
/* function Employee(name, surname, company){
    return {
        name: name,
        surname: surname,
        company: company,
        display: () => {
            document.write(`
            <br> Name: ${name} <br>
            Surname: ${surname} <br>
            Company: ${company} <br> `)}
    }
}

let emp1 = Employee('Anaal','Beeds','Choice');

let emp2 = Employee('Smiley','Face','Mr Price');

let emp3 = Employee('Castillo','BigManTingYeah','Sniper')

emp1.display();

emp2.display();

emp3.display();
*/

// Constructor function
/* function Shop(name, address) {
    this.name = name,
    this.address = address
}

// Create an object
const shop1 = new Shop('Dj', '17 Raydar CBD');
console.log(`
Name: ${shop1.name}
Address: ${shop1.address}
`)
*/

//Dynamic Nature of
/* let data = 32;
console.log(data)
console.log(typeof(data))
console.log('============================')
data = 'bruh'
console.log(data)
console.log(typeof(data))
console.log('============================')
data = true
console.log(data)
console.log(typeof(data))
console.log('============================')
console.log(data)
*/

//Cloning an object
/*
let person = { 
    name: 'God'
    ,surname: 'Johnson',
    jobTitle: 'Head'
}
*/

// Using =
/*
console.log(person);
let employee = person;
console.log(employee);
employee['salary'] = 39000;
console.log(employee);
console.log(person);
*/

// using spread
/* let employee = {...person} 
console.log(person);
console.log(employee);
employee['salary'] = 39000;
console.log(person);
console.log(employee);
*/

// using object.assign()
/* let employee = Object.assign({}, person)
console.log(employee);
*/

// Enumerate through object
/* for (let key in person) {
    console.log(`
    ${key} : ${person['key']}
    `)
} */

// Group Exercises:
// JSON.parse
// structureClone()

// 1. Create an object called person with the following properties
// name, surname, age
// 2. Create the second object that will clone the original object by using the above features

// using json parse
// JSOn parse converts string objects to actual objects
/*
const person = {name:'John', surname:'Hank', age:30};
console.log(typeof prs);

let prs = JSON.parse(JSON.stringify(person));
console.log(typeof prs);

console.log("name: " + prs.name + " " + prs.surname + " " + prs.age);
*/

let person = {
  name: "John",
  surname: "Hank",
  age: 30,
};

let prs =  structuredClone(person);
document.write(prs.name + " " +  prs.age);

// turning a string into an array  
/*
let str = 'joel';
let chrs = str.split('');
console.log(chrs);

const str2 = [...'Joel'];
console.log(str2);
*/   