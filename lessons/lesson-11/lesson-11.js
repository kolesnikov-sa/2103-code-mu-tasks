document.writeln('<h1>Lesson 11</h1>');

// 1
let arrOneOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrOneTwo = [1, 2, 3, 4, 6, 7, 8, 9];

function checkArrOne(arr, checkNumber) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === checkNumber) flag = true;
  }
  return flag;
}

document.write('1-1: ', checkArrOne(arrOneOne, 5), '</br>');
document.write('1-2: ', checkArrOne(arrOneTwo, 5), '</br>');

// 2
let numberTwoOne = 31;
let numberTwoTwo = 20;

function checkNumberTwo(num) {
  let flag = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) flag = true;
  }
  return flag;
}

document.write('2-1: ', checkNumberTwo(numberTwoOne), '</br>');
document.write('2-2: ', checkNumberTwo(numberTwoTwo), '</br>');

// 3
let arrThreeOne = [1,2,3,3,4,5,6,6,7,8,9];
let arrThreeTwo = [1,2,3,4,5,6,7,8,9];

function checkArrThree(arr) {
  let flag = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) flag = true;
  }
  return flag;
}

document.write('3-1: ', checkArrThree(arrThreeOne), '</br>');
document.write('3-2: ', checkArrThree(arrThreeTwo), '</br>');