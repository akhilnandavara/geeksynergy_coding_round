// To group the array of people into a single object where each key is a name and the value is an array of objects containing all people with that name, you can modify the previous code slightly. Here’s how to do it:

const people = [
    { name: 'John', age: 25 },
    { name: 'John', age: 30 },
    { name: 'Doe', age: 25 }
];

const groupedByName = people.reduce((acc, person) => {
    if (!acc[person.name]) {
        acc[person.name] = [];
    }
    acc[person.name].push(person);
    return acc;
}, {});

console.log(groupedByName);

// o/p 
// {
//     John: [
//         { name: 'John', age: 25 },
//         { name: 'John', age: 30 }
//     ],
//     Doe: [
//         { name: 'Doe', age: 25 }
//     ]
// }
//////////////////////////////////////////////////////////////////////////////////////////////

// Given question let zr = {[0,1,2],[3,4,5],[6,7,8]} 
//  Need o/p
// [6,3,0],
// [7,4,1],
// [8,5,2],

let zr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
let result = [];

for (let i = 0; i < zr.length; i++) {
    for (let j = 0; j < zr[i].length; j++) {

        result.push([
            zr[(i + 2) % zr.length][j], // gets [6, 7, 8][0] which is 6
            zr[(i + 1) % zr.length][j], // [3,4,5][0] which is 3 so 
            zr[i][j]])
    }
}

console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////
let arr = [1, "b", 5, 8, "a", 3, "c", 6, 9, 7, "d", 2, 4];
// question :  Rearrange in number followed by aplhabets

// Separate numbers and alphabets
let numbers = arr.filter(x => typeof x === 'number');
let alphabets = arr.filter(x => typeof x === 'string');

// Combine and sort
let result1 = numbers.concat(alphabets).sort((a, b) => a - b);

console.log(result1);
