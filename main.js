//function takes in an array, finds the sum, and tells you whether it's odd or even.
function oddOrEven(array) {
   let newArr = array.reduce((a, b) => a + b, 0)
   if (newArr % 2 === 0 || newArr === 0) {
     return `even-- sum is ${newArr}.`
   } else {
     return `odd-- sum is ${newArr}.`
   }
 }


console.log(oddOrEven([2,4,6])) // => even-- sum is 12.
console.log(oddOrEven([23,14,62])) // => odd-- sum is 99.
console.log(oddOrEven([11,111,1111])) // => odd-- sum is 1233.