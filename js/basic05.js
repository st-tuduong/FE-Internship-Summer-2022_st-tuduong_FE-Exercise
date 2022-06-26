// 5. Write a function to generate a random hexa color code.
// Input: ()
// Output: string
// Ex: () => #1A7B9D
function getRandomColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

console.log(getRandomColor())
