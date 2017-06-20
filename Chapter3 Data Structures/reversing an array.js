function reverseArray(array) {
  var result = [];
  for (var i=0; i < array.length; i++) {
    result.unshift(array[i]);
  }
  return(result);
}

function reverseArrayInPlace(array) {
 var arrayNew = [];
 for (var i = 0; i < array.length; i++) {
   arrayNew.unshift(array[i]); 
 }
 for (var i = 0; i < arrayNew.length; i++) {
   array[i] = arrayNew[i];
 }
 return array;
}


console.log(reverseArray(["A", "B", "C"]));
// > ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// > [5, 4, 3, 2, 1]