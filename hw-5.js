//Задание 8

function findSeason() {
    let monthNumber = Number(prompt('Введите номер месяца'));

    if (monthNumber === 12 || 1 || 2) {
        alert('Зима');
    } if (monthNumber === 3 || 4 || 5) {
        alert('Весна');
    } if (monthNumber === 6 || 7 || 8) {
        alert('Лето');
    } if (monthNumber === 9 || 10 || 11) {
        alert('Осень');
    } else {
        alert('Вы ввели не правильное значение')
    }
}

findSeason();

/*
//Задание 7

function getArea() {
    let area = 3.14 * this.radius *this.radius;
    console.log(area);
}
function getPerimeter() {
    let perimeter = 2 * 3.14 * this.radius;
    console.log(perimeter);
}

let circle1 = {
    radius: 1,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

let circle2 = {
    radius: 4,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

circle1.getArea();
circle2.getArea();
circle1.getPerimeter();
circle2.getPerimeter();


//Задание 6

function getNum() {
    let userNum = prompt('Введите число');

    if (isNaN(userNum)) {
        let resultNum = userNum * userNum;
        return resultNum;
        console.log(`'n в кубе равняется ${resultNum}`);
    } else {
        console.log('Переданный параметр не является числом');
    }
}

getNum();

/*  
//Задание 5

function examNumbers(a, b) {
    
    if (isNaN(examNumbers)) {
        let numbersResult = a * b;
        return numbersResult;
    } else {
        console.log('Одно или оба значения не являются числом');
    }
}

examNumbers(1, 3);


//Задание 4

let userAge = prompt('Сколько вам лет?');

if (userAge < 0) {
    function showMessage() {
        console.log('Вы ввели неправильное значение');
        // НЕ ПОНИМАЮ КАК СДЕЛАТЬ ВЫВОД ПРИ ОТРИЦАТЕЛЬНЫХ ЗНАЧЕНИЯХ СООБЩЕНИЯ 'Вы ввели неправильное значение'
    }
} if (userAge >= 0 && userAge <= 12) {
    function showMessage() {
        console.log('Привет, друг!');
    }
} else {
    function showMessage() {
        console.log('Добро пожаловать!');
    }
}

showMessage();


//Задание 3
// 3.1
let square = n => n * n;

let x = square(5);

console.log(x);

//3.2
const backSquare = n => {
    let result = n * n;
    return result;
}

let y = backSquare(3);

console.log(y);



//Задание 2

function number() {
    let userAnswer = prompt('Введите число.');

    if (userAnswer % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

number();


//Задание 1

function sum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let result = sum(6, 7);

console.log(result);
*/