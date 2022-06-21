// 7. Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
// Input: (array, number)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
// Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9
var array = [];

function calNumber(array, number) {
  for(i = 0; i < array.length; i++){
    if(i % number == 0) {
      i = i+1;
    }
  }
  return array
}

console.log(calNumber([1,2,3,4,5,6,7],2))