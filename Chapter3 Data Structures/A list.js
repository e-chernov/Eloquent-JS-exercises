// Your code here.
function arrayToList(array) {
  var list = null;
  for (var i = (array.length - 1); i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    }
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
}

function prepend(value, rest) {
  var list = {
    value: value,
    rest: rest
  };
  return list;
}

function nth(list, number) {
  var array = listToArray(list);
  var result = undefined;
  for (var i = 0; i < array.length; i++) {
    if (i == number) {
      result = array[i];
    }
  }
  return result;
}

function nthRecursion(list, number) {
  if (number == 0) {
    return list.value;
  }
  else {
    return nthRecursion(list.rest, (number - 1));
  }
}

console.log(arrayToList([10, 20, 30]));
// > {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// > [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// > {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// > 20
console.log(nthRecursion(arrayToList([10, 20, 30]), 1));
// > 20