/* 
“The problem with shared state is that in order to understand the effects of a function, you have to know the entire history of every shared variable that the function uses or affects.”
- Eric Elliot, ‘What is Functional Programming’

This example illustrates a challenge of using shared state. 
In this case, y is used by both double() and addOne().
This means that y will be mutated when either double() or addOne() is called.
One issue with this is that now, the order of the function calls matters. 
The value of y.number will be different depending on if double() or addOne() is called first.
This could easily introduce a bug into the code.
*/

const y = {
    number: 2,
  };
  
  const double = () => y.number *= 2;
  
  const addOne = () => y.number += 1;
 
  double(y);
  addOne(y); 
 
  console.log({y}); 
  