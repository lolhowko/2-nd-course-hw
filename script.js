function findSeason() {
    let monthNumber = Number(prompt('Введите номер месяца'));

    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert('Зима');
    } if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert('Весна');
    } if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert('Лето');
    } if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert('Осень');
    } else {
        alert('Вы ввели не правильное значение')
    }
}


function findWords() {
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
}
