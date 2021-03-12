document.writeln('<h1>Lesson 14</h1>');

// 1
function funcOne() {
  let arr = [];
  let element = '';
  for (let i = 0; i < 3; i++) {
    element = '';
    for (let j = 0; j <= i; j++) {
      element += 'x';
    }
    arr.push(element);
  }
  return arr;
}

document.write('1: ', funcOne().toString(), '</br>');

// 2
function funcTwo() {
  let arr = [];
  let element = '';
  for (let i = 0; i < 3; i++) {
    element = '';
    for (let j = 0; j <= i; j++) {
      element += 1 + i;
    }
    arr.push(element);
  }
  return arr;
}

document.write('2: ', funcTwo().toString(), '</br>');

// 3
function funcThree(value, elemNumber) {
  let arr = [];
  for (let i = 0; i < elemNumber; i++) {
    arr.push(value);
  }
  return arr;
}

document.write('3: ', funcThree('x', 5).toString(), '</br>');

// 4
function funcFour(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) return i;
  }
}

document.write('4: ', funcFour([1, 2, 3, 4, 5, 6, 7, 8, 9]), '</br>');

// 5
function funcFive(arr) {
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
}

document.write('5: ', funcFive([1,2,3,4,5,6,7,8,9,10]).toString(), '</br>');

// 6
function funcSix(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      output += arr[i][j];
    }
  }
  return output;
}

document.write('6: ', funcSix([[1,2,3], [4, 5], [6]]).toString(), '</br>');

// 7
function funcSeven(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        output += arr[i][j][k];
      }
    }
  }
  return output;
}

document.write('7: ', funcSeven([[[1,2],[3,4]],[[5,6],[7,8]]]).toString(), '</br>');