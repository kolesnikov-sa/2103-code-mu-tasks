document.writeln('<h1>Lesson 5</h1>');

// 1
function funcOneWhile(start, end) {
  let i = start;
  let output = '';
  while (i <= end) {
    output += i;
    if (i !== end) output += ', ';
    i++;
  }
  return output;
}

function funcOneFor(start, end) {
  let output = '';
  for (let i = start; i <= end; i++) {
    output += i;
    if (i !== end) output += ', ';
  }
  return output;
}

document.write('1-1: ', funcOneWhile(1, 100), '<br>');
document.write('1-2: ', funcOneFor(1, 100), '<br>');

// 2
document.write('2-1: ', funcOneWhile(11, 33), '<br>');
document.write('2-2: ', funcOneFor(11, 33), '<br>');

// 3
function funcThreeWhile(start, end) {
  let output = '';
  let i = start;
  while (i <= end) {
    if (i % 2 === 0) {
      output += i;
      if (i !== end) output += ', ';
    }
    i++;
  }
  return output;
}

function funcThreeFor(start, end) {
  let output = '';
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      output += i;
      if (i !== end) output += ', ';
    }
  }
  return output;
}

document.write('3-1: ', funcThreeWhile(0, 100), '<br>');
document.write('3-2: ', funcThreeFor(0, 100), '<br>');

// 4
function funcFour(start, end) {
  let output = 0;
  for (let i = start; i <= end; i++) {
    output += i;
  }
  return output;
}

document.write('4: ', funcFour(0, 100).toString(), '<br>');

// 5
let arrFive = [1, 2, 3, 4, 5];

function funcFive(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += arr[i];
    if (i < arr.length - 1) output += ', ';
  }
  return output;
}

document.write('5: ', funcFive(arrFive), '<br>');

// 6
function funcSix(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
}

document.write('6: ', funcSix(arrFive).toString(), '<br>');

// 7
let objSeven = {
  green: 'зеленый',
  red: 'красный',
  blue: 'голубой'
}

function funcSeven(obj) {
  let output = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) output += 'Key: ' + key + ', value: ' + obj[key] + '<br>';
  }
  return output;
}

document.write('7: ', funcSeven(objSeven));

// 8
let objEight = {
  Коля: 200,
  Вася: 300,
  Петя: 400
}

function funcEight(obj) {
  let output = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) output += key + ' &mdash; зарплата ' + obj[key] + ' долларов<br>';
  }
  return output;
}

document.write('8: ', funcEight(objEight))

// 9
let arrNine = [2, 5, 9, 15, 0, 4];

function funcNine(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
      output += arr[i];
      if (i < arr.length - 1) output += ', ';
    }
  }
  return output;
}

document.write('9: ', funcNine(arrNine), '<br>');

// 10
function funcTen(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) output += arr[i];
  }
  return output;
}

document.write('10: ', funcTen(arrNine).toString(), '<br>');

// 11
function funcEleven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) return 'Есть!';
  }
  return '';
}

let arrEleven = [1, 2, 5, 9, 4, 13, 4, 10];

document.write('11: ', funcEleven(arrEleven), '<br>');

// 12
function funcTwelve(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString()[0] === '1' || arr[i].toString()[0] === '2' || arr[i].toString()[0] === '5') {
      if (output !== '') output += ', ';
      output += arr[i].toString();
    }
  }
  return output;
}

let arrTwelve = [10, 20, 30, 50, 235, 3000];

document.write('12: ', funcTwelve(arrTwelve), '<br>');

// 13
function funcThirteen(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += '-' + arr[i];
  }
  output += '-';
  return output;
}

let arrThirteen = [1, 2, 3, 4, 5, 6, 7, 8, 9];

document.write('13: ', funcThirteen(arrThirteen), '<br>');

// 14
let arrFourteen = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

function funcFourteen(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    if (output !== '') output += ', ';
    if (i !== 5 && i !== 6) {
      output += arr[i];
    } else {
      output += '<strong>' + arr[i] + '</strong>';
    }
  }
  return output;
}

document.write('14: ', funcFourteen(arrFourteen), '<br>');

// 15
function funcFifteen(arr) {
  let output = '';
  let now = new Date();
  let day = now.getDay();
  for (let i = 0; i < arr.length; i++) {
    if (output !== '') output += ', ';
    if (i === day - 1) {
      output += '<i>' + arr[i] + '</i>';
    } else {
      output += arr[i];
    }
  }
  return output;
}

document.write('15: ', funcFifteen(arrFourteen), '<br>');

// 16
function funcSixteen(value) {
  let num = 0;
  let currentValue = value;
  while (currentValue >= 50) {
    currentValue = currentValue / 2;
    num++;
  }
  return num;
}

document.write('16: ', funcSixteen(1000).toString(), "<br>");