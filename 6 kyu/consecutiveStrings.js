function longestConsec(strarr, k) {
  const n = strarr.length;

  if (n === 0 || k > n || k <= 0) {
    return '';
  }

  let longest = '';

  for (let i = 0; i <= n - k; i++) {
    const currentConcatenation = strarr.slice(i, i + k).join('');
    if (currentConcatenation.length > longest.length) {
      longest = currentConcatenation;
    }
  }

  return longest;
}

const strarr = ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'];

console.log(longestConsec(strarr, 2));
