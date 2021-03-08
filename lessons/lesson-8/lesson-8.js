document.writeln('<h1>Lesson 8</h1>');

// 1
let arrOneOne = [1, 2, 3];
let arrOneTwo = [4, 5, 6];

document.write('1: ', arrOneOne.concat(arrOneTwo).toString(), '<br>');

// 2
let arrTwo = [1, 2, 3];

document.write('2: ', arrTwo.reverse().toString(), '<br>');

// 3
let arrThree = [1, 2, 3];

for (let i = 4; i <= 6; i++) {
  arrThree.push(i);
}

document.write('3: ', arrThree.toString(), '<br>');

// 4
let arrFour = [1, 2, 3];

for (let i = 6; i >= 4; i--) {
  arrFour.unshift(i);
}

document.write('4: ', arrFour.toString(), '<br>');

// 5
let arrFive = ['js', 'css', 'jq'];

document.write('5: ', arrFive.shift().toString(), '<br>');

// 6
document.write('6: ', arrFive.pop().toString(), '<br>');

// 7
let arrSeven = [1, 2, 3, 4, 5];

document.write('7: ', arrSeven.slice(0, 3).toString(), '<br>');

// 8
document.write('8: ', arrSeven.slice(3, 5).toString(), '<br>');

// 9
let arrNine = [1, 2, 3, 4, 5];
arrNine.splice(1, 2);
document.write('9: ', arrNine.toString(), '<br>');

// 10
let arrTen = [1, 2, 3, 4, 5];
arrTen.splice(4, 0, 2, 3, 4);
document.write('10: ', arrTen.toString(), '<br>');

// 11
let arrEleven = ['1', '2', '3', '4', '5'];
arrEleven.splice(4, 0, 'a', 'b', 'c');
document.write('11: ', arrEleven.toString(), '<br>');

// 12
let arrTwelve = ['1', '2', '3', '4', '5'];
arrTwelve.splice(1, 0, 'a', 'b');
arrTwelve.splice(6, 0, 'c');
arrTwelve.push('e');
document.write('12: ', arrTwelve.toString(), '<br>');

// 13
let arrThirteen = [3, 4, 1, 2, 7];
document.write('12: ', arrThirteen.sort().toString(), '<br>');

// 14
let objFourteen = {
  js: 'test',
  jq: 'hello',
  css: 'world'
}
let keys = [];
for (let key in objFourteen) {
  keys.push(key);
}
document.write('13: ', keys.toString(), '<br>');