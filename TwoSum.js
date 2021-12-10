/** Write a method that checks if there is at least one pair of
 *  numbers in a list of numbers, which has sum equal to target. 
 *  Given arr = [1, 3, 4] and target = 5, result is true because 
 *  the pair (1,4) sums to 4.
 */
  
const fs = require("fs");

function twoSum(listOfNums, targetNum) {
  /**Method to check if sum of a pair is equal to target*/
  var result = false;
  
  for (let p of listOfNums) {
    for (let q of listOfNums) {
      if ((p != q) && (p + q == targetNum)) {
        result = true;
      }
    }
  }
  if (result == true) {
    return 'At least one pair has sum equal to target!';
  }
  else {
    return 'No pair has sum equal to target';
  }
}

function main() {  
  let inputFile = 'TwoSum_input.txt'
  try {
    var data = fs.readFileSync(inputFile);
    var listOfNums = data.toString().split("\n")[0].split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
    var targetNum = parseInt(data.toString().split("\n")[1], 10);
    console.log('Given list of integers: ' + listOfNums.join(", "));
    console.log('Target integer: ' + targetNum);
    console.log(twoSum(listOfNums, targetNum));
  } catch (err) {
    console.log('File '+ inputFile +' not found!');
  }
}

if (require.main == module) {
  main();
}
