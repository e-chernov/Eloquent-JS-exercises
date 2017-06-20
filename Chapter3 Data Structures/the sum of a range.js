function range (begin, end, step) {
  var result = [];
  if (arguments.length == 2) {
    step = 1;
  }
  if (step < 0) {
    for (i = begin; i >= end; i += step) {
      result.push(i);
    }
  }
  else {
    for (i = begin; i <= end; i += step) {
      result.push(i);
    }
  }
  return (result);
}

function sum (array) {
  var result = 0;
  for (i = array[0]; i <= array.length; i++) {
    result += i;
  }
  return (result);
}

console.log(range(1, 10));
// > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// > [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// > 55