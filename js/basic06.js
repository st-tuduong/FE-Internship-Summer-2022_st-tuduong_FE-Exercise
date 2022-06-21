// 6. Write a function to transform a string like example.
// Input: (string)
// Output: string
// Ex: ('intern FE') => 'Nretni EF'
function reverseString(string) {
  return string.split(' ').map(function(key){
    var str =  key.split('').reverse().join('')
    return str[0].toUpperCase() + str.slice(1)
  }).join(' ')
}

console.log(reverseString('intern FE'))
