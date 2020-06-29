// Immutable data is data that cannot be mutated after it is created. 

const myArray = [1, 2, 3, 4, 5, 6, 7];

// Mutate myArray
const evenStevens = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr.pop(arr[i])
        }
    }
}

evenStevens(myArray);

console.log(myArray); // [1, 2, 3, 4]

// --------------------------------------------------------------

const myOtherArray = [1, 2, 3, 4, 5, 6, 7];

// Return a new array
const immutableEvenStevens = (arr) => arr.filter(num => num % 2 !==0);

immutableEvenStevens(myOtherArray);

console.log({myOtherArray}); // [1, 2, 3, 4, 5, 6, 7]