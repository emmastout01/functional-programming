/* Here is the same example found in sharedState.js, but in this example we're not mutating shared state.
We return a new object each time we call double() or addOne().
Now, the order of function calls will not impact the object y.
*/

const y = {
    number: 2,
  };
  
  const double = (x) => Object.assign({}, x,{ number:  x.number * 2} )
  
  const addOne = (x) => Object.assign({}, x, { number: x.number + 1} )
  
  double(y);
  addOne(y);
  
  console.log({y});
  
  console.log(double(addOne(y)));
