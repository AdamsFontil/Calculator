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

operations = {
    num: num,
    num2: num2,
    operator: operator,
    work: function () {
        if (this.operator === 'add') {
            console.log(add(this.num,this.num2))
        } else if (this.operator === 'subtract') {
            console.log(subtract(this.num,this.num2))
        } else if (this.operator === 'multiply') {
            console.log(multiply(this.num,this.num2))
        } else if (this.operator === 'divide') {
            console.log(divide(this.num,this.num2))
        }
    },
}

if (true) {
    operations.operator = 'add'
    operations.num = 2
    operations.num2 = 2

}
