// Imperative approach:

let array = [1, 2, 3, 4]
let newArray = []

for(let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * 2
}

console.log({newArray}) // [ 2, 4, 6, 8 ]



// Declarative approach:  

const mappedArray = array.map(val => val * 2);

console.log({mappedArray}) // Also [ 2, 4, 6, 8 ]