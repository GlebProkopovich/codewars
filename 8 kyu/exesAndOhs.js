// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution
function XO(str) {
  const gottenString = str.toLowerCase().split('');
  const exes = gottenString.filter((el) => el === 'x');
  const ohs = gottenString.filter((el) => el === 'o');
  return exes.length === ohs.length ? true : false;
}

console.log(XO('ooxXm'));
