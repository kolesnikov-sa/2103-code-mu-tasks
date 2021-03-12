document.writeln('<h1>Lesson 16</h1>');

// 1
function ucfirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}

document.write('1-1: ', ucfirst('hello, world!'), '</br>');
document.write('1-2: ', ucfirst('life on Mars'), '</br>');

// 2
function funcTwo(str) {
  let output = '';
  let tempStr = str.split('_');
  output += tempStr[0];
  for (let i = 1; i < tempStr.length; i++) {
    output += ucfirst(tempStr[i]);
  }
  return output;
}

document.write('2: ', funcTwo('var_text_hello'), '</br>');

// 3
function inArray(text, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === text) return true;
  }
  return false;
}

document.write('3-1: ', inArray('Mars', ['Life', 'on', 'Mars']).toString(), '</br>');
document.write('3-2: ', inArray('Venus', ['Life', 'on', 'Mars']).toString(), '</br>');

// 4
function funcFour(str) {
  let output = '';
  let tempStr = str.split('');
  for (let i = 0; i < str.length; i += 2) {
    output += tempStr[i+1] + tempStr[i];
  }
  return output;
}

document.write('4: ', funcFour('123456'), '</br>');