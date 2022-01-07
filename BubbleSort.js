/** Consider the following version of Bubble Sort:
 *  for (int i = 0; i < n; i++) {
 *    for (int j = 0; j < n - 1; j++) {
 *      // Swap adjacent elements if they are in decreasing order
 *      if (a[j] > a[j + 1]) {
 *          swap(a[j], a[j + 1]);
 *      }
 *    }
 *  }
 *  Given an array of integers, sort the array in ascending order using
 *  the Bubble Sort algorithm above. Once sorted, print the following
 *  three lines:
 *
 *  Array is sorted in numSwaps swaps., where numSwaps is the number of
 *  swaps that took place.
 *
 *  First Element: firstElement, where firstElement is the first element
 *  in the sorted array.
 *
 *  Last Element: lastElement, where lastElement is the last element in
 *  the sorted array.
 *
 *  Hint: To complete this challenge, you must add a variable that keeps
 *  a running tally of all swaps that occur during execution.
 */

const fs = require("fs");

function bubbleSort(arrayInt) {
  /** Method to count number of swaps to sort the array */
  let numSwaps = 0;
  for (let i=0; i < arrayInt.length; i++) {
    for (let j=0; j < arrayInt.length-1; j++) {
      if (arrayInt[j] > arrayInt[j+1]) {
        let left = arrayInt[j];
        arrayInt[j] = arrayInt[j+1];
        arrayInt[j+1] = left;
        numSwaps += 1;
      }
    }
  }
  console.log('Sorted array: ' + '[' + arrayInt.join(", ") + ']');
  console.log('Array is sorted in ' + numSwaps + ' swaps.');
  console.log('First element: '+ arrayInt[0]);
  console.log('Last element: ' + arrayInt[arrayInt.length-1]);
}
  
function main() {
  let inputFile = 'BubbleSort_input.txt';
  try {
    let data = fs.readFileSync(inputFile);
    let arrayInt = data.toString().trim().split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
    console.log('Given array: ' + '[' + arrayInt.join(", ") + ']');
    bubbleSort(arrayInt);
  } catch (err) {
    console.log('File ' + inputFile + ' not found');
  }
}

if (require.main == module) {
  main();
}
