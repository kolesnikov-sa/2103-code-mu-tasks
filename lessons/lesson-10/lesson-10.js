document.writeln('<h1>Lesson 10</h1>');

// 1
function funcOne(num) {
  return num * num;
}

document.write('1: ', funcOne(4), '<br>');

// 2
function funcTwo(numOne, numTwo) {
  return 'numOne: ' + numOne + ', numTwo: ' + numTwo + ' = ' + ( numOne + numTwo );
}

document.write('2: ', funcTwo(3, 6), '<br>');

// 3
function funcThree(numOne, numTwo, numThree) {
  return 'numOne: ' + numOne + ', numTwo: ' + numTwo + ', numThree: ' + numThree + ' = ' + ((numOne - numTwo) / numThree);
}

document.write('3: ', funcThree(10,6,8), '<br>');

// 4
function funcFour(dayNum) {
  switch(dayNum) {
    case 1:
      return 'Понедельник';
    case 2: return 'Вторник';
    case 3: return 'Среда';
    case 4: return 'Четверг';
    case 5: return 'Пятница';
    case 6: return 'Суббота';
    case 7: return 'Воскресенье'
  }
}

document.write('4: ', funcFour(4), '<br>');