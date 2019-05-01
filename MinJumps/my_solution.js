// Min jumps
// Given an array of integers where each element represents the maximum number of steps that can be made forward from that element, write a function to return the minimum number of jumps to reach the end of the array, starting from the first element. If an element is 0, then we cannot move through that element.

// Example:

// Input: [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3   // going from 1 -> 3 -> 8 -> 9
// Analyze the time and space complexity of your solution.
function minJumps(arr, start = 0, end = arr.length - 1) {
  // base case: when start and end are at the same spot
  if (start === end) {
    return 0;
  }
  // when nothing is reachable, return infinity
  if (arr[start] === 0) {
    return Infinity;
  }
  // traverse through all the spots reachable by
  // arr[start], recursively getting the min number
  // of jumps needed to reach arr[end]
  let min = Infinity;
  for (let i = start + 1; i <= end && i <= start + arr[start]; i++) {
    //i = 1; i<= 10 && i <= 1 + 1; i++
    const jumps = minJumps(arr, i, end);
    if (jumps !== Infinity && jumps + 1 < min) {
      min = jumps + 1;
    }
  }

  return min;
}

console.log(minJumps([1]));
console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])); // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9])); // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1])); // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5])); // should print 4
