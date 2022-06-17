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
console.log(booking)



 