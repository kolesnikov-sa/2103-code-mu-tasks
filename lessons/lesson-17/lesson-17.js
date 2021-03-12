document.writeln('<h1>Lesson 17</h1>');

// 1
function funcOne(arr) {
  let output = '';
  output += arr.shift();
  if (arr.length > 0) {
    output += funcOne(arr);
  }
  return output;
}

document.write('1: ', funcOne([1, 2, 3, 4, 5, 6, 7, 8, 9]), '</br>');

// 2
function funcTwo(number) {
  let output = funcTwoSum(number);
  if (output > 9) {
    output = funcTwo(output);
  }
  return output;
}

function funcTwoSum(number) {
  let output = 0;
  let inputArray = number.toString().split('');
  for (let i = 0; i < inputArray.length; i++) {
    output += Number(inputArray[i]);
  }
  return output;
}

document.write('2: ', funcTwo(551).toString(), '</br>');
