var counter1 = 1;
var counter2 = 1;
var size = 8;
while (counter1 <= size) {
  var line = '';
  if ((counter1 % 2) != 0) {
      counter2 = 1;
      while (counter2 <= size) {
    	if ((counter2 % 2) !=0)
          line += '#';
        else
          line += ' ';
        counter2 += 1;
      }
  }
  else {
    counter2 = 1;
    while (counter2 <= size) {
       if ((counter2 % 2) !=0)
          line += ' ';
        else
          line += '#';
        counter2 += 1; 
    }
  }
  console.log (line);
  counter1 += 1;
}