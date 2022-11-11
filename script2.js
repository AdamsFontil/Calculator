//operations
const add = (num, num2) => num + num2
const subtract = (num, num2) => num - num2
const multiply = (num, num2) => num * num2
const divide = (num, num2) => num/num2

  // operate
  const operate = (operator, num, num2) => {
    if (operator === 'add') {
        return add(num,num2)
    } else if (operator === 'subtract') {
        return subtract(num,num2)
    } else if (operator === 'multiply') {
        return multiply(num,num2)
    } else if (operator === 'divide') {
        return divide(num,num2)
    }
}
let num;
let num2;
let operator;


//using object to make it so that only one operation is carried out at a time
operations = {
    num: num,
    num2: num2,
    operator: operator,
    work: function () {
        if (this.operator === 'add') {
            return (add(this.num,this.num2))
        } else if (this.operator === 'subtract') {
            return (subtract(this.num,this.num2))
        } else if (this.operator === 'multiply') {
            return (multiply(this.num,this.num2))
        } else if (this.operator === 'divide') {
            return (divide(this.num,this.num2))
        }
    },
}



const display = document.querySelector('.display')
display.textContent = ('')
const result = document.querySelector('.result')
result.textContent = ('')

let start;
let firstNum;

//clicking numbers
function buttonsClicked (value) {
current = display.textContent += (value)

newCurrent = current.slice(start)
operations.num2 = Number(newCurrent)
result.textContent = operations.num
 if (value === 'cut') {
    console.log('cut')
    display.textContent = current.slice(1)
 }
}


const plus = document.querySelector('.add')
plus.addEventListener('click', () => {
    if (operations.num === undefined) {
        operations.operator = 'add'
        firstNum = current
        operations.num = Number(firstNum)
    } else if ('answer' in operations) {
        display.textContent = operations.answer
        operations.num = operations.answer
    }
    else {
        answer = operations.work()
        operations.operator = 'add'
        operations.num = answer
    }
    buttonsClicked(` ${'+'} `)
    start = (current.length)
})
const minus = document.querySelector('.subtract')
minus.addEventListener('click', () => {
    if (operations.num === undefined) {
        operations.operator = 'subtract'
        firstNum = current
        operations.num = Number(firstNum)
    } else if ('answer' in operations) {
        operations.operator = 'subtract'
        display.textContent = operations.answer
        operations.num = operations.answer
    } else {
        answer = operations.work()
        operations.operator = 'subtract'
        operations.num = answer
    }
    buttonsClicked(` ${'-'} `)
    start = (current.length)
})
const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    operations.answer = operations.work()
    result.textContent = operations.answer
})
const multiplication = document.querySelector('.multiply')
multiplication.addEventListener('click', () => {
    if (operations.num === undefined) {
        operations.operator = 'multiply'
        firstNum = current
        operations.num = Number(firstNum)
    } else if ('answer' in operations) {
        operations.operator = 'multiply'
        display.textContent = operations.answer
        operations.num = operations.answer
    } else {
        answer = operations.work()
        operations.operator = 'multiply'
        operations.num = answer
    }
    buttonsClicked(` ${'*'} `)
    start = (current.length)

})
const division = document.querySelector('.divide')
division.addEventListener('click', () => {
    if (operations.num === undefined) {
        operations.operator = 'divide'
        firstNum = current
        operations.num = Number(firstNum)
    } else if ('answer' in operations) {
        operations.operator = 'divide'
        display.textContent = operations.answer
        operations.num = operations.answer
    } else {
        answer = operations.work()
        operations.operator = 'divide'
        operations.num = answer
    }
    buttonsClicked(` ${'/'} `)
    start = (current.length)
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
   num = ''
   num2 = ''
   display.textContent = ''
   result.textContent = ''
})

const back = document.querySelector('.delete')
clear.addEventListener('click', () => {
    value = 'cut'
})




const one = document.querySelector('.one')
one.addEventListener('click', () => {
    value = 1
    buttonsClicked(value)
})
const two = document.querySelector('.two')
two.addEventListener('click', () => {
    value = 2
    buttonsClicked(value)
})
const three = document.querySelector('.three')
three.addEventListener('click', () => {
    value = 3
    buttonsClicked(value)
})
const four = document.querySelector('.four')
four.addEventListener('click', () => {
    buttonsClicked(4)
})
const five = document.querySelector('.five')
five.addEventListener('click', () => {
    buttonsClicked(5)
})
const six = document.querySelector('.six')
six.addEventListener('click', () => {
    buttonsClicked(6)
})
const seven = document.querySelector('.seven')
seven.addEventListener('click', () => {
    buttonsClicked(7)
})
const eight = document.querySelector('.eight')
eight.addEventListener('click', () => {
    buttonsClicked(8)
})
const nine = document.querySelector('.nine')
nine.addEventListener('click', () => {
    value = 9
    buttonsClicked(9)
})
const zero = document.querySelector('.zero')
zero.addEventListener('click', () => {
    buttonsClicked(0)
})
