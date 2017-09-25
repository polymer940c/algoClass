/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
function factorial(num) {
7
  if (num === 1 ) {
8
    return 1
9
  } else {
10
    return num * factorial( num - 1 )
11
  }
12
}
