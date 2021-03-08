document.writeln('<h1>Lesson 4</h1>');

// 1
function funcOne(a) {
  if (a === 0) return 'Верно'; else return 'Неверно';
}

document.writeln('1-1: ', funcOne(1), '<br>');
document.writeln('1-2: ', funcOne(0), '<br>');
document.writeln('1-3: ', funcOne(-3), '<br>');

// 2
function funcTwo(a) {
  if (a > 0) return 'Верно'; else return 'Неверно';
}

document.writeln('2-1: ', funcTwo(1), '<br>');
document.writeln('2-2: ', funcTwo(0), '<br>');
document.writeln('2-3: ', funcTwo(-3), '<br>');

// 3
function funcThree(a) {
  if (a < 0) return 'Верно'; else return 'Неверно';
}

document.writeln('3-1: ', funcThree(1), '<br>');
document.writeln('3-2: ', funcThree(0), '<br>');
document.writeln('3-3: ', funcThree(-3), '<br>');

// 4
function funcFour(a) {
  if (a >= 0) return 'Верно'; else return 'Неверно';
}

document.writeln('4-1: ', funcFour(1), '<br>');
document.writeln('4-2: ', funcFour(0), '<br>');
document.writeln('4-3: ', funcFour(-3), '<br>');

// 5
function funcFive(a) {
  if (a <= 0) return 'Верно'; else return 'Неверно';
}

document.writeln('5-1: ', funcFive(1), '<br>');
document.writeln('5-2: ', funcFive(0), '<br>');
document.writeln('5-3: ', funcFive(-3), '<br>');

// 6
function funcSix(a) {
  if (a !== 0) return 'Верно'; else return 'Неверно';
}

document.writeln('6-1: ', funcSix(1), '<br>');
document.writeln('6-2: ', funcSix(0), '<br>');
document.writeln('6-3: ', funcSix(-3), '<br>');

// 7
function funcSeven(a) {
  if (a === 'test') return 'Верно'; else return 'Неверно';
}

document.writeln('7-1: ', funcSeven('test'), '<br>');
document.writeln('7-2: ', funcSeven('тест'), '<br>');
document.writeln('7-3: ', funcSeven(3), '<br>');

// 8
function funcEight(a) {
  if (a === 1) return 'Верно'; else return 'Неверно';
}

document.writeln('8-1: ', funcEight('1'), '<br>');
document.writeln('8-2: ', funcEight(1), '<br>');
document.writeln('8-3: ', funcEight(3), '<br>');

// 9
function funcNineShort(test) {
  if (test) return 'Верно'; else return 'Неверно';
}

function funcNineLong(test) {
  if (test === true) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
}

document.writeln('9-1-1: ', funcNineShort(true), '<br>');
document.writeln('9-1-2: ', funcNineShort(false), '<br>');
document.writeln('9-2-1: ', funcNineLong(true), '<br>');
document.writeln('9-2-2: ', funcNineLong(false), '<br>');

// 10
function funcTenShort(test) {
  if (!test) return 'Верно'; else return 'Неверно';
}

function funcTenLong(test) {
  if (test !== true) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
}

document.writeln('10-1-1: ', funcTenShort(true), '<br>');
document.writeln('10-1-2: ', funcTenShort(false), '<br>');
document.writeln('10-2-1: ', funcTenLong(true), '<br>');
document.writeln('10-2-2: ', funcTenLong(false), '<br>');

// 11
function funcEleven(a) {
  if (a > 0 && a < 5) return 'Верно'; else return 'Неверно';
}

document.writeln('11-1: ', funcEleven(5), '<br>');
document.writeln('11-2: ', funcEleven(0), '<br>');
document.writeln('11-3: ', funcEleven(-3), '<br>');
document.writeln('11-4: ', funcEleven(2), '<br>');

// 12
function funcTwelve(a) {
  if (a === 0 || a === 2) return a + 7; else return a / 10;
}

document.writeln('12: ', funcTwelve(5), '<br>');
document.writeln('12: ', funcTwelve(0), '<br>');
document.writeln('12: ', funcTwelve(-3), '<br>');
document.writeln('12: ', funcTwelve(2), '<br>');

// 13
function funcThirteen(a, b) {
  if (a <= 1 && b >= 3) return a + b; else return a - b;
}

document.writeln('13: ', funcThirteen(1, 3), '<br>');
document.writeln('13: ', funcThirteen(0, 6), '<br>');
document.writeln('13: ', funcThirteen(3, 5), '<br>');

// 14
function funcFourteen(a, b) {
  if ((a > 2 && a < 11) || (b >= 6 && b < 14)) return 'Верно'; else return 'Неверно';
}

document.writeln('14: ', funcFourteen(1, 3), '<br>');
document.writeln('14: ', funcFourteen(0, 6), '<br>');
document.writeln('14: ', funcFourteen(3, 5), '<br>');

// 15
function funcFifteen(num) {
  switch (num) {
    case 1:
      return 'зима';
    case 2:
      return 'весна';
    case 3:
      return 'лето';
    case 4:
      return 'осень';
  }
}

document.writeln('15-1: ', funcFifteen(1), '<br>');
document.writeln('15-2: ', funcFifteen(2), '<br>');
document.writeln('15-3: ', funcFifteen(3), '<br>');
document.writeln('15-4: ', funcFifteen(4), '<br>');

// 16
function funcSixteen(day) {
  if (day >= 1 && day <= 10) return 1;
  if (day >= 11 && day <= 20) return 2;
  if (day >= 21 && day <= 30) return 3;
  return 4;
}

document.writeln('16-1: ', funcSixteen(5).toString(), '<br>');
document.writeln('16-2: ', funcSixteen(15).toString(), '<br>');
document.writeln('16-3: ', funcSixteen(25).toString(), '<br>');
document.writeln('16-4: ', funcSixteen(31).toString(), '<br>');

// 17
function funcSeventeen(month) {
  if ((month >= 1 && month <= 2) || month === 12) return 'зима';
  if (month >= 3 && month <= 5) return 'весна';
  if (month >= 6 && month <= 7) return 'лето';
  return 'осень';
}

document.writeln('17-1: ', funcSeventeen(2), '<br>');
document.writeln('17-2: ', funcSeventeen(4), '<br>');
document.writeln('17-3: ', funcSeventeen(7), '<br>');
document.writeln('17-4: ', funcSeventeen(10), '<br>');

// 18
function funcEighteen(str, check) {
  if (str[0] === check) return 'да'; else return 'нет';
}

document.writeln('18: ', funcEighteen('abcde', 'a'), '<br>');

// 19
document.writeln('19-1: ', funcEighteen('12345', '1'), '<br>');
document.writeln('19-2: ', funcEighteen('12345', '2'), '<br>');
document.writeln('19-3: ', funcEighteen('12345', '3'), '<br>');

// 20
function funcTwenty(str) {
  return Number(str.split('')[0]) + Number(str.split('')[1]) + Number(str.split('')[2]);
}

document.writeln('20: ', funcTwenty('123'), '<br>');

// 21
function funcTwentyOne(str) {
  if (Number(str.split('')[0]) + Number(str.split('')[1]) + Number(str.split('')[2]) === Number(str.split('')[3]) + Number(str.split('')[4]) + Number(str.split('')[5])) {
    return 'да';
  } else {
    return 'нет';
  }
}

document.writeln('21: ', funcTwentyOne('123456'), '<br>');
document.writeln('21: ', funcTwentyOne('123321'), '<br>');