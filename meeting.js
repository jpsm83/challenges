// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name.
// Last name and first name of a guest come in the result between parentheses separated by a comma.
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  let string = s
    .toUpperCase()
    .split(";")
    .map((person) => person.split(":").reverse().join(", "))
    .sort()
    .join(")(");
  return "(" + string + ")";
}

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
