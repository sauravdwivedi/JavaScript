/** A left rotation operation on an array shifts each of the array's
 *  elements 1 unit to the left. For example, if 2 left rotations are
 *  performed on array [1,2,3,4,5], then the array would become
 *  [3,4,5,1,2]. Note that the lowest index item moves to the highest
 *  index in a rotation. This is called a circular array.
 *
 *  Given an array a of n integers and a number, d, perform d left
 *  rotations on the array. Return the updated array to be printed
 *  as a single line of space-separated integers.
 */

var fs = require("fs")

function oneLeftRot(a) {
  var x = new Array();
    
  for (let j=0; j<a.length; j++) {
    if (j < a.length-1) {
      x.push(a[j+1]);
    } else {
      x.push(a[0]);
    }
  }
    
return x;
}

function main() {
  var data = fs.readFileSync('LeftRotation_input.txt');
  const d = data.toString().split("\n")[0];
  var a = data.toString().split("\n")[1].split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));
  console.log('Given array: ' + '[' +a.join(", ") + ']');
  console.log('Number of rotations: ' + d)
  var c = 0;

  while (c < d) {
    var z = oneLeftRot(a);
    c = c + 1;
    a = z;
  }

  console.log('Array after '+ d + ' rotations: [' + a.join(", ") + ']');
}

if (require.main == module) {
  main();
}

