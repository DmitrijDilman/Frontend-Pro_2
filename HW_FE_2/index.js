
// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

const arr =  ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 

const arr2 = arr.splice(2, 3);

console.log(arr);
console.log(arr2);


//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
// Переставить "Janett", "Franz" в начало массива
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

const arr2 = arr.splice(5, 2);
arr.unshift(...arr2);

console.log(arr);


//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

const arr2 = arr.splice(4, 2, "Oleg","Valerchik");

console.log(arr);


//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; 
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]

arr.reverse();
arr.splice(0, 4, "Mitrofan", "Mitrofan","Mitrofan","Mitrofan");

console.log(arr);


//Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] 
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"] 
// Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив

const arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

const index = arr2.indexOf("Aristarkh");
for (let i = index; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

console.log(arr1);