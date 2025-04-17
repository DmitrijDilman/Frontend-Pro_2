
// Написать программу, которая определяет количество положительных, 
// отрицательных чисел и нулей. 
// Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. 
// Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.


let positive = 0;
let negative = 0;
let zero = 0;

for (;;) {
  let userNumber = prompt("Введите число");

  if (userNumber === null){
      break;
  }

  userNumber = Number(userNumber);

  if (userNumber > 0){
      positive++;
  }

  if (userNumber < 0){
      negative++;
  }

  if (userNumber === 0){
      zero++;
  }
}


// Написать программу, которая выводит среднее арифметическое n чисел 
// введенных пользователем. Ввод чисел прекращается, когда нажали отмена, 
// после чего выводится среднее арифметическое.


let summe = 0;
let count = 0;

for(;;) {

let userNumber = prompt("Введите число")

if (userNumber === null){
    break;
}
userNumber = Number(userNumber);

if (isNaN(userNumber)){
    alert("Введите число");
    continue;
}

summe += userNumber;
count++;

}

alert (`Cреднее арифметическое: ${summe/count}`);


// Написать программу, в которой пользователя просят ввести числа 5 раз. 
// Причем каждое последующее число должно быть больше предыдущего, 
// иначе вывести текст ошибка! в консоль и прекратить ввод.

let previousNumber = null;

for (let i = 0; i < 5; i++){

    let userNumber = prompt ("Введите число");
    userNumber = Number (userNumber);

    if (previousNumber !== null && userNumber <= previousNumber){
        console.log("ошибка!");
        break;
    }
    
    previousNumber = userNumber;

}

// Написать программу-генератор популярных песен. Пользователь вводит число. 
// Вывести количество pam равное этом числу.
//  Строка должна начинаться с param. 
//  Например: Вводим 3 Программа выводит: "param-pam-pam-pam" 
//  Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" 
//  ==В этом задании запрещено использовать .repeat() (все делаем циклом)==

let userNumber = prompt("Введите число");
    userNumber = Number(userNumber);
let result = "param";

for (let i = 0; i < userNumber; i++){
    result += "-pam";

}
alert(result);