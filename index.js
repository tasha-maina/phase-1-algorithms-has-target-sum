function hasTargetSum(array, target) {
  const seen = new Set();

  for (let number of array) {
    const complement = target - number;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(number);
  }

  return false;
}

/* 
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

/* 
  Create an empty set to keep track of numbers we've seen.
  For each number in the array:
    - Calculate the number needed to reach the target (target - number)
    - If that number is in the set, return true
    - Otherwise, add the current number to the set
  If no such pair is found, return false
*/

/*
  The function loops through the array once.
  For each number, it checks if there's a previously seen number that adds up to the target.
  This is done using a Set, which allows fast lookup.
  If it finds such a pair, it returns true immediately.
  If it finishes the loop without finding any, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5, 5], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));
}

module.exports = hasTargetSum;
