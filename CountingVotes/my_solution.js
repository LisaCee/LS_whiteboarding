// ****************************************************************************
// Count Votes
// You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

// Example:

// const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

// countVotes(votes);  // should return 'michael'
// Analyze the time and space complexity of your solution.

const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

const countVotes = arr => {
  let cache = {};
  let tieBreaker = [];
  let maxVotes;

  for (let i = 0; i < votes.length; i++) {
    if (!cache[votes[i]]) {
      cache[votes[i]] = 1
    } else {
      cache[votes[i]] ++;
    }
  }
  let array = Object.entries(cache);
  array.sort((a, b) => a[1] - b[1])
  for (let i = 1; i < array.length; i++) {
    maxVotes = array[i][1]
    if(array[i][1] >= maxVotes) {
      maxVotes = array[i][1]
      tieBreaker.push(array[i][0])
    }
  }
  let solution = tieBreaker.sort();
  return solution[solution.length - 1]
}

countVotes(votes)

