// Write a function, which takes a non-negative integer (seconds) as input
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

function humanReadable(seconds) {
  const secondsRemain = ("0" + (seconds % 60)).slice(-2);
  const minutes = ("0" + (((seconds - secondsRemain) / 60) % 60).toFixed(0)).slice(-2);
  const hours = ("0" + Math.floor((seconds - secondsRemain) / 60 / 60)).slice(-2);
  return `${hours}:${minutes}:${secondsRemain}`;
}

// function humanReadable(seconds) {
//   var hours = parseInt(seconds / 3600);
//   var minutes = parseInt(seconds / 60) % 60;
//   var seconds = seconds % 60;
//   var pad = function (val) {
//     return val < 10 ? "0" + val : val;
//   };
//   return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
// }

console.log(humanReadable(0)); // '00:00:00'
console.log(humanReadable(59)); // '00:00:59'
console.log(humanReadable(60)); // '00:01:00'
console.log(humanReadable(90)); // '00:01:30'
console.log(humanReadable(3599)); // '00:59:59'
console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(45296)); // '12:34:56'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(86400)); // '24:00:00'
console.log(humanReadable(359999)); // '99:59:59'
