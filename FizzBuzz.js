/** Javascript script to print "Fizz" if a number is divisible by 3, print 
 *  "Buzz" if a number is divisible by 5, and print "FizzBuzz" if a number 
 *  is divisible by both 3 and 5 for numbers in a given range.
 */
 
 const fs = require("fs");
 
 function fizzBuzz(targetNum) {
   for (let x = 1; x < targetNum + 1; x++) {
     if ((x % 3 == 0) && (x % 5 == 0)) {
       console.log('FizzBuzz');
     }
     else if (x % 3 == 0) {
       console.log('Fizz');
     }
     else if (x % 5 == 0) {
       console.log('Buzz')
     }
     else {
       console.log(x)
     }
   }
 }
   
 function main() {
  let inputFile = 'FizzBuzz_input.txt';
  try {
    var data = fs.readFileSync(inputFile);
    const targetNum = parseInt(data.toString().split("\n")[0], 10);
    fizzBuzz(targetNum);
  } catch (err) {
    console.log('File ' + inputFile + ' not found!');
  }
 }
  
if (require.main == module) {
  main();
}
