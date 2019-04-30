// Counting Votes
// You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

// Example:

// const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

// countVotes(votes);  // should return 'michael'
// Analyze the time and space complexity of your solution.

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

const countVotes = (arr) => {
  let counter = {};
  let maxVotes = 0;
  let tieBreaker = []
  for (let i = 0; i < arr.length; i++) {

    if (counter.hasOwnProperty(arr[i])) {
      counter[arr[i]]++
    } else {
      counter[arr[i]] = 1;
    }
  }
  for (name in counter) {
    if (counter[name] > maxVotes) {
      maxVotes = counter[name];
 
    }
  } 
  // console.log(counter);
  let solution = Object.entries(counter);
  return solution.sort((a, b) => a[1] - b[1])[solution.length - 1][0]

}
countVotes(votes); 

