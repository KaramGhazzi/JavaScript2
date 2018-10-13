'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let repeatedStr = '';
  for (let i = 0; i < num; i++)
    repeatedStr += str;
  return repeatedStr;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

//use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let repeatStr = " ";
  while (num > 0) {
    repeatStr += str;
    num--;
  }
  return repeatStr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let i = 0;
  let repeatedStr = '';
  do {
    repeatedStr += str;
    i++;
  } while (i < num);

  return repeatedStr;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
