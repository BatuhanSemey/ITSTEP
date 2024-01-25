// let nameUser = 'Batukhan'
//     if (nameUser == 'Batukhan') {
//     nameUser = 'Batukhan Akhmetovich'
//     }
//     else {
//     nameUser = 'no'
//     }
// console.log(nameUser)

// const num = 40

// alert(num)

// confirm('Ты человек?')

// let nameUser = +prompt('Сколько тебе лет?')
// alert(nameUser + 5)

// let nick = 'batu'
// console.log(typeof(nick))

// let firstName = 'Batukhan'
// let lastName = 'Akhmetovich'

// let num1 = 1
// let num2 = '10'

// alert(firstName + ' ' + lastName)
// let sum = num1 + Number(num2)
// console.log(sum)

// let num = +prompt('Введите число?')
// let result = num * num
// alert(result)

// let num1 = +prompt('Введите первое число:')
// let num2 = +prompt('Введите второе число:')
// let result = (num1 + num2) / 2
// alert(result)

// let aKvadrat = +prompt('Введите А квадрат')
// let result = aKvadrat * aKvadrat
// alert(result)

// let km = +prompt('Введите расстояние в км:')
// // let ml = 0.621371
// let result = km / 1.609
// alert(result)

// //#5
// let num1 = +prompt('Введите число №1:')
// let num2 = +prompt('Введите число №2:')
// let itog = prompt('Что нужно делать?(Введите символы: + - * /)')

// if (itog == '+') {
//     let result = num1 + num2
//     alert(result)
// }
// if (itog == '*') {
//     let result = num1 * num2
//     alert(result)
// }
// if (itog == '-') {
//     let result = num1 - num2
//     alert(result)
// }
// if (itog == '/') {
//     let result = num1 / num2
//     alert(result)
// }

// //#6
// let num1 = +prompt('Первое число:')
// let num2 = +prompt('Второе число:')
// let result1 = num1 - num2
// let result2 = num1 * result1
// alert(result2)

// //#6
// let dateTime = +prompt('Введите текующий час:')
// let dateMin = +prompt('Введите текущую минуту:')
// let hours = 24 - dateTime
// let time = 60 - dateMin
// alert('Осталось до окончания дня' + hours + ':' + time)

// //№7
// let nums = +prompt('Введите 3х значное число:')
// let result = nums / 10 % 10
// let result1 = parseInt(result)
// let result2 = parseFloat(result)
// alert(result1 + '\n' + result2)

//#8
debugger;

let nums = prompt('Введите 5 значное число:')
let numberString = nums.toString()
let array = numberString.split('').map(Number)


for (let i = array.length-1; i >= 0; i--) {
    let sum = array[i]
    let sumString = sum.toString()
    let result = []
    let res = result.push(sumString + ',')
    console.log(res)
}

