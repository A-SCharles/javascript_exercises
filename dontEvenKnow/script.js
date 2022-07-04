//for each other
// data.forEach((item) => {
//     console.log(item);
// });
// //callback a function without a name
// data.forEach(display);
// function display(item){
//     console.log(item);
// }

// console.log(numbers.map((item)=>{
    //     return item*item;
    // }));
    // console.log('p')
    let numbers = new Array(8, 4, 'green', true, 98.6);
console.log(
  numbers.reduce((c, n) => {
    return c + n;
  })
);

console.log(numbers.join(','))
