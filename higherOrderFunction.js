/* Higher order functions either:
- Take a function as a parameter or
- Return a function as output
*/

const double = x => x * 2;

const addOne = x => x + 1;

// Here, double() acts as a higher order function because it takes in addOne() as a parameter
const newNumber = double(addOne(4));

console.log(newNumber);


