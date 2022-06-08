/* 
// Array 
const bestFriends = ['James','Anthony','Tommy','Christopher','William','Jeanne','Hannah','John','James','Mary'];
// half of array
console.log(bestFriends[bestFriends.length/2-1]);
console.log(bestFriends[bestFriends.length-1]);
// shows index of array that is displayed
let middleIndex = Math.floor(bestFriends.length / 2) -1;
console.log(middleIndex);
console.log(bestFriends[middleIndex]); */

let marks = 86;
// >, >= , <, <=
// &&, ||, !
switch(true) {
    case 100:
        console.log("A+");
    break;

    case marks<98:
        console.log("B+");
    break;

    case marks<75:
        console.log("Distinction");
    break;

    case marks<50:
        console.log("Pass");
    break;

    case marks<49:
        console.log("Fail");
    break;
    default:
        console.log("Out of range");
}

// var gradeOut = 50;
// //here's the same thing using switch(true). Requires var gradeOut (is currently at top of page
// switch(true) {
//     case gradeOut<60:
//         gradeOut= "My letter grade is: F";
//         console.log(gradeOut);
//         break;
//     case gradeOut<70:
//         gradeOut= "My letter grade is: D";
//         console.log(gradeOut);
//         break;
//     case gradeOut<80:
//         gradeOut="My letter grade is: C";
//         console.log(gradeOut);
//         break;
//     }