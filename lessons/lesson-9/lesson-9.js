document.writeln('<h1>Lesson 9</h1>');

// 1
let strOne = 'string one';
document.write('1-1: ', strOne[0].toUpperCase() + strOne.split('').slice(1).join(''), '<br>');
document.write('1-2: ', strOne[0].toUpperCase() + strOne.split('').splice(1, strOne.length).join(''), '<br>');
document.write('1-3: ', strOne[0].toUpperCase() + strOne.substr(1), '<br>');

function funcOne(str) {
  let tempStr = str.split('');
  tempStr[0] = tempStr[0].toUpperCase();
  return tempStr.join('');
}

document.write('1-4: ', funcOne(strOne), '<br>');

// 2
let strTwo = '123456';
document.write('2: ', strTwo.split('').reverse().join(''), '<br>');

// 3
let strThree = "http://okadiagency.ru";

function checkStringStart(str) {
  if (str.substring(0, 7) === 'http://') return 'True'; else return 'False';
}

document.write('3: ', checkStringStart(strThree), '<br>');

// 4
let strFour = "http://okadiagency.ru";

function checkStringEnd(str) {
  if (str.substring(str.length - 7) === 'http://') return 'True'; else return 'False';
}

document.write('4: ', checkStringEnd(strFour), '<br>');