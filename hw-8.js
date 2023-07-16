/*
//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 people.sort(function (a, b) {
   if (a.age > b.age) {
     return 1;
   }
   if (a.age < b.age) {
     return -1;
   }
   // a должно быть равным b
   return 0;
 });
 
 console.log(people);
 */
 
//Задание 2



function isPositive(number) {
    let result = [];
  
      for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
      result.push(number[i]);
  }
      }
      return result;
  }
  
  //console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
  
  //function isMale(gender) {
  //}
  
  function filter(arr, ruleFunction) {
  const output = [];
  
  for (let i = 0; i < arr.length; i++) {
    output.push(ruleFunction(arr[i]));
  }
  return output;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  //const people = [
  //   {name: 'Глеб', gender: 'male'},
  //   {name: 'Анна', gender: 'female'},
  //   {name: 'Олег', gender: 'male'},
  //   {name: 'Оксана', gender: 'female'}
  //];
  


/*
//Задание 3

let timerId = setTimeout(function showDate() {
    let myDate = new Date("15 July 2023");
    console.log(myDate);
    
    timerId = setTimeout(showDate, 3000);
  }, 3000);
  
  setTimeout(() => {clearInterval(timerId); console.log('30 секунд прошло');}, 1000*30);
  
  
  //Задание 4
  
  function delayForSecond(callback) {
   setTimeout(callback, 1000);
  }
  
  delayForSecond(function () {
     console.log('Привет, Глеб!');
  })
  
  
  
  //Задание 5
  
  function delayForSecond(cb) {
      setTimeout(() => {
          console.log('Прошла одна секунда');
                  if(cb) { 	cb(); }
  
      }, 1000)
  }
  
  function sayHi (name) {
      console.log(`Привет, ${name}!`);
  }
  
  
  delayForSecond(setTimeout, sayHi('Глеб'))
  */