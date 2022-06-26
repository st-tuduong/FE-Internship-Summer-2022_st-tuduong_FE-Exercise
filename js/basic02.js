// 2. Write a JavaScript function to count the occurrence of a substring in a string.
// Input: (string, substring)
// Output: the occurrence of a substring in a string
// Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
// Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1
function occurSubstring(string, substring) {
  let stringLowcase = string.toLowerCase();
  let substringLowcase = substring.toLowerCase();
  let count = stringLowcase.split(substringLowcase).length - 1;
  return count;
}
console.log(
  occurSubstring("The quick brown fox jumps over the lazy dog", "the")
);
