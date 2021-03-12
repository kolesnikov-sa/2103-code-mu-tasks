document.writeln('<h1>Lesson 13</h1>');

// 1
function funcOne(){
  let str = '';
  for (let i = 1; i <= 9; i++) {
    str += i;
  }
  return str;
}

document.write('1: ', funcOne(), '</br>');

// 2
function funcTwo() {
  let str = '';
  for (let i = 9; i >= 1; i--) {
    str += i;
  }
  return str;
}

document.write('2: ', funcTwo(), '</br>');

// 3
function funcThree(){
  let str = '-';
  for (let i = 1; i <= 9; i++) {
    str += i + '-';
  }
  return str;
}

document.write('3: ', funcThree(), '</br>');

// 4
function funcFour() {
  let str = '</br>';
  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= i; j++ ) {
      str += 'x';
    }
    str += '</br>';
  }
  return str;
}

document.write('4: ', funcFour(), '</br>');

// 5
function funcFive() {
  let str = '</br>';
  for (let i = 1; i <= 9; i++){
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += '</br>';
  }
  return str;
}

document.write('5: ', funcFive(), "</br>");

// 6
function funcSix() {
  let str = '</br>';
  for (let i = 2; i <= 10; i += 2) {
    for (let j = 1; j <= i; j++) {
      str += 'x';
    }
    str += '</br>';
  }
  return str;
}

document.write('6: ', funcSix(), "</br>");