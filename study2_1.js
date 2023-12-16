const month = [];
let day = 17;

const timeWarp = (newMonth, newDay) => {
  month.push(newMonth);
  day = newDay;
}

timeWarp(5, 10);
console.log(month[0]+'월', day+'일')
timeWarp(11, 20);
console.log(month[1]+'월', day+'일')