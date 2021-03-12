document.writeln('<h1>Lesson 12</h1>');

// 1
function funcOne(a, b) {
  return a === b;
}

document.write('1-1: ', funcOne(1,2), '</br>');
document.write('1-2: ', funcOne(2,2), '</br>');

// 2
function funcTwo(a, b) {
  return a + b > 10;
}

document.write('2-1: ', funcTwo(3, 4), '</br>');
document.write('2-2: ', funcTwo(7, 4), '</br>');

// 3
function funcThree(a) {
  return a < 0;
}

document.write('4-1: ', funcThree(5), '</br>');
document.write('4-2: ', funcThree(-7), '</br>');