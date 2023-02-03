// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['vitya', 22, 44, -5, 'mag', 3, 7, 10, 6, 8, ];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title : 'The old man and the sea',
    pageCount : 250 ,
    genre : 'story',
}
console.log(book1)
let book2 = {
    title : 'Ark',
    pageCount: 450,
    genre: 'fantasy',
}
console.log(book2)
let book3 = {
    title : 'Rework',
    pageCount : 200,
    genre : 'busines',
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
let book4 =  {
    title :'Captain Kuk',
    pageCount :248,
    genre :'history',
    authors : [{name:'Evgenia Chemeris'}, {age: 45}]
}
console.log(book4)
let book5 = {
    title : 'Sacred Cows',
    pageCount : 172,
    genre : 'story',
    authors : [[{name:'Danielle Teller'}, {age:46}],[{name:'Astro Teller'}, {age:48}]]
}
console.log(book5)
let book6 = {
    title: 'Come out smoking',
    pageCount: 342,
    genre: 'story',
    authors: [[{name: 'Phil Pepe', age:44}], [{name: 'Stephen R. Covey', age:54}], [{name: 'Michael Buckley', age:58}]]
}
console.log(book6)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
let userentity = [
    {name:'Vova',
        username:'Khomenko',
        password:111},
    {name:'Misha',
        username:'Antonette',
        password:222},
    {name:'Pasha',
        username:'Delphine',
        password:333},
    {name:'Sergey',
        username:'Johns',
        password:444},
    {name:'Maksim',
        username:'Elwyn',
        password:555},
    {name:'Sasha',
        username:'Corkery',
        password:666},
    {name:'Lena',
        username:'Leopoldo',
        password:777},
    {name:'Luda',
        username:'Kamren',
        password:888},
    {name:'Galya',
        username:'Karianne',
        password:999},
    {name:'Olya',
        username:'Samantha',
        password:101},
]
console.log(userentity[0].password)
console.log(userentity[1].password)
console.log(userentity[2].password)
console.log(userentity[3].password)
console.log(userentity[4].password)
console.log(userentity[5].password)
console.log(userentity[6].password)
console.log(userentity[7].password)
console.log(userentity[8].password)
console.log(userentity[9].password)

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 5
if (x !== 0)
     {console.log(true)}
else {
    console.log(false)}
let a = 1
if (a!==0){
    console.log(true)}
else{
    console.log(false)}
let b = 0
if (b!==0){
    console.log(true)}
else{
    console.log(false)}
let c = -3
if (c!==0){
    console.log(true)}
else{
    console.log(false)}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//   (в першу, другу, третю или четверту частину години).
let time = 32
if (time<=15){
    console.log('one')}
else{
    console.log()}
if(15<time&&time<=30){
    console.log('two')}
else{
    console.log()}
if(30<time&&time<=45){
    console.log('three')}
else{
    console.log()}
if(45<time&&time<60){
    console.log('four')}
else{
    console.log()}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
//   (у першу, другу чи третю).
let day = 13
if (day<=10){
    console.log('one')}
else {console.log()}
if (10<day&&day<=20) {
    console.log('two')}
else {
    console.log()}
if (20<day&&day<=31) {
    console.log('three')}
else {
    console.log()}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//   відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule =prompt('enter number day of the week')
switch (schedule){
    case'1':
        console.log('monday')
        break;
    case '2':
        console.log('tuesday')
        break;
    case '3':
        console.log('wednesday')
        break;
    case '4':
        console.log('thursday')
        break;
    case '5':
        console.log('friday')
        break;
    case '6':
        console.log('saturday')
        break;
    case '7':
        console.log('sunday')
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
let number1 = 7
let number2 = 2
if (number1>number2){
    console.log(number1, 'більше' ,number2,);}
else if (number1<number2){
    console.log(number1,'менше',number2);}
else if (number1===number2){
    console.log(number1, 'дорівнює' ,number2);}



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподібні, тобто приводиться до false)
let z = null;
if (z === 0 || z===-0 || z==='' || z==="" || z===`` || NaN || z===undefined || z===null ) {
    z = `default`;
}
console.log(z)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
//   його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if(coursesAndDurationArray[0].monthDuration>5){
    console.log("Супер")}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log("Супер")}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log("Супер")}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log("Супер")}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log("Супер")}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log("Супер")}

