//ЗАДАНИЕ 6


for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
      if (dayNumber % 5 == 0) {
          console.log('НЕ пятница, отдыхайте.'); 
          continue; 
      }
      console.log(`Сегодня пятница, ${dayNumber} -е число. Необходимо подготовить отчет.`);
  }

/*
//ЗАДАНИЕ 5

let num = 0;
let n = 5000;

while (n > 50) {
    n /= 2;
    num++
}


//ЗАДАНИЕ 4

let names{
    'Коля':'200',
    'Вася':'300',
    'Петя':'400',
};

for (let cash in names) {
    console.log(`${cash} - зарплата ${names[cash]} долларов.`);
}


//ЗАДАНИЕ 3

let numbers = 7;

while (numbers <= 22) {
    console.log(numbers);
    i++;
}


//ЗАДАНИЕ 2
let number = 1;

while (number <= 5) {
    console.log(number);
    i++;
}


//ЗАДАНИЕ 1

let hi = 0;

while (hi < 2) {
    console.log("Привет");
    i++;
}
*/