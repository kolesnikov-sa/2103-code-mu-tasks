document.writeln('<h1>Lesson 3</h1>');

// 3
let arrThree = ['a', 'b', 'c', 'd'];
let arrThreeOutput = arrThree[0] + '+' + arrThree[1] + ', ' + arrThree[2] + '+' + arrThree[3];
document.writeln('3: ', arrThreeOutput, '<br>');

//4
let arrFour = [2, 5, 3, 9];
let arrFourOutput = arrFour[0] * arrFour[1] + arrFour[2] * arrFour[3];
document.writeln('4: ', arrFourOutput.toString(), '<br>');

// 5
let objFive = {a: 1, b: 2, c: 3};
document.writeln('5-1: ', objFive['c'], '<br>');
document.writeln('5-2: ', objFive.c, '<br>');

// 6
let objSix = {Коля: '1000', Вася: '500', Петя: '200'};
document.writeln('6-1: Петя = ', objSix['Петя'], '<br>');
document.writeln('6-2: Коля = ', objSix['Коля'], '<br>');

// 7
let objSeven = {
  1: 'понедельник',
  2: 'вторник',
  3: 'среда',
  4: 'четверг',
  5: 'пятница',
  6: 'суббота',
  7: 'воскресенье'
}
let now = new Date();
document.writeln('7: ', objSeven[now.getDay()], '<br>');

// 8
let day = 5;
document.writeln('8: ', objSeven[day], '<br>');

// 9
let arrNine = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
document.writeln('9: ', arrNine[1][0].toString(), '<br>');

// 10
let objTen = {
  js: ['jQuery', 'Angular'],
  php: 'hello',
  css: 'world'
}
document.writeln('10: ', objTen.js[0], '<br>');

// 11
let arrEleven = {
  'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
document.writeln('11-1: ', arrEleven['ru'][0], '<br>');
document.writeln('11-2: ', arrEleven['en'][2], '<br>');

// 12
let varTwelveLang = 'ru';
let varTwelveDay = 3;
document.writeln('12: ', arrEleven[varTwelveLang][varTwelveDay], '<br>');

