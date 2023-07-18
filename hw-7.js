/*
//Задание 1


let str = 'Строка';
str = str.toUpperCase();
console.log(str);


//Задание 2


function searchStart(str, search) {


    str.forEach((product) => {
        if (product.toLowerCase().startsWith(search.toLowerCase())) {
            console.log(product);
        }
    });
    return str;
};


searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []




//Задание 3


let x = 32.58884;
//До меньшего целого:
console.log(Math.floor(x));
//До большего целого
console.log(Math.ceil(x));
//До ближайшего целого
console.log(Math.round(x));




//Задание 4


//52, 53, 49, 77, 21, 32


console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));




//Задание 5


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


console.log(getRandomArbitrary(1, 10));




//Задание 6


function getRandomArrNumbers(num) {
    let array = [];
    let halfArray = Math.floor(num / 2);
    for (let i = 0; i < halfArray; i++) {
        array.push(Math.ceil(Math.random(num) * num));
    }
    return array;
};


console.log(getRandomArrNumbers(7));


//Задание 7


function getRandomArbitrary(min, max) {
    return Math.round(Math.random()) * (max - min) + min;
}


console.log(getRandomArbitrary(1, 9));


//Задание 8


let myDate = new Date(2023, 6, 13, 20, 30, 20, 10);


console.log(myDate);




//Задание 9


let currentDate = new Date("6/13/2023");


currentDate.setDate(73);
console.log(currentDate);




//Задание 10


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


let myDate = new Date();
let fullDate = "Дата:" + myDate.getDate() + " " + months[myDate.getMonth()] + " "
    + myDate.getFullYear() + " - это " + days[myDate.getDay()];


let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();


if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}


console.log(fullDate);
console.log("Время: " + hour + ":" + minute + ":" + second);




//Задание 11


let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];


list = list.sort(() => Math.random() - 0.5);


alert(list);


let userAnswer1 = prompt('Чему равнялся первый элемент массива?');
let userAnswer2 = prompt('Чему равнялся последний элемент массива?');


if (userAnswer1 === list[0]) {
    if (userAnswer2 === list[6]) {
        alert('Поздравляю, вы угадали оба слова!');
    } else {
        alert('Вы были близки к победе!');
    }
} else {
    if (userAnswer2 === list[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы не угадали.');
    }
}

*/