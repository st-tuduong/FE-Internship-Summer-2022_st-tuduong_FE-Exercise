// 1. Write a JavaScript function to repeat a string a specified times.
// Input: (string, repeat times)
// Output: the new string
// Ex: ("FE", 4) => 'FEFEFEFE'
function repeatString(string, repeat) {
  let newStr = " ";
  while (repeat > 0) {
    newStr += string;
    repeat--;
  }
  return newStr;
}

console.log(repeatString("FE", 4));
