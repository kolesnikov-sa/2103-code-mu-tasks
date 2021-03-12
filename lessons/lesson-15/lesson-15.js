document.writeln('<h1>Lesson 15</h1>');

// 1
function isNumberInRange(num) {
  return (num > 0 && num < 10);
}

document.write('1-1: ', isNumberInRange(5), '</br>');
document.write('1-2: ', isNumberInRange(15), '</br>');

// 2
function funcTwo(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) output += arr[i];
  }
  return output;
}

document.write('2: ', funcTwo([1, 2, 3, 4, 5]).toString(), '</br>');

// 3
function getDigitsSum(num) {
  let output = 0;
  console.log(String(num));
  for (let i = 0; i < String(num).length; i++) {
    output += Number(String(num)[i]);
  }
  return output;
}

document.write('3: ', getDigitsSum(123).toString(), '</br>');

// 4
function funcFour() {
  let output = [];
  for (let i = 1; i <= 2021; i++) {
    if (getDigitsSum(i) === 13) {
      output.push(i);
    }
  }
  return output;
}

document.write('4: ', funcFour().toString(), '</br>');

// 5
function isEven(num) {
  return (num % 2 === 0);
}

document.write('5-1: ', isEven(1).toString(), '</br>');
document.write('5-2: ', isEven(2).toString(), '</br>');

// 6
function funcSix(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) output.push(arr[i]);
  }
  return output;
}

document.write('6: ', funcSix([1,2,3,4,5,6]).toString(), '</br>');

// 7
function getDivisors(num) {
  let output = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) output.push(i);
  }
  return output;
}

document.write('7-1: ', getDivisors(40).toString(), '</br>');
document.write('7-2: ', getDivisors(5).toString(), '</br>');