//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999,
// 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let a = 'hello';
console.log(a)
let b = 'owu';
console.log(b)
let c = 'com';
console.log(c)
let d = 'ua';
console.log(d)
let e = 1;
console.log(e)
let q = 10;
console.log(q)
let w = -999;
console.log(w)
let r = 123;
console.log(r)
let t = 3.14;
console.log(t)
let y = 2.7;
console.log(y)
let u = 16;
console.log(u)
let i = true;
console.log(i)
let p = false;
console.log(p)

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)
let middleName = 'Nesterenko';
let firstName = 'Victor';
let secondName = 'Anatoliyovych';
let person = middleName + ' ' + firstName + ' ' + secondName ;
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let z = 100;
console.log(typeof z)

let x = '100'
console.log(typeof x)

let v = true;
console.log(typeof v)

//Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль
let name = prompt("What is your name")
console.log(name)
let second = prompt("Як вас по батькові")
console.log(second)
let age = prompt("How old are you")
console.log(+age)
// console.log(age)
console.log(typeof +age)














