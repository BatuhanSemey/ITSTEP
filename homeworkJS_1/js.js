//1 задача
let userName = prompt('Введите свое имя:')
alert('Привет, ' + userName + '!')

//2 задача
let birthDate = +prompt('Введите год рожения:')
const actualDate = 2024
alert('Вам '+ (actualDate - birthDate) + 'лет')

//3 задача
let squareLength1 = +prompt('Укажите длину квадрата:')
alert(squareLength1 * 4)

//4 задача
let squareLength2 = +prompt('Укажите радиус окружности:')
const konstanta = 3.14159
alert(parseInt(konstanta * squareLength2 * squareLength2))

//5 задача
let distanceCity = +prompt('Укажите расстояние от одного города до другого в км:')
let distanceTime = +prompt('Укажите за сколько времени хотите добратся:')
alert('Скорость с который нужно ехать:' + parseInt((distanceCity / distanceTime)) + 'km/h')

//6 задача
let money1 = +prompt('Укажите валюту в долларах:')
const cursEuro = 1.09
alert(money1 / cursEuro) 

//7 задача
let memoryFlashCard = +prompt('Введите память флеш карты:')
let memoryFile = 820
alert('Во флеш карту с памятью ' + memoryFlashCard + 'gb, вместится файлы с размером ' + memoryFile + 'mb: ' + parseInt(memoryFlashCard / memoryFile) + 'файла.')

//8 задача
let money2 = +prompt('Введите сумму денег в кошельке:')
let priceShokolade = +prompt('Введите цену шоколада:')
let result11 = parseInt((money / priceShokolade));
let result22 = money - (result1 * priceShokolade);
alert('Вы на сумму ' + money2 + ', можете купить ' + result11 + ('шт. шоколадок.') + '\n' + 'Остаток суммы: ' + result22 + 'тг.')

//9 задача
let money = +prompt('Введите 3-х значное число:')
const result1 = money / 100 % 10;
const result2 = money / 10 % 10;
const result3 = money % 10;
alert(parseInt(result3) + '' + parseInt(result2) + '' + parseInt(result1))

//10 задача
let num = +prompt('Введите целое число:')
const result = parseInt(num) === num
alert(result ? 'Четное число' : 'Нечетное число')

