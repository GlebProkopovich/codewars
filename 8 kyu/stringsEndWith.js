// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My solution
function solution(str, ending) {
  const newValues = str
    .split('')
    .reverse()
    .splice(0, ending.length)
    .reverse()
    .join('');

  return newValues.includes(ending);
}

console.log(solution('abcde', 'abc'));
