function twoSum(numbers, target) {
  for (let i = 0; i <= numbers.length; i++) {
    for (let m = i + 1; m <= numbers.length; m++) {
      if (numbers[i] + numbers[m] === target) return [i, m];
    }
  }
}

console.log(twoSum([1234, 5678, 9012], 14690));
