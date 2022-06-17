/* Bai1*/
var week = ["mon", "tue", "wed", "thus", "friday", "sat", "sun"];
var calendars = [
  {
    date: "wed",
    room: "Mars",
    team: "FE",
  },

  {
    date: "Sun",
    room: "Saturn",
    team: "IOS",
  },

  {
    date: "friday",
    room: "Saturn",
    team: "IOS",
  },
];

var booking = {};

calendars.map(item => {
  if(!booking?.[item.date]) {
    booking[item.date] = [];
  }
  booking[item.date].push(item);
})

var result = [];

for(i = 0; i < week.length ; i++){
    result.push({date: week[i], booking: booking[week[i]] ? booking[week[i]] : []})
}
console.log(result)

/* Bai2: (a > b) => a + b ; (a <= b) => (a + b)*3  */

// function Sum(a,b) {

//     // option1
//     if(a>b){
//        return (a + b);
//     }
//     else{
//         return ((a + b) * 3);
//     }

//     // option2 Recommend
//     // if(a>b){
//     //    return (a + b);
//     // }
//     //     return ((a + b) * 3);
//     // }
//     }

//     console.log(Sum(6,4));

/* Bai3: Input: '1*4' ; Output: [104, 114, 124, 134, 144, ... , 194] và chia hết cho 3*/ 
function Array(string) {
    var sum = 0;
    var result = [];
    for(i = 0; i < string.length; i++) {
        if(string[i] !== '*') {
            sum = sum + (+[string[i]]);
        }
    }
    for(i = 0; i < 10; i++) {
        if((sum + i)% 3 == 0) {
            result.push(+string.replace('*', i))
        }
    }
    return result;
}

console.log(Array('1*4'));
console.log(result);