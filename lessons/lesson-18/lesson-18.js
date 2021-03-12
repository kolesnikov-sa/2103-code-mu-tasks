document.writeln('<h1>Lesson 18</h1>');

// 1
function funcOne() {
  let output = '</br>';
  for (let i = 1; i <= 100; i++) {
    output += i + '</br>';
  }
  return output;
}

document.write('1: ', funcOne(), '</br>');

// 2
function funcTwo() {
  let output = '</br>';
  for (let i = 100; i >= 1; i--) {
    output += i + '</br>';
  }
  return output;
}

document.write('2: ', funcTwo(), '</br>');

// 3
function funcThree() {
  let output = '</br>';
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) output += i + '</br>';
  }
  return output;
}

document.write('3: ', funcThree(), '</br>');

// 4
function funcFour() {
  let output = [];
  for (let i = 1; i <= 10; i++) {
    output.push('x');
  }
  return output;
}

document.write('4: ', funcFour().toString(), '</br>');

// 5
function funcFive() {
  let output = [];
  for (let i = 1; i <= 10; i++) {
    output.push(i);
  }
  return output;
}

document.write('5: ', funcFive().toString(), '</br>');

// 6
function funcSix() {
  let output = [];
  for (let i = 1; i <= 10; i++) {
    output.push(Math.random().toFixed(2));
  }
  return output;
}

document.write('6: ', funcSix().toString(), '</br>');

// 6
function funcSeven() {
  let output = [];
  for (let i = 1; i <= 10; i++) {
    output.push(Math.round(Math.random() * 10));
  }
  return output;
}

document.write('7: ', funcSeven().toString(), '</br>');

// 8
function funcEight(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) output.push(arr[i]);
  }
  return output;
}

document.write('8: ', funcEight([5, 15, 25, 35, 7, 4, 23]).toString(), '</br>');

// 9
function funcNine(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) return 'Есть';
  }
  return '';
}

document.write('9-1: ', funcNine([1, 2, 3, 4, 5, 6, 7, 8, 9]), '</br>');
document.write('9-2: ', funcNine([1, 2, 3, 4, 6, 7, 8, 9]), '</br>');

// 10
function funcTen(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
}

document.write('10: ', funcTen([1, 2, 3, 4, 5]).toString(), '</br>');

// 11
function funcEleven(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] * arr[i];
  }
  return output;
}

document.write('11: ', funcEleven([1, 2, 3, 4, 5]).toString(), '</br>');

// 12
function funcTwelve(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

document.write('12: ', funcTwelve([1, 2, 3, 4, 5]), '</br>');