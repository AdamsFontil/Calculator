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

  const multiply = function(array) {
      let product = 1;
    for (num in array) {
      product *= array[num]
    }
    return product
  };

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
    if (operator === add) {
        return add(num,num2)
    } else if (operator === subtract) {
        return subtract(num,num2)
    } else if (operator === multiply) {
        return multiply(num,num2)
    } else if (operator === divide) {
        return subtract(num,num2)
    }

}
