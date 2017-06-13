var number = 1;
var remainder3 = 0;
var remainder5 = 0;
while (number <=100) {
  remainder3 = number % 3;
  remainder5 = number % 5;
  if (remainder3 == 0)
    if (remainder5 == 0)
      console.log (number, "FizzBuzz");
    else
      console.log (number, "Fizz");
  else if (remainder3 != 0, remainder5 == 0)
    console.log (number, "Buzz");
  else 
  	console.log (number);
  number += 1;
}