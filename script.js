//operations
const add = function(num, num2) {
    return num + num2
  };

  const subtract = function(num, num2) {
  return num - num2

  };

  const sum = function(array) {
    let sum = 0;
    for (item in array) {
      sum += array[item]
    }
    return sum
    };

//   const multiply = function(array) {
//       let product = 1;
//     for (num in array) {
//       product *= array[num]
//     }
//     return product
//   };

    const multiply = function (num, num2) {
        return num * num2
    }

  const power = function(num, power) {
    return num ** power
  };

  const factorial = function(num) {
    let result = 1
    for (let i = num; i >= 1; i--) {
      result *= i
    }
    return result
  };
  const divide = function (num, num2) {
    return num/num2
  }


  // operate
const operate = function(operator, num, num2) {
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

// display function
const display = document.querySelector('.display')
display.textContent = ('')
const result = document.querySelector('.result')
result.textContent = ('testing')

let newCurrent;
let start;

// text = 'hello im adams'
// text = [text]
// console.log(text)
// text2 = text.splice(0,1)
// console.log(text2)


//clicking numbers
function buttonsClicked (value) {
current = display.textContent += (value)
newCurrent = current.slice(start)
console.log(newCurrent)
}

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
const plus = document.querySelector('.add')
plus.addEventListener('click', () => {
    num = Number(current)
    operatator = 'add'
    // // console.log(current)
    // console.log(newCurrent)
    buttonsClicked(` ${'+'} `)
    start = (current.length)
})
const minus = document.querySelector('.subtract')
minus.addEventListener('click', () => {
    num = Number(current)
    operatator = 'subtract'
    // console.log(current)
    // console.log(num)
    buttonsClicked(` ${'-'} `)
    start = (current.length)
})
const multiplication = document.querySelector('.multiply')
multiplication.addEventListener('click', () => {
    num = (Number(current))
    operatator = 'multiply'
    // console.log(current)
    // console.log(num)
    buttonsClicked(` ${'*'} `)
    start = (current.length)

})
const division = document.querySelector('.divide')
division.addEventListener('click', () => {
    num = Number(current)
    operatator = 'divide'
    // console.log(current)
    // console.log(num)
    buttonsClicked(` ${'/'} `)
    start = (current.length)
})
const factor = document.querySelector('.factorial')
factor.addEventListener('click', () => {
    console.log('factor')
    buttonsClicked('!')
    answer = factorial(5)
    console.log(current)
    console.log(answer)
    result.textContent += answer
    console.log(answer)
})
const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    num2 = Number(newCurrent)
    // console.log(operatator)
    // console.log(typeof(num))
    // console.log(typeof(num2))
    console.log(newCurrent)
    answer = (operate(operatator,num,num2))
    result.textContent = answer
})
