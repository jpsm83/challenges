/*console the numbers of num but
if it is multiple of 3, console fizz
if it is multiple of 5, console buzz
and if is multiple by 3 and 5 console fizzbuzz*/

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);
