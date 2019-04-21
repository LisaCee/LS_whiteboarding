// # Integer Pairs

// Write a function `integerPairs` to find and print out all pairs of integers within an input array which sum up to a specified input value `k`.

// There are multiple ways to do this, depending upon whether you want to favor runtime or space.

// Example:
// ```js
// integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// // should print '6 5', '7 4', '8 3', '9 2', '10 1'
// ```

// Analyze the time and space complexity of your solution.

const integerPairs = (arr, total) => {
  let pairs = [];
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let difference = total - arr[i];
    if (hashTable[difference] !== undefined) {
      pairs.push([arr[i], difference]);
    }
    hashTable[arr[i]] = arr[i];
  }

  return pairs;
};

console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));

// const integerPairs = (arr, total) => {
  // let pairs = [];
  // for (let i = 0; i < arr.length/2; i++) {
  //     for (let j = 1; j < arr.length; j++) {
  //         if(arr[i] + arr[j] == total) {
  //             pairs.push([arr[i], arr[j]])
  //         }
  //     }
  // } return pairs;
// };
