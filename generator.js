/*
run code when required
return special obj 
iterable loop on data
used when I display data and have a button for show more

*/

// const { name } = require("ejs");

function* nameGenerator() {
    yield 'dalia'
    yield 'dalia1'
    yield 'dalia2'
    console.log('hello');
}

let generator = nameGenerator()

console.log(typeof (generator));
console.log(generator.next()); // {value: 'dalia', done: false}
console.log(generator.next().value); // dalia1
console.log(generator.next().value); // dalia2
console.log(generator.next()); // hello, {value: undefined, done: true}

// for (const value of nameGenerator()) { 
//     console.log(value);
// }