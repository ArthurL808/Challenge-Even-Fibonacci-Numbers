/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  let a = 0;
  let b = 1;
  let c = 0;
  let sum = 0;

  // do your work here
for (let i = 1; i <= maxFibValue; i++) {
  c = a + b;
  a = b;
  b = c;
  if(c > maxFibValue){
    break;
  }else if(c % 2 === 0){
    sum += b;
  } 
}
  return sum;
}


// bonus round
function _highestFibonacciNumber (maxFibValue){
  let a = 1;
  let b = 2;
  let c = 3;
  let highest = 0;

  //define your base case, validate your input


  //do your work here
  for (let i = 1; c <= maxFibValue; i++) {
    c = a + b;
    a = b;
    b = c;
    debugger;
    if(c >= maxFibValue){
      highest = a;
    } 
  }

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
