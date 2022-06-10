
/* let displayName = (firstname)=> {
    document.write(`<br>${firstname}`);
}

displayName('Joel');
displayName('Your Name Is'); */

// Looping through an array
/* let names = ['John', 'daisy', 'Mary', 'Jane','Mason']
for (let i = 0; i<names.length; i++){
    console.log(names[i])
} */

//finding even numbers in number array
/* let numbers = [2,5,8,9,8,4,6,3,5,7,9,2,1,46,54,59]
for(i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
} */

// Break loop when numbers reach value of 6
/* let numbers = [2,5,8,9,8,4,6,3,5,7,9,2,1,46,54,59];
 for (i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
    if(numbers[i] == 6){
        break;
    };
} */

//skip when numbers reach value of 6
/* let numbers = [2,5,8,9,8,4,6,3,5,7,9,2,1,46,54,59];
for (i = 0; i < numbers.length; i++){
    if (numbers[i] == 6){
        continue
    };
    console.log(numbers[i]);
} */

// for loop
/* for(let i = 0; i<5 ; i++){
    console.log(i)
    }; */

// While loop
 /* let cnt = 0 
    while(cnt<5){
    console.log(cnt)
    cnt++
} */


// display names in array usin Do While
/* let names = ['John', 'daisy', 'Mary', 'Jane','Mason'];
let cnt = 0;
do {
    console.log(names[cnt])
    cnt++;
} while (cnt < names.length);
*/

// For Each names in array, display in <li>
//names array ↓
// let names = ['John', 'daisy', 'Mary', 'Jane','Mason'];

//connects wrapper to html element ↓
/* let wrapper = document.getElementById('students')
 names.forEach((item, i) => {
    // creates an <li> in wrapper and displays names array 
    wrapper.innerHTML +=
    `<li>${i}: ${item}</li>
    `
    // console.log(item);
 }); */


 // for in (loops through objects ?)
 let personDetails = {
    firstName: 'Jane',
    surname: 'Doe'
 }

 for (let value in personDetails){ 
    console.log(`${value}: ${personDetails[value]}`)
 }