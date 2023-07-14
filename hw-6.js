
/*
//Задание 13

function filterPositive(array) {
    let result = [];

    for (let index = 0; index < array.length; index++) {
if (array[index] < 0) {
    result.push(array[index]);
}
    }
    return result;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]



//Задание 12

function getLengthWords() {
    let words = ['слово', '', 'слог', 'длинное предложение', 'буква']; // [5, 0, 4, 19, 5]

    for (let item of words) {
        console.log(item.length);
    }
}

getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);


//Задание 11

const wholeNum = [1, 2, 6];

let resultSquare = wholeNum.map(item => item * item);
console.log(resultSquare);



//Задание 10

let myNumbs = [3, 8, 9];

for (let i = 0; i < myNumbs.length -1; i++) {
    console.log(myNumbs[i] + myNumbs[i+1]);
}


//Задание 9

let multiNum = [
    [1, 2, 3,],
    [4, 5, 6],
]

const arr = multiNum.flat();
console.log(arr);



//Задание 8

let line = 'abcdef';

let apartLine = line.split('');
apartLine.reverse();

const result = apartLine.join('');

console.log(result);


//Задание 7

let userAsk = [9, 8, 7, 6, 5];

let userAnswer = Number(prompt('Угадай число'));

let search = userAsk.includes(userAnswer);
//console.log(search);

if (search === true) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
}


//Задание 6

let numSort = [9, 8, 7, 'a', 6, 5];

numSort.sort();
numSort.pop();

console.log(numSort);


//Задание 5

let oneNum = [1, 1, 1];

oneNum.push(2, 2, 2);

console.log(oneNum);


//Задание 4

let nums = [];

for (let i = 0; i < 3; i++) {
  nums[i] = [];
  
  for (let j = 0; j < 3; j++) {
    nums[i].push(1);
  }
}

console.log(nums);



//Задание 3

let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');

console.log(numbers);


//Задание 2

const numbs = [1, 5, 4, 10, 0, 3];

console.log(numbs.indexOf(4));


//Задание 1

const nums = [1, 5, 4, 10, 0, 3];

for (let n = 0; n < nums.length; n++) {
    if (nums[n] == 10) break;
    console.log(nums[n]);
}
*/