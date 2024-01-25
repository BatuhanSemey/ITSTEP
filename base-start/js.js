const num1 = document.getElementById('input1')
const num2 = document.getElementById('input2')
const command = document.getElementById('command')
const res = document.getElementById('result')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multi = document.getElementById('multiply')
const div = document.getElementById('divide')
const sub = document.getElementById('submit')
const clean = document.getElementById('cleaner')

document.getElementById('command').disabled = true

plus.onclick = function() {
    command.value = '+'
}
minus.onclick = function() {
    command.value = '-'
}
multi.onclick = function() {
    command.value = '*'
}
div.onclick = function() {
    command.value = '/'
}



sub.onclick = function() {
    if (num1.value && num2.value && command.value) {
        if (command.value == '+') {
            let sum = Number(num1.value) + Number(num2.value)
            res.textContent = sum
        }
        if (command.value == '-') {
            let sum = Number(num1.value) - Number(num2.value)
            res.textContent = sum
        }
        if (command.value == '*') {
            let sum = Number(num1.value) * Number(num2.value)
            res.textContent = sum
        }
        if (command.value == '/') {
            let sum = Number(num1.value) / Number(num2.value)
            res.textContent = sum
        }
    }
    else {
        alert('Введите все нужные поля')
    }
    
}

clean.onclick = function() {
    num1.value = undefined
    num2.value = undefined
    command.value = ''
}





