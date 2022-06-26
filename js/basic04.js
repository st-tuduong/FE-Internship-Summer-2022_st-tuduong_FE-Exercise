// 4. Write a function to get a unique random array number in the specified range.
// Input: (array length, min, max)
// Output: new array
// Ex: (4, 1, 10) => [3, 6, 1, 9]
function  randomArr (arrLength, min, max) {
   var newArr = []
   for (i = 0; i < arrLength; i++){
    var number = Math.floor(min + Math.random() * (max - min));
    if (newArr.indexOf(number) != -1) {
      number = Math.floor(min + Math.random() * (max - min));
    }
    newArr.push(number)
   }
   return newArr;
}
console.log(randomArr(4,1,10))
