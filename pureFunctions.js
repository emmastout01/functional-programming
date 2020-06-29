/* A function is pure if: 
- For a given input, it will always return the same output
- It has no side effects

This function is impure because it will have a different output if the global variable 'x' changes
*/
  var x = 5

  const multiply = (y) => y * x;

  console.log(multiply(5)); // This will change if x is changed from 5 to another value
